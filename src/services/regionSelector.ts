/**
 * Region-Based Muscle Selector
 * Fitness 3D App — Maps 3D touch points to muscle groups on a single-mesh model
 *
 * Since CesiumMan has a single mesh (not 388 named muscles), we divide the body
 * into 3D regions. A raycast hit point is classified into one of these regions,
 * which maps to a muscle group and highlights the relevant skeleton joints.
 */

import * as THREE from 'three';
import { JointName, CEIUMAN_JOINTS, MUSCLE_GROUP_JOINTS } from '../data/skeleton';
import type { Muscle } from '../types';

/** A 3D region of the body */
export interface BodyRegion {
  id: string;
  name: string;
  muscleGroup: string;
  muscleIds: string[];
  /** Center of the region in local model space */
  center: THREE.Vector3;
  /** Half-extents of the bounding box */
  halfExtents: THREE.Vector3;
  /** Joints to highlight when this region is selected */
  joints: JointName[];
  /** Emissive color for highlight (hex) */
  color: number;
}

/** Result of a region selection */
export interface RegionSelection {
  region: BodyRegion;
  point: THREE.Vector3;
  muscle: Muscle | null;
}

/**
 * Body regions mapped to muscle groups.
 * Coordinates are in CesiumMan local space (Y-up, Z-forward, units in meters).
 * CesiumMan stands ~1.7 units tall, centered around origin.
 */
