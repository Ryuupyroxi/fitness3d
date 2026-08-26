/**
 * MMKV Storage Service
 * High-performance storage for 3D Fitness App
 */

import { MMKV } from 'react-native-mmkv'

// Create MMKV instance
const mmkv = new MMKV({
  id: 'fitness3d-storage',
  encryptionKey: 'fitness3d-encryption-key' // For production, use secure key management
})

// Storage keys
export const STORAGE_KEYS = {
  FAVORITE_EXERCISES: 'favorite_exercises',
  EXERCISE_LOGS: 'exercise_logs',
  USER_SETTINGS: 'user_settings',
  APP_FIRST_RUN: 'app_first_run',
  VERSION: 'version',
} as const

// ====================
// User Settings
// ====================

export interface UserSettings {
  showPostureTips: boolean
  demoSpeed: number
  language: string
  theme: 'light' | 'dark' | 'system'
}

const DEFAULT_SETTINGS: UserSettings = {
  showPostureTips: true,
  demoSpeed: 1.0,
  language: 'en',
  theme: 'light'
}

export const getUserSettings = (): UserSettings => {
  const settings = mmkv.getString(STORAGE_KEYS.USER_SETTINGS)
  return settings ? JSON.parse(settings) : DEFAULT_SETTINGS
}

export const setUserSettings = (settings: Partial<UserSettings>): void => {
  const current = getUserSettings()
  const updated = { ...current, ...settings }
  mmkv.setString(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(updated))
}

// ====================
// Favorite Exercises
// ====================

export const getFavoriteExercises = (): string[] => {
  const favorites = mmkv.getString(STORAGE_KEYS.FAVORITE_EXERCISES)
  return favorites ? JSON.parse(favorites) : []
}

export const toggleFavoriteExercise = (exerciseId: string): boolean => {
  const favorites = getFavoriteExercises()
  const isFavorite = favorites.includes(exerciseId)
  
  let updated: string[]
  if (isFavorite) {
    updated = favorites.filter(id => id !== exerciseId)
  } else {
    updated = [...favorites, exerciseId]
  }
  
  mmkv.setString(STORAGE_KEYS.FAVORITE_EXERCISES, JSON.stringify(updated))
  return !isFavorite
}

export const isExerciseFavorite = (exerciseId: string): boolean => {
  return getFavoriteExercises().includes(exerciseId)
}

// ====================
// Exercise Logs
// ====================

export interface ExerciseLog {
  id: string
  exerciseId: string
  date: string
  weight?: number
  reps?: number
  sets?: number
  duration?: number
  notes?: string
  timestamp: number
}

export const getExerciseLogs = (exerciseId?: string): ExerciseLog[] => {
  const logs = mmkv.getString(STORAGE_KEYS.EXERCISE_LOGS)
  if (!logs) return []
  
  const allLogs: ExerciseLog[] = JSON.parse(logs)
  
  if (exerciseId) {
    return allLogs.filter(log => log.exerciseId === exerciseId)
  }
  
  return allLogs
}

export const addExerciseLog = (log: Omit<ExerciseLog, 'id' | 'timestamp'>): void => {
  const allLogs = getExerciseLogs()
  const newLog: ExerciseLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    ...log
  }
  
  const updated = [newLog, ...allLogs]
  mmkv.setString(STORAGE_KEYS.EXERCISE_LOGS, JSON.stringify(updated))
}

export const updateExerciseLog = (logId: string, updates: Partial<Omit<ExerciseLog, 'id' | 'timestamp'>>): void => {
  const logs = getExerciseLogs()
  const updated = logs.map(log => 
    log.id === logId ? { ...log, ...updates } : log
  )
  mmkv.setString(STORAGE_KEYS.EXERCISE_LOGS, JSON.stringify(updated))
}

export const deleteExerciseLog = (logId: string): void => {
  const logs = getExerciseLogs()
  const updated = logs.filter(log => log.id !== logId)
  mmkv.setString(STORAGE_KEYS.EXERCISE_LOGS, JSON.stringify(updated))
}

// ====================
// Utility Functions
// ====================

export const clearAllData = (): void => {
  mmkv.clearAll()
}

export const setFirstRunComplete = (): void => {
  mmkv.setBoolean(STORAGE_KEYS.APP_FIRST_RUN, false)
}

export const isFirstRun = (): boolean => {
  return mmkv.getBoolean(STORAGE_KEYS.APP_FIRST_RUN) ?? true
}

export const setAppVersion = (version: string): void => {
  mmkv.setString(STORAGE_KEYS.VERSION, version)
}

export const getAppVersion = (): string | null => {
  return mmkv.getString(STORAGE_KEYS.VERSION)
}

export default mmkv