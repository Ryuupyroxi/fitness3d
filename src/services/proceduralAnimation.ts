/**
 * Procedural Exercise Animation System
 * Fitness 3D App — Generates THREE.AnimationClips from joint keyframes
 *
 * Each exercise is defined as a series of keyframes specifying joint rotations
 * at specific times. The system builds AnimationClips that drive the
 * CesiumMan skeleton via Three.js AnimationMixer.
 */

import * as THREE from 'three';
import { JointName, CEIUMAN_JOINTS, deg2rad } from '../data/skeleton';

/** A single keyframe: time (seconds) + per-joint rotations (degrees) */
export interface Keyframe {
  time: number;
  rotations: Partial<Record<JointName, [number, number, number]>>; // x,y,z in degrees
}

/** Exercise animation definition */
export interface ExerciseAnimation {
  name: string;
  duration: number; // seconds
  keyframes: Keyframe[];
}

/**
 * Build a THREE.AnimationClip from keyframe data.
 * Creates a separate KeyframeTrack per animated joint per rotation axis.
 */
export function buildAnimationClip(anim: ExerciseAnimation): THREE.AnimationClip {
  const tracks: THREE.KeyframeTrack[] = [];

  // Collect all joints that have keyframe data
  const animatedJoints = new Set<JointName>();
  for (const kf of anim.keyframes) {
    for (const joint of Object.keys(kf.rotations) as JointName[]) {
      animatedJoints.add(joint);
    }
  }

  for (const jointName of animatedJoints) {
    const joint = CEIUMAN_JOINTS[jointName];
    const nodeName = joint.name;

    // Build time-sorted keyframes for this joint
    const times: number[] = [];
    const xVals: number[] = [];
    const yVals: number[] = [];
    const zVals: number[] = [];

    for (const kf of anim.keyframes) {
      times.push(kf.time);
      const rot = kf.rotations[jointName];
      if (rot) {
        xVals.push(deg2rad(rot[0]));
        yVals.push(deg2rad(rot[1]));
        zVals.push(deg2rad(rot[2]));
      } else {
        // No rotation specified — use identity (0,0,0)
        xVals.push(0);
        yVals.push(0);
        zVals.push(0);
      }
    }

    // Create separate tracks for each axis (Euler XYZ order)
    // Three.js uses .rotation.x, .rotation.y, .rotation.z on Object3D
    tracks.push(new THREE.NumberKeyframeTrack(
      `${nodeName}.rotation[x]`,
      times,
      xVals,
    ));
    tracks.push(new THREE.NumberKeyframeTrack(
      `${nodeName}.rotation[y]`,
      times,
      yVals,
    ));
    tracks.push(new THREE.NumberKeyframeTrack(
      `${nodeName}.rotation[z]`,
      times,
      zVals,
    ));
  }

  return new THREE.AnimationClip(anim.name, anim.duration, tracks);
}

/**
 * Interpolate between two keyframes at a given time.
 * Used for runtime scrubbing without full mixer evaluation.
 */
export function interpolateKeyframes(
  kf1: Keyframe,
  kf2: Keyframe,
  time: number,
): Keyframe {
  const t = (time - kf1.time) / (kf2.time - kf1.time);
  const rotations: Keyframe['rotations'] = {};

  const allJoints = new Set<JointName>([
    ...Object.keys(kf1.rotations) as JointName[],
    ...Object.keys(kf2.rotations) as JointName[],
  ]);

  for (const joint of allJoints) {
    const r1 = kf1.rotations[joint] ?? [0, 0, 0];
    const r2 = kf2.rotations[joint] ?? [0, 0, 0];
    rotations[joint] = [
      r1[0] + (r2[0] - r1[0]) * t,
      r1[1] + (r2[1] - r1[1]) * t,
      r1[2] + (r2[2] - r1[2]) * t,
    ];
  }

  return { time, rotations };
}

/**
 * Cache for built clips (avoid rebuilding on every render)
 */
const clipCache = new Map<string, THREE.AnimationClip>();

/**
 * Get or build an animation clip for an exercise.
 */
export function getExerciseClip(anim: ExerciseAnimation): THREE.AnimationClip {
  if (clipCache.has(anim.name)) {
    return clipCache.get(anim.name)!;
  }
  const clip = buildAnimationClip(anim);
  clipCache.set(anim.name, clip);
  return clip;
}

/**
 * Clear the clip cache (e.g., on memory pressure)
 */
export function clearClipCache(): void {
  clipCache.clear();
}
