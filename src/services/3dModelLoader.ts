/**
 * 3D Model Loader Service
 * Fitness 3D App - Phase 2
 */

// @ts-ignore GLTFLoader path resolution
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { Muscle, Exercise } from '../types'
import * as THREE from 'three'

interface GLTFModel {
  scene: any;
  animations: any[];
  nodes: Record<string, any>;
  materials: Record<string, any>;
}

class ModelLoader {
  private loader: GLTFLoader;
  private cache: Map<string, GLTFModel>;
  private modelPath: string;

  constructor(modelPath: string = '/assets/models/') {
    this.loader = new GLTFLoader();
    this.cache = new Map();
    this.modelPath = modelPath;
  }

  /**
   * Load a GLTF model from file path
   */
  async loadModel(path: string): Promise<GLTFModel> {
    if (this.cache.has(path)) {
      return this.cache.get(path)!;
    }

    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (gltf: any) => {
          this.cache.set(path, {
            scene: gltf.scene,
            animations: gltf.animations,
            nodes: gltf.nodes || {},
            materials: gltf.materials || {}
          });
          resolve(this.cache.get(path)!);
        },
        (xhr: any) => {
          console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`);
        },
        (error: any) => {
          console.error('Error loading model:', error);
          reject(error);
        }
      );
    });
  }

  /**
   * Load placeholder geometry if no model is available
   */
  loadPlaceholderGeometry(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Load muscle model by muscle ID
   */
  async loadMuscleModel(muscleId: string): Promise<GLTFModel> {
    const path = `${this.modelPath}muscle_${muscleId}.glb`;
    try {
      return await this.loadModel(path);
    } catch (error) {
      console.warn(`Muscle model ${muscleId} not found, loading placeholder.`);
      return {
        scene: this.loadPlaceholderGeometry(),
        animations: [],
        nodes: {},
        materials: {}
      };
    }
  }

  /**
   * Load exercise animation by exercise ID
   */
  async loadExerciseAnimation(exerciseId: string): Promise<GLTFModel> {
    const path = `${this.modelPath}animations/${exerciseId}.glb`;
    return this.loadModel(path);
  }

  /**
   * Clear model cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cached model count
   */
  getCacheSize(): number {
    return this.cache.size;
  }
}

export const getModelLoader = (modelPath?: string): ModelLoader => {
  return new ModelLoader(modelPath);
}

export default ModelLoader;
