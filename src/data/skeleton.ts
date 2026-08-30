/**
 * CesiumMan Skeleton Constants
 * Fitness 3D App — Joint definitions for procedural animation
 *
 * Maps human-readable joint names to CesiumMan node indices.
 * Skeleton root is at the hips (node 3).
 */

export type JointName =
  | 'hips'
  | 'spine'
  | 'chest'
  | 'neck'
  | 'head'
  | 'leftShoulder'
  | 'leftElbow'
  | 'leftWrist'
  | 'rightShoulder'
  | 'rightElbow'
  | 'rightWrist'
  | 'leftHip'
  | 'leftKnee'
  | 'leftAnkle'
  | 'leftFoot'
  | 'rightHip'
  | 'rightKnee'
  | 'rightAnkle'
  | 'rightFoot';

export interface JointInfo {
  nodeIndex: number;
  name: string;
  parent: JointName | null;
  children: JointName[];
  baseTranslation: [number, number, number];
}

export const CEIUMAN_JOINTS: Record<JointName, JointInfo> = {
  hips: {
    nodeIndex: 3,
    name: 'Skeleton_torso_joint_1',
    parent: null,
    children: ['spine', 'leftHip', 'rightHip'],
    baseTranslation: [1.57554005397742e-08, 0.004999836906790733, 0.6789999008178711],
  },
  spine: {
    nodeIndex: 12,
    name: 'Skeleton_torso_joint_2',
    parent: 'hips',
    children: ['chest'],
    baseTranslation: [1.33617004394182e-05, -1.3373800356930587e-05, 0.14541690051555634],
  },
  chest: {
    nodeIndex: 13,
    name: 'torso_joint_3',
    parent: 'spine',
    children: ['neck', 'leftShoulder', 'rightShoulder'],
    baseTranslation: [-0.2505168914794922, 6.072219775887788e-07, -7.290810026461259e-05],
  },
  neck: {
    nodeIndex: 20,
    name: 'Skeleton_neck_joint_1',
    parent: 'chest',
    children: ['head'],
    baseTranslation: [-2.366030003031483e-06, 2.413989932392724e-06, 0.06483621150255203],
  },
  head: {
    nodeIndex: 21,
    name: 'Skeleton_neck_joint_2',
    parent: 'neck',
    children: [],
    baseTranslation: [-0.05204017087817192, -3.3993298842460724e-08, -2.6607899599184748e-06],
  },
  leftShoulder: {
    nodeIndex: 17,
    name: 'Skeleton_arm_joint_L__4_',
    parent: 'chest',
    children: ['leftElbow'],
    baseTranslation: [-3.837469921563752e-05, 0.091013602912426, -6.143339851405472e-05],
  },
  leftElbow: {
    nodeIndex: 18,
    name: 'Skeleton_arm_joint_L__3_',
    parent: 'leftShoulder',
    children: ['leftWrist'],
    baseTranslation: [0.01322161965072155, 0.21549950540065768, 0.10933209955692293],
  },
  leftWrist: {
    nodeIndex: 19,
    name: 'Skeleton_arm_joint_L__2_',
    parent: 'leftElbow',
    children: [],
    baseTranslation: [-0.09332461655139924, 0.1430000960826874, 0.07814791053533554],
  },
  rightShoulder: {
    nodeIndex: 14,
    name: 'Skeleton_arm_joint_R',
    parent: 'chest',
    children: ['rightElbow'],
    baseTranslation: [-3.830249988823198e-05, -0.09098774939775468, -6.2032304413151e-05],
  },
  rightElbow: {
    nodeIndex: 15,
    name: 'Skeleton_arm_joint_R__2_',
    parent: 'rightShoulder',
    children: ['rightWrist'],
    baseTranslation: [-0.03554634004831314, -0.2154989987611771, 0.10423289984464645],
  },
  rightWrist: {
    nodeIndex: 16,
    name: 'Skeleton_arm_joint_R__3_',
    parent: 'rightElbow',
    children: [],
    baseTranslation: [0.03137021884322167, -0.1430010050535202, -0.11761169880628586],
  },
  leftHip: {
    nodeIndex: 8,
    name: 'leg_joint_L_1',
    parent: 'hips',
    children: ['leftKnee'],
    baseTranslation: [0.028519999235868457, 0.06803944706916809, -0.06295935809612274],
  },
  leftKnee: {
    nodeIndex: 9,
    name: 'leg_joint_L_2',
    parent: 'leftHip',
    children: ['leftAnkle'],
    baseTranslation: [0.20916390419006348, 0.009055502712726591, -0.16426950693130493],
  },
  leftAnkle: {
    nodeIndex: 10,
    name: 'leg_joint_L_3',
    parent: 'leftKnee',
    children: ['leftFoot'],
    baseTranslation: [0.27579009532928467, 0.0013972519664093852, 0.004122479818761349],
  },
  leftFoot: {
    nodeIndex: 11,
    name: 'leg_joint_L_5',
    parent: 'leftAnkle',
    children: [],
    baseTranslation: [-0.06558381021022797, 0.001090653007850051, 0.02929146029055119],
  },
  rightHip: {
    nodeIndex: 4,
    name: 'leg_joint_R_1',
    parent: 'hips',
    children: ['rightKnee'],
    baseTranslation: [0.02855719067156315, -0.06803914159536362, -0.06295864284038544],
  },
  rightKnee: {
    nodeIndex: 5,
    name: 'leg_joint_R_2',
    parent: 'rightHip',
    children: ['rightAnkle'],
    baseTranslation: [0.26089081168174744, -0.009026050567626951, 0.05167089030146599],
  },
  rightAnkle: {
    nodeIndex: 6,
    name: 'leg_joint_R_3',
    parent: 'rightKnee',
    children: ['rightFoot'],
    baseTranslation: [0.27546030282974243, -0.0014317259192466736, -0.014104830101132391],
  },
  rightFoot: {
    nodeIndex: 7,
    name: 'leg_joint_R_5',
    parent: 'rightAnkle',
    children: [],
    baseTranslation: [-0.06681963056325912, -0.001072264974936843, 0.026351310312747955],
  },
};

/** All joint names as array */
export const JOINT_NAMES: JointName[] = Object.keys(CEIUMAN_JOINTS) as JointName[];

/** Joints relevant to major muscle groups (for region-based selection) */
export const MUSCLE_GROUP_JOINTS: Record<string, JointName[]> = {
  chest: ['chest', 'leftShoulder', 'rightShoulder'],
  back: ['spine', 'chest'],
  shoulders: ['leftShoulder', 'rightShoulder'],
  biceps: ['leftElbow', 'rightElbow'],
  triceps: ['leftElbow', 'rightElbow'],
  forearms: ['leftWrist', 'rightWrist'],
  abs: ['spine', 'chest'],
  obliques: ['spine'],
  glutes: ['hips', 'leftHip', 'rightHip'],
  quadriceps: ['leftKnee', 'rightKnee'],
  hamstrings: ['leftHip', 'rightHip', 'leftKnee', 'rightKnee'],
  calves: ['leftAnkle', 'rightAnkle'],
  traps: ['neck', 'chest'],
  lats: ['spine', 'chest'],
};

/** Euler angle helpers for keyframe definitions */
export function deg2rad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function eulerToQuaternion(x: number, y: number, z: number): [number, number, number, number] {
  const c1 = Math.cos(x / 2);
  const c2 = Math.cos(y / 2);
  const c3 = Math.cos(z / 2);
  const s1 = Math.sin(x / 2);
  const s2 = Math.sin(y / 2);
  const s3 = Math.sin(z / 2);

  return [
    s1 * c2 * c3 + c1 * s2 * s3,
    c1 * s2 * c3 - s1 * c2 * s3,
    c1 * c2 * s3 + s1 * s2 * c3,
    c1 * c2 * c3 - s1 * s2 * s3,
  ];
}
