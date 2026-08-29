/**
 * Three.js 3D Canvas Component
 * For Fitness 3D App - Android OpenGL ES rendering
 */

import React, { useEffect, useRef, useCallback, useState } from 'react'
import { View, StyleSheet, Dimensions, PanResponder } from 'react-native'
import { GLView } from 'expo-gl'
import * as THREE from 'three'

interface ThreeCanvasProps {
  onCanvasReady?: (ctx: {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    gl: any
  }) => void
  onError?: (error: Error) => void
  style?: any
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  onCanvasReady,
  onError,
  style,
}) => {
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationFrameRef = useRef<number>(0)
  const cubeRef = useRef<THREE.Mesh | null>(null)
  const [cameraControls, setCameraControls] = useState({
    rotation: 0,
    zoom: 1,
    pan: [0, 0] as [number, number]
  })

  // Camera control functions
  const rotateCamera = useCallback((angle: number) => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y += angle
      setCameraControls(prev => ({ ...prev, rotation: prev.rotation + angle }))
    }
  }, [])

  const zoomCamera = useCallback((zoomFactor: number) => {
    if (cameraRef.current) {
      const newZoom = Math.max(0.1, Math.min(3.0, cameraRef.current.position.z * zoomFactor))
      cameraRef.current.position.z = newZoom
      setCameraControls(prev => ({ ...prev, zoom: newZoom }))
    }
  }, [])

  const panCamera = useCallback((x: number, y: number) => {
    if (cameraRef.current) {
      cameraRef.current.position.x += x
      cameraRef.current.position.y += y
      setCameraControls(prev => ({ 
        ...prev, 
        pan: [prev.pan[0] + x, prev.pan[1] + y] as [number, number]
      }))
    }
  }, [])

  const onContextCreate = useCallback(
    async (gl: any) => {
      try {
        // Set up scene
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xf0f0f0)

        // Set up camera
        const camera = new THREE.PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        )
        camera.position.set(0, 0, 5)

        // Set up renderer bound to expo-gl context
        const renderer = new THREE.WebGLRenderer({
          context: gl as any,
          antialias: true,
        })
        renderer.setPixelRatio(gl.drawingBufferPixelRatio || 1)
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(1, 1, 1)
        scene.add(directionalLight)

        // Placeholder mesh (replaced with muscle model in Phase 2)
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshStandardMaterial({ color: 0x4a90e2 })
        const cube = new THREE.Mesh(geometry, material)
        cube.name = 'placeholder_muscle'
        scene.add(cube)
        cubeRef.current = cube

        sceneRef.current = scene
        cameraRef.current = camera
        rendererRef.current = renderer

        // PanResponder for handling touches
        const panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: (evt, gestureState) => {
            const { dx, dy } = gestureState
            // Map touch movement to camera rotation/pan
            rotateCamera(dx * 0.01)
            panCamera(dy * 0.01, dx * 0.01)
          },
          onPanResponderRelease: () => {}
        })

        // Pinch-to-zoom using touch events
        const pinchZoom = (event: any) => {
          if (event.nativeEvent.touches.length === 2) {
            const [touch1, touch2] = event.nativeEvent.touches
            const distance = Math.hypot(
              touch1.pageX - touch2.pageX,
              touch1.pageY - touch2.pageY
            )
            if (distance < 100) zoomCamera(1.1) // zoom in
            else if (distance > 150) zoomCamera(0.9) // zoom out
          }
        }

        // Render loop
        const render = () => {
          if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01
            cubeRef.current.rotation.y += 0.01
          }

          renderer.render(scene, camera)
          gl.endFrameEXP()

          animationFrameRef.current = requestAnimationFrame(render)
        }

        render()

        if (onCanvasReady) {
          onCanvasReady({ scene, camera, renderer, gl })
        }
      } catch (error) {
        if (onError) {
          onError(error as Error)
        }
      }
    },
    [onCanvasReady, onError, rotateCamera, panCamera, zoomCamera]
  )

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      rendererRef.current?.dispose()
    }
  }, [])

  return (
    <View style={[styles.container, style]} >
      <GLView
        style={[styles.canvas]}
        onContextCreate={onContextCreate}
        onTouchMove={undefined}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default ThreeCanvas
