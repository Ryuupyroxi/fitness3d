/**
 * Highlight Engine
 * Fitness 3D App - Phase 2
 *
 * Provides visual feedback for muscle selection via material color changes
 */

import * as THREE from 'three'
import type { Muscle } from '../types'

interface HighlightOptions {
  color: number
  emissiveIntensity: number
  transitionDuration: number
}

const DEFAULT_HIGHLIGHT: HighlightOptions = {
  color: 0xff5733,
  emissiveIntensity: 0.8,
  transitionDuration: 300
}

class HighlightEngine {
  private highlightedMesh: THREE.Mesh | null = null
  private originalColor: number = 0x4a90e2
  private originalEmissive: number = 0x000000
  private options: HighlightOptions

  constructor(options: Partial<HighlightOptions> = {}) {
    this.options = { ...DEFAULT_HIGHLIGHT, ...options }
  }

  /**
   * Highlights a specific muscle mesh
   */
  highlight(mesh: THREE.Mesh, muscle: Muscle): void {
    if (this.highlightedMesh) {
      this.clearHighlight()
    }
    this.highlightedMesh = mesh
    this.originalColor = (mesh.material as THREE.MeshStandardMaterial).color.getHex()
    this.originalEmissive = (mesh.material as THREE.MeshStandardMaterial).emissive.getHex()

    const material = mesh.material as THREE.MeshStandardMaterial
    material.color.setHex(this.options.color)
    material.emissive.setHex(this.options.color)
    material.emissiveIntensity = this.options.emissiveIntensity

    console.log(`Highlighting muscle: ${muscle.name}`)
  }

  /**
   * Clears the current highlight
   */
  clearHighlight(): void {
    if (this.highlightedMesh) {
      const material = this.highlightedMesh.material as THREE.MeshStandardMaterial
      material.color.setHex(this.originalColor)
      material.emissive.setHex(this.originalEmissive)
      this.highlightedMesh = null
    }
  }

  /**
   * Sets new highlight options
   */
  setOptions(options: Partial<HighlightOptions>): void {
    this.options = { ...this.options, ...options }
  }
}

export const getHighlightEngine = (options?: Partial<HighlightOptions>): HighlightEngine => {
  return new HighlightEngine(options)
}

export default HighlightEngine
