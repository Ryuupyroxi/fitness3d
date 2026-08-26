/**
 * 3D Model Loader Service
 * Fitness 3D App - Phase 2
 */

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { Muscle, Exercise } from '../types'

interface GLTFModel {
  scene: any
  animations: any[]
  nodes: Record<string, any>
  materials: Record<string, any>
}

class ModelLoader {
  private loader: GLTFLoader
  private cache: Map<string, GLTFModel>
  private modelPath: string

  constructor(modelPath: string = '/assets/models/') {
    this.loader = new GLTFLoader()
    this.cache = new Map()
    this.modelPath = modelPath
  }

  /**
   * Load a GLTF model from file path
   */
  async loadModel(path: string): Promise<GLTFModel> {
    // Check cache first
    if (this.cache.has(path)) {
      return this.cache.get(path)!
    }

    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (gltf) => {
          // Cache the model
          this.cache.set(path, {
            scene: gltf.scene,
            animations: gltf.animations,
            nodes: gltf.nodes || {},
            materials: gltf.materials || {}
          })
          resolve(this.cache.get(path)!)
        },
        (xhr) => {
          // Progress callback
          console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`)
        },
        (error) => {
          console.error('Error loading model:', error)
          reject(error)
        }
      )
    })
  }

  /**
   * Load muscle model by muscle ID
   */
  async loadMuscleModel(muscleId: string): Promise<GLTFModel> {
    const path = `${this.modelPath}muscle_${muscleId}.glb`
    return this.loadModel(path)
  }

  /**
   * Load exercise animation by exercise ID
   */
  async loadExerciseAnimation(exerciseId: string): Promise<GLTFModel> {
    const path = `${this.modelPath}animations/${exerciseId}.glb`
    return this.loadModel(path)
  }

  /**
   * Clear model cache
   */
  clearCache(): void {
    this.cache.clear()
  }

  /**
   * Get cached model count
   */
  getCacheSize(): number {
    return this.cache.size
  }
}

// Singleton instance
let modelLoaderInstance: ModelLoader | null = null

export const getModelLoader = (modelPath?: string): ModelLoader => {
  if (!modelLoaderInstance) {
    modelLoaderInstance = new ModelLoader(modelPath)
  }
  return modelLoaderInstance
}

export default ModelLoader