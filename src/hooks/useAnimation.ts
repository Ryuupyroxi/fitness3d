/**
 * Animation Manager
 * Fitness 3D App - Phase 3
 * 
 * Handles exercise animation playback, blending, and speed control
 */

import { useState, useRef, useCallback, useEffect } from 'react'
import * as THREE from 'three'

interface AnimationClip {
  name: string
  duration: number
  frames: number
}

interface AnimationState {
  playing: boolean
  speed: number
  currentTime: number
  duration: number
  clip: AnimationClip | null
}

interface UseAnimationParams {
  initialSpeed?: number
  loop?: boolean
  onAnimationEnd?: () => void
}

export const useAnimation = ({
  initialSpeed = 1,
  loop = true,
  onAnimationEnd,
}: UseAnimationParams = {}) => {
  const [state, setState] = useState<AnimationState>({
    playing: false,
    speed: initialSpeed,
    currentTime: 0,
    duration: 0,
    clip: null,
  })

  const mixerRef = useRef<any>(null)
  const animationFrameIdRef = useRef<number>(0)
  const elapsedTimeRef = useRef<number>(0)

  // Initialize mixer when 3D scene is ready
  const initializeMixer = useCallback((scene: THREE.Group) => {
    // In real implementation, create AnimationMixer from scene
    mixerRef.current = {
      clipAction: () => null,
      update: () => {},
      stop: () => {},
    }
  }, [])

  // Load animation clip by ID
  const loadClip = useCallback(async (clipId: string) => {
    // Would normally fetch from model loader
    const clip: AnimationClip = {
      name: clipId,
      duration: 3.0,
      frames: 90,
    }
    setState((prev) => ({
      ...prev,
      clip,
      currentTime: 0,
    }))
  }, [])

  // Play animation
  const play = useCallback(() => {
    if (!state.clip) return

    setState((prev) => ({ ...prev, playing: true }))

    const animate = (deltaTime: number) => {
      if (state.playing) {
        setState((prev) => {
          let newTime = prev.currentTime + deltaTime * prev.speed

          if (newTime >= prev.duration) {
            if (loop) {
              newTime = 0
            } else {
              newTime = prev.duration
              setState((s) => ({ ...s, playing: false }))
              if (onAnimationEnd) onAnimationEnd()
            }
          }

          return { ...prev, currentTime: newTime }
        })
      }

      if (state.playing || (!state.clip || state.currentTime < state.duration)) {
        animationFrameIdRef.current = requestAnimationFrame(() => animate(0.016))
      }
    }

    animationFrameIdRef.current = requestAnimationFrame(() => animate(0.016))
  }, [state.clip, state.playing, state.speed, loop, onAnimationEnd, state.duration])

  // Pause animation
  const pause = useCallback(() => {
    setState((prev) => ({ ...prev, playing: false }))
  }, [])

  // Resume animation
  const resume = useCallback(() => {
    if (!state.clip) return
    play()
  }, [state.clip, play])

  // Stop and reset
  const stop = useCallback(() => {
    setState((prev) => ({
      ...prev,
      playing: false,
      currentTime: 0,
    }))
  }, [])

  // Set playback speed
  const setSpeed = useCallback((speed: number) => {
    setState((prev) => ({ ...prev, speed: Math.max(0.1, Math.min(speed, 3.0)) }))
  }, [])

  // Seek to specific time
  const seek = useCallback((time: number) => {
    setState((prev) => ({
      ...prev,
      currentTime: Math.max(0, Math.min(time, prev.duration)),
    }))
  }, [state.duration])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  return {
    state,
    loadClip,
    play,
    pause,
    resume,
    stop,
    setSpeed,
    seek,
    initializeMixer,
  }
}

export default useAnimation