export const BODY_REGIONS: BodyRegion[] = [
  // Upper body - front
  {
    id: 'chest',
    name: 'Chest',
    muscleGroup: 'pectorals',
    muscleIds: ['pectoralis_major', 'pectoralis_minor'],
    center: new THREE.Vector3(0, 0.9, 0.15),
    halfExtents: new THREE.Vector3(0.25, 0.15, 0.1),
    joints: ['chest', 'leftShoulder', 'rightShoulder'],
    color: 0xff4444,
  },
  {
    id: 'left_shoulder',
    name: 'Left Shoulder',
    muscleGroup: 'deltoids',
    muscleIds: ['deltoids'],
    center: new THREE.Vector3(-0.35, 1.05, 0),
    halfExtents: new THREE.Vector3(0.12, 0.12, 0.12),
    joints: ['leftShoulder'],
    color: 0xff8844,
  },
  {
    id: 'right_shoulder',
    name: 'Right Shoulder',
    muscleGroup: 'deltoids',
    muscleIds: ['deltoids'],
    center: new THREE.Vector3(0.35, 1.05, 0),
    halfExtents: new THREE.Vector3(0.12, 0.12, 0.12),
    joints: ['rightShoulder'],
    color: 0xff8844,
  },
  {
    id: 'left_bicep',
    name: 'Left Bicep',
    muscleGroup: 'biceps',
    muscleIds: ['biceps_brachii'],
    center: new THREE.Vector3(-0.4, 0.75, 0.05),
    halfExtents: new THREE.Vector3(0.08, 0.15, 0.08),
    joints: ['leftElbow'],
    color: 0xffaa44,
  },
  {
    id: 'right_bicep',
    name: 'Right Bicep',
    muscleGroup: 'biceps',
    muscleIds: ['biceps_brachii'],
    center: new THREE.Vector3(0.4, 0.75, 0.05),
    halfExtents: new THREE.Vector3(0.08, 0.15, 0.08),
    joints: ['rightElbow'],
    color: 0xffaa44,
  },
  {
    id: 'left_tricep',
    name: 'Left Tricep',
    muscleGroup: 'triceps',
    muscleIds: ['triceps_brachii'],
    center: new THREE.Vector3(-0.4, 0.75, -0.05),
    halfExtents: new THREE.Vector3(0.08, 0.15, 0.08),
    joints: ['leftElbow'],
    color: 0xffcc44,
  },
  {
    id: 'right_tricep',
    name: 'Right Tricep',
    muscleGroup: 'triceps',
    muscleIds: ['triceps_brachii'],
    center: new THREE.Vector3(0.4, 0.75, -0.05),
    halfExtents: new THREE.Vector3(0.08, 0.15, 0.08),
    joints: ['rightElbow'],
    color: 0xffcc44,
  },
  {
    id: 'abs',
    name: 'Abs',
    muscleGroup: 'abdominals',
    muscleIds: ['rectus_abdominis', 'obliquus_externus', 'obliquus_internus'],
    center: new THREE.Vector3(0, 0.7, 0.1),
    halfExtents: new THREE.Vector3(0.15, 0.15, 0.08),
    joints: ['spine', 'chest'],
    color: 0x44ff44,
  },
  {
    id: 'obliques',
    name: 'Obliques',
    muscleGroup: 'obliques',
    muscleIds: ['obliquus_externus', 'obliquus_internus'],
    center: new THREE.Vector3(0.15, 0.7, 0),
    halfExtents: new THREE.Vector3(0.08, 0.15, 0.08),
    joints: ['spine'],
    color: 0x44ff88,
  },
  // Upper body - back
  {
    id: 'upper_back',
    name: 'Upper Back',
    muscleGroup: 'trapezius',
    muscleIds: ['trapezius', 'rhomboids_major', 'rhomboids_minor'],
    center: new THREE.Vector3(0, 1.0, -0.1),
    halfExtents: new THREE.Vector3(0.2, 0.15, 0.08),
    joints: ['chest', 'spine'],
    color: 0x4444ff,
  },
  {
    id: 'lats',
    name: 'Lats',
    muscleGroup: 'latissimus_dorsi',
    muscleIds: ['latissimus_dorsi'],
    center: new THREE.Vector3(0.2, 0.85, -0.05),
    halfExtents: new THREE.Vector3(0.1, 0.15, 0.08),
    joints: ['spine', 'chest'],
    color: 0x4488ff,
  },
  {
    id: 'lower_back',
    name: 'Lower Back',
    muscleGroup: 'erector_spinae',
    muscleIds: ['longissimus_thoracis', 'iliocostalis_lumborum', 'spinalis_thoracis'],
    center: new THREE.Vector3(0, 0.6, -0.1),
    halfExtents: new THREE.Vector3(0.15, 0.12, 0.08),
    joints: ['spine'],
    color: 0x44aaff,
  },
  // Arms
  {
    id: 'left_forearm',
    name: 'Left Forearm',
    muscleGroup: 'forearms',
    muscleIds: ['brachioradialis', 'flexor_carpi_radialis'],
    center: new THREE.Vector3(-0.35, 0.45, 0.05),
    halfExtents: new THREE.Vector3(0.06, 0.15, 0.06),
    joints: ['leftWrist'],
    color: 0xaa44ff,
  },
  {
    id: 'right_forearm',
    name: 'Right Forearm',
    muscleGroup: 'forearms',
    muscleIds: ['brachioradialis', 'flexor_carpi_radialis'],
    center: new THREE.Vector3(0.35, 0.45, 0.05),
    halfExtents: new THREE.Vector3(0.06, 0.15, 0.06),
    joints: ['rightWrist'],
    color: 0xaa44ff,
  },
  // Lower body
  {
    id: 'glutes',
    name: 'Glutes',
    muscleGroup: 'gluteus',
    muscleIds: ['gluteus_maximus', 'gluteus_medius', 'gluteus_minimus'],
    center: new THREE.Vector3(0, 0.5, -0.1),
    halfExtents: new THREE.Vector3(0.18, 0.12, 0.1),
    joints: ['hips'],
    color: 0xff44ff,
  },
  {
    id: 'left_quad',
    name: 'Left Quad',
    muscleGroup: 'quadriceps',
    muscleIds: ['vastus_lateralis', 'vastus_medialis', 'rectus_femoris', 'vastus_intermedius'],
    center: new THREE.Vector3(-0.12, 0.25, 0.1),
    halfExtents: new THREE.Vector3(0.08, 0.2, 0.08),
    joints: ['leftKnee'],
    color: 0xff44aa,
  },
  {
    id: 'right_quad',
    name: 'Right Quad',
    muscleGroup: 'quadriceps',
    muscleIds: ['vastus_lateralis', 'vastus_medialis', 'rectus_femoris', 'vastus_intermedius'],
    center: new THREE.Vector3(0.12, 0.25, 0.1),
    halfExtents: new THREE.Vector3(0.08, 0.2, 0.08),
    joints: ['rightKnee'],
    color: 0xff44aa,
  },
  {
    id: 'left_hamstring',
    name: 'Left Hamstring',
    muscleGroup: 'hamstrings',
    muscleIds: ['biceps_femoris', 'semitendinosus', 'semimembranosus'],
    center: new THREE.Vector3(-0.12, 0.25, -0.1),
    halfExtents: new THREE.Vector3(0.08, 0.18, 0.08),
    joints: ['leftHip', 'leftKnee'],
    color: 0xff88aa,
  },
  {
    id: 'right_hamstring',
    name: 'Right Hamstring',
    muscleGroup: 'hamstrings',
    muscleIds: ['biceps_femoris', 'semitendinosus', 'semimembranosus'],
    center: new THREE.Vector3(0.12, 0.25, -0.1),
    halfExtents: new THREE.Vector3(0.08, 0.18, 0.08),
    joints: ['rightHip', 'rightKnee'],
    color: 0xff88aa,
  },
  {
    id: 'left_calf',
    name: 'Left Calf',
    muscleGroup: 'calves',
    muscleIds: ['gastrocnemius', 'soleus'],
    center: new THREE.Vector3(-0.1, -0.1, 0.05),
    halfExtents: new THREE.Vector3(0.06, 0.18, 0.06),
    joints: ['leftAnkle'],
    color: 0x44ffaa,
  },
  {
    id: 'right_calf',
    name: 'Right Calf',
    muscleGroup: 'calves',
    muscleIds: ['gastrocnemius', 'soleus'],
    center: new THREE.Vector3(0.1, -0.1, 0.05),
    halfExtents: new THREE.Vector3(0.06, 0.18, 0.06),
    joints: ['rightAnkle'],
    color: 0x44ffaa,
  },
  // Neck
  {
    id: 'neck',
    name: 'Neck',
    muscleGroup: 'neck',
    muscleIds: ['sternocleidomastoid', 'trapezius_upper'],
    center: new THREE.Vector3(0, 1.2, 0.05),
    halfExtents: new THREE.Vector3(0.06, 0.08, 0.06),
    joints: ['neck', 'head'],
    color: 0xffff44,
  },
];

