/**
 * 3D Model Loader Service
 * Fitness 3D App — Loads CesiumMan rigged animated model
 *
 * Replaces the broken body.glb (single helmet mesh) with CesiumMan.glb
 * which has a proper 19-joint skeleton and walk animation.
 */

// @ts-ignore GLTFLoader path resolution
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { getExerciseClip } from './proceduralAnimation';
import { EXERCISE_ANIMATIONS } from '../data/exerciseAnimations';

interface GLTFModel {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
  nodes: Record<string, THREE.Object3D>;
  materials: Record<string, THREE.Material>;
  mixer?: THREE.AnimationMixer;
}

class ModelLoader {
  private loader: GLTFLoader;
  private cache: Map<string, GLTFModel>;
  private modelPath: string;

  constructor(modelPath: string = 'assets/models/') {
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
          const model: GLTFModel = {
            scene: gltf.scene,
            animations: gltf.animations,
            nodes: gltf.nodes || {},
            materials: gltf.materials || {},
          };

          // Create animation mixer for this model
          if (gltf.scene) {
            model.mixer = new THREE.AnimationMixer(gltf.scene);
          }

          this.cache.set(path, model);
          resolve(model);
        },
        (xhr: any) => {
          if (xhr.total > 0) {
            console.log(`Loading model: ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
          }
        },
        (error: any) => {
          console.error('Error loading model:', error);
          reject(error);
        }
      );
    });
  }

  /**
   * Load CesiumMan — the rigged animated humanoid
   */
  async loadCesiumMan(): Promise<GLTFModel> {
    return this.loadModel(`${this.modelPath}CesiumMan.glb`);
  }

  /**
   * Load body.glb (anatomical reference — single mesh, no animation)
   */
  async loadBodyModel(): Promise<GLTFModel> {
    return this.loadModel(`${this.modelPath}body.glb`);
  }

  /**
   * Get a procedural animation clip for an exercise
   */
  getExerciseAnimation(exerciseId: string): THREE.AnimationClip | null {
    const animDef = EXERCISE_ANIMATIONS[exerciseId];
    if (!animDef) {
      console.warn(`No animation defined for exercise: ${exerciseId}`);
      return null;
    }
    return getExerciseClip(animDef);
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
};

export default ModelLoader;
