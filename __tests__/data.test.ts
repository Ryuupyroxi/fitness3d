/**
 * Test suite for Exercise Registry and Muscle Map
 */
import { EXERCISE_REGISTRY, TOTAL_EXERCISES, getExercisesByMuscle } from '../src/data/exerciseRegistry'
import { MUSCLE_MAP, MUSCLE_COUNT } from '../src/data/muscleMap'

describe('Exercise Registry', () => {
  it('should contain 50+ exercises', () => {
    expect(TOTAL_EXERCISES).toBeGreaterThanOrEqual(50)
  })

  it('should map exercises to valid muscles', () => {
    Object.values(EXERCISE_REGISTRY).forEach(exercise => {
      exercise.muscles.forEach(muscleId => {
        expect(MUSCLE_MAP[muscleId]).toBeDefined()
      })
    })
  })

  it('should get exercises by muscle', () => {
    const benchExercises = getExercisesByMuscle('pectoralis_major')
    expect(benchExercises.length).toBeGreaterThan(0)
    expect(benchExercises[0].muscles).toContain('pectoralis_major')
  })
})

describe('Muscle Map', () => {
  it('should contain 300+ muscles', () => {
    expect(MUSCLE_COUNT).toBeGreaterThanOrEqual(300)
  })

  it('should have valid muscle structure', () => {
    Object.values(MUSCLE_MAP).forEach(muscle => {
      expect(muscle.id).toBeDefined()
      expect(muscle.name).toBeDefined()
      expect(muscle.meshIdentifier).toBeDefined()
      expect(['upper_body', 'core', 'lower_body']).toContain(muscle.targetZone)
    })
  })
})