/**
 * Classify a 3D point into a body region.
 * Returns the closest region whose bounding box contains the point,
 * or the nearest region if none contain it.
 */
export function classifyPoint(point: THREE.Vector3): BodyRegion | null {
  let bestRegion: BodyRegion | null = null;
  let bestDist = Infinity;

  for (const region of BODY_REGIONS) {
    // Check if point is inside the bounding box
    const dx = Math.abs(point.x - region.center.x);
    const dy = Math.abs(point.y - region.center.y);
    const dz = Math.abs(point.z - region.center.z);

    if (dx <= region.halfExtents.x && dy <= region.halfExtents.y && dz <= region.halfExtents.z) {
      // Inside this region — return immediately (most specific match)
      return region;
    }

    // Outside — compute distance to center for fallback
    const dist = point.distanceTo(region.center);
    if (dist < bestDist) {
      bestDist = dist;
      bestRegion = region;
    }
  }

  // If no region contained the point, return the nearest one (if within reasonable distance)
  if (bestRegion && bestDist < 0.5) {
    return bestRegion;
  }

  return null;
}

/**
 * Get the world-space position of a joint (for highlight markers)
 */
export function getJointWorldPosition(
  jointName: JointName,
  modelRoot: THREE.Object3D,
): THREE.Vector3 | null {
  const joint = CEIUMAN_JOINTS[jointName];
  const node = modelRoot.getObjectByName(joint.name);
  if (!node) return null;

  const worldPos = new THREE.Vector3();
  node.getWorldPosition(worldPos);
  return worldPos;
}

/**
 * Get all joint world positions for a set of joints
 */
export function getJointWorldPositions(
  jointNames: JointName[],
  modelRoot: THREE.Object3D,
): Map<JointName, THREE.Vector3> {
  const positions = new Map<JointName, THREE.Vector3>();
  for (const name of jointNames) {
    const pos = getJointWorldPosition(name, modelRoot);
    if (pos) positions.set(name, pos);
  }
  return positions;
}

/**
 * Map a muscle group to exercises that target it
 */
export function getExercisesForRegion(
  region: BodyRegion,
  exerciseRegistry: Record<string, { muscles: string[]; id: string; name: string }>,
): Array<{ id: string; name: string }> {
  const results: Array<{ id: string; name: string }> = [];
  for (const [id, ex] of Object.entries(exerciseRegistry)) {
    for (const muscleId of region.muscleIds) {
      if (ex.muscles.includes(muscleId)) {
        results.push({ id, name: ex.name });
        break;
      }
    }
  }
  return results;
}
