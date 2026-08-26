/**
 * Test suite for use3DAnimation Hook
 */
import { renderHook, act } from '@testing-library/react-native'
import { use3DAnimation } from '../src/hooks/use3DAnimation'
import * as THREE from 'three'

describe('use3DAnimation', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => use3DAnimation(null))
    expect(result.current.state.playing).toBe(false)
    expect(result.current.state.speed).toBe(1)
    expect(result.current.state.currentTime).toBe(0)
  })

  it('should play and pause animation', () => {
    const { result } = renderHook(() => use3DAnimation(null))
    
    act(() => {
      result.current.play()
    })
    expect(result.current.state.playing).toBe(true)
    
    act(() => {
      result.current.pause()
    })
    expect(result.current.state.playing).toBe(false)
  })

  it('should set speed', () => {
    const { result } = renderHook(() => use3DAnimation(null))
    
    act(() => {
      result.current.setSpeed(2)
    })
    expect(result.current.state.speed).toBe(2)
  })

  it('should scrub to a specific time', () => {
    const { result } = renderHook(() => use3DAnimation(null))
    
    act(() => {
      result.current.scrubTo(5)
    })
    expect(result.current.state.currentTime).toBe(5)
  })

  it('should create mixer when object and clip provided', () => {
    const object = new THREE.Object3D()
    const clip = new THREE.AnimationClip('test', 1, [])
    const { result } = renderHook(() => use3DAnimation(object, clip))
    expect(result.current).toBeDefined()
  })
})
