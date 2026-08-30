/**
 * Three.js 3D Canvas Component
 * Fitness 3D App — Renders CesiumMan with region-based selection + exercise animations
 */

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { View, StyleSheet, Dimensions, PanResponder } from 'react-native';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { useAppStore } from '../store/useAppStore';
import ModelLoader from '../services/3dModelLoader';
import { getRegionRaycasterService } from '../services/raycaster';
import { classifyPoint, BODY_REGIONS, BodyRegion } from '../services/regionSelector';
import { CEIUMAN_JOINTS, JointName } from '../data/skeleton';

interface ThreeCanvasProps {
  onCanvasReady?: (ctx: {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    gl: any;
  }) => void;
  onError?: (error: Error) => void;
  style?: any;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  onCanvasReady,
  onError,
  style,
}) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>(0);
  const cesiumModelRef = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const highlightMeshesRef = useRef<THREE.Mesh[]>([]);

  const [cameraControls, setCameraControls] = useState({
    rotation: 0,
    zoom: 1,
    pan: [0, 0] as [number, number],
  });

  const { selectedMuscle, selectedExercise } = useAppStore();
  const modelLoader = new ModelLoader();
  const raycasterService = getRegionRaycasterService();

  // Camera control functions
  const rotateCamera = useCallback((angle: number) => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y += angle;
      setCameraControls(prev => ({ ...prev, rotation: prev.rotation + angle }));
    }
  }, []);

  const zoomCamera = useCallback((zoomFactor: number) => {
    if (cameraRef.current) {
      const newZoom = Math.max(0.1, Math.min(3.0, cameraRef.current.position.z * zoomFactor));
      cameraRef.current.position.z = newZoom;
      setCameraControls(prev => ({ ...prev, zoom: newZoom }));
    }
  }, []);

  const panCamera = useCallback((x: number, y: number) => {
    if (cameraRef.current) {
      cameraRef.current.position.x += x;
      cameraRef.current.position.y += y;
      setCameraControls(prev => ({
        ...prev,
        pan: [prev.pan[0] + x, prev.pan[1] + y] as [number, number],
      }));
    }
  }, []);

  // Highlight a body region by creating sphere markers at joint positions
  const highlightRegion = useCallback((region: BodyRegion) => {
    const scene = sceneRef.current;
    if (!scene || !cesiumModelRef.current) return;

    // Remove old highlights
    for (const mesh of highlightMeshesRef.current) {
      scene.remove(mesh);
    }
    highlightMeshesRef.current = [];

    // Add sphere markers at each joint in the region
    for (const jointName of region.joints) {
      const joint = CEIUMAN_JOINTS[jointName];
      const node = cesiumModelRef.current.getObjectByName(joint.name);
      if (node) {
        const worldPos = new THREE.Vector3();
        node.getWorldPosition(worldPos);

        const sphereGeom = new THREE.SphereGeometry(0.05, 16, 16);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: region.color,
          transparent: true,
          opacity: 0.7,
        });
        const sphere = new THREE.Mesh(sphereGeom, sphereMat);
        sphere.position.copy(worldPos);
        scene.add(sphere);
        highlightMeshesRef.current.push(sphere);
      }
    }
  }, []);

  // Clear highlights
  const clearHighlights = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    for (const mesh of highlightMeshesRef.current) {
      scene.remove(mesh);
    }
    highlightMeshesRef.current = [];
  }, []);

  // Play an exercise animation
  const playExerciseAnimation = useCallback((exerciseId: string) => {
    const model = cesiumModelRef.current;
    if (!model) return;

    const clip = modelLoader.getExerciseAnimation(exerciseId);
    if (!clip) {
      console.warn(`No animation for exercise: ${exerciseId}`);
      return;
    }

    // Create a new mixer for this model
    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.play();

    mixerRef.current = mixer;
  }, []);

  const onContextCreate = useCallback(
    async (gl: any) => {
      try {
        // Set up scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);

        // Set up camera
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.set(0, 1.0, 3);

        // Set up renderer bound to expo-gl context
        const renderer = new THREE.WebGLRenderer({
          context: gl as any,
          antialias: true,
        });
        renderer.setPixelRatio(gl.drawingBufferPixelRatio || 1);
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 2, 1);
        scene.add(directionalLight);

        const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
        backLight.position.set(-1, -1, -1);
        scene.add(backLight);

        // Load CesiumMan (rigged animated humanoid)
        try {
          const model = await modelLoader.loadCesiumMan();
          if (model.scene) {
            // Scale and position the model
            model.scene.scale.set(1.5, 1.5, 1.5);
            model.scene.position.set(0, -0.8, 0);
            scene.add(model.scene);
            cesiumModelRef.current = model.scene;

            // Play the default walk animation
            if (model.mixer && model.animations.length > 0) {
              const action = model.mixer.clipAction(model.animations[0]);
              action.play();
              mixerRef.current = model.mixer;
            }
          }
        } catch (error) {
          console.warn('Failed to load CesiumMan, using placeholder');
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const material = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
          const cube = new THREE.Mesh(geometry, material);
          cube.name = 'placeholder_muscle';
          scene.add(cube);
        }

        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        // Set up region-based raycaster
        raycasterService.setOnSelect((result) => {
          if (result.region) {
            highlightRegion(result.region);
          } else {
            clearHighlights();
          }
        });

        // PanResponder for handling touches
        const panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: (evt, gestureState) => {
            const { dx, dy } = gestureState;
            rotateCamera(dx * 0.01);
            panCamera(dy * 0.01, dx * 0.01);
          },
          onPanResponderRelease: (evt) => {
            // On release, perform region selection at the touch point
            const touch = evt.nativeEvent;
            const width = gl.drawingBufferWidth;
            const height = gl.drawingBufferHeight;

            if (cesiumModelRef.current) {
              const result = raycasterService.handleTouchEnd(
                touch.pageX,
                touch.pageY,
                [cesiumModelRef.current],
                camera,
                width,
                height
              );

              if (result?.region) {
                console.log(`Selected region: ${result.region.name}`);
              }
            }
          },
        });

        // Pinch-to-zoom using touch events
        const pinchZoom = (event: any) => {
          if (event.nativeEvent.touches.length === 2) {
            const [touch1, touch2] = event.nativeEvent.touches;
            const distance = Math.hypot(
              touch1.pageX - touch2.pageX,
              touch1.pageY - touch2.pageY
            );
            if (distance < 100) zoomCamera(1.1);
            else if (distance > 150) zoomCamera(0.9);
          }
        };

        // Render loop
        const render = () => {
          // Update animation mixer
          if (mixerRef.current) {
            const delta = clockRef.current.getDelta();
            mixerRef.current.update(delta);
          }

          renderer.render(scene, camera);
          gl.endFrameEXP();

          animationFrameRef.current = requestAnimationFrame(render);
        };

        render();

        if (onCanvasReady) {
          onCanvasReady({ scene, camera, renderer, gl });
        }
      } catch (error) {
        if (onError) {
          onError(error as Error);
        }
      }
    },
    [onCanvasReady, onError, rotateCamera, panCamera, zoomCamera, highlightRegion, clearHighlights, raycasterService]
  );

  // Handle selected exercise changes
  useEffect(() => {
    if (selectedExercise) {
      playExerciseAnimation(selectedExercise.id);
    }
  }, [selectedExercise, playExerciseAnimation]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <View style={[styles.container, style]}>
      <GLView
        style={[styles.canvas]}
        onContextCreate={onContextCreate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ThreeCanvas;
