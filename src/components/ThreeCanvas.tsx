/**
 * Three.js 3D Canvas Component
 * For Fitness 3D App - Android OpenGL ES rendering
 */

import React, { useEffect, useRef, useCallback } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
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
        scene.add(cube)

        sceneRef.current = scene
        cameraRef.current = camera
        rendererRef.current = renderer

        // Render loop
        const render = () => {
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01

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
    [onCanvasReady, onError]
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
    <GLView
      style={[styles.canvas, style]}
      onContextCreate={onContextCreate}
    />
  )
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default ThreeCanvas
