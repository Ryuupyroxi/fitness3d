/**
 * Three.js 3D Canvas Component
 * For Fitness 3D App - Android OpenGL ES rendering
 */

import React, { useEffect, useRef, useCallback } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { GLView } from 'expo-gl'
import { ThreeJS } from 'three'

interface ThreeCanvasProps {
  onCanvasReady?: (three: ThreeJS) => void
  onError?: (error: Error) => void
  className?: string
  style?: any
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  onCanvasReady,
  onError,
  className,
  style,
}) => {
  const threeRef = useRef<ThreeJS | null>(null)
  const animationFrameRef = useRef<number>(0)

  const onContextCreate = useCallback(async (gl: any) => {
    try {
      // Initialize Three.js with expo-gl context
      const three = new ThreeJS(gl)
      threeRef.current = three
      
      // Set up scene
      const scene = new three.Scene()
      scene.background = new three.Color(0xf0f0f0)
      
      // Set up camera
      const camera = new three.PerspectiveCamera(
        75,
        gl.drawingBufferWidth / gl.drawingBufferHeight,
        0.1,
        1000
      )
      camera.position.set(0, 0, 5)
      
      // Set up renderer
      const renderer = new three.WebGLRenderer({
        context: gl,
        antialias: true,
      })
      renderer.setPixelRatio(gl.drawingBufferPixelRatio)
      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)
      
      // Add lighting
      const ambientLight = new three.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)
      
      const directionalLight = new three.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)
      
      // Add placeholder mesh (will be replaced with muscle model)
      const geometry = new three.BoxGeometry(1, 1, 1)
      const material = new three.MeshStandardMaterial({ color: 0x4A90E2 })
      const cube = new three.Mesh(geometry, material)
      scene.add(cube)
      
      // Render loop
      const render = () => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        
        renderer.render(scene, camera)
        gl.endFrameEXP()
        
        animationFrameRef.current = requestAnimationFrame(render)
      }
      
      render()
      
      // Notify parent that canvas is ready
      if (onCanvasReady) {
        onCanvasReady(three)
      }
    } catch (error) {
      if (onError) {
        onError(error as Error)
      }
    }
  }, [onCanvasReady, onError])

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <GLView
      style={[styles.canvas, style]}
      className={className}
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