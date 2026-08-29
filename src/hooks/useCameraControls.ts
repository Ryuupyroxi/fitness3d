/**
 * Camera Controls Hook
 * Fitness 3D App - Phase 3
 * 
 * Orbit, pan, zoom for Three.js camera with smooth animations
 */

import { useState, useRef, useCallback, useEffect } from 'react'
import * as THREE from 'three'
import type { CameraControls } from '../types'

interface UseCameraControlsProps {
  initialControls?: CameraControls
  enableDamping?: boolean
  dampingFactor?: number
  enablePan?: boolean
  enableZoom?: boolean
}

export const useCameraControls = ({
  initialControls = {
    rotation: 0,
    zoom: 1,
    pan: [0, 0],
  },
  enableDamping = true,
  dampingFactor = 0.1,
  enablePan = true,
  enableZoom = true,
}: UseCameraControlsProps = {}) => {
  const [controls, setControls] = useState<CameraControls>(initialControls)
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)
  const targetRef = useRef<CameraControls>({ rotation: 0, zoom: 1, pan: [0, 0] })

  // Apply smooth damping
  const applyDamping = useCallback(() => {
    setVelocity((vel) => ({
      x: vel.x * (1 - dampingFactor),
      y: vel.y * (1 - dampingFactor),
    }))

    setControls((prev) => ({
      ...prev,
      rotation: prev.rotation + velocity.x,
      pan: [prev.pan[0] + velocity.y, prev.pan[1]],
    }))
  }, [dampingFactor])

  // Animation loop for damping
  useEffect(() => {
    const animate = () => {
      if (isDragging) {
        // No damping while dragging actively
      } else {
        applyDamping()
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isDragging, applyDamping])

  // Handle mouse/touch drag for orbit rotation
  const handlePointerMove = useCallback(
    (deltaX: number, deltaY: number) => {
      if (!isDragging) return

      const sensitivity = 0.01
      setVelocity((v) => ({
        x: v.x - deltaX * sensitivity,
        y: v.y - deltaY * sensitivity,
      }))
    },
    [isDragging]
  )

  // Zoom handling
  const handleZoom = useCallback(
    (delta: number) => {
      if (!enableZoom) return
      setControls((prev) => ({
        ...prev,
        zoom: Math.min(Math.max(prev.zoom + delta * 0.01, 0.5), 3.0),
      }))
    },
    [enableZoom]
  )

  // Pan handling
  const handlePan = useCallback(
    (deltaX: number, deltaY: number) => {
      if (!enablePan) return
      setControls((prev) => ({
        ...prev,
        pan: [prev.pan[0] + deltaX * 0.01, prev.pan[1] + deltaY * 0.01],
      }))
    },
    [enablePan]
  )

  // Reset to default view
  const reset = useCallback(() => {
    setControls(initialControls)
  }, [initialControls])

  // Animate to specific target
  const animateTo = useCallback(
    (target: Partial<CameraControls>, duration = 500) => {
      targetRef.current = {
        ...controls,
        ...target,
      }

      const startTime = performance.now()
      const start = { ...controls }

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const t = Math.min(elapsed / duration, 1)

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3)

        setControls({
          rotation:
            start.rotation + (targetRef.current.rotation - start.rotation) * eased,
          zoom:
            start.zoom + (targetRef.current.zoom - start.zoom) * eased,
          pan: [
            start.pan[0] + (targetRef.current.pan[0] - start.pan[0]) * eased,
            start.pan[1] + (targetRef.current.pan[1] - start.pan[1]) * eased,
          ] as [number, number],
        })

        if (t < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    },
    [controls]
  )

  // Handle pointer events
  const onPointerDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const onPointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const onPointerCancel = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Apply controls to a Three.js camera
  const applyToCamera = useCallback(
    (camera: THREE.PerspectiveCamera, scene: THREE.Scene) => {
      camera.position.set(
        Math.cos(controls.rotation) * 5 * controls.zoom,
        Math.sin(controls.rotation * 0.5) * 2 + 1,
        Math.sin(controls.rotation) * 5 * controls.zoom
      )
      camera.position.x += controls.pan[0]
      camera.position.y += controls.pan[1]
      camera.lookAt(scene.position)
    },
    [controls]
  )

  return {
    controls,
    isDragging,
    handlePointerMove,
    handleZoom,
    handlePan,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    reset,
    animateTo,
    applyToCamera,
  }
}

export default useCameraControls