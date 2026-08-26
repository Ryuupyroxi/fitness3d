/**
 * Test suite for Raycaster Service
 */
import RaycasterService from '../src/services/raycaster'
import * as THREE from 'three'
import { MUSCLE_MAP } from '../src/data/muscleMap'

describe('RaycasterService', () => {
  let raycaster: RaycasterService
  let camera: THREE.PerspectiveCamera
  let mesh: THREE.Mesh

  beforeEach(() => {
    raycaster = new RaycasterService()
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.set(0, 0, 5)
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    )
    mesh.name = 'Mesh_BicepsBrachii'
  })

  it('should instantiate', () => {
    expect(raycaster).toBeDefined()
  })

  it('should convert screen coordinates to NDC', () => {
    const ndc = raycaster.screenToNDC(0, 0, 100, 100)
    expect(ndc.x).toBeCloseTo(-1)
    expect(ndc.y).toBeCloseTo(1)

    const ndc2 = raycaster.screenToNDC(100, 100, 100, 100)
    expect(ndc2.x).toBeCloseTo(1)
    expect(ndc2.y).toBeCloseTo(-1)
  })

  it('should enable and disable', () => {
    raycaster.setEnabled(false)
    expect(raycaster.isEnabled()).toBe(false)
    raycaster.setEnabled(true)
    expect(raycaster.isEnabled()).toBe(true)
  })

  it('should find closest muscle from intersection', () => {
    const intersects = [{ object: mesh }] as THREE.Intersection[]
    const muscle = raycaster.findClosestMuscle(intersects, MUSCLE_MAP)
    expect(muscle?.id).toBe('biceps_brachii')
  })

  it('should not find muscle if no intersection', () => {
    const muscle = raycaster.findClosestMuscle([], MUSCLE_MAP)
    expect(muscle).toBeNull()
  })

  it('should handle touch end and trigger selection callback', () => {
    const callback = jest.fn()
    raycaster.setOnSelect(callback)
    const muscle = raycaster.handleTouchEnd(50, 50, [mesh], camera, 100, 100, MUSCLE_MAP)
    expect(callback).toHaveBeenCalled()
  })
})
