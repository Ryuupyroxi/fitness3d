/**
 * Region-Based Raycasting Service
 * Fitness 3D App — Replaces broken mesh-name raycasting with region selection
 *
 * The old raycaster relied on `meshIdentifier` names that don't exist in CesiumMan.
 * This version casts a ray, gets the hit point on the single mesh, and classifies
 * it into a body region via regionSelector.classifyPoint().
 */

import * as THREE from 'three';
import { classifyPoint, BODY_REGIONS, BodyRegion } from './regionSelector';
import type { RaycastResult } from '../types';

interface RaycasterOptions {
  fov?: number;
  near?: number;
  far?: number;
}

export interface RegionRaycastResult extends RaycastResult {
  region: BodyRegion | null;
  muscleIds: string[];
}

class RegionRaycasterService {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private enabled: boolean;
  private onSelect: ((result: RegionRaycastResult) => void) | null;

  constructor(options: RaycasterOptions = {}) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.enabled = true;
    this.onSelect = null;

    this.raycaster.params.Mesh = {
      threshold: 0.1,
    };
  }

  /**
   * Convert screen touch coordinates to normalized device coordinates
   */
  screenToNDC(x: number, y: number, width: number, height: number): { x: number; y: number } {
    return {
      x: (x / width) * 2 - 1,
      y: -(y / height) * 2 + 1,
    };
  }

  /**
   * Cast ray and classify hit point into a body region
   */
  castRayToRegion(
    x: number,
    y: number,
    objects: THREE.Object3D[],
    camera: THREE.Camera,
    width: number,
    height: number,
  ): RegionRaycastResult {
    const ndc = this.screenToNDC(x, y, width, height);
    this.mouse.set(ndc.x, ndc.y);

    this.raycaster.setFromCamera(this.mouse, camera);

    const intersects = this.raycaster.intersectObjects(objects, true);

    if (intersects.length > 0) {
      const firstIntersect = intersects[0];
      const point: [number, number, number] = [
        firstIntersect.point.x,
        firstIntersect.point.y,
        firstIntersect.point.z,
      ];

      // Classify the hit point into a body region
      const region = classifyPoint(firstIntersect.point);

      return {
        intersected: true,
        point,
        region,
        muscleIds: region ? region.muscleIds : [],
      };
    }

    return {
      intersected: false,
      point: [0, 0, 0],
      region: null,
      muscleIds: [],
    };
  }

  /**
   * Find closest muscle from intersection point
   */
  findClosestMuscle(
    intersects: THREE.Intersection[],
  ): { region: BodyRegion | null; distance?: number } {
    if (intersects.length === 0) {
      return { region: null };
    }

    const point = intersects[0].point;
    const region = classifyPoint(point);

    return {
      region,
      distance: intersects[0].distance,
    };
  }

  /**
   * Enable/disable raycasting
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Check if raycasting is enabled
   */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Set selection callback
   */
  setOnSelect(callback: (result: RegionRaycastResult) => void): void {
    this.onSelect = callback;
  }

  /**
   * Handle touch end event — region-based selection
   */
  handleTouchEnd(
    touchX: number,
    touchY: number,
    objects: THREE.Object3D[],
    camera: THREE.Camera,
    width: number,
    height: number,
  ): RegionRaycastResult | null {
    if (!this.enabled) return null;

    const result = this.castRayToRegion(touchX, touchY, objects, camera, width, height);

    if (result.intersected && this.onSelect) {
      this.onSelect(result);
    }

    return result.intersected ? result : null;
  }

  /**
   * Get all body regions (for UI display)
   */
  getBodyRegions(): BodyRegion[] {
    return BODY_REGIONS;
  }
}

// Singleton instance
let regionRaycasterService: RegionRaycasterService | null = null;

export const getRegionRaycasterService = (): RegionRaycasterService => {
  if (!regionRaycasterService) {
    regionRaycasterService = new RegionRaycasterService();
  }
  return regionRaycasterService;
};

export default RegionRaycasterService;
