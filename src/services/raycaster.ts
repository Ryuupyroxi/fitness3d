/**
 * 3D Raycasting Service
 * Fitness 3D App - Phase 2
 * 
 * Handles touch-based muscle selection via raycasting
 */

import * as THREE from 'three'
import type { RaycastResult, Muscle } from '../types'

interface RaycasterOptions {
  fov?: number
  near?: number
  far?: number
  enablePointerLock?: boolean
}

class RaycasterService {
  private raycaster: THREE.Raycaster
  private mouse: THREE.Vector2
  private enabled: boolean
  private onSelect: ((muscle: Muscle | null) => void) | null

  constructor(options: RaycasterOptions = {}) {
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.enabled = true
    this.onSelect = null
    
    // Configure raycaster mesh threshold
    this.raycaster.params.Mesh = {
      threshold: 0.1
    }
  }

  /**
   * Convert screen touch coordinates to normalized device coordinates
   */
  screenToNDC(x: number, y: number, width: number, height: number): { x: number; y: number } {
    return {
      x: (x / width) * 2 - 1,
      y: -(y / height) * 2 + 1
    }
  }

  /**
   * Cast ray from screen position through objects
   */
  castRay(
    x: number,
    y: number,
    objects: THREE.Object3D[],
    camera: THREE.Camera,
    width: number,
    height: number
  ): RaycastResult {
    // Convert to NDC
    const ndc = this.screenToNDC(x, y, width, height)
    this.mouse.set(ndc.x, ndc.y)
    
    // Set the raycaster's ray
    this.raycaster.setFromCamera(this.mouse, camera)
    
    // Intersect with objects
    const intersects = this.raycaster.intersectObjects(objects, true)
    
    if (intersects.length > 0) {
      const firstIntersect = intersects[0]
      const point = [
        firstIntersect.point.x,
        firstIntersect.point.y,
        firstIntersect.point.z
      ] as [number, number, number]
      
      return {
        intersected: true,
        point
      }
    }
    
    return {
      intersected: false,
      point: [0, 0, 0]
    }
  }

  /**
   * Check if ray intersects a specific mesh by name
   */
  intersectsMesh(
    meshName: string,
    x: number,
    y: number,
    objects: THREE.Object3D[],
    camera: THREE.Camera,
    width: number,
    height: number
  ): { intersects: boolean; distance?: number } {
    const result = this.castRay(x, y, objects, camera, width, height)
    
    if (!result.intersected) {
      return { intersects: false }
    }
    
    // Find the mesh by name
    const meshes = objects.filter(obj => obj.name === meshName)
    if (meshes.length === 0) {
      return { intersects: false }
    }
    
    // Check if this specific mesh was hit
    const intersects = this.raycaster.intersectObject(meshes[0])
    return {
      intersects: intersects.length > 0,
      distance: intersects[0]?.distance
    }
  }

  /**
   * Find closest muscle from intersection point
   */
  findClosestMuscle(
    intersects: THREE.Intersection[],
    muscleMap: Record<string, Muscle>
  ): Muscle | null {
    if (intersects.length === 0) return null
    
    // The first intersection is the closest
    const object = intersects[0].object
    
    // Find the muscle by mesh name
    const meshName = object.name || object.type
    
    // Search through muscle map for matching mesh
    for (const [id, muscle] of Object.entries(muscleMap)) {
      if (muscle.meshIdentifier === meshName) {
        return muscle
      }
    }
    
    return null
  }

  /**
   * Enable/disable raycasting
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  /**
   * Check if raycasting is enabled
   */
  isEnabled(): boolean {
    return this.enabled
  }

  /**
   * Set selection callback
   */
  setOnSelect(callback: (muscle: Muscle | null) => void): void {
    this.onSelect = callback
  }

  /**
   * Handle touch end event
   */
  handleTouchEnd(
    touchX: number,
    touchY: number,
    objects: THREE.Object3D[],
    camera: THREE.Camera,
    width: number,
    height: number,
    muscleMap: Record<string, Muscle>
  ): Muscle | null {
    if (!this.enabled) return null
    
    const result = this.castRay(touchX, touchY, objects, camera, width, height)
    
    if (result.intersected) {
      // Get all intersections
      const intersects = this.raycaster.intersectObjects(objects, true)
      const muscle = this.findClosestMuscle(intersects, muscleMap)
      
      if (this.onSelect) {
        this.onSelect(muscle)
      }
      
      return muscle
    }
    
    if (this.onSelect) {
      this.onSelect(null)
    }
    
    return null
  }
}

// Singleton instance
let raycasterService: RaycasterService | null = null

export const getRaycasterService = (): RaycasterService => {
  if (!raycasterService) {
    raycasterService = new RaycasterService()
  }
  return raycasterService
}

export default RaycasterService