/**
 * Type Definitions for Fitness 3D App
 */

// Muscle types
export interface Muscle {
  id: string
  name: string
  meshIdentifier: string
  targetZone: 'upper_body' | 'core' | 'lower_body'
  muscleGroup: string
  origin?: string
  insertion?: string
  action?: string
}

export type MuscleZone = 'upper_body' | 'core' | 'lower_body'

// Exercise types
export type ExerciseCategory = 'stretches' | 'weight_training' | 'bodyweight'

export interface Exercise {
  id: string
  name: string
  description: string
  muscles: string[] // Array of muscle IDs
  category: ExerciseCategory
  difficultyRating: number // 1-10 scale
  equipment: string
  animationClip: string
  formTips?: string[]
  isFavorite?: boolean
  imageKitId?: string
  duration?: number // in seconds for stretches
  repsRange?: [number, number] // for weight training
}

// User stats types
export interface ExerciseLog {
  exerciseId: string
  date: string
  weight?: number
  reps?: number
  sets?: number
  duration?: number
  notes?: string
  favorite: boolean
}

// 3D View types
export interface CameraControls {
  rotation: number // 0-360 degrees
  zoom: number // 0.1 - 3.0 scale
  pan: [number, number] // x, y offset
}

export interface RaycastResult {
  intersected: boolean
  muscleId?: string
  point: [number, number, number]
}

// UI types
export interface BottomSheetState {
  snapPoints: number[] // percentages
  currentIndex: number
  expanded: boolean
}

// App navigation
export type AppScreen = 'home' | 'muscle_select' | 'exercise_detail' | 'demo' | 'profile'

// Animation types
export interface AnimationState {
  playing: boolean
  speed: number // 0.5, 1, 1.5, 2
  currentTime: number
  duration: number
}

// Muscle map entry
export interface MuscleMapEntry {
  meshId: string
  muscles: Muscle[]
}

// Global app state interface
export interface AppStateData {
  // Selected items
  selectedMuscle: Muscle | null
  selectedExercise: Exercise | null
  
  // Filters
  activeCategory: ExerciseCategory
  
  // 3D View
  cameraControls: CameraControls
  animationState: AnimationState
  
  // UI
  showHUD: boolean
  showPostureTips: boolean
  bottomSheet: BottomSheetState
  
  // Navigation
  currentScreen: AppScreen
}