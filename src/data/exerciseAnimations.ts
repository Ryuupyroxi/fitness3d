/**
 * Exercise Animation Keyframes
 * Fitness 3D App — 79 exercise animations for CesiumMan skeleton
 *
 * Each animation is a compact keyframe array:
 *   [time, { jointName: [rx_deg, ry_deg, rz_deg] }]
 *
 * Joint names: hips, spine, chest, neck, head,
 *   leftShoulder, leftElbow, leftWrist,
 *   rightShoulder, rightElbow, rightWrist,
 *   leftHip, leftKnee, leftAnkle, leftFoot,
 *   rightHip, rightKnee, rightAnkle, rightFoot
 */

import { ExerciseAnimation } from '../services/proceduralAnimation';
import { JointName } from '../data/skeleton';

type KF = [number, Partial<Record<JointName, [number, number, number]>>];

function makeAnim(name: string, duration: number, keyframes: KF[]): ExerciseAnimation {
  return {
    name,
    duration,
    keyframes: keyframes.map(([time, rotations]) => ({ time, rotations })),
  };
}

export const EXERCISE_ANIMATIONS: Record<string, ExerciseAnimation> = {
  // === CHEST ===
  bench_press: makeAnim('bench_press', 2.5, [
    [0.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  push_ups: makeAnim('push_ups', 2.5, [
    [0.0, { leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [90, 0, 0] }],
    [1.0, { leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftElbow: [0, 0, -80], rightElbow: [0, 0, 80], spine: [90, 0, 0] }],
    [2.0, { leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [90, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [0, 0, 0] }],
  ]),

  decline_push_ups: makeAnim('decline_push_ups', 2.5, [
    [0.0, { leftShoulder: [-80, 0, 0], rightShoulder: [-80, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [110, 0, 0] }],
    [1.0, { leftShoulder: [-80, 0, 0], rightShoulder: [-80, 0, 0], leftElbow: [0, 0, -70], rightElbow: [0, 0, 70], spine: [110, 0, 0] }],
    [2.0, { leftShoulder: [-80, 0, 0], rightShoulder: [-80, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [110, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [0, 0, 0] }],
  ]),

  incline_bench_press: makeAnim('incline_bench_press', 2.5, [
    [0.0, { leftShoulder: [0, 0, 60], rightShoulder: [0, 0, -60], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [0, 0, 60], rightShoulder: [0, 0, -60], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.0, { leftShoulder: [0, 0, 60], rightShoulder: [0, 0, -60], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  cable_crossovers: makeAnim('cable_crossovers', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -20], rightElbow: [0, 0, 20] }],
    [1.25, { leftShoulder: [0, 0, 20], rightShoulder: [0, 0, -20], leftElbow: [0, 0, -20], rightElbow: [0, 0, 20] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -20], rightElbow: [0, 0, 20] }],
  ]),

  dumbbell_flyes: makeAnim('dumbbell_flyes', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -10], rightElbow: [0, 0, 10] }],
    [1.25, { leftShoulder: [0, 0, 30], rightShoulder: [0, 0, -30], leftElbow: [0, 0, -10], rightElbow: [0, 0, 10] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -10], rightElbow: [0, 0, 10] }],
  ]),

  dips_chest: makeAnim('dips_chest', 2.5, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.0, { leftShoulder: [10, 0, 0], rightShoulder: [10, 0, 0], leftElbow: [0, 0, -10], rightElbow: [0, 0, 10] }],
    [2.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  // === BACK ===
  pull_ups: makeAnim('pull_ups', 3.0, [
    [0.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, -120], rightElbow: [0, 0, 120] }],
    [2.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [3.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  lat_pulldown: makeAnim('lat_pulldown', 2.5, [
    [0.0, { leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0], leftElbow: [0, 0, -30], rightElbow: [0, 0, 30] }],
    [1.25, { leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0], leftElbow: [0, 0, -100], rightElbow: [0, 0, 100] }],
    [2.5, { leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0], leftElbow: [0, 0, -30], rightElbow: [0, 0, 30] }],
  ]),

  barbell_rows: makeAnim('barbell_rows', 2.5, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [45, 0, 0] }],
    [1.25, { leftShoulder: [-20, 0, 0], rightShoulder: [-20, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90], spine: [45, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], spine: [45, 0, 0] }],
  ]),

  seated_row: makeAnim('seated_row', 2.5, [
    [0.0, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.25, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  face_pull: makeAnim('face_pull', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { leftShoulder: [0, 0, 120], rightShoulder: [0, 0, -120], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  rear_delt_fly: makeAnim('rear_delt_fly', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { leftShoulder: [0, 0, 140], rightShoulder: [0, 0, -140], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  rowing_machine: makeAnim('rowing_machine', 2.5, [
    [0.0, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.0, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.0, { leftShoulder: [-30, 0, 0], rightShoulder: [-30, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  // === SHOULDERS ===
  overhead_press: makeAnim('overhead_press', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  front_raise: makeAnim('front_raise', 2.5, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
    [1.25, { leftShoulder: [90, 0, 0], rightShoulder: [90, 0, 0] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  lateral_raises: makeAnim('lateral_raises', 2.5, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
    [1.25, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  shrugs: makeAnim('shrugs', 2.0, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], chest: [0, 5, 0] }],
    [1.0, { leftShoulder: [-10, 0, 0], rightShoulder: [-10, 0, 0], chest: [0, 5, 0] }],
    [2.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], chest: [0, 0, 0] }],
  ]),

  wall_angel: makeAnim('wall_angel', 2.5, [
    [0.0, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { leftShoulder: [0, 0, 120], rightShoulder: [0, 0, -120], leftElbow: [0, 0, -30], rightElbow: [0, 0, 30] }],
    [2.5, { leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  // === BICEPS ===
  bicep_curl: makeAnim('bicep_curl', 2.0, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -120], rightElbow: [0, 0, 120] }],
    [2.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  hammer_curl: makeAnim('hammer_curl', 2.0, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -100], rightElbow: [0, 0, 100] }],
    [2.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  preacher_curl: makeAnim('preacher_curl', 2.0, [
    [0.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, -110], rightElbow: [0, 0, 110] }],
    [2.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  // === TRICEPS ===
  tricep_dips: makeAnim('tricep_dips', 2.5, [
    [0.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.0, { leftShoulder: [10, 0, 0], rightShoulder: [10, 0, 0], leftElbow: [0, 0, -10], rightElbow: [0, 0, 10] }],
    [2.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),

  tricep_pushdown: makeAnim('tricep_pushdown', 2.0, [
    [0.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, -100], rightElbow: [0, 0, 100] }],
    [1.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [2.0, { leftShoulder: [0, 0, 80], rightShoulder: [0, 0, -80], leftElbow: [0, 0, -100], rightElbow: [0, 0, 100] }],
  ]),

  // === CORE ===
  plank: makeAnim('plank', 3.0, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [1.5, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [3.0, { spine: [0, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  side_plank: makeAnim('side_plank', 3.0, [
    [0.0, { spine: [90, 90, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [1.5, { spine: [90, 90, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [3.0, { spine: [0, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  crunches: makeAnim('crunches', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [-30, 0, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
  ]),

  cable_crunch: makeAnim('cable_crunch', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 0, 0], leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [-40, 0, 0], leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 0, 0], leftShoulder: [160, 0, 0], rightShoulder: [160, 0, 0] }],
  ]),

  curl_up: makeAnim('curl_up', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [-20, 0, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
  ]),

  russian_twist: makeAnim('russian_twist', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 30, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [0, -30, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 30, 0] }],
  ]),

  hanging_leg_raise: makeAnim('hanging_leg_raise', 2.5, [
    [0.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0] }],
    [2.5, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  leg_raise_floor: makeAnim('leg_raise_floor', 2.5, [
    [0.0, { spine: [90, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { spine: [90, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0] }],
    [2.5, { spine: [90, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  bicycle_crunches: makeAnim('bicycle_crunches', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 20, 0], leftHip: [45, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [0, -20, 0], leftHip: [0, 0, 0], rightHip: [45, 0, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 20, 0], leftHip: [45, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  dead_bugs: makeAnim('dead_bugs', 2.5, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [180, 0, 0], rightShoulder: [0, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { spine: [90, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [180, 0, 0], leftHip: [0, 0, 0], rightHip: [90, 0, 0] }],
    [2.5, { spine: [90, 0, 0], leftShoulder: [180, 0, 0], rightShoulder: [0, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  bird_dog: makeAnim('bird_dog', 2.5, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightHip: [-45, 0, 0] }],
    [2.5, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  mountain_climbers: makeAnim('mountain_climbers', 2.0, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [0, 0, 0], rightHip: [90, 0, 0] }],
    [2.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  mountain_climber_x: makeAnim('mountain_climber_x', 2.0, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [0, 0, 0], rightHip: [90, 0, 0] }],
    [2.0, { spine: [90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0], leftHip: [90, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  pallof_press: makeAnim('pallof_press', 2.5, [
    [0.0, { spine: [90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { spine: [90, 0, 0], leftShoulder: [0, 0, 60], rightShoulder: [0, 0, -60], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { spine: [90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  toe_touches: makeAnim('toe_touches', 2.0, [
    [0.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
    [1.0, { spine: [90, 0, 0], chest: [-45, 0, 0] }],
    [2.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
  ]),

  // === LEGS ===
  squat: makeAnim('squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  pause_squat: makeAnim('pause_squat', 3.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [3.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  jump_squat: makeAnim('jump_squat', 2.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [0.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  front_squat: makeAnim('front_squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
  ]),

  goblet_squat: makeAnim('goblet_squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90], leftElbow: [0, 0, -90], rightElbow: [0, 0, 90] }],
  ]),

  sissy_squat: makeAnim('sissy_squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-45, 0, 0], rightHip: [-45, 0, 0], leftKnee: [45, 0, 0], rightKnee: [45, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  bulgarian_split_squat: makeAnim('bulgarian_split_squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  lunges: makeAnim('lunges', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-45, 0, 0], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  jump_lunge: makeAnim('jump_lunge', 2.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [0.5, { leftHip: [-45, 0, 0], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [0, 0, 0] }],
    [1.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.5, { leftHip: [0, 0, 0], rightHip: [-45, 0, 0], leftKnee: [0, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  cossack_squat: makeAnim('cossack_squat', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 45], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  step_up: makeAnim('step_up', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  deadlift: makeAnim('deadlift', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], spine: [0, 0, 0] }],
    [1.25, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], spine: [30, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], spine: [0, 0, 0] }],
  ]),

  romanian_deadlift: makeAnim('romanian_deadlift', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [70, 0, 0], rightHip: [70, 0, 0], leftKnee: [10, 0, 0], rightKnee: [10, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  good_mornings: makeAnim('good_mornings', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], spine: [0, 0, 0] }],
    [1.25, { leftHip: [60, 0, 0], rightHip: [60, 0, 0], spine: [30, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], spine: [0, 0, 0] }],
  ]),

  good_morning_db: makeAnim('good_morning_db', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], spine: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [1.25, { leftHip: [60, 0, 0], rightHip: [60, 0, 0], spine: [30, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], spine: [0, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
  ]),

  single_leg_rdl: makeAnim('single_leg_rdl', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { leftHip: [70, 0, 0], rightHip: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  hip_thrust: makeAnim('hip_thrust', 2.5, [
    [0.0, { spine: [90, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.25, { spine: [0, 0, 0], leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.5, { spine: [90, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
  ]),

  glute_bridge: makeAnim('glute_bridge', 2.5, [
    [0.0, { spine: [90, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.25, { spine: [45, 0, 0], leftHip: [45, 0, 0], rightHip: [45, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.5, { spine: [90, 0, 0], leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
  ]),

  leg_press: makeAnim('leg_press', 2.5, [
    [0.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.25, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
  ]),

  leg_curl: makeAnim('leg_curl', 2.0, [
    [0.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  leg_extension: makeAnim('leg_extension', 2.0, [
    [0.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [2.0, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
  ]),

  nordic_curl: makeAnim('nordic_curl', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  calf_raise: makeAnim('calf_raise', 2.0, [
    [0.0, { leftAnkle: [0, 0, 0], rightAnkle: [0, 0, 0] }],
    [1.0, { leftAnkle: [-30, 0, 0], rightAnkle: [-30, 0, 0] }],
    [2.0, { leftAnkle: [0, 0, 0], rightAnkle: [0, 0, 0] }],
  ]),

  calf_raise_single: makeAnim('calf_raise_single', 2.0, [
    [0.0, { leftAnkle: [0, 0, 0] }],
    [1.0, { leftAnkle: [-30, 0, 0] }],
    [2.0, { leftAnkle: [0, 0, 0] }],
  ]),

  seated_calf_raise: makeAnim('seated_calf_raise', 2.0, [
    [0.0, { leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftAnkle: [0, 0, 0], rightAnkle: [0, 0, 0] }],
    [1.0, { leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftAnkle: [-30, 0, 0], rightAnkle: [-30, 0, 0] }],
    [2.0, { leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftAnkle: [0, 0, 0], rightAnkle: [0, 0, 0] }],
  ]),

  // === GLUTES / HIP ===
  fire_hydrant: makeAnim('fire_hydrant', 2.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { leftHip: [0, 0, 45], rightHip: [0, 0, 0] }],
    [2.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  donkey_kicks: makeAnim('donkey_kicks', 2.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { leftHip: [-90, 0, 0], rightHip: [0, 0, 0] }],
    [2.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  clamshell: makeAnim('clamshell', 2.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.0, { leftHip: [0, 0, 30], rightHip: [0, 0, 0] }],
    [2.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  hip_circle: makeAnim('hip_circle', 2.5, [
    [0.0, { leftHip: [0, 0, 0] }],
    [0.625, { leftHip: [0, 0, 30] }],
    [1.25, { leftHip: [0, 0, 0] }],
    [1.875, { leftHip: [0, 0, -30] }],
    [2.5, { leftHip: [0, 0, 0] }],
  ]),

  piriformis_stretch: makeAnim('piriformis_stretch', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { leftHip: [-45, 0, 45], rightHip: [0, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  hip_flexor_stretch: makeAnim('hip_flexor_stretch', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [1.25, { leftHip: [-30, 0, 0], rightHip: [30, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  // === STRETCHES / YOGA ===
  cat_cow: makeAnim('cat_cow', 2.5, [
    [0.0, { spine: [90, 0, 0], chest: [0, 0, 0] }],
    [1.25, { spine: [90, 0, 0], chest: [-20, 0, 0] }],
    [2.5, { spine: [90, 0, 0], chest: [20, 0, 0] }],
  ]),

  child_pose: makeAnim('child_pose', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
    [1.25, { leftHip: [90, 0, 0], rightHip: [90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  downward_dog: makeAnim('downward_dog', 2.5, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  bear_crawl: makeAnim('bear_crawl', 2.5, [
    [0.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [1.25, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [2.5, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0] }],
  ]),

  burpee: makeAnim('burpee', 3.0, [
    [0.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
    [0.75, { leftHip: [90, 0, 0], rightHip: [90, 0, 0] }],
    [1.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftShoulder: [-90, 0, 0], rightShoulder: [-90, 0, 0] }],
    [2.25, { leftHip: [90, 0, 0], rightHip: [90, 0, 0] }],
    [3.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0] }],
  ]),

  thruster: makeAnim('thruster', 2.5, [
    [0.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [1.25, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0], leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0] }],
    [2.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
  ]),

  kettlebell_swing: makeAnim('kettlebell_swing', 2.0, [
    [0.0, { leftHip: [70, 0, 0], rightHip: [70, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
    [1.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0] }],
    [2.0, { leftHip: [70, 0, 0], rightHip: [70, 0, 0], leftShoulder: [0, 0, 90], rightShoulder: [0, 0, -90] }],
  ]),

  wall_sit: makeAnim('wall_sit', 3.0, [
    [0.0, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [1.5, { leftHip: [-90, 0, 0], rightHip: [-90, 0, 0], leftKnee: [-90, 0, 0], rightKnee: [-90, 0, 0] }],
    [3.0, { leftHip: [0, 0, 0], rightHip: [0, 0, 0], leftKnee: [0, 0, 0], rightKnee: [0, 0, 0] }],
  ]),

  pullup_neutral: makeAnim('pullup_neutral', 3.0, [
    [0.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [1.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, -120], rightElbow: [0, 0, 120] }],
    [2.0, { leftShoulder: [180, 0, 0], rightShoulder: [180, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
    [3.0, { leftShoulder: [0, 0, 0], rightShoulder: [0, 0, 0], leftElbow: [0, 0, 0], rightElbow: [0, 0, 0] }],
  ]),
};
