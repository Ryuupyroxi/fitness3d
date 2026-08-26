/**
 * use3DAnimation Hook
 * Fitness 3D App - Phase 2
 *
 * Animation system hook for managing 3D animations
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'

interface AnimationState {
  playing: boolean
  speed: number
  currentTime: number
  duration: number
}

interface Use3DAnimationOptions {
  initialSpeed?: number
  autoPlay?: boolean
}

export const use3DAnimation = (
  object: THREE.Object3D | null,
  animationClip?: THREE.AnimationClip | null,
  options: Use3DAnimationOptions = {}
) => {
  const [state, setState] = useState<AnimationState>({
    playing: options.autoPlay ?? false,
    speed: options.initialSpeed ?? 1,
    currentTime: 0,
    duration: animationClip?.duration ?? 0
  })

  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const clockRef = useRef<THREE.Clock>(new THREE.Clock())

  // Create animation mixer
  useEffect(() => {
    if (object && animationClip) {
      mixerRef.current = new THREE.AnimationMixer(object)
      const action = mixerRef.current.clipAction(animationClip)
      action.play()
      if (!state.playing) {
        mixerRef.current.timeScale = 0
      }
    }

    return () => {
      mixerRef.current?.stopAllAction()
      mixerRef.current = null
    }
  }, [object, animationClip])

  // Animation loop
  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      if (mixerRef.current) {
        const delta = clockRef.current.getDelta() * state.speed
        mixerRef.current.update(delta)
        setState(prev => ({
          ...prev,
          currentTime: prev.currentTime + delta
        }))
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    if (state.playing) {
      clockRef.current.start()
      animate()
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [state.playing, state.speed])

  const play = useCallback(() => {
    setState(prev => ({ ...prev, playing: true }))
    if (mixerRef.current) mixerRef.current.timeScale = state.speed
  }, [state.speed])

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, playing: false }))
    if (mixerRef.current) mixerRef.current.timeScale = 0
  }, [])

  const setSpeed = useCallback((speed: number) => {
    setState(prev => ({ ...prev, speed }))
    if (mixerRef.current) mixerRef.current.timeScale = speed
  }, [])

  const scrubTo = useCallback((time: number) => {
    setState(prev => ({ ...prev, currentTime: time }))
    if (mixerRef.current) {
      mixerRef.current.setTime(time)
    }
  }, [])

  return {
    state,
    play,
    pause,
    setSpeed,
    scrubTo
  }
}

export default use3DAnimation
