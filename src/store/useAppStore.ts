/**
 * Global Application State
 * Fitness 3D App - Central state management with Zustand
 */

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// ====================
// TYPES
// ====================

export type ExerciseCategory = 'stretches' | 'weight_training' | 'bodyweight'

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

export interface Exercise {
  id: string
  name: string
  description: string
  muscles: string[] // muscle IDs
  category: ExerciseCategory
  difficultyRating: number
  equipment: string
  animationClip: string
  formTips?: string[]
  imageKitId?: string
  isFavorite?: boolean
}

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

export interface AppState {
  // 3D View State
  selectedMuscle: Muscle | null
  selectedExercise: Exercise | null
  
  // UI State
  activeCategory: ExerciseCategory
  showHUD: boolean
  isDemoPlaying: boolean
  demoSpeed: number // 0.5x, 1x, 1.5x, 2x
  
  // Navigation State
  currentScreen: 'home' | 'muscle_select' | 'exercise_detail' | 'demo' | 'profile'
  
  // Actions
  selectMuscle: (muscle: Muscle | null) => void
  selectExercise: (exercise: Exercise | null) => void
  setCategory: (category: ExerciseCategory) => void
  toggleHUD: () => void
  toggleDemo: () => void
  setDemoSpeed: (speed: number) => void
  navigate: (screen: AppState['currentScreen']) => void
  toggleFavorite: (exerciseId: string) => void
  addExerciseLog: (log: ExerciseLog) => void
  
  // Computed
  getExercisesForMuscle: (muscleId: string) => Exercise[]
  getFavoredExercises: () => Exercise[]
}

// ====================
// STORE
// ====================

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial State
        selectedMuscle: null,
        selectedExercise: null,
        activeCategory: 'stretches',
        showHUD: true,
        isDemoPlaying: false,
        demoSpeed: 1.0,
        currentScreen: 'home',
        
        // Actions
        selectMuscle: (muscle) => set({ selectedMuscle: muscle }),
        
        selectExercise: (exercise) => set({ 
          selectedExercise: exercise,
          currentScreen: exercise ? 'exercise_detail' : 'home'
        }),
        
        setCategory: (category) => set({ activeCategory: category }),
        
        toggleHUD: () => set((state) => ({ showHUD: !state.showHUD })),
        
        toggleDemo: () => set((state) => ({ isDemoPlaying: !state.isDemoPlaying })),
        
        setDemoSpeed: (speed) => set({ demoSpeed: speed }),
        
        navigate: (screen) => set({ currentScreen: screen }),
        
        toggleFavorite: (exerciseId) => {
          // This will be handled by the storage service
          // For now, just update the selected exercise
          const current = get().selectedExercise
          if (current && current.id === exerciseId) {
            set({
              selectedExercise: {
                ...current,
                isFavorite: !current.isFavorite
              }
            })
          }
        },
        
        addExerciseLog: (log) => {
          // This will be handled by the storage service
          // For now, just acknowledge
          console.log('Exercise log added:', log)
        },
        
        // Computed
        getExercisesForMuscle: (muscleId) => {
          // This will query the exercise registry
          // For now, return empty array - will be implemented in Phase 3
          return []
        },
        
        getFavoredExercises: () => {
          // This will query the exercise registry
          return []
        }
      }),
      {
        name: 'fitness3d-storage',
        partialize: (state) => ({
          activeCategory: state.activeCategory,
          demoSpeed: state.demoSpeed,
          // Don't persist transient 3D/view state
        })
      }
    )
  )
)