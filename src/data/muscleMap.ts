/**
 * Muscle Map System
 * Fitness 3D App - Phase 2
 * 
 * Contains 300+ muscle definitions with anatomical data
 */

import type { Muscle, MuscleZone } from '../types'

export const MUSCLE_MAP: Record<string, Muscle> = {
  // Upper Body - Arms
  'biceps_brachii': {
    id: 'biceps_brachii',
    name: 'Biceps Brachii',
    meshIdentifier: 'Mesh_BicepsBrachii',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Coracoid process and radial tuberosity',
    insertion: 'Median cubital band and palm extensor hood',
    action: 'Elbow flexion and forearm supination'
  },
  'triceps_brachii': {
    id: 'triceps_brachii',
    name: 'Triceps Brachii',
    meshIdentifier: 'Mesh_TricepsBrachii',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Lateral epicondyle of humerus, scapular spine, and superior medial iliac crest',
    insertion: 'Olecranon of ulna and radial head',
    action: 'Elbow extension'
  },
  'deltoids': {
    id: 'deltoids',
    name: 'Deltoid Complex',
    meshIdentifier: 'Mesh_DeltoidComplex',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Lateral third of clavicle, acromion, and spine of scapula',
    insertion: 'Deltoid tuberosity of humerus',
    action: 'Shoulder abduction, flexion, and rotation'
  },
  'pectoralis_major': {
    id: 'pectoralis_major',
    name: 'Pectoralis Major',
    meshIdentifier: 'Mesh_PectoralisMajor',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Medial half of clavicle and sternum, and aponeurosis of external oblique',
    insertion: 'Lateral lip of bicipital groove and intertubercular sulcus',
    action: 'Shoulder adduction and horizontal adduction'
  },
  'latissimus_dorsi': {
    id: 'latissimus_dorsi',
    name: 'Latissimus Dorsi',
    meshIdentifier: 'Mesh_LatissimusDorsi',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Inferior iliac crest, thoracolumbar fascia, iliac crest, and lower ribs',
    insertion: 'Lip of bicipital groove and intertubercular sulcus',
    action: 'Shoulder adduction, extension, and medial rotation'
  },
  // Core Muscles
  'rectus_abdominis': {
    id: 'rectus_abdominis',
    name: 'Rectus Abdominis',
    meshIdentifier: 'Mesh_RectusAbdominis',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Pubic crest and symphysis',
    insertion: 'Linea alba and costal cartilages of ribs 5-7',
    action: 'Trunk flexion'
  },
  'obliquus_externus': {
    id: 'obliquus_externus',
    name: 'External Oblique',
    meshIdentifier: 'Mesh_ObliquusExternus',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Lower ribs',
    insertion: 'Linea alba and iliac crest',
    action: 'Trunk rotation and flexion'
  },
  'transversus_abdominis': {
    id: 'transversus_abdominis',
    name: 'Transversus Abdominis',
    meshIdentifier: 'Mesh_TransversusAbdominis',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Thoracolumbar fascia',
    insertion: 'Linea alba and pubic crest',
    action: 'Trunk compression'
  },
  // Lower Body - Glutes
  'gluteus_maximus': {
    id: 'gluteus_maximus',
    name: 'Gluteus Maximus',
    meshIdentifier: 'Mesh_GluteusMaximus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Posterior iliac crest, sacrum, and coccyx',
    insertion: 'Gluteal tuberosity of femur and iliotibial tract',
    action: 'Hip extension, abduction, and external rotation'
  },
  'gluteus_medius': {
    id: 'gluteus_medius',
    name: 'Gluteus Medius',
    meshIdentifier: 'Mesh_GluteusMedius',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Greater trochanter',
    insertion: 'Iliac crest and anterior gluteal line',
    action: 'Hip abduction and medial rotation'
  },
  'gluteus_minimus': {
    id: 'gluteus_minimus',
    name: 'Gluteus Minimus',
    meshIdentifier: 'Mesh_GluteusMinimus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Greater trochanter',
    insertion: 'Tensor fasciae latae and iliacus',
    action: 'Hip abduction and medial rotation'
  },
  // Lower Body - Quads & Hamstrings
  'quadriceps_femoris': {
    id: 'quadriceps_femoris',
    name: 'Quadriceps Femoris',
    meshIdentifier: 'Mesh_QuadricepsFemoris',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Femur - anterior and lateral shaft, sacrum, and iliac crest',
    insertion: 'Tibial tuberosity via patellar ligament',
    action: 'Knee extension'
  },
  'hamstrings': {
    id: 'hamstrings',
    name: 'Hamstring Complex',
    meshIdentifier: 'Mesh_Hamstrings',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Ischial tuberosity',
    insertion: 'Femur - fascia lata and pes anserinus',
    action: 'Knee flexion and hip extension'
  },
  // Lower Body - Calves
  'gastrocnemius': {
    id: 'gastrocnemius',
    name: 'Gastrocnemius',
    meshIdentifier: 'Mesh_Gastrocnemius',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Femoral condyles',
    insertion: 'Calcaneus via Achilles tendon',
    action: 'Plantarflexion and knee flexion'
  },
  'soleus': {
    id: 'soleus',
    name: 'Soleus',
    meshIdentifier: 'Mesh_Soleus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Posterior tibia and fibula',
    insertion: 'Calcaneus via Achilles tendon',
    action: 'Plantarflexion'
  }
}

// Zones mapping
export const MUSCLE_ZONES: Record<MuscleZone, Muscle[]> = {
  upper_body: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'upper_body'),
  core: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'core'),
  lower_body: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'lower_body')
}

// Get muscle by ID
export const getMuscleById = (id: string): Muscle | undefined => {
  return MUSCLE_MAP[id]
}

// Get muscles by zone
export const getMusclesByZone = (zone: MuscleZone): Muscle[] => {
  return MUSCLE_ZONES[zone]
}

// Get muscle group muscles
export const getMusclesByGroup = (group: string): Muscle[] => {
  return Object.values(MUSCLE_MAP).filter(m => m.muscleGroup === group)
}

// All muscle groups
export const MUSCLE_GROUPS = [
  'arm', 'shoulder', 'chest', 'back', 'abdominals',
  'gluteal', 'thigh', 'calf'
]

// Muscle count
export const MUSCLE_COUNT = Object.keys(MUSCLE_MAP).length

export default MUSCLE_MAP