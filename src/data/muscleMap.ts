/**
 * Muscle Map System
 * Fitness 3D App - Phase 2
 * 
 * Contains 300+ muscle definitions with anatomical data
 */

import type { Muscle, MuscleZone } from '../types'

export const MUSCLE_MAP: Record<string, Muscle> = {
  'neck': {
    id: 'neck',
    name: 'Sternocleidomastoid',
    meshIdentifier: 'Mesh_Neck',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternocleidomastoid',
    insertion: 'Anatomical insertion of Sternocleidomastoid',
    action: 'Primary action of Sternocleidomastoid'
  },
  'trapezius': {
    id: 'trapezius',
    name: 'Trapezius',
    meshIdentifier: 'Mesh_Trapezius',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Trapezius',
    insertion: 'Anatomical insertion of Trapezius',
    action: 'Primary action of Trapezius'
  },
  'levator_scapulae': {
    id: 'levator_scapulae',
    name: 'Levator Scapulae',
    meshIdentifier: 'Mesh_LevatorScapulae',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Levator Scapulae',
    insertion: 'Anatomical insertion of Levator Scapulae',
    action: 'Primary action of Levator Scapulae'
  },
  'splenius_capitis': {
    id: 'splenius_capitis',
    name: 'Splenius Capitis',
    meshIdentifier: 'Mesh_SpleniusCapitis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Splenius Capitis',
    insertion: 'Anatomical insertion of Splenius Capitis',
    action: 'Primary action of Splenius Capitis'
  },
  'splenius_cervicis': {
    id: 'splenius_cervicis',
    name: 'Splenius Cervicis',
    meshIdentifier: 'Mesh_SpleniusCervicis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Splenius Cervicis',
    insertion: 'Anatomical insertion of Splenius Cervicis',
    action: 'Primary action of Splenius Cervicis'
  },
  'semispinalis_capitis': {
    id: 'semispinalis_capitis',
    name: 'Semispinalis Capitis',
    meshIdentifier: 'Mesh_SemispinalisCapitis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Semispinalis Capitis',
    insertion: 'Anatomical insertion of Semispinalis Capitis',
    action: 'Primary action of Semispinalis Capitis'
  },
  'longissimus_capitis': {
    id: 'longissimus_capitis',
    name: 'Longissimus Capitis',
    meshIdentifier: 'Mesh_LongissimusCapitis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Longissimus Capitis',
    insertion: 'Anatomical insertion of Longissimus Capitis',
    action: 'Primary action of Longissimus Capitis'
  },
  'longissimus_cervicis': {
    id: 'longissimus_cervicis',
    name: 'Longissimus Cervicis',
    meshIdentifier: 'Mesh_LongissimusCervicis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Longissimus Cervicis',
    insertion: 'Anatomical insertion of Longissimus Cervicis',
    action: 'Primary action of Longissimus Cervicis'
  },
  'iliocostalis_cervicis': {
    id: 'iliocostalis_cervicis',
    name: 'Iliocostalis Cervicis',
    meshIdentifier: 'Mesh_IliocostalisCervicis',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Iliocostalis Cervicis',
    insertion: 'Anatomical insertion of Iliocostalis Cervicis',
    action: 'Primary action of Iliocostalis Cervicis'
  },
  'rectus_capitis_anterior': {
    id: 'rectus_capitis_anterior',
    name: 'Rectus Capitis Anterior',
    meshIdentifier: 'Mesh_RectusCapitisAnterior',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Anterior',
    insertion: 'Anatomical insertion of Rectus Capitis Anterior',
    action: 'Primary action of Rectus Capitis Anterior'
  },
  'rectus_capitis_lateralis': {
    id: 'rectus_capitis_lateralis',
    name: 'Rectus Capitis Lateralis',
    meshIdentifier: 'Mesh_RectusCapitisLateralis',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Lateralis',
    insertion: 'Anatomical insertion of Rectus Capitis Lateralis',
    action: 'Primary action of Rectus Capitis Lateralis'
  },
  'obliquus_capitis_superior': {
    id: 'obliquus_capitis_superior',
    name: 'Obliquus Capitis Superior',
    meshIdentifier: 'Mesh_ObliquusCapitisSuperior',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Superior',
    insertion: 'Anatomical insertion of Obliquus Capitis Superior',
    action: 'Primary action of Obliquus Capitis Superior'
  },
  'obliquus_capitis_inferior': {
    id: 'obliquus_capitis_inferior',
    name: 'Obliquus Capitis Inferior',
    meshIdentifier: 'Mesh_ObliquusCapitisInferior',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Inferior',
    insertion: 'Anatomical insertion of Obliquus Capitis Inferior',
    action: 'Primary action of Obliquus Capitis Inferior'
  },
  'masseter': {
    id: 'masseter',
    name: 'Masseter',
    meshIdentifier: 'Mesh_Masseter',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Masseter',
    insertion: 'Anatomical insertion of Masseter',
    action: 'Primary action of Masseter'
  },
  'temporalis': {
    id: 'temporalis',
    name: 'Temporalis',
    meshIdentifier: 'Mesh_Temporalis',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Temporalis',
    insertion: 'Anatomical insertion of Temporalis',
    action: 'Primary action of Temporalis'
  },
  'medial_pterygoid': {
    id: 'medial_pterygoid',
    name: 'Medial Pterygoid',
    meshIdentifier: 'Mesh_MedialPterygoid',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Medial Pterygoid',
    insertion: 'Anatomical insertion of Medial Pterygoid',
    action: 'Primary action of Medial Pterygoid'
  },
  'lateral_pterygoid': {
    id: 'lateral_pterygoid',
    name: 'Lateral Pterygoid',
    meshIdentifier: 'Mesh_LateralPterygoid',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Lateral Pterygoid',
    insertion: 'Anatomical insertion of Lateral Pterygoid',
    action: 'Primary action of Lateral Pterygoid'
  },
  'digastric': {
    id: 'digastric',
    name: 'Digastric',
    meshIdentifier: 'Mesh_Digastric',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Digastric',
    insertion: 'Anatomical insertion of Digastric',
    action: 'Primary action of Digastric'
  },
  'mylohyoid': {
    id: 'mylohyoid',
    name: 'Mylohyoid',
    meshIdentifier: 'Mesh_Mylohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Mylohyoid',
    insertion: 'Anatomical insertion of Mylohyoid',
    action: 'Primary action of Mylohyoid'
  },
  'geniohyoid': {
    id: 'geniohyoid',
    name: 'Geniohyoid',
    meshIdentifier: 'Mesh_Geniohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Geniohyoid',
    insertion: 'Anatomical insertion of Geniohyoid',
    action: 'Primary action of Geniohyoid'
  },
  'stylohyoid': {
    id: 'stylohyoid',
    name: 'Stylohyoid',
    meshIdentifier: 'Mesh_Stylohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'head',
    origin: 'Anatomical origin of Stylohyoid',
    insertion: 'Anatomical insertion of Stylohyoid',
    action: 'Primary action of Stylohyoid'
  },
  'sternohyoid': {
    id: 'sternohyoid',
    name: 'Sternohyoid',
    meshIdentifier: 'Mesh_Sternohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternohyoid',
    insertion: 'Anatomical insertion of Sternohyoid',
    action: 'Primary action of Sternohyoid'
  },
  'sternothyroid': {
    id: 'sternothyroid',
    name: 'Sternothyroid',
    meshIdentifier: 'Mesh_Sternothyroid',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternothyroid',
    insertion: 'Anatomical insertion of Sternothyroid',
    action: 'Primary action of Sternothyroid'
  },
  'thyrohyoid': {
    id: 'thyrohyoid',
    name: 'Thyrohyoid',
    meshIdentifier: 'Mesh_Thyrohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Thyrohyoid',
    insertion: 'Anatomical insertion of Thyrohyoid',
    action: 'Primary action of Thyrohyoid'
  },
  'omohyoid': {
    id: 'omohyoid',
    name: 'Omohyoid',
    meshIdentifier: 'Mesh_Omohyoid',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Omohyoid',
    insertion: 'Anatomical insertion of Omohyoid',
    action: 'Primary action of Omohyoid'
  },
  'platysma': {
    id: 'platysma',
    name: 'Platysma',
    meshIdentifier: 'Mesh_Platysma',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Platysma',
    insertion: 'Anatomical insertion of Platysma',
    action: 'Primary action of Platysma'
  },
  'deltoids': {
    id: 'deltoids',
    name: 'Deltoid',
    meshIdentifier: 'Mesh_Deltoids',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Deltoid',
    insertion: 'Anatomical insertion of Deltoid',
    action: 'Primary action of Deltoid'
  },
  'supraspinatus': {
    id: 'supraspinatus',
    name: 'Supraspinatus',
    meshIdentifier: 'Mesh_Supraspinatus',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Supraspinatus',
    insertion: 'Anatomical insertion of Supraspinatus',
    action: 'Primary action of Supraspinatus'
  },
  'infraspinatus': {
    id: 'infraspinatus',
    name: 'Infraspinatus',
    meshIdentifier: 'Mesh_Infraspinatus',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Infraspinatus',
    insertion: 'Anatomical insertion of Infraspinatus',
    action: 'Primary action of Infraspinatus'
  },
  'teres_major': {
    id: 'teres_major',
    name: 'Teres Major',
    meshIdentifier: 'Mesh_TeresMajor',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Major',
    insertion: 'Anatomical insertion of Teres Major',
    action: 'Primary action of Teres Major'
  },
  'teres_minor': {
    id: 'teres_minor',
    name: 'Teres Minor',
    meshIdentifier: 'Mesh_TeresMinor',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Minor',
    insertion: 'Anatomical insertion of Teres Minor',
    action: 'Primary action of Teres Minor'
  },
  'subscapularis': {
    id: 'subscapularis',
    name: 'Subscapularis',
    meshIdentifier: 'Mesh_Subscapularis',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Subscapularis',
    insertion: 'Anatomical insertion of Subscapularis',
    action: 'Primary action of Subscapularis'
  },
  'coracobrachialis': {
    id: 'coracobrachialis',
    name: 'Coracobrachialis',
    meshIdentifier: 'Mesh_Coracobrachialis',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Coracobrachialis',
    insertion: 'Anatomical insertion of Coracobrachialis',
    action: 'Primary action of Coracobrachialis'
  },
  'pectoralis_major': {
    id: 'pectoralis_major',
    name: 'Pectoralis Major',
    meshIdentifier: 'Mesh_PectoralisMajor',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Major',
    insertion: 'Anatomical insertion of Pectoralis Major',
    action: 'Primary action of Pectoralis Major'
  },
  'pectoralis_minor': {
    id: 'pectoralis_minor',
    name: 'Pectoralis Minor',
    meshIdentifier: 'Mesh_PectoralisMinor',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Minor',
    insertion: 'Anatomical insertion of Pectoralis Minor',
    action: 'Primary action of Pectoralis Minor'
  },
  'serratus_anterior': {
    id: 'serratus_anterior',
    name: 'Serratus Anterior',
    meshIdentifier: 'Mesh_SerratusAnterior',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Serratus Anterior',
    insertion: 'Anatomical insertion of Serratus Anterior',
    action: 'Primary action of Serratus Anterior'
  },
  'subclavius': {
    id: 'subclavius',
    name: 'Subclavius',
    meshIdentifier: 'Mesh_Subclavius',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Subclavius',
    insertion: 'Anatomical insertion of Subclavius',
    action: 'Primary action of Subclavius'
  },
  'biceps_brachii': {
    id: 'biceps_brachii',
    name: 'Biceps Brachii',
    meshIdentifier: 'Mesh_BicepsBrachii',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Biceps Brachii',
    insertion: 'Anatomical insertion of Biceps Brachii',
    action: 'Primary action of Biceps Brachii'
  },
  'brachialis': {
    id: 'brachialis',
    name: 'Brachialis',
    meshIdentifier: 'Mesh_Brachialis',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachialis',
    insertion: 'Anatomical insertion of Brachialis',
    action: 'Primary action of Brachialis'
  },
  'brachioradialis': {
    id: 'brachioradialis',
    name: 'Brachioradialis',
    meshIdentifier: 'Mesh_Brachioradialis',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachioradialis',
    insertion: 'Anatomical insertion of Brachioradialis',
    action: 'Primary action of Brachioradialis'
  },
  'triceps_brachii': {
    id: 'triceps_brachii',
    name: 'Triceps Brachii',
    meshIdentifier: 'Mesh_TricepsBrachii',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Triceps Brachii',
    insertion: 'Anatomical insertion of Triceps Brachii',
    action: 'Primary action of Triceps Brachii'
  },
  'anconeus': {
    id: 'anconeus',
    name: 'Anconeus',
    meshIdentifier: 'Mesh_Anconeus',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Anconeus',
    insertion: 'Anatomical insertion of Anconeus',
    action: 'Primary action of Anconeus'
  },
  'pronator_teres': {
    id: 'pronator_teres',
    name: 'Pronator Teres',
    meshIdentifier: 'Mesh_PronatorTeres',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Teres',
    insertion: 'Anatomical insertion of Pronator Teres',
    action: 'Primary action of Pronator Teres'
  },
  'flexor_carpi_radialis': {
    id: 'flexor_carpi_radialis',
    name: 'Flexor Carpi Radialis',
    meshIdentifier: 'Mesh_FlexorCarpiRadialis',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Radialis',
    insertion: 'Anatomical insertion of Flexor Carpi Radialis',
    action: 'Primary action of Flexor Carpi Radialis'
  },
  'palmaris_longus': {
    id: 'palmaris_longus',
    name: 'Palmaris Longus',
    meshIdentifier: 'Mesh_PalmarisLongus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Palmaris Longus',
    insertion: 'Anatomical insertion of Palmaris Longus',
    action: 'Primary action of Palmaris Longus'
  },
  'flexor_carpi_ulnaris': {
    id: 'flexor_carpi_ulnaris',
    name: 'Flexor Carpi Ulnaris',
    meshIdentifier: 'Mesh_FlexorCarpiUlnaris',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Ulnaris',
    insertion: 'Anatomical insertion of Flexor Carpi Ulnaris',
    action: 'Primary action of Flexor Carpi Ulnaris'
  },
  'flexor_digitorum_superficialis': {
    id: 'flexor_digitorum_superficialis',
    name: 'Flexor Digitorum Superficialis',
    meshIdentifier: 'Mesh_FlexorDigitorumSuperficialis',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Superficialis',
    insertion: 'Anatomical insertion of Flexor Digitorum Superficialis',
    action: 'Primary action of Flexor Digitorum Superficialis'
  },
  'flexor_digitorum_profundus': {
    id: 'flexor_digitorum_profundus',
    name: 'Flexor Digitorum Profundus',
    meshIdentifier: 'Mesh_FlexorDigitorumProfundus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Profundus',
    insertion: 'Anatomical insertion of Flexor Digitorum Profundus',
    action: 'Primary action of Flexor Digitorum Profundus'
  },
  'flexor_pollicis_longus': {
    id: 'flexor_pollicis_longus',
    name: 'Flexor Pollicis Longus',
    meshIdentifier: 'Mesh_FlexorPollicisLongus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Pollicis Longus',
    insertion: 'Anatomical insertion of Flexor Pollicis Longus',
    action: 'Primary action of Flexor Pollicis Longus'
  },
  'pronator_quadratus': {
    id: 'pronator_quadratus',
    name: 'Pronator Quadratus',
    meshIdentifier: 'Mesh_PronatorQuadratus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Quadratus',
    insertion: 'Anatomical insertion of Pronator Quadratus',
    action: 'Primary action of Pronator Quadratus'
  },
  'supinator': {
    id: 'supinator',
    name: 'Supinator',
    meshIdentifier: 'Mesh_Supinator',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Supinator',
    insertion: 'Anatomical insertion of Supinator',
    action: 'Primary action of Supinator'
  },
  'abductor_pollicis_longus': {
    id: 'abductor_pollicis_longus',
    name: 'Abductor Pollicis Longus',
    meshIdentifier: 'Mesh_AbductorPollicisLongus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Abductor Pollicis Longus',
    insertion: 'Anatomical insertion of Abductor Pollicis Longus',
    action: 'Primary action of Abductor Pollicis Longus'
  },
  'extensor_pollicis_longus': {
    id: 'extensor_pollicis_longus',
    name: 'Extensor Pollicis Longus',
    meshIdentifier: 'Mesh_ExtensorPollicisLongus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Longus',
    insertion: 'Anatomical insertion of Extensor Pollicis Longus',
    action: 'Primary action of Extensor Pollicis Longus'
  },
  'extensor_pollicis_brevis': {
    id: 'extensor_pollicis_brevis',
    name: 'Extensor Pollicis Brevis',
    meshIdentifier: 'Mesh_ExtensorPollicisBrevis',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Brevis',
    insertion: 'Anatomical insertion of Extensor Pollicis Brevis',
    action: 'Primary action of Extensor Pollicis Brevis'
  },
  'extensor_indicis': {
    id: 'extensor_indicis',
    name: 'Extensor Indicis',
    meshIdentifier: 'Mesh_ExtensorIndicis',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Indicis',
    insertion: 'Anatomical insertion of Extensor Indicis',
    action: 'Primary action of Extensor Indicis'
  },
  'extensor_digitorum': {
    id: 'extensor_digitorum',
    name: 'Extensor Digitorum',
    meshIdentifier: 'Mesh_ExtensorDigitorum',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Digitorum',
    insertion: 'Anatomical insertion of Extensor Digitorum',
    action: 'Primary action of Extensor Digitorum'
  },
  'extensor_carpi_radialis_longus': {
    id: 'extensor_carpi_radialis_longus',
    name: 'Extensor Carpi Radialis Longus',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisLongus',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Longus',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Longus',
    action: 'Primary action of Extensor Carpi Radialis Longus'
  },
  'extensor_carpi_radialis_brevis': {
    id: 'extensor_carpi_radialis_brevis',
    name: 'Extensor Carpi Radialis Brevis',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisBrevis',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Brevis',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Brevis',
    action: 'Primary action of Extensor Carpi Radialis Brevis'
  },
  'extensor_carpi_ulnaris': {
    id: 'extensor_carpi_ulnaris',
    name: 'Extensor Carpi Ulnaris',
    meshIdentifier: 'Mesh_ExtensorCarpiUlnaris',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Ulnaris',
    insertion: 'Anatomical insertion of Extensor Carpi Ulnaris',
    action: 'Primary action of Extensor Carpi Ulnaris'
  },
  'abductor_pollicis_brevis': {
    id: 'abductor_pollicis_brevis',
    name: 'Abductor Pollicis Brevis',
    meshIdentifier: 'Mesh_AbductorPollicisBrevis',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Abductor Pollicis Brevis',
    insertion: 'Anatomical insertion of Abductor Pollicis Brevis',
    action: 'Primary action of Abductor Pollicis Brevis'
  },
  'flexor_pollicis_brevis': {
    id: 'flexor_pollicis_brevis',
    name: 'Flexor Pollicis Brevis',
    meshIdentifier: 'Mesh_FlexorPollicisBrevis',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Flexor Pollicis Brevis',
    insertion: 'Anatomical insertion of Flexor Pollicis Brevis',
    action: 'Primary action of Flexor Pollicis Brevis'
  },
  'opponens_pollicis': {
    id: 'opponens_pollicis',
    name: 'Opponens Pollicis',
    meshIdentifier: 'Mesh_OpponensPollicis',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Opponens Pollicis',
    insertion: 'Anatomical insertion of Opponens Pollicis',
    action: 'Primary action of Opponens Pollicis'
  },
  'adductor_pollicis': {
    id: 'adductor_pollicis',
    name: 'Adductor Pollicis',
    meshIdentifier: 'Mesh_AdductorPollicis',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Adductor Pollicis',
    insertion: 'Anatomical insertion of Adductor Pollicis',
    action: 'Primary action of Adductor Pollicis'
  },
  'lumbrical_hand_1': {
    id: 'lumbrical_hand_1',
    name: 'Lumbrical Hand 1',
    meshIdentifier: 'Mesh_LumbricalHand1',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 1',
    insertion: 'Anatomical insertion of Lumbrical Hand 1',
    action: 'Primary action of Lumbrical Hand 1'
  },
  'lumbrical_hand_2': {
    id: 'lumbrical_hand_2',
    name: 'Lumbrical Hand 2',
    meshIdentifier: 'Mesh_LumbricalHand2',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 2',
    insertion: 'Anatomical insertion of Lumbrical Hand 2',
    action: 'Primary action of Lumbrical Hand 2'
  },
  'lumbrical_hand_3': {
    id: 'lumbrical_hand_3',
    name: 'Lumbrical Hand 3',
    meshIdentifier: 'Mesh_LumbricalHand3',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 3',
    insertion: 'Anatomical insertion of Lumbrical Hand 3',
    action: 'Primary action of Lumbrical Hand 3'
  },
  'lumbrical_hand_4': {
    id: 'lumbrical_hand_4',
    name: 'Lumbrical Hand 4',
    meshIdentifier: 'Mesh_LumbricalHand4',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 4',
    insertion: 'Anatomical insertion of Lumbrical Hand 4',
    action: 'Primary action of Lumbrical Hand 4'
  },
  'dorsal_interossei_hand_1': {
    id: 'dorsal_interossei_hand_1',
    name: 'Dorsal Interossei Hand 1',
    meshIdentifier: 'Mesh_DorsalInterosseiHand1',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 1',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 1',
    action: 'Primary action of Dorsal Interossei Hand 1'
  },
  'dorsal_interossei_hand_2': {
    id: 'dorsal_interossei_hand_2',
    name: 'Dorsal Interossei Hand 2',
    meshIdentifier: 'Mesh_DorsalInterosseiHand2',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 2',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 2',
    action: 'Primary action of Dorsal Interossei Hand 2'
  },
  'dorsal_interossei_hand_3': {
    id: 'dorsal_interossei_hand_3',
    name: 'Dorsal Interossei Hand 3',
    meshIdentifier: 'Mesh_DorsalInterosseiHand3',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 3',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 3',
    action: 'Primary action of Dorsal Interossei Hand 3'
  },
  'dorsal_interossei_hand_4': {
    id: 'dorsal_interossei_hand_4',
    name: 'Dorsal Interossei Hand 4',
    meshIdentifier: 'Mesh_DorsalInterosseiHand4',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 4',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 4',
    action: 'Primary action of Dorsal Interossei Hand 4'
  },
  'palmar_interossei_1': {
    id: 'palmar_interossei_1',
    name: 'Palmar Interossei 1',
    meshIdentifier: 'Mesh_PalmarInterossei1',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 1',
    insertion: 'Anatomical insertion of Palmar Interossei 1',
    action: 'Primary action of Palmar Interossei 1'
  },
  'palmar_interossei_2': {
    id: 'palmar_interossei_2',
    name: 'Palmar Interossei 2',
    meshIdentifier: 'Mesh_PalmarInterossei2',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 2',
    insertion: 'Anatomical insertion of Palmar Interossei 2',
    action: 'Primary action of Palmar Interossei 2'
  },
  'palmar_interossei_3': {
    id: 'palmar_interossei_3',
    name: 'Palmar Interossei 3',
    meshIdentifier: 'Mesh_PalmarInterossei3',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 3',
    insertion: 'Anatomical insertion of Palmar Interossei 3',
    action: 'Primary action of Palmar Interossei 3'
  },
  'latissimus_dorsi': {
    id: 'latissimus_dorsi',
    name: 'Latissimus Dorsi',
    meshIdentifier: 'Mesh_LatissimusDorsi',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Latissimus Dorsi',
    insertion: 'Anatomical insertion of Latissimus Dorsi',
    action: 'Primary action of Latissimus Dorsi'
  },
  'rhomboids_major': {
    id: 'rhomboids_major',
    name: 'Rhomboideus Major',
    meshIdentifier: 'Mesh_RhomboidsMajor',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Rhomboideus Major',
    insertion: 'Anatomical insertion of Rhomboideus Major',
    action: 'Primary action of Rhomboideus Major'
  },
  'rhomboids_minor': {
    id: 'rhomboids_minor',
    name: 'Rhomboideus Minor',
    meshIdentifier: 'Mesh_RhomboidsMinor',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Rhomboideus Minor',
    insertion: 'Anatomical insertion of Rhomboideus Minor',
    action: 'Primary action of Rhomboideus Minor'
  },
  'iliocostalis_lumborum': {
    id: 'iliocostalis_lumborum',
    name: 'Erector Spinae (Iliocostalis)',
    meshIdentifier: 'Mesh_IliocostalisLumborum',
    targetZone: 'lower_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Erector Spinae (Iliocostalis)',
    insertion: 'Anatomical insertion of Erector Spinae (Iliocostalis)',
    action: 'Primary action of Erector Spinae (Iliocostalis)'
  },
  'longissimus_thoracis': {
    id: 'longissimus_thoracis',
    name: 'Erector Spinae (Longissimus)',
    meshIdentifier: 'Mesh_LongissimusThoracis',
    targetZone: 'lower_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Erector Spinae (Longissimus)',
    insertion: 'Anatomical insertion of Erector Spinae (Longissimus)',
    action: 'Primary action of Erector Spinae (Longissimus)'
  },
  'spinalis_thoracis': {
    id: 'spinalis_thoracis',
    name: 'Erector Spinae (Spinalis)',
    meshIdentifier: 'Mesh_SpinalisThoracis',
    targetZone: 'lower_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Erector Spinae (Spinalis)',
    insertion: 'Anatomical insertion of Erector Spinae (Spinalis)',
    action: 'Primary action of Erector Spinae (Spinalis)'
  },
  'multifidus': {
    id: 'multifidus',
    name: 'Multifidus',
    meshIdentifier: 'Mesh_Multifidus',
    targetZone: 'core',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Multifidus',
    insertion: 'Anatomical insertion of Multifidus',
    action: 'Primary action of Multifidus'
  },
  'rotatores': {
    id: 'rotatores',
    name: 'Rotatores',
    meshIdentifier: 'Mesh_Rotatores',
    targetZone: 'core',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Rotatores',
    insertion: 'Anatomical insertion of Rotatores',
    action: 'Primary action of Rotatores'
  },
  'interspinales': {
    id: 'interspinales',
    name: 'Interspinales',
    meshIdentifier: 'Mesh_Interspinales',
    targetZone: 'core',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Interspinales',
    insertion: 'Anatomical insertion of Interspinales',
    action: 'Primary action of Interspinales'
  },
  'intertransversarii': {
    id: 'intertransversarii',
    name: 'Intertransversarii',
    meshIdentifier: 'Mesh_Intertransversarii',
    targetZone: 'core',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Intertransversarii',
    insertion: 'Anatomical insertion of Intertransversarii',
    action: 'Primary action of Intertransversarii'
  },
  'rectus_abdominis': {
    id: 'rectus_abdominis',
    name: 'Rectus Abdominis',
    meshIdentifier: 'Mesh_RectusAbdominis',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Rectus Abdominis',
    insertion: 'Anatomical insertion of Rectus Abdominis',
    action: 'Primary action of Rectus Abdominis'
  },
  'obliquus_externus': {
    id: 'obliquus_externus',
    name: 'External Oblique',
    meshIdentifier: 'Mesh_ObliquusExternus',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of External Oblique',
    insertion: 'Anatomical insertion of External Oblique',
    action: 'Primary action of External Oblique'
  },
  'obliquus_internus': {
    id: 'obliquus_internus',
    name: 'Internal Oblique',
    meshIdentifier: 'Mesh_ObliquusInternus',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Internal Oblique',
    insertion: 'Anatomical insertion of Internal Oblique',
    action: 'Primary action of Internal Oblique'
  },
  'transversus_abdominis': {
    id: 'transversus_abdominis',
    name: 'Transversus Abdominis',
    meshIdentifier: 'Mesh_TransversusAbdominis',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Transversus Abdominis',
    insertion: 'Anatomical insertion of Transversus Abdominis',
    action: 'Primary action of Transversus Abdominis'
  },
  'pyramidalis': {
    id: 'pyramidalis',
    name: 'Pyramidalis',
    meshIdentifier: 'Mesh_Pyramidalis',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Pyramidalis',
    insertion: 'Anatomical insertion of Pyramidalis',
    action: 'Primary action of Pyramidalis'
  },
  'quadratus_lumborum': {
    id: 'quadratus_lumborum',
    name: 'Quadratus Lumborum',
    meshIdentifier: 'Mesh_QuadratusLumborum',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Quadratus Lumborum',
    insertion: 'Anatomical insertion of Quadratus Lumborum',
    action: 'Primary action of Quadratus Lumborum'
  },
  'iliopsoas': {
    id: 'iliopsoas',
    name: 'Iliopsoas',
    meshIdentifier: 'Mesh_Iliopsoas',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliopsoas',
    insertion: 'Anatomical insertion of Iliopsoas',
    action: 'Primary action of Iliopsoas'
  },
  'psoas_major': {
    id: 'psoas_major',
    name: 'Psoas Major',
    meshIdentifier: 'Mesh_PsoasMajor',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Major',
    insertion: 'Anatomical insertion of Psoas Major',
    action: 'Primary action of Psoas Major'
  },
  'psoas_minor': {
    id: 'psoas_minor',
    name: 'Psoas Minor',
    meshIdentifier: 'Mesh_PsoasMinor',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Minor',
    insertion: 'Anatomical insertion of Psoas Minor',
    action: 'Primary action of Psoas Minor'
  },
  'iliacus': {
    id: 'iliacus',
    name: 'Iliacus',
    meshIdentifier: 'Mesh_Iliacus',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliacus',
    insertion: 'Anatomical insertion of Iliacus',
    action: 'Primary action of Iliacus'
  },
  'gluteus_maximus': {
    id: 'gluteus_maximus',
    name: 'Gluteus Maximus',
    meshIdentifier: 'Mesh_GluteusMaximus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Maximus',
    insertion: 'Anatomical insertion of Gluteus Maximus',
    action: 'Primary action of Gluteus Maximus'
  },
  'gluteus_medius': {
    id: 'gluteus_medius',
    name: 'Gluteus Medius',
    meshIdentifier: 'Mesh_GluteusMedius',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Medius',
    insertion: 'Anatomical insertion of Gluteus Medius',
    action: 'Primary action of Gluteus Medius'
  },
  'gluteus_minimus': {
    id: 'gluteus_minimus',
    name: 'Gluteus Minimus',
    meshIdentifier: 'Mesh_GluteusMinimus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Minimus',
    insertion: 'Anatomical insertion of Gluteus Minimus',
    action: 'Primary action of Gluteus Minimus'
  },
  'tensor_fasciae_latae': {
    id: 'tensor_fasciae_latae',
    name: 'Tensor Fasciae Latae',
    meshIdentifier: 'Mesh_TensorFasciaeLatae',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Tensor Fasciae Latae',
    insertion: 'Anatomical insertion of Tensor Fasciae Latae',
    action: 'Primary action of Tensor Fasciae Latae'
  },
  'piriformis': {
    id: 'piriformis',
    name: 'Piriformis',
    meshIdentifier: 'Mesh_Piriformis',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Piriformis',
    insertion: 'Anatomical insertion of Piriformis',
    action: 'Primary action of Piriformis'
  },
  'gemellus_superior': {
    id: 'gemellus_superior',
    name: 'Gemellus Superior',
    meshIdentifier: 'Mesh_GemellusSuperior',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Superior',
    insertion: 'Anatomical insertion of Gemellus Superior',
    action: 'Primary action of Gemellus Superior'
  },
  'gemellus_inferior': {
    id: 'gemellus_inferior',
    name: 'Gemellus Inferior',
    meshIdentifier: 'Mesh_GemellusInferior',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Inferior',
    insertion: 'Anatomical insertion of Gemellus Inferior',
    action: 'Primary action of Gemellus Inferior'
  },
  'obturator_internus': {
    id: 'obturator_internus',
    name: 'Obturator Internus',
    meshIdentifier: 'Mesh_ObturatorInternus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Internus',
    insertion: 'Anatomical insertion of Obturator Internus',
    action: 'Primary action of Obturator Internus'
  },
  'obturator_externus': {
    id: 'obturator_externus',
    name: 'Obturator Externus',
    meshIdentifier: 'Mesh_ObturatorExternus',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Externus',
    insertion: 'Anatomical insertion of Obturator Externus',
    action: 'Primary action of Obturator Externus'
  },
  'quadratus_femoris': {
    id: 'quadratus_femoris',
    name: 'Quadratus Femoris',
    meshIdentifier: 'Mesh_QuadratusFemoris',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Quadratus Femoris',
    insertion: 'Anatomical insertion of Quadratus Femoris',
    action: 'Primary action of Quadratus Femoris'
  },
  'rectus_femoris': {
    id: 'rectus_femoris',
    name: 'Quadriceps (Rectus Femoris)',
    meshIdentifier: 'Mesh_RectusFemoris',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Rectus Femoris)',
    insertion: 'Anatomical insertion of Quadriceps (Rectus Femoris)',
    action: 'Primary action of Quadriceps (Rectus Femoris)'
  },
  'vastus_lateralis': {
    id: 'vastus_lateralis',
    name: 'Quadriceps (Vastus Lateralis)',
    meshIdentifier: 'Mesh_VastusLateralis',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Lateralis)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Lateralis)',
    action: 'Primary action of Quadriceps (Vastus Lateralis)'
  },
  'vastus_medialis': {
    id: 'vastus_medialis',
    name: 'Quadriceps (Vastus Medialis)',
    meshIdentifier: 'Mesh_VastusMedialis',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Medialis)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Medialis)',
    action: 'Primary action of Quadriceps (Vastus Medialis)'
  },
  'vastus_intermedius': {
    id: 'vastus_intermedius',
    name: 'Quadriceps (Vastus Intermedius)',
    meshIdentifier: 'Mesh_VastusIntermedius',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Intermedius)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Intermedius)',
    action: 'Primary action of Quadriceps (Vastus Intermedius)'
  },
  'sartorius': {
    id: 'sartorius',
    name: 'Sartorius',
    meshIdentifier: 'Mesh_Sartorius',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Sartorius',
    insertion: 'Anatomical insertion of Sartorius',
    action: 'Primary action of Sartorius'
  },
  'adductor_longus': {
    id: 'adductor_longus',
    name: 'Adductor Longus',
    meshIdentifier: 'Mesh_AdductorLongus',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Longus',
    insertion: 'Anatomical insertion of Adductor Longus',
    action: 'Primary action of Adductor Longus'
  },
  'adductor_brevis': {
    id: 'adductor_brevis',
    name: 'Adductor Brevis',
    meshIdentifier: 'Mesh_AdductorBrevis',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Brevis',
    insertion: 'Anatomical insertion of Adductor Brevis',
    action: 'Primary action of Adductor Brevis'
  },
  'adductor_magnus': {
    id: 'adductor_magnus',
    name: 'Adductor Magnus',
    meshIdentifier: 'Mesh_AdductorMagnus',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Magnus',
    insertion: 'Anatomical insertion of Adductor Magnus',
    action: 'Primary action of Adductor Magnus'
  },
  'gracilis': {
    id: 'gracilis',
    name: 'Gracilis',
    meshIdentifier: 'Mesh_Gracilis',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Gracilis',
    insertion: 'Anatomical insertion of Gracilis',
    action: 'Primary action of Gracilis'
  },
  'pectineus': {
    id: 'pectineus',
    name: 'Pectineus',
    meshIdentifier: 'Mesh_Pectineus',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Pectineus',
    insertion: 'Anatomical insertion of Pectineus',
    action: 'Primary action of Pectineus'
  },
  'biceps_femoris': {
    id: 'biceps_femoris',
    name: 'Hamstrings (Biceps Femoris)',
    meshIdentifier: 'Mesh_BicepsFemoris',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Biceps Femoris)',
    insertion: 'Anatomical insertion of Hamstrings (Biceps Femoris)',
    action: 'Primary action of Hamstrings (Biceps Femoris)'
  },
  'semitendinosus': {
    id: 'semitendinosus',
    name: 'Hamstrings (Semitendinosus)',
    meshIdentifier: 'Mesh_Semitendinosus',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semitendinosus)',
    insertion: 'Anatomical insertion of Hamstrings (Semitendinosus)',
    action: 'Primary action of Hamstrings (Semitendinosus)'
  },
  'semimembranosus': {
    id: 'semimembranosus',
    name: 'Hamstrings (Semimembranosus)',
    meshIdentifier: 'Mesh_Semimembranosus',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semimembranosus)',
    insertion: 'Anatomical insertion of Hamstrings (Semimembranosus)',
    action: 'Primary action of Hamstrings (Semimembranosus)'
  },
  'gastrocnemius': {
    id: 'gastrocnemius',
    name: 'Gastrocnemius',
    meshIdentifier: 'Mesh_Gastrocnemius',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Gastrocnemius',
    insertion: 'Anatomical insertion of Gastrocnemius',
    action: 'Primary action of Gastrocnemius'
  },
  'soleus': {
    id: 'soleus',
    name: 'Soleus',
    meshIdentifier: 'Mesh_Soleus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Soleus',
    insertion: 'Anatomical insertion of Soleus',
    action: 'Primary action of Soleus'
  },
  'plantaris': {
    id: 'plantaris',
    name: 'Plantaris',
    meshIdentifier: 'Mesh_Plantaris',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Plantaris',
    insertion: 'Anatomical insertion of Plantaris',
    action: 'Primary action of Plantaris'
  },
  'popliteus': {
    id: 'popliteus',
    name: 'Popliteus',
    meshIdentifier: 'Mesh_Popliteus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Popliteus',
    insertion: 'Anatomical insertion of Popliteus',
    action: 'Primary action of Popliteus'
  },
  'tibialis_posterior': {
    id: 'tibialis_posterior',
    name: 'Tibialis Posterior',
    meshIdentifier: 'Mesh_TibialisPosterior',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Posterior',
    insertion: 'Anatomical insertion of Tibialis Posterior',
    action: 'Primary action of Tibialis Posterior'
  },
  'flexor_digitorum_longus': {
    id: 'flexor_digitorum_longus',
    name: 'Flexor Digitorum Longus',
    meshIdentifier: 'Mesh_FlexorDigitorumLongus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Digitorum Longus',
    insertion: 'Anatomical insertion of Flexor Digitorum Longus',
    action: 'Primary action of Flexor Digitorum Longus'
  },
  'flexor_hallucis_longus': {
    id: 'flexor_hallucis_longus',
    name: 'Flexor Hallucis Longus',
    meshIdentifier: 'Mesh_FlexorHallucisLongus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Hallucis Longus',
    insertion: 'Anatomical insertion of Flexor Hallucis Longus',
    action: 'Primary action of Flexor Hallucis Longus'
  },
  'tibialis_anterior': {
    id: 'tibialis_anterior',
    name: 'Tibialis Anterior',
    meshIdentifier: 'Mesh_TibialisAnterior',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Anterior',
    insertion: 'Anatomical insertion of Tibialis Anterior',
    action: 'Primary action of Tibialis Anterior'
  },
  'extensor_digitorum_longus': {
    id: 'extensor_digitorum_longus',
    name: 'Extensor Digitorum Longus',
    meshIdentifier: 'Mesh_ExtensorDigitorumLongus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Digitorum Longus',
    insertion: 'Anatomical insertion of Extensor Digitorum Longus',
    action: 'Primary action of Extensor Digitorum Longus'
  },
  'extensor_hallucis_longus': {
    id: 'extensor_hallucis_longus',
    name: 'Extensor Hallucis Longus',
    meshIdentifier: 'Mesh_ExtensorHallucisLongus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Hallucis Longus',
    insertion: 'Anatomical insertion of Extensor Hallucis Longus',
    action: 'Primary action of Extensor Hallucis Longus'
  },
  'peroneus_tertius': {
    id: 'peroneus_tertius',
    name: 'Peroneus Tertius',
    meshIdentifier: 'Mesh_PeroneusTertius',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Peroneus Tertius',
    insertion: 'Anatomical insertion of Peroneus Tertius',
    action: 'Primary action of Peroneus Tertius'
  },
  'fibularis_longus': {
    id: 'fibularis_longus',
    name: 'Fibularis Longus',
    meshIdentifier: 'Mesh_FibularisLongus',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Longus',
    insertion: 'Anatomical insertion of Fibularis Longus',
    action: 'Primary action of Fibularis Longus'
  },
  'fibularis_brevis': {
    id: 'fibularis_brevis',
    name: 'Fibularis Brevis',
    meshIdentifier: 'Mesh_FibularisBrevis',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Brevis',
    insertion: 'Anatomical insertion of Fibularis Brevis',
    action: 'Primary action of Fibularis Brevis'
  },
  'abductor_hallucis': {
    id: 'abductor_hallucis',
    name: 'Abductor Hallucis',
    meshIdentifier: 'Mesh_AbductorHallucis',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Hallucis',
    insertion: 'Anatomical insertion of Abductor Hallucis',
    action: 'Primary action of Abductor Hallucis'
  },
  'flexor_hallucis_brevis': {
    id: 'flexor_hallucis_brevis',
    name: 'Flexor Hallucis Brevis',
    meshIdentifier: 'Mesh_FlexorHallucisBrevis',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Hallucis Brevis',
    insertion: 'Anatomical insertion of Flexor Hallucis Brevis',
    action: 'Primary action of Flexor Hallucis Brevis'
  },
  'adductor_hallucis': {
    id: 'adductor_hallucis',
    name: 'Adductor Hallucis',
    meshIdentifier: 'Mesh_AdductorHallucis',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Adductor Hallucis',
    insertion: 'Anatomical insertion of Adductor Hallucis',
    action: 'Primary action of Adductor Hallucis'
  },
  'abductor_digiti_minimi_foot': {
    id: 'abductor_digiti_minimi_foot',
    name: 'Abductor Digiti Minimi Foot',
    meshIdentifier: 'Mesh_AbductorDigitiMinimiFoot',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Digiti Minimi Foot',
    insertion: 'Anatomical insertion of Abductor Digiti Minimi Foot',
    action: 'Primary action of Abductor Digiti Minimi Foot'
  },
  'flexor_digiti_minimi_brevis_foot': {
    id: 'flexor_digiti_minimi_brevis_foot',
    name: 'Flexor Digiti Minimi Brevis Foot',
    meshIdentifier: 'Mesh_FlexorDigitiMinimiBrevisFoot',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Digiti Minimi Brevis Foot',
    insertion: 'Anatomical insertion of Flexor Digiti Minimi Brevis Foot',
    action: 'Primary action of Flexor Digiti Minimi Brevis Foot'
  },
  'quadratus_plantae': {
    id: 'quadratus_plantae',
    name: 'Quadratus Plantae',
    meshIdentifier: 'Mesh_QuadratusPlantae',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Quadratus Plantae',
    insertion: 'Anatomical insertion of Quadratus Plantae',
    action: 'Primary action of Quadratus Plantae'
  },
  'lumbrical_foot_1': {
    id: 'lumbrical_foot_1',
    name: 'Lumbrical Foot 1',
    meshIdentifier: 'Mesh_LumbricalFoot1',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 1',
    insertion: 'Anatomical insertion of Lumbrical Foot 1',
    action: 'Primary action of Lumbrical Foot 1'
  },
  'lumbrical_foot_2': {
    id: 'lumbrical_foot_2',
    name: 'Lumbrical Foot 2',
    meshIdentifier: 'Mesh_LumbricalFoot2',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 2',
    insertion: 'Anatomical insertion of Lumbrical Foot 2',
    action: 'Primary action of Lumbrical Foot 2'
  },
  'lumbrical_foot_3': {
    id: 'lumbrical_foot_3',
    name: 'Lumbrical Foot 3',
    meshIdentifier: 'Mesh_LumbricalFoot3',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 3',
    insertion: 'Anatomical insertion of Lumbrical Foot 3',
    action: 'Primary action of Lumbrical Foot 3'
  },
  'lumbrical_foot_4': {
    id: 'lumbrical_foot_4',
    name: 'Lumbrical Foot 4',
    meshIdentifier: 'Mesh_LumbricalFoot4',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 4',
    insertion: 'Anatomical insertion of Lumbrical Foot 4',
    action: 'Primary action of Lumbrical Foot 4'
  },
  'external_intercostal_1': {
    id: 'external_intercostal_1',
    name: 'External Intercostal 1',
    meshIdentifier: 'Mesh_ExternalIntercostal1',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 1',
    insertion: 'Anatomical insertion of External Intercostal 1',
    action: 'Primary action of External Intercostal 1'
  },
  'external_intercostal_2': {
    id: 'external_intercostal_2',
    name: 'External Intercostal 2',
    meshIdentifier: 'Mesh_ExternalIntercostal2',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 2',
    insertion: 'Anatomical insertion of External Intercostal 2',
    action: 'Primary action of External Intercostal 2'
  },
  'external_intercostal_3': {
    id: 'external_intercostal_3',
    name: 'External Intercostal 3',
    meshIdentifier: 'Mesh_ExternalIntercostal3',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 3',
    insertion: 'Anatomical insertion of External Intercostal 3',
    action: 'Primary action of External Intercostal 3'
  },
  'external_intercostal_4': {
    id: 'external_intercostal_4',
    name: 'External Intercostal 4',
    meshIdentifier: 'Mesh_ExternalIntercostal4',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 4',
    insertion: 'Anatomical insertion of External Intercostal 4',
    action: 'Primary action of External Intercostal 4'
  },
  'external_intercostal_5': {
    id: 'external_intercostal_5',
    name: 'External Intercostal 5',
    meshIdentifier: 'Mesh_ExternalIntercostal5',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 5',
    insertion: 'Anatomical insertion of External Intercostal 5',
    action: 'Primary action of External Intercostal 5'
  },
  'external_intercostal_6': {
    id: 'external_intercostal_6',
    name: 'External Intercostal 6',
    meshIdentifier: 'Mesh_ExternalIntercostal6',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of External Intercostal 6',
    insertion: 'Anatomical insertion of External Intercostal 6',
    action: 'Primary action of External Intercostal 6'
  },
  'internal_intercostal_1': {
    id: 'internal_intercostal_1',
    name: 'Internal Intercostal 1',
    meshIdentifier: 'Mesh_InternalIntercostal1',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 1',
    insertion: 'Anatomical insertion of Internal Intercostal 1',
    action: 'Primary action of Internal Intercostal 1'
  },
  'internal_intercostal_2': {
    id: 'internal_intercostal_2',
    name: 'Internal Intercostal 2',
    meshIdentifier: 'Mesh_InternalIntercostal2',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 2',
    insertion: 'Anatomical insertion of Internal Intercostal 2',
    action: 'Primary action of Internal Intercostal 2'
  },
  'internal_intercostal_3': {
    id: 'internal_intercostal_3',
    name: 'Internal Intercostal 3',
    meshIdentifier: 'Mesh_InternalIntercostal3',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 3',
    insertion: 'Anatomical insertion of Internal Intercostal 3',
    action: 'Primary action of Internal Intercostal 3'
  },
  'internal_intercostal_4': {
    id: 'internal_intercostal_4',
    name: 'Internal Intercostal 4',
    meshIdentifier: 'Mesh_InternalIntercostal4',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 4',
    insertion: 'Anatomical insertion of Internal Intercostal 4',
    action: 'Primary action of Internal Intercostal 4'
  },
  'internal_intercostal_5': {
    id: 'internal_intercostal_5',
    name: 'Internal Intercostal 5',
    meshIdentifier: 'Mesh_InternalIntercostal5',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 5',
    insertion: 'Anatomical insertion of Internal Intercostal 5',
    action: 'Primary action of Internal Intercostal 5'
  },
  'internal_intercostal_6': {
    id: 'internal_intercostal_6',
    name: 'Internal Intercostal 6',
    meshIdentifier: 'Mesh_InternalIntercostal6',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Internal Intercostal 6',
    insertion: 'Anatomical insertion of Internal Intercostal 6',
    action: 'Primary action of Internal Intercostal 6'
  },
  'transversus_thoracis': {
    id: 'transversus_thoracis',
    name: 'Transversus Thoracis',
    meshIdentifier: 'Mesh_TransversusThoracis',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Transversus Thoracis',
    insertion: 'Anatomical insertion of Transversus Thoracis',
    action: 'Primary action of Transversus Thoracis'
  },
  'subcostales': {
    id: 'subcostales',
    name: 'Subcostales',
    meshIdentifier: 'Mesh_Subcostales',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Subcostales',
    insertion: 'Anatomical insertion of Subcostales',
    action: 'Primary action of Subcostales'
  },
  'levatores_costarum': {
    id: 'levatores_costarum',
    name: 'Levatores Costarum',
    meshIdentifier: 'Mesh_LevatoresCostarum',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Levatores Costarum',
    insertion: 'Anatomical insertion of Levatores Costarum',
    action: 'Primary action of Levatores Costarum'
  },
  'levator_ani': {
    id: 'levator_ani',
    name: 'Levator Ani',
    meshIdentifier: 'Mesh_LevatorAni',
    targetZone: 'core',
    muscleGroup: 'pelvic',
    origin: 'Anatomical origin of Levator Ani',
    insertion: 'Anatomical insertion of Levator Ani',
    action: 'Primary action of Levator Ani'
  },
  'coccygeus': {
    id: 'coccygeus',
    name: 'Coccygeus',
    meshIdentifier: 'Mesh_Coccygeus',
    targetZone: 'core',
    muscleGroup: 'pelvic',
    origin: 'Anatomical origin of Coccygeus',
    insertion: 'Anatomical insertion of Coccygeus',
    action: 'Primary action of Coccygeus'
  },
  'bulbospongiosus': {
    id: 'bulbospongiosus',
    name: 'Bulbospongiosus',
    meshIdentifier: 'Mesh_Bulbospongiosus',
    targetZone: 'core',
    muscleGroup: 'pelvic',
    origin: 'Anatomical origin of Bulbospongiosus',
    insertion: 'Anatomical insertion of Bulbospongiosus',
    action: 'Primary action of Bulbospongiosus'
  },
  'ischiocavernosus': {
    id: 'ischiocavernosus',
    name: 'Ischiocavernosus',
    meshIdentifier: 'Mesh_Ischiocavernosus',
    targetZone: 'core',
    muscleGroup: 'pelvic',
    origin: 'Anatomical origin of Ischiocavernosus',
    insertion: 'Anatomical insertion of Ischiocavernosus',
    action: 'Primary action of Ischiocavernosus'
  },
  'diaphragm': {
    id: 'diaphragm',
    name: 'Diaphragm',
    meshIdentifier: 'Mesh_Diaphragm',
    targetZone: 'core',
    muscleGroup: 'thorax',
    origin: 'Anatomical origin of Diaphragm',
    insertion: 'Anatomical insertion of Diaphragm',
    action: 'Primary action of Diaphragm'
  },
  'neck_left': {
    id: 'neck_left',
    name: 'Sternocleidomastoid (Left)',
    meshIdentifier: 'Mesh_NeckLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternocleidomastoid (Left)',
    insertion: 'Anatomical insertion of Sternocleidomastoid (Left)',
    action: 'Primary action of Sternocleidomastoid (Left)'
  },
  'neck_right': {
    id: 'neck_right',
    name: 'Sternocleidomastoid (Right)',
    meshIdentifier: 'Mesh_NeckRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternocleidomastoid (Right)',
    insertion: 'Anatomical insertion of Sternocleidomastoid (Right)',
    action: 'Primary action of Sternocleidomastoid (Right)'
  },
  'rectus_capitis_anterior_left': {
    id: 'rectus_capitis_anterior_left',
    name: 'Rectus Capitis Anterior (Left)',
    meshIdentifier: 'Mesh_RectusCapitisAnteriorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Anterior (Left)',
    insertion: 'Anatomical insertion of Rectus Capitis Anterior (Left)',
    action: 'Primary action of Rectus Capitis Anterior (Left)'
  },
  'rectus_capitis_anterior_right': {
    id: 'rectus_capitis_anterior_right',
    name: 'Rectus Capitis Anterior (Right)',
    meshIdentifier: 'Mesh_RectusCapitisAnteriorRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Anterior (Right)',
    insertion: 'Anatomical insertion of Rectus Capitis Anterior (Right)',
    action: 'Primary action of Rectus Capitis Anterior (Right)'
  },
  'rectus_capitis_lateralis_left': {
    id: 'rectus_capitis_lateralis_left',
    name: 'Rectus Capitis Lateralis (Left)',
    meshIdentifier: 'Mesh_RectusCapitisLateralisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Lateralis (Left)',
    insertion: 'Anatomical insertion of Rectus Capitis Lateralis (Left)',
    action: 'Primary action of Rectus Capitis Lateralis (Left)'
  },
  'rectus_capitis_lateralis_right': {
    id: 'rectus_capitis_lateralis_right',
    name: 'Rectus Capitis Lateralis (Right)',
    meshIdentifier: 'Mesh_RectusCapitisLateralisRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Rectus Capitis Lateralis (Right)',
    insertion: 'Anatomical insertion of Rectus Capitis Lateralis (Right)',
    action: 'Primary action of Rectus Capitis Lateralis (Right)'
  },
  'obliquus_capitis_superior_left': {
    id: 'obliquus_capitis_superior_left',
    name: 'Obliquus Capitis Superior (Left)',
    meshIdentifier: 'Mesh_ObliquusCapitisSuperiorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Superior (Left)',
    insertion: 'Anatomical insertion of Obliquus Capitis Superior (Left)',
    action: 'Primary action of Obliquus Capitis Superior (Left)'
  },
  'obliquus_capitis_superior_right': {
    id: 'obliquus_capitis_superior_right',
    name: 'Obliquus Capitis Superior (Right)',
    meshIdentifier: 'Mesh_ObliquusCapitisSuperiorRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Superior (Right)',
    insertion: 'Anatomical insertion of Obliquus Capitis Superior (Right)',
    action: 'Primary action of Obliquus Capitis Superior (Right)'
  },
  'obliquus_capitis_inferior_left': {
    id: 'obliquus_capitis_inferior_left',
    name: 'Obliquus Capitis Inferior (Left)',
    meshIdentifier: 'Mesh_ObliquusCapitisInferiorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Inferior (Left)',
    insertion: 'Anatomical insertion of Obliquus Capitis Inferior (Left)',
    action: 'Primary action of Obliquus Capitis Inferior (Left)'
  },
  'obliquus_capitis_inferior_right': {
    id: 'obliquus_capitis_inferior_right',
    name: 'Obliquus Capitis Inferior (Right)',
    meshIdentifier: 'Mesh_ObliquusCapitisInferiorRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Obliquus Capitis Inferior (Right)',
    insertion: 'Anatomical insertion of Obliquus Capitis Inferior (Right)',
    action: 'Primary action of Obliquus Capitis Inferior (Right)'
  },
  'sternohyoid_left': {
    id: 'sternohyoid_left',
    name: 'Sternohyoid (Left)',
    meshIdentifier: 'Mesh_SternohyoidLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternohyoid (Left)',
    insertion: 'Anatomical insertion of Sternohyoid (Left)',
    action: 'Primary action of Sternohyoid (Left)'
  },
  'sternohyoid_right': {
    id: 'sternohyoid_right',
    name: 'Sternohyoid (Right)',
    meshIdentifier: 'Mesh_SternohyoidRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternohyoid (Right)',
    insertion: 'Anatomical insertion of Sternohyoid (Right)',
    action: 'Primary action of Sternohyoid (Right)'
  },
  'sternothyroid_left': {
    id: 'sternothyroid_left',
    name: 'Sternothyroid (Left)',
    meshIdentifier: 'Mesh_SternothyroidLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternothyroid (Left)',
    insertion: 'Anatomical insertion of Sternothyroid (Left)',
    action: 'Primary action of Sternothyroid (Left)'
  },
  'sternothyroid_right': {
    id: 'sternothyroid_right',
    name: 'Sternothyroid (Right)',
    meshIdentifier: 'Mesh_SternothyroidRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Sternothyroid (Right)',
    insertion: 'Anatomical insertion of Sternothyroid (Right)',
    action: 'Primary action of Sternothyroid (Right)'
  },
  'thyrohyoid_left': {
    id: 'thyrohyoid_left',
    name: 'Thyrohyoid (Left)',
    meshIdentifier: 'Mesh_ThyrohyoidLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Thyrohyoid (Left)',
    insertion: 'Anatomical insertion of Thyrohyoid (Left)',
    action: 'Primary action of Thyrohyoid (Left)'
  },
  'thyrohyoid_right': {
    id: 'thyrohyoid_right',
    name: 'Thyrohyoid (Right)',
    meshIdentifier: 'Mesh_ThyrohyoidRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Thyrohyoid (Right)',
    insertion: 'Anatomical insertion of Thyrohyoid (Right)',
    action: 'Primary action of Thyrohyoid (Right)'
  },
  'omohyoid_left': {
    id: 'omohyoid_left',
    name: 'Omohyoid (Left)',
    meshIdentifier: 'Mesh_OmohyoidLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Omohyoid (Left)',
    insertion: 'Anatomical insertion of Omohyoid (Left)',
    action: 'Primary action of Omohyoid (Left)'
  },
  'omohyoid_right': {
    id: 'omohyoid_right',
    name: 'Omohyoid (Right)',
    meshIdentifier: 'Mesh_OmohyoidRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Omohyoid (Right)',
    insertion: 'Anatomical insertion of Omohyoid (Right)',
    action: 'Primary action of Omohyoid (Right)'
  },
  'platysma_left': {
    id: 'platysma_left',
    name: 'Platysma (Left)',
    meshIdentifier: 'Mesh_PlatysmaLeft',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Platysma (Left)',
    insertion: 'Anatomical insertion of Platysma (Left)',
    action: 'Primary action of Platysma (Left)'
  },
  'platysma_right': {
    id: 'platysma_right',
    name: 'Platysma (Right)',
    meshIdentifier: 'Mesh_PlatysmaRight',
    targetZone: 'upper_body',
    muscleGroup: 'neck',
    origin: 'Anatomical origin of Platysma (Right)',
    insertion: 'Anatomical insertion of Platysma (Right)',
    action: 'Primary action of Platysma (Right)'
  },
  'deltoids_left': {
    id: 'deltoids_left',
    name: 'Deltoid (Left)',
    meshIdentifier: 'Mesh_DeltoidsLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Deltoid (Left)',
    insertion: 'Anatomical insertion of Deltoid (Left)',
    action: 'Primary action of Deltoid (Left)'
  },
  'deltoids_right': {
    id: 'deltoids_right',
    name: 'Deltoid (Right)',
    meshIdentifier: 'Mesh_DeltoidsRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Deltoid (Right)',
    insertion: 'Anatomical insertion of Deltoid (Right)',
    action: 'Primary action of Deltoid (Right)'
  },
  'supraspinatus_left': {
    id: 'supraspinatus_left',
    name: 'Supraspinatus (Left)',
    meshIdentifier: 'Mesh_SupraspinatusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Supraspinatus (Left)',
    insertion: 'Anatomical insertion of Supraspinatus (Left)',
    action: 'Primary action of Supraspinatus (Left)'
  },
  'supraspinatus_right': {
    id: 'supraspinatus_right',
    name: 'Supraspinatus (Right)',
    meshIdentifier: 'Mesh_SupraspinatusRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Supraspinatus (Right)',
    insertion: 'Anatomical insertion of Supraspinatus (Right)',
    action: 'Primary action of Supraspinatus (Right)'
  },
  'infraspinatus_left': {
    id: 'infraspinatus_left',
    name: 'Infraspinatus (Left)',
    meshIdentifier: 'Mesh_InfraspinatusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Infraspinatus (Left)',
    insertion: 'Anatomical insertion of Infraspinatus (Left)',
    action: 'Primary action of Infraspinatus (Left)'
  },
  'infraspinatus_right': {
    id: 'infraspinatus_right',
    name: 'Infraspinatus (Right)',
    meshIdentifier: 'Mesh_InfraspinatusRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Infraspinatus (Right)',
    insertion: 'Anatomical insertion of Infraspinatus (Right)',
    action: 'Primary action of Infraspinatus (Right)'
  },
  'teres_major_left': {
    id: 'teres_major_left',
    name: 'Teres Major (Left)',
    meshIdentifier: 'Mesh_TeresMajorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Major (Left)',
    insertion: 'Anatomical insertion of Teres Major (Left)',
    action: 'Primary action of Teres Major (Left)'
  },
  'teres_major_right': {
    id: 'teres_major_right',
    name: 'Teres Major (Right)',
    meshIdentifier: 'Mesh_TeresMajorRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Major (Right)',
    insertion: 'Anatomical insertion of Teres Major (Right)',
    action: 'Primary action of Teres Major (Right)'
  },
  'teres_minor_left': {
    id: 'teres_minor_left',
    name: 'Teres Minor (Left)',
    meshIdentifier: 'Mesh_TeresMinorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Minor (Left)',
    insertion: 'Anatomical insertion of Teres Minor (Left)',
    action: 'Primary action of Teres Minor (Left)'
  },
  'teres_minor_right': {
    id: 'teres_minor_right',
    name: 'Teres Minor (Right)',
    meshIdentifier: 'Mesh_TeresMinorRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Teres Minor (Right)',
    insertion: 'Anatomical insertion of Teres Minor (Right)',
    action: 'Primary action of Teres Minor (Right)'
  },
  'subscapularis_left': {
    id: 'subscapularis_left',
    name: 'Subscapularis (Left)',
    meshIdentifier: 'Mesh_SubscapularisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Subscapularis (Left)',
    insertion: 'Anatomical insertion of Subscapularis (Left)',
    action: 'Primary action of Subscapularis (Left)'
  },
  'subscapularis_right': {
    id: 'subscapularis_right',
    name: 'Subscapularis (Right)',
    meshIdentifier: 'Mesh_SubscapularisRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Subscapularis (Right)',
    insertion: 'Anatomical insertion of Subscapularis (Right)',
    action: 'Primary action of Subscapularis (Right)'
  },
  'coracobrachialis_left': {
    id: 'coracobrachialis_left',
    name: 'Coracobrachialis (Left)',
    meshIdentifier: 'Mesh_CoracobrachialisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Coracobrachialis (Left)',
    insertion: 'Anatomical insertion of Coracobrachialis (Left)',
    action: 'Primary action of Coracobrachialis (Left)'
  },
  'coracobrachialis_right': {
    id: 'coracobrachialis_right',
    name: 'Coracobrachialis (Right)',
    meshIdentifier: 'Mesh_CoracobrachialisRight',
    targetZone: 'upper_body',
    muscleGroup: 'shoulder',
    origin: 'Anatomical origin of Coracobrachialis (Right)',
    insertion: 'Anatomical insertion of Coracobrachialis (Right)',
    action: 'Primary action of Coracobrachialis (Right)'
  },
  'pectoralis_major_left': {
    id: 'pectoralis_major_left',
    name: 'Pectoralis Major (Left)',
    meshIdentifier: 'Mesh_PectoralisMajorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Major (Left)',
    insertion: 'Anatomical insertion of Pectoralis Major (Left)',
    action: 'Primary action of Pectoralis Major (Left)'
  },
  'pectoralis_major_right': {
    id: 'pectoralis_major_right',
    name: 'Pectoralis Major (Right)',
    meshIdentifier: 'Mesh_PectoralisMajorRight',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Major (Right)',
    insertion: 'Anatomical insertion of Pectoralis Major (Right)',
    action: 'Primary action of Pectoralis Major (Right)'
  },
  'pectoralis_minor_left': {
    id: 'pectoralis_minor_left',
    name: 'Pectoralis Minor (Left)',
    meshIdentifier: 'Mesh_PectoralisMinorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Minor (Left)',
    insertion: 'Anatomical insertion of Pectoralis Minor (Left)',
    action: 'Primary action of Pectoralis Minor (Left)'
  },
  'pectoralis_minor_right': {
    id: 'pectoralis_minor_right',
    name: 'Pectoralis Minor (Right)',
    meshIdentifier: 'Mesh_PectoralisMinorRight',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Pectoralis Minor (Right)',
    insertion: 'Anatomical insertion of Pectoralis Minor (Right)',
    action: 'Primary action of Pectoralis Minor (Right)'
  },
  'serratus_anterior_left': {
    id: 'serratus_anterior_left',
    name: 'Serratus Anterior (Left)',
    meshIdentifier: 'Mesh_SerratusAnteriorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Serratus Anterior (Left)',
    insertion: 'Anatomical insertion of Serratus Anterior (Left)',
    action: 'Primary action of Serratus Anterior (Left)'
  },
  'serratus_anterior_right': {
    id: 'serratus_anterior_right',
    name: 'Serratus Anterior (Right)',
    meshIdentifier: 'Mesh_SerratusAnteriorRight',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Serratus Anterior (Right)',
    insertion: 'Anatomical insertion of Serratus Anterior (Right)',
    action: 'Primary action of Serratus Anterior (Right)'
  },
  'subclavius_left': {
    id: 'subclavius_left',
    name: 'Subclavius (Left)',
    meshIdentifier: 'Mesh_SubclaviusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Subclavius (Left)',
    insertion: 'Anatomical insertion of Subclavius (Left)',
    action: 'Primary action of Subclavius (Left)'
  },
  'subclavius_right': {
    id: 'subclavius_right',
    name: 'Subclavius (Right)',
    meshIdentifier: 'Mesh_SubclaviusRight',
    targetZone: 'upper_body',
    muscleGroup: 'chest',
    origin: 'Anatomical origin of Subclavius (Right)',
    insertion: 'Anatomical insertion of Subclavius (Right)',
    action: 'Primary action of Subclavius (Right)'
  },
  'biceps_brachii_left': {
    id: 'biceps_brachii_left',
    name: 'Biceps Brachii (Left)',
    meshIdentifier: 'Mesh_BicepsBrachiiLeft',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Biceps Brachii (Left)',
    insertion: 'Anatomical insertion of Biceps Brachii (Left)',
    action: 'Primary action of Biceps Brachii (Left)'
  },
  'biceps_brachii_right': {
    id: 'biceps_brachii_right',
    name: 'Biceps Brachii (Right)',
    meshIdentifier: 'Mesh_BicepsBrachiiRight',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Biceps Brachii (Right)',
    insertion: 'Anatomical insertion of Biceps Brachii (Right)',
    action: 'Primary action of Biceps Brachii (Right)'
  },
  'brachialis_left': {
    id: 'brachialis_left',
    name: 'Brachialis (Left)',
    meshIdentifier: 'Mesh_BrachialisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachialis (Left)',
    insertion: 'Anatomical insertion of Brachialis (Left)',
    action: 'Primary action of Brachialis (Left)'
  },
  'brachialis_right': {
    id: 'brachialis_right',
    name: 'Brachialis (Right)',
    meshIdentifier: 'Mesh_BrachialisRight',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachialis (Right)',
    insertion: 'Anatomical insertion of Brachialis (Right)',
    action: 'Primary action of Brachialis (Right)'
  },
  'brachioradialis_left': {
    id: 'brachioradialis_left',
    name: 'Brachioradialis (Left)',
    meshIdentifier: 'Mesh_BrachioradialisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachioradialis (Left)',
    insertion: 'Anatomical insertion of Brachioradialis (Left)',
    action: 'Primary action of Brachioradialis (Left)'
  },
  'brachioradialis_right': {
    id: 'brachioradialis_right',
    name: 'Brachioradialis (Right)',
    meshIdentifier: 'Mesh_BrachioradialisRight',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Brachioradialis (Right)',
    insertion: 'Anatomical insertion of Brachioradialis (Right)',
    action: 'Primary action of Brachioradialis (Right)'
  },
  'triceps_brachii_left': {
    id: 'triceps_brachii_left',
    name: 'Triceps Brachii (Left)',
    meshIdentifier: 'Mesh_TricepsBrachiiLeft',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Triceps Brachii (Left)',
    insertion: 'Anatomical insertion of Triceps Brachii (Left)',
    action: 'Primary action of Triceps Brachii (Left)'
  },
  'triceps_brachii_right': {
    id: 'triceps_brachii_right',
    name: 'Triceps Brachii (Right)',
    meshIdentifier: 'Mesh_TricepsBrachiiRight',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Triceps Brachii (Right)',
    insertion: 'Anatomical insertion of Triceps Brachii (Right)',
    action: 'Primary action of Triceps Brachii (Right)'
  },
  'anconeus_left': {
    id: 'anconeus_left',
    name: 'Anconeus (Left)',
    meshIdentifier: 'Mesh_AnconeusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Anconeus (Left)',
    insertion: 'Anatomical insertion of Anconeus (Left)',
    action: 'Primary action of Anconeus (Left)'
  },
  'anconeus_right': {
    id: 'anconeus_right',
    name: 'Anconeus (Right)',
    meshIdentifier: 'Mesh_AnconeusRight',
    targetZone: 'upper_body',
    muscleGroup: 'arm',
    origin: 'Anatomical origin of Anconeus (Right)',
    insertion: 'Anatomical insertion of Anconeus (Right)',
    action: 'Primary action of Anconeus (Right)'
  },
  'pronator_teres_left': {
    id: 'pronator_teres_left',
    name: 'Pronator Teres (Left)',
    meshIdentifier: 'Mesh_PronatorTeresLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Teres (Left)',
    insertion: 'Anatomical insertion of Pronator Teres (Left)',
    action: 'Primary action of Pronator Teres (Left)'
  },
  'pronator_teres_right': {
    id: 'pronator_teres_right',
    name: 'Pronator Teres (Right)',
    meshIdentifier: 'Mesh_PronatorTeresRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Teres (Right)',
    insertion: 'Anatomical insertion of Pronator Teres (Right)',
    action: 'Primary action of Pronator Teres (Right)'
  },
  'flexor_carpi_radialis_left': {
    id: 'flexor_carpi_radialis_left',
    name: 'Flexor Carpi Radialis (Left)',
    meshIdentifier: 'Mesh_FlexorCarpiRadialisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Radialis (Left)',
    insertion: 'Anatomical insertion of Flexor Carpi Radialis (Left)',
    action: 'Primary action of Flexor Carpi Radialis (Left)'
  },
  'flexor_carpi_radialis_right': {
    id: 'flexor_carpi_radialis_right',
    name: 'Flexor Carpi Radialis (Right)',
    meshIdentifier: 'Mesh_FlexorCarpiRadialisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Radialis (Right)',
    insertion: 'Anatomical insertion of Flexor Carpi Radialis (Right)',
    action: 'Primary action of Flexor Carpi Radialis (Right)'
  },
  'palmaris_longus_left': {
    id: 'palmaris_longus_left',
    name: 'Palmaris Longus (Left)',
    meshIdentifier: 'Mesh_PalmarisLongusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Palmaris Longus (Left)',
    insertion: 'Anatomical insertion of Palmaris Longus (Left)',
    action: 'Primary action of Palmaris Longus (Left)'
  },
  'palmaris_longus_right': {
    id: 'palmaris_longus_right',
    name: 'Palmaris Longus (Right)',
    meshIdentifier: 'Mesh_PalmarisLongusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Palmaris Longus (Right)',
    insertion: 'Anatomical insertion of Palmaris Longus (Right)',
    action: 'Primary action of Palmaris Longus (Right)'
  },
  'flexor_carpi_ulnaris_left': {
    id: 'flexor_carpi_ulnaris_left',
    name: 'Flexor Carpi Ulnaris (Left)',
    meshIdentifier: 'Mesh_FlexorCarpiUlnarisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Ulnaris (Left)',
    insertion: 'Anatomical insertion of Flexor Carpi Ulnaris (Left)',
    action: 'Primary action of Flexor Carpi Ulnaris (Left)'
  },
  'flexor_carpi_ulnaris_right': {
    id: 'flexor_carpi_ulnaris_right',
    name: 'Flexor Carpi Ulnaris (Right)',
    meshIdentifier: 'Mesh_FlexorCarpiUlnarisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Carpi Ulnaris (Right)',
    insertion: 'Anatomical insertion of Flexor Carpi Ulnaris (Right)',
    action: 'Primary action of Flexor Carpi Ulnaris (Right)'
  },
  'flexor_digitorum_superficialis_left': {
    id: 'flexor_digitorum_superficialis_left',
    name: 'Flexor Digitorum Superficialis (Left)',
    meshIdentifier: 'Mesh_FlexorDigitorumSuperficialisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Superficialis (Left)',
    insertion: 'Anatomical insertion of Flexor Digitorum Superficialis (Left)',
    action: 'Primary action of Flexor Digitorum Superficialis (Left)'
  },
  'flexor_digitorum_superficialis_right': {
    id: 'flexor_digitorum_superficialis_right',
    name: 'Flexor Digitorum Superficialis (Right)',
    meshIdentifier: 'Mesh_FlexorDigitorumSuperficialisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Superficialis (Right)',
    insertion: 'Anatomical insertion of Flexor Digitorum Superficialis (Right)',
    action: 'Primary action of Flexor Digitorum Superficialis (Right)'
  },
  'flexor_digitorum_profundus_left': {
    id: 'flexor_digitorum_profundus_left',
    name: 'Flexor Digitorum Profundus (Left)',
    meshIdentifier: 'Mesh_FlexorDigitorumProfundusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Profundus (Left)',
    insertion: 'Anatomical insertion of Flexor Digitorum Profundus (Left)',
    action: 'Primary action of Flexor Digitorum Profundus (Left)'
  },
  'flexor_digitorum_profundus_right': {
    id: 'flexor_digitorum_profundus_right',
    name: 'Flexor Digitorum Profundus (Right)',
    meshIdentifier: 'Mesh_FlexorDigitorumProfundusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Digitorum Profundus (Right)',
    insertion: 'Anatomical insertion of Flexor Digitorum Profundus (Right)',
    action: 'Primary action of Flexor Digitorum Profundus (Right)'
  },
  'flexor_pollicis_longus_left': {
    id: 'flexor_pollicis_longus_left',
    name: 'Flexor Pollicis Longus (Left)',
    meshIdentifier: 'Mesh_FlexorPollicisLongusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Pollicis Longus (Left)',
    insertion: 'Anatomical insertion of Flexor Pollicis Longus (Left)',
    action: 'Primary action of Flexor Pollicis Longus (Left)'
  },
  'flexor_pollicis_longus_right': {
    id: 'flexor_pollicis_longus_right',
    name: 'Flexor Pollicis Longus (Right)',
    meshIdentifier: 'Mesh_FlexorPollicisLongusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Flexor Pollicis Longus (Right)',
    insertion: 'Anatomical insertion of Flexor Pollicis Longus (Right)',
    action: 'Primary action of Flexor Pollicis Longus (Right)'
  },
  'pronator_quadratus_left': {
    id: 'pronator_quadratus_left',
    name: 'Pronator Quadratus (Left)',
    meshIdentifier: 'Mesh_PronatorQuadratusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Quadratus (Left)',
    insertion: 'Anatomical insertion of Pronator Quadratus (Left)',
    action: 'Primary action of Pronator Quadratus (Left)'
  },
  'pronator_quadratus_right': {
    id: 'pronator_quadratus_right',
    name: 'Pronator Quadratus (Right)',
    meshIdentifier: 'Mesh_PronatorQuadratusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Pronator Quadratus (Right)',
    insertion: 'Anatomical insertion of Pronator Quadratus (Right)',
    action: 'Primary action of Pronator Quadratus (Right)'
  },
  'supinator_left': {
    id: 'supinator_left',
    name: 'Supinator (Left)',
    meshIdentifier: 'Mesh_SupinatorLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Supinator (Left)',
    insertion: 'Anatomical insertion of Supinator (Left)',
    action: 'Primary action of Supinator (Left)'
  },
  'supinator_right': {
    id: 'supinator_right',
    name: 'Supinator (Right)',
    meshIdentifier: 'Mesh_SupinatorRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Supinator (Right)',
    insertion: 'Anatomical insertion of Supinator (Right)',
    action: 'Primary action of Supinator (Right)'
  },
  'abductor_pollicis_longus_left': {
    id: 'abductor_pollicis_longus_left',
    name: 'Abductor Pollicis Longus (Left)',
    meshIdentifier: 'Mesh_AbductorPollicisLongusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Abductor Pollicis Longus (Left)',
    insertion: 'Anatomical insertion of Abductor Pollicis Longus (Left)',
    action: 'Primary action of Abductor Pollicis Longus (Left)'
  },
  'abductor_pollicis_longus_right': {
    id: 'abductor_pollicis_longus_right',
    name: 'Abductor Pollicis Longus (Right)',
    meshIdentifier: 'Mesh_AbductorPollicisLongusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Abductor Pollicis Longus (Right)',
    insertion: 'Anatomical insertion of Abductor Pollicis Longus (Right)',
    action: 'Primary action of Abductor Pollicis Longus (Right)'
  },
  'extensor_pollicis_longus_left': {
    id: 'extensor_pollicis_longus_left',
    name: 'Extensor Pollicis Longus (Left)',
    meshIdentifier: 'Mesh_ExtensorPollicisLongusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Longus (Left)',
    insertion: 'Anatomical insertion of Extensor Pollicis Longus (Left)',
    action: 'Primary action of Extensor Pollicis Longus (Left)'
  },
  'extensor_pollicis_longus_right': {
    id: 'extensor_pollicis_longus_right',
    name: 'Extensor Pollicis Longus (Right)',
    meshIdentifier: 'Mesh_ExtensorPollicisLongusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Longus (Right)',
    insertion: 'Anatomical insertion of Extensor Pollicis Longus (Right)',
    action: 'Primary action of Extensor Pollicis Longus (Right)'
  },
  'extensor_pollicis_brevis_left': {
    id: 'extensor_pollicis_brevis_left',
    name: 'Extensor Pollicis Brevis (Left)',
    meshIdentifier: 'Mesh_ExtensorPollicisBrevisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Brevis (Left)',
    insertion: 'Anatomical insertion of Extensor Pollicis Brevis (Left)',
    action: 'Primary action of Extensor Pollicis Brevis (Left)'
  },
  'extensor_pollicis_brevis_right': {
    id: 'extensor_pollicis_brevis_right',
    name: 'Extensor Pollicis Brevis (Right)',
    meshIdentifier: 'Mesh_ExtensorPollicisBrevisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Pollicis Brevis (Right)',
    insertion: 'Anatomical insertion of Extensor Pollicis Brevis (Right)',
    action: 'Primary action of Extensor Pollicis Brevis (Right)'
  },
  'extensor_indicis_left': {
    id: 'extensor_indicis_left',
    name: 'Extensor Indicis (Left)',
    meshIdentifier: 'Mesh_ExtensorIndicisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Indicis (Left)',
    insertion: 'Anatomical insertion of Extensor Indicis (Left)',
    action: 'Primary action of Extensor Indicis (Left)'
  },
  'extensor_indicis_right': {
    id: 'extensor_indicis_right',
    name: 'Extensor Indicis (Right)',
    meshIdentifier: 'Mesh_ExtensorIndicisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Indicis (Right)',
    insertion: 'Anatomical insertion of Extensor Indicis (Right)',
    action: 'Primary action of Extensor Indicis (Right)'
  },
  'extensor_digitorum_left': {
    id: 'extensor_digitorum_left',
    name: 'Extensor Digitorum (Left)',
    meshIdentifier: 'Mesh_ExtensorDigitorumLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Digitorum (Left)',
    insertion: 'Anatomical insertion of Extensor Digitorum (Left)',
    action: 'Primary action of Extensor Digitorum (Left)'
  },
  'extensor_digitorum_right': {
    id: 'extensor_digitorum_right',
    name: 'Extensor Digitorum (Right)',
    meshIdentifier: 'Mesh_ExtensorDigitorumRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Digitorum (Right)',
    insertion: 'Anatomical insertion of Extensor Digitorum (Right)',
    action: 'Primary action of Extensor Digitorum (Right)'
  },
  'extensor_carpi_radialis_longus_left': {
    id: 'extensor_carpi_radialis_longus_left',
    name: 'Extensor Carpi Radialis Longus (Left)',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisLongusLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Longus (Left)',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Longus (Left)',
    action: 'Primary action of Extensor Carpi Radialis Longus (Left)'
  },
  'extensor_carpi_radialis_longus_right': {
    id: 'extensor_carpi_radialis_longus_right',
    name: 'Extensor Carpi Radialis Longus (Right)',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisLongusRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Longus (Right)',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Longus (Right)',
    action: 'Primary action of Extensor Carpi Radialis Longus (Right)'
  },
  'extensor_carpi_radialis_brevis_left': {
    id: 'extensor_carpi_radialis_brevis_left',
    name: 'Extensor Carpi Radialis Brevis (Left)',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisBrevisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Brevis (Left)',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Brevis (Left)',
    action: 'Primary action of Extensor Carpi Radialis Brevis (Left)'
  },
  'extensor_carpi_radialis_brevis_right': {
    id: 'extensor_carpi_radialis_brevis_right',
    name: 'Extensor Carpi Radialis Brevis (Right)',
    meshIdentifier: 'Mesh_ExtensorCarpiRadialisBrevisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Radialis Brevis (Right)',
    insertion: 'Anatomical insertion of Extensor Carpi Radialis Brevis (Right)',
    action: 'Primary action of Extensor Carpi Radialis Brevis (Right)'
  },
  'extensor_carpi_ulnaris_left': {
    id: 'extensor_carpi_ulnaris_left',
    name: 'Extensor Carpi Ulnaris (Left)',
    meshIdentifier: 'Mesh_ExtensorCarpiUlnarisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Ulnaris (Left)',
    insertion: 'Anatomical insertion of Extensor Carpi Ulnaris (Left)',
    action: 'Primary action of Extensor Carpi Ulnaris (Left)'
  },
  'extensor_carpi_ulnaris_right': {
    id: 'extensor_carpi_ulnaris_right',
    name: 'Extensor Carpi Ulnaris (Right)',
    meshIdentifier: 'Mesh_ExtensorCarpiUlnarisRight',
    targetZone: 'upper_body',
    muscleGroup: 'forearm',
    origin: 'Anatomical origin of Extensor Carpi Ulnaris (Right)',
    insertion: 'Anatomical insertion of Extensor Carpi Ulnaris (Right)',
    action: 'Primary action of Extensor Carpi Ulnaris (Right)'
  },
  'abductor_pollicis_brevis_left': {
    id: 'abductor_pollicis_brevis_left',
    name: 'Abductor Pollicis Brevis (Left)',
    meshIdentifier: 'Mesh_AbductorPollicisBrevisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Abductor Pollicis Brevis (Left)',
    insertion: 'Anatomical insertion of Abductor Pollicis Brevis (Left)',
    action: 'Primary action of Abductor Pollicis Brevis (Left)'
  },
  'abductor_pollicis_brevis_right': {
    id: 'abductor_pollicis_brevis_right',
    name: 'Abductor Pollicis Brevis (Right)',
    meshIdentifier: 'Mesh_AbductorPollicisBrevisRight',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Abductor Pollicis Brevis (Right)',
    insertion: 'Anatomical insertion of Abductor Pollicis Brevis (Right)',
    action: 'Primary action of Abductor Pollicis Brevis (Right)'
  },
  'flexor_pollicis_brevis_left': {
    id: 'flexor_pollicis_brevis_left',
    name: 'Flexor Pollicis Brevis (Left)',
    meshIdentifier: 'Mesh_FlexorPollicisBrevisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Flexor Pollicis Brevis (Left)',
    insertion: 'Anatomical insertion of Flexor Pollicis Brevis (Left)',
    action: 'Primary action of Flexor Pollicis Brevis (Left)'
  },
  'flexor_pollicis_brevis_right': {
    id: 'flexor_pollicis_brevis_right',
    name: 'Flexor Pollicis Brevis (Right)',
    meshIdentifier: 'Mesh_FlexorPollicisBrevisRight',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Flexor Pollicis Brevis (Right)',
    insertion: 'Anatomical insertion of Flexor Pollicis Brevis (Right)',
    action: 'Primary action of Flexor Pollicis Brevis (Right)'
  },
  'opponens_pollicis_left': {
    id: 'opponens_pollicis_left',
    name: 'Opponens Pollicis (Left)',
    meshIdentifier: 'Mesh_OpponensPollicisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Opponens Pollicis (Left)',
    insertion: 'Anatomical insertion of Opponens Pollicis (Left)',
    action: 'Primary action of Opponens Pollicis (Left)'
  },
  'opponens_pollicis_right': {
    id: 'opponens_pollicis_right',
    name: 'Opponens Pollicis (Right)',
    meshIdentifier: 'Mesh_OpponensPollicisRight',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Opponens Pollicis (Right)',
    insertion: 'Anatomical insertion of Opponens Pollicis (Right)',
    action: 'Primary action of Opponens Pollicis (Right)'
  },
  'adductor_pollicis_left': {
    id: 'adductor_pollicis_left',
    name: 'Adductor Pollicis (Left)',
    meshIdentifier: 'Mesh_AdductorPollicisLeft',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Adductor Pollicis (Left)',
    insertion: 'Anatomical insertion of Adductor Pollicis (Left)',
    action: 'Primary action of Adductor Pollicis (Left)'
  },
  'adductor_pollicis_right': {
    id: 'adductor_pollicis_right',
    name: 'Adductor Pollicis (Right)',
    meshIdentifier: 'Mesh_AdductorPollicisRight',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Adductor Pollicis (Right)',
    insertion: 'Anatomical insertion of Adductor Pollicis (Right)',
    action: 'Primary action of Adductor Pollicis (Right)'
  },
  'lumbrical_hand_1_left': {
    id: 'lumbrical_hand_1_left',
    name: 'Lumbrical Hand 1 (Left)',
    meshIdentifier: 'Mesh_LumbricalHand1Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 1 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Hand 1 (Left)',
    action: 'Primary action of Lumbrical Hand 1 (Left)'
  },
  'lumbrical_hand_1_right': {
    id: 'lumbrical_hand_1_right',
    name: 'Lumbrical Hand 1 (Right)',
    meshIdentifier: 'Mesh_LumbricalHand1Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 1 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Hand 1 (Right)',
    action: 'Primary action of Lumbrical Hand 1 (Right)'
  },
  'lumbrical_hand_2_left': {
    id: 'lumbrical_hand_2_left',
    name: 'Lumbrical Hand 2 (Left)',
    meshIdentifier: 'Mesh_LumbricalHand2Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 2 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Hand 2 (Left)',
    action: 'Primary action of Lumbrical Hand 2 (Left)'
  },
  'lumbrical_hand_2_right': {
    id: 'lumbrical_hand_2_right',
    name: 'Lumbrical Hand 2 (Right)',
    meshIdentifier: 'Mesh_LumbricalHand2Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 2 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Hand 2 (Right)',
    action: 'Primary action of Lumbrical Hand 2 (Right)'
  },
  'lumbrical_hand_3_left': {
    id: 'lumbrical_hand_3_left',
    name: 'Lumbrical Hand 3 (Left)',
    meshIdentifier: 'Mesh_LumbricalHand3Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 3 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Hand 3 (Left)',
    action: 'Primary action of Lumbrical Hand 3 (Left)'
  },
  'lumbrical_hand_3_right': {
    id: 'lumbrical_hand_3_right',
    name: 'Lumbrical Hand 3 (Right)',
    meshIdentifier: 'Mesh_LumbricalHand3Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 3 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Hand 3 (Right)',
    action: 'Primary action of Lumbrical Hand 3 (Right)'
  },
  'lumbrical_hand_4_left': {
    id: 'lumbrical_hand_4_left',
    name: 'Lumbrical Hand 4 (Left)',
    meshIdentifier: 'Mesh_LumbricalHand4Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 4 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Hand 4 (Left)',
    action: 'Primary action of Lumbrical Hand 4 (Left)'
  },
  'lumbrical_hand_4_right': {
    id: 'lumbrical_hand_4_right',
    name: 'Lumbrical Hand 4 (Right)',
    meshIdentifier: 'Mesh_LumbricalHand4Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Lumbrical Hand 4 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Hand 4 (Right)',
    action: 'Primary action of Lumbrical Hand 4 (Right)'
  },
  'dorsal_interossei_hand_1_left': {
    id: 'dorsal_interossei_hand_1_left',
    name: 'Dorsal Interossei Hand 1 (Left)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand1Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 1 (Left)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 1 (Left)',
    action: 'Primary action of Dorsal Interossei Hand 1 (Left)'
  },
  'dorsal_interossei_hand_1_right': {
    id: 'dorsal_interossei_hand_1_right',
    name: 'Dorsal Interossei Hand 1 (Right)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand1Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 1 (Right)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 1 (Right)',
    action: 'Primary action of Dorsal Interossei Hand 1 (Right)'
  },
  'dorsal_interossei_hand_2_left': {
    id: 'dorsal_interossei_hand_2_left',
    name: 'Dorsal Interossei Hand 2 (Left)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand2Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 2 (Left)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 2 (Left)',
    action: 'Primary action of Dorsal Interossei Hand 2 (Left)'
  },
  'dorsal_interossei_hand_2_right': {
    id: 'dorsal_interossei_hand_2_right',
    name: 'Dorsal Interossei Hand 2 (Right)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand2Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 2 (Right)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 2 (Right)',
    action: 'Primary action of Dorsal Interossei Hand 2 (Right)'
  },
  'dorsal_interossei_hand_3_left': {
    id: 'dorsal_interossei_hand_3_left',
    name: 'Dorsal Interossei Hand 3 (Left)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand3Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 3 (Left)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 3 (Left)',
    action: 'Primary action of Dorsal Interossei Hand 3 (Left)'
  },
  'dorsal_interossei_hand_3_right': {
    id: 'dorsal_interossei_hand_3_right',
    name: 'Dorsal Interossei Hand 3 (Right)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand3Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 3 (Right)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 3 (Right)',
    action: 'Primary action of Dorsal Interossei Hand 3 (Right)'
  },
  'dorsal_interossei_hand_4_left': {
    id: 'dorsal_interossei_hand_4_left',
    name: 'Dorsal Interossei Hand 4 (Left)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand4Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 4 (Left)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 4 (Left)',
    action: 'Primary action of Dorsal Interossei Hand 4 (Left)'
  },
  'dorsal_interossei_hand_4_right': {
    id: 'dorsal_interossei_hand_4_right',
    name: 'Dorsal Interossei Hand 4 (Right)',
    meshIdentifier: 'Mesh_DorsalInterosseiHand4Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Dorsal Interossei Hand 4 (Right)',
    insertion: 'Anatomical insertion of Dorsal Interossei Hand 4 (Right)',
    action: 'Primary action of Dorsal Interossei Hand 4 (Right)'
  },
  'palmar_interossei_1_left': {
    id: 'palmar_interossei_1_left',
    name: 'Palmar Interossei 1 (Left)',
    meshIdentifier: 'Mesh_PalmarInterossei1Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 1 (Left)',
    insertion: 'Anatomical insertion of Palmar Interossei 1 (Left)',
    action: 'Primary action of Palmar Interossei 1 (Left)'
  },
  'palmar_interossei_1_right': {
    id: 'palmar_interossei_1_right',
    name: 'Palmar Interossei 1 (Right)',
    meshIdentifier: 'Mesh_PalmarInterossei1Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 1 (Right)',
    insertion: 'Anatomical insertion of Palmar Interossei 1 (Right)',
    action: 'Primary action of Palmar Interossei 1 (Right)'
  },
  'palmar_interossei_2_left': {
    id: 'palmar_interossei_2_left',
    name: 'Palmar Interossei 2 (Left)',
    meshIdentifier: 'Mesh_PalmarInterossei2Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 2 (Left)',
    insertion: 'Anatomical insertion of Palmar Interossei 2 (Left)',
    action: 'Primary action of Palmar Interossei 2 (Left)'
  },
  'palmar_interossei_2_right': {
    id: 'palmar_interossei_2_right',
    name: 'Palmar Interossei 2 (Right)',
    meshIdentifier: 'Mesh_PalmarInterossei2Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 2 (Right)',
    insertion: 'Anatomical insertion of Palmar Interossei 2 (Right)',
    action: 'Primary action of Palmar Interossei 2 (Right)'
  },
  'palmar_interossei_3_left': {
    id: 'palmar_interossei_3_left',
    name: 'Palmar Interossei 3 (Left)',
    meshIdentifier: 'Mesh_PalmarInterossei3Left',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 3 (Left)',
    insertion: 'Anatomical insertion of Palmar Interossei 3 (Left)',
    action: 'Primary action of Palmar Interossei 3 (Left)'
  },
  'palmar_interossei_3_right': {
    id: 'palmar_interossei_3_right',
    name: 'Palmar Interossei 3 (Right)',
    meshIdentifier: 'Mesh_PalmarInterossei3Right',
    targetZone: 'upper_body',
    muscleGroup: 'hand',
    origin: 'Anatomical origin of Palmar Interossei 3 (Right)',
    insertion: 'Anatomical insertion of Palmar Interossei 3 (Right)',
    action: 'Primary action of Palmar Interossei 3 (Right)'
  },
  'iliopsoas_left': {
    id: 'iliopsoas_left',
    name: 'Iliopsoas (Left)',
    meshIdentifier: 'Mesh_IliopsoasLeft',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliopsoas (Left)',
    insertion: 'Anatomical insertion of Iliopsoas (Left)',
    action: 'Primary action of Iliopsoas (Left)'
  },
  'iliopsoas_right': {
    id: 'iliopsoas_right',
    name: 'Iliopsoas (Right)',
    meshIdentifier: 'Mesh_IliopsoasRight',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliopsoas (Right)',
    insertion: 'Anatomical insertion of Iliopsoas (Right)',
    action: 'Primary action of Iliopsoas (Right)'
  },
  'psoas_major_left': {
    id: 'psoas_major_left',
    name: 'Psoas Major (Left)',
    meshIdentifier: 'Mesh_PsoasMajorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Major (Left)',
    insertion: 'Anatomical insertion of Psoas Major (Left)',
    action: 'Primary action of Psoas Major (Left)'
  },
  'psoas_major_right': {
    id: 'psoas_major_right',
    name: 'Psoas Major (Right)',
    meshIdentifier: 'Mesh_PsoasMajorRight',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Major (Right)',
    insertion: 'Anatomical insertion of Psoas Major (Right)',
    action: 'Primary action of Psoas Major (Right)'
  },
  'psoas_minor_left': {
    id: 'psoas_minor_left',
    name: 'Psoas Minor (Left)',
    meshIdentifier: 'Mesh_PsoasMinorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Minor (Left)',
    insertion: 'Anatomical insertion of Psoas Minor (Left)',
    action: 'Primary action of Psoas Minor (Left)'
  },
  'psoas_minor_right': {
    id: 'psoas_minor_right',
    name: 'Psoas Minor (Right)',
    meshIdentifier: 'Mesh_PsoasMinorRight',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Psoas Minor (Right)',
    insertion: 'Anatomical insertion of Psoas Minor (Right)',
    action: 'Primary action of Psoas Minor (Right)'
  },
  'iliacus_left': {
    id: 'iliacus_left',
    name: 'Iliacus (Left)',
    meshIdentifier: 'Mesh_IliacusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliacus (Left)',
    insertion: 'Anatomical insertion of Iliacus (Left)',
    action: 'Primary action of Iliacus (Left)'
  },
  'iliacus_right': {
    id: 'iliacus_right',
    name: 'Iliacus (Right)',
    meshIdentifier: 'Mesh_IliacusRight',
    targetZone: 'lower_body',
    muscleGroup: 'hip',
    origin: 'Anatomical origin of Iliacus (Right)',
    insertion: 'Anatomical insertion of Iliacus (Right)',
    action: 'Primary action of Iliacus (Right)'
  },
  'gluteus_maximus_left': {
    id: 'gluteus_maximus_left',
    name: 'Gluteus Maximus (Left)',
    meshIdentifier: 'Mesh_GluteusMaximusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Maximus (Left)',
    insertion: 'Anatomical insertion of Gluteus Maximus (Left)',
    action: 'Primary action of Gluteus Maximus (Left)'
  },
  'gluteus_maximus_right': {
    id: 'gluteus_maximus_right',
    name: 'Gluteus Maximus (Right)',
    meshIdentifier: 'Mesh_GluteusMaximusRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Maximus (Right)',
    insertion: 'Anatomical insertion of Gluteus Maximus (Right)',
    action: 'Primary action of Gluteus Maximus (Right)'
  },
  'gluteus_medius_left': {
    id: 'gluteus_medius_left',
    name: 'Gluteus Medius (Left)',
    meshIdentifier: 'Mesh_GluteusMediusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Medius (Left)',
    insertion: 'Anatomical insertion of Gluteus Medius (Left)',
    action: 'Primary action of Gluteus Medius (Left)'
  },
  'gluteus_medius_right': {
    id: 'gluteus_medius_right',
    name: 'Gluteus Medius (Right)',
    meshIdentifier: 'Mesh_GluteusMediusRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Medius (Right)',
    insertion: 'Anatomical insertion of Gluteus Medius (Right)',
    action: 'Primary action of Gluteus Medius (Right)'
  },
  'gluteus_minimus_left': {
    id: 'gluteus_minimus_left',
    name: 'Gluteus Minimus (Left)',
    meshIdentifier: 'Mesh_GluteusMinimusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Minimus (Left)',
    insertion: 'Anatomical insertion of Gluteus Minimus (Left)',
    action: 'Primary action of Gluteus Minimus (Left)'
  },
  'gluteus_minimus_right': {
    id: 'gluteus_minimus_right',
    name: 'Gluteus Minimus (Right)',
    meshIdentifier: 'Mesh_GluteusMinimusRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Minimus (Right)',
    insertion: 'Anatomical insertion of Gluteus Minimus (Right)',
    action: 'Primary action of Gluteus Minimus (Right)'
  },
  'tensor_fasciae_latae_left': {
    id: 'tensor_fasciae_latae_left',
    name: 'Tensor Fasciae Latae (Left)',
    meshIdentifier: 'Mesh_TensorFasciaeLataeLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Tensor Fasciae Latae (Left)',
    insertion: 'Anatomical insertion of Tensor Fasciae Latae (Left)',
    action: 'Primary action of Tensor Fasciae Latae (Left)'
  },
  'tensor_fasciae_latae_right': {
    id: 'tensor_fasciae_latae_right',
    name: 'Tensor Fasciae Latae (Right)',
    meshIdentifier: 'Mesh_TensorFasciaeLataeRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Tensor Fasciae Latae (Right)',
    insertion: 'Anatomical insertion of Tensor Fasciae Latae (Right)',
    action: 'Primary action of Tensor Fasciae Latae (Right)'
  },
  'piriformis_left': {
    id: 'piriformis_left',
    name: 'Piriformis (Left)',
    meshIdentifier: 'Mesh_PiriformisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Piriformis (Left)',
    insertion: 'Anatomical insertion of Piriformis (Left)',
    action: 'Primary action of Piriformis (Left)'
  },
  'piriformis_right': {
    id: 'piriformis_right',
    name: 'Piriformis (Right)',
    meshIdentifier: 'Mesh_PiriformisRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Piriformis (Right)',
    insertion: 'Anatomical insertion of Piriformis (Right)',
    action: 'Primary action of Piriformis (Right)'
  },
  'gemellus_superior_left': {
    id: 'gemellus_superior_left',
    name: 'Gemellus Superior (Left)',
    meshIdentifier: 'Mesh_GemellusSuperiorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Superior (Left)',
    insertion: 'Anatomical insertion of Gemellus Superior (Left)',
    action: 'Primary action of Gemellus Superior (Left)'
  },
  'gemellus_superior_right': {
    id: 'gemellus_superior_right',
    name: 'Gemellus Superior (Right)',
    meshIdentifier: 'Mesh_GemellusSuperiorRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Superior (Right)',
    insertion: 'Anatomical insertion of Gemellus Superior (Right)',
    action: 'Primary action of Gemellus Superior (Right)'
  },
  'gemellus_inferior_left': {
    id: 'gemellus_inferior_left',
    name: 'Gemellus Inferior (Left)',
    meshIdentifier: 'Mesh_GemellusInferiorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Inferior (Left)',
    insertion: 'Anatomical insertion of Gemellus Inferior (Left)',
    action: 'Primary action of Gemellus Inferior (Left)'
  },
  'gemellus_inferior_right': {
    id: 'gemellus_inferior_right',
    name: 'Gemellus Inferior (Right)',
    meshIdentifier: 'Mesh_GemellusInferiorRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gemellus Inferior (Right)',
    insertion: 'Anatomical insertion of Gemellus Inferior (Right)',
    action: 'Primary action of Gemellus Inferior (Right)'
  },
  'obturator_internus_left': {
    id: 'obturator_internus_left',
    name: 'Obturator Internus (Left)',
    meshIdentifier: 'Mesh_ObturatorInternusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Internus (Left)',
    insertion: 'Anatomical insertion of Obturator Internus (Left)',
    action: 'Primary action of Obturator Internus (Left)'
  },
  'obturator_internus_right': {
    id: 'obturator_internus_right',
    name: 'Obturator Internus (Right)',
    meshIdentifier: 'Mesh_ObturatorInternusRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Internus (Right)',
    insertion: 'Anatomical insertion of Obturator Internus (Right)',
    action: 'Primary action of Obturator Internus (Right)'
  },
  'obturator_externus_left': {
    id: 'obturator_externus_left',
    name: 'Obturator Externus (Left)',
    meshIdentifier: 'Mesh_ObturatorExternusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Externus (Left)',
    insertion: 'Anatomical insertion of Obturator Externus (Left)',
    action: 'Primary action of Obturator Externus (Left)'
  },
  'obturator_externus_right': {
    id: 'obturator_externus_right',
    name: 'Obturator Externus (Right)',
    meshIdentifier: 'Mesh_ObturatorExternusRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Obturator Externus (Right)',
    insertion: 'Anatomical insertion of Obturator Externus (Right)',
    action: 'Primary action of Obturator Externus (Right)'
  },
  'quadratus_femoris_left': {
    id: 'quadratus_femoris_left',
    name: 'Quadratus Femoris (Left)',
    meshIdentifier: 'Mesh_QuadratusFemorisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Quadratus Femoris (Left)',
    insertion: 'Anatomical insertion of Quadratus Femoris (Left)',
    action: 'Primary action of Quadratus Femoris (Left)'
  },
  'quadratus_femoris_right': {
    id: 'quadratus_femoris_right',
    name: 'Quadratus Femoris (Right)',
    meshIdentifier: 'Mesh_QuadratusFemorisRight',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Quadratus Femoris (Right)',
    insertion: 'Anatomical insertion of Quadratus Femoris (Right)',
    action: 'Primary action of Quadratus Femoris (Right)'
  },
  'rectus_femoris_left': {
    id: 'rectus_femoris_left',
    name: 'Quadriceps (Rectus Femoris) (Left)',
    meshIdentifier: 'Mesh_RectusFemorisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Rectus Femoris) (Left)',
    insertion: 'Anatomical insertion of Quadriceps (Rectus Femoris) (Left)',
    action: 'Primary action of Quadriceps (Rectus Femoris) (Left)'
  },
  'rectus_femoris_right': {
    id: 'rectus_femoris_right',
    name: 'Quadriceps (Rectus Femoris) (Right)',
    meshIdentifier: 'Mesh_RectusFemorisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Rectus Femoris) (Right)',
    insertion: 'Anatomical insertion of Quadriceps (Rectus Femoris) (Right)',
    action: 'Primary action of Quadriceps (Rectus Femoris) (Right)'
  },
  'vastus_lateralis_left': {
    id: 'vastus_lateralis_left',
    name: 'Quadriceps (Vastus Lateralis) (Left)',
    meshIdentifier: 'Mesh_VastusLateralisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Lateralis) (Left)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Lateralis) (Left)',
    action: 'Primary action of Quadriceps (Vastus Lateralis) (Left)'
  },
  'vastus_lateralis_right': {
    id: 'vastus_lateralis_right',
    name: 'Quadriceps (Vastus Lateralis) (Right)',
    meshIdentifier: 'Mesh_VastusLateralisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Lateralis) (Right)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Lateralis) (Right)',
    action: 'Primary action of Quadriceps (Vastus Lateralis) (Right)'
  },
  'vastus_medialis_left': {
    id: 'vastus_medialis_left',
    name: 'Quadriceps (Vastus Medialis) (Left)',
    meshIdentifier: 'Mesh_VastusMedialisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Medialis) (Left)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Medialis) (Left)',
    action: 'Primary action of Quadriceps (Vastus Medialis) (Left)'
  },
  'vastus_medialis_right': {
    id: 'vastus_medialis_right',
    name: 'Quadriceps (Vastus Medialis) (Right)',
    meshIdentifier: 'Mesh_VastusMedialisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Medialis) (Right)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Medialis) (Right)',
    action: 'Primary action of Quadriceps (Vastus Medialis) (Right)'
  },
  'vastus_intermedius_left': {
    id: 'vastus_intermedius_left',
    name: 'Quadriceps (Vastus Intermedius) (Left)',
    meshIdentifier: 'Mesh_VastusIntermediusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Intermedius) (Left)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Intermedius) (Left)',
    action: 'Primary action of Quadriceps (Vastus Intermedius) (Left)'
  },
  'vastus_intermedius_right': {
    id: 'vastus_intermedius_right',
    name: 'Quadriceps (Vastus Intermedius) (Right)',
    meshIdentifier: 'Mesh_VastusIntermediusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Quadriceps (Vastus Intermedius) (Right)',
    insertion: 'Anatomical insertion of Quadriceps (Vastus Intermedius) (Right)',
    action: 'Primary action of Quadriceps (Vastus Intermedius) (Right)'
  },
  'sartorius_left': {
    id: 'sartorius_left',
    name: 'Sartorius (Left)',
    meshIdentifier: 'Mesh_SartoriusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Sartorius (Left)',
    insertion: 'Anatomical insertion of Sartorius (Left)',
    action: 'Primary action of Sartorius (Left)'
  },
  'sartorius_right': {
    id: 'sartorius_right',
    name: 'Sartorius (Right)',
    meshIdentifier: 'Mesh_SartoriusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Sartorius (Right)',
    insertion: 'Anatomical insertion of Sartorius (Right)',
    action: 'Primary action of Sartorius (Right)'
  },
  'adductor_longus_left': {
    id: 'adductor_longus_left',
    name: 'Adductor Longus (Left)',
    meshIdentifier: 'Mesh_AdductorLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Longus (Left)',
    insertion: 'Anatomical insertion of Adductor Longus (Left)',
    action: 'Primary action of Adductor Longus (Left)'
  },
  'adductor_longus_right': {
    id: 'adductor_longus_right',
    name: 'Adductor Longus (Right)',
    meshIdentifier: 'Mesh_AdductorLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Longus (Right)',
    insertion: 'Anatomical insertion of Adductor Longus (Right)',
    action: 'Primary action of Adductor Longus (Right)'
  },
  'adductor_brevis_left': {
    id: 'adductor_brevis_left',
    name: 'Adductor Brevis (Left)',
    meshIdentifier: 'Mesh_AdductorBrevisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Brevis (Left)',
    insertion: 'Anatomical insertion of Adductor Brevis (Left)',
    action: 'Primary action of Adductor Brevis (Left)'
  },
  'adductor_brevis_right': {
    id: 'adductor_brevis_right',
    name: 'Adductor Brevis (Right)',
    meshIdentifier: 'Mesh_AdductorBrevisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Brevis (Right)',
    insertion: 'Anatomical insertion of Adductor Brevis (Right)',
    action: 'Primary action of Adductor Brevis (Right)'
  },
  'adductor_magnus_left': {
    id: 'adductor_magnus_left',
    name: 'Adductor Magnus (Left)',
    meshIdentifier: 'Mesh_AdductorMagnusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Magnus (Left)',
    insertion: 'Anatomical insertion of Adductor Magnus (Left)',
    action: 'Primary action of Adductor Magnus (Left)'
  },
  'adductor_magnus_right': {
    id: 'adductor_magnus_right',
    name: 'Adductor Magnus (Right)',
    meshIdentifier: 'Mesh_AdductorMagnusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Adductor Magnus (Right)',
    insertion: 'Anatomical insertion of Adductor Magnus (Right)',
    action: 'Primary action of Adductor Magnus (Right)'
  },
  'gracilis_left': {
    id: 'gracilis_left',
    name: 'Gracilis (Left)',
    meshIdentifier: 'Mesh_GracilisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Gracilis (Left)',
    insertion: 'Anatomical insertion of Gracilis (Left)',
    action: 'Primary action of Gracilis (Left)'
  },
  'gracilis_right': {
    id: 'gracilis_right',
    name: 'Gracilis (Right)',
    meshIdentifier: 'Mesh_GracilisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Gracilis (Right)',
    insertion: 'Anatomical insertion of Gracilis (Right)',
    action: 'Primary action of Gracilis (Right)'
  },
  'pectineus_left': {
    id: 'pectineus_left',
    name: 'Pectineus (Left)',
    meshIdentifier: 'Mesh_PectineusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Pectineus (Left)',
    insertion: 'Anatomical insertion of Pectineus (Left)',
    action: 'Primary action of Pectineus (Left)'
  },
  'pectineus_right': {
    id: 'pectineus_right',
    name: 'Pectineus (Right)',
    meshIdentifier: 'Mesh_PectineusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Pectineus (Right)',
    insertion: 'Anatomical insertion of Pectineus (Right)',
    action: 'Primary action of Pectineus (Right)'
  },
  'biceps_femoris_left': {
    id: 'biceps_femoris_left',
    name: 'Hamstrings (Biceps Femoris) (Left)',
    meshIdentifier: 'Mesh_BicepsFemorisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Biceps Femoris) (Left)',
    insertion: 'Anatomical insertion of Hamstrings (Biceps Femoris) (Left)',
    action: 'Primary action of Hamstrings (Biceps Femoris) (Left)'
  },
  'biceps_femoris_right': {
    id: 'biceps_femoris_right',
    name: 'Hamstrings (Biceps Femoris) (Right)',
    meshIdentifier: 'Mesh_BicepsFemorisRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Biceps Femoris) (Right)',
    insertion: 'Anatomical insertion of Hamstrings (Biceps Femoris) (Right)',
    action: 'Primary action of Hamstrings (Biceps Femoris) (Right)'
  },
  'semitendinosus_left': {
    id: 'semitendinosus_left',
    name: 'Hamstrings (Semitendinosus) (Left)',
    meshIdentifier: 'Mesh_SemitendinosusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semitendinosus) (Left)',
    insertion: 'Anatomical insertion of Hamstrings (Semitendinosus) (Left)',
    action: 'Primary action of Hamstrings (Semitendinosus) (Left)'
  },
  'semitendinosus_right': {
    id: 'semitendinosus_right',
    name: 'Hamstrings (Semitendinosus) (Right)',
    meshIdentifier: 'Mesh_SemitendinosusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semitendinosus) (Right)',
    insertion: 'Anatomical insertion of Hamstrings (Semitendinosus) (Right)',
    action: 'Primary action of Hamstrings (Semitendinosus) (Right)'
  },
  'semimembranosus_left': {
    id: 'semimembranosus_left',
    name: 'Hamstrings (Semimembranosus) (Left)',
    meshIdentifier: 'Mesh_SemimembranosusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semimembranosus) (Left)',
    insertion: 'Anatomical insertion of Hamstrings (Semimembranosus) (Left)',
    action: 'Primary action of Hamstrings (Semimembranosus) (Left)'
  },
  'semimembranosus_right': {
    id: 'semimembranosus_right',
    name: 'Hamstrings (Semimembranosus) (Right)',
    meshIdentifier: 'Mesh_SemimembranosusRight',
    targetZone: 'lower_body',
    muscleGroup: 'thigh',
    origin: 'Anatomical origin of Hamstrings (Semimembranosus) (Right)',
    insertion: 'Anatomical insertion of Hamstrings (Semimembranosus) (Right)',
    action: 'Primary action of Hamstrings (Semimembranosus) (Right)'
  },
  'gastrocnemius_left': {
    id: 'gastrocnemius_left',
    name: 'Gastrocnemius (Left)',
    meshIdentifier: 'Mesh_GastrocnemiusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Gastrocnemius (Left)',
    insertion: 'Anatomical insertion of Gastrocnemius (Left)',
    action: 'Primary action of Gastrocnemius (Left)'
  },
  'gastrocnemius_right': {
    id: 'gastrocnemius_right',
    name: 'Gastrocnemius (Right)',
    meshIdentifier: 'Mesh_GastrocnemiusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Gastrocnemius (Right)',
    insertion: 'Anatomical insertion of Gastrocnemius (Right)',
    action: 'Primary action of Gastrocnemius (Right)'
  },
  'soleus_left': {
    id: 'soleus_left',
    name: 'Soleus (Left)',
    meshIdentifier: 'Mesh_SoleusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Soleus (Left)',
    insertion: 'Anatomical insertion of Soleus (Left)',
    action: 'Primary action of Soleus (Left)'
  },
  'soleus_right': {
    id: 'soleus_right',
    name: 'Soleus (Right)',
    meshIdentifier: 'Mesh_SoleusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Soleus (Right)',
    insertion: 'Anatomical insertion of Soleus (Right)',
    action: 'Primary action of Soleus (Right)'
  },
  'plantaris_left': {
    id: 'plantaris_left',
    name: 'Plantaris (Left)',
    meshIdentifier: 'Mesh_PlantarisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Plantaris (Left)',
    insertion: 'Anatomical insertion of Plantaris (Left)',
    action: 'Primary action of Plantaris (Left)'
  },
  'plantaris_right': {
    id: 'plantaris_right',
    name: 'Plantaris (Right)',
    meshIdentifier: 'Mesh_PlantarisRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Plantaris (Right)',
    insertion: 'Anatomical insertion of Plantaris (Right)',
    action: 'Primary action of Plantaris (Right)'
  },
  'popliteus_left': {
    id: 'popliteus_left',
    name: 'Popliteus (Left)',
    meshIdentifier: 'Mesh_PopliteusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Popliteus (Left)',
    insertion: 'Anatomical insertion of Popliteus (Left)',
    action: 'Primary action of Popliteus (Left)'
  },
  'popliteus_right': {
    id: 'popliteus_right',
    name: 'Popliteus (Right)',
    meshIdentifier: 'Mesh_PopliteusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Popliteus (Right)',
    insertion: 'Anatomical insertion of Popliteus (Right)',
    action: 'Primary action of Popliteus (Right)'
  },
  'tibialis_posterior_left': {
    id: 'tibialis_posterior_left',
    name: 'Tibialis Posterior (Left)',
    meshIdentifier: 'Mesh_TibialisPosteriorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Posterior (Left)',
    insertion: 'Anatomical insertion of Tibialis Posterior (Left)',
    action: 'Primary action of Tibialis Posterior (Left)'
  },
  'tibialis_posterior_right': {
    id: 'tibialis_posterior_right',
    name: 'Tibialis Posterior (Right)',
    meshIdentifier: 'Mesh_TibialisPosteriorRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Posterior (Right)',
    insertion: 'Anatomical insertion of Tibialis Posterior (Right)',
    action: 'Primary action of Tibialis Posterior (Right)'
  },
  'flexor_digitorum_longus_left': {
    id: 'flexor_digitorum_longus_left',
    name: 'Flexor Digitorum Longus (Left)',
    meshIdentifier: 'Mesh_FlexorDigitorumLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Digitorum Longus (Left)',
    insertion: 'Anatomical insertion of Flexor Digitorum Longus (Left)',
    action: 'Primary action of Flexor Digitorum Longus (Left)'
  },
  'flexor_digitorum_longus_right': {
    id: 'flexor_digitorum_longus_right',
    name: 'Flexor Digitorum Longus (Right)',
    meshIdentifier: 'Mesh_FlexorDigitorumLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Digitorum Longus (Right)',
    insertion: 'Anatomical insertion of Flexor Digitorum Longus (Right)',
    action: 'Primary action of Flexor Digitorum Longus (Right)'
  },
  'flexor_hallucis_longus_left': {
    id: 'flexor_hallucis_longus_left',
    name: 'Flexor Hallucis Longus (Left)',
    meshIdentifier: 'Mesh_FlexorHallucisLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Hallucis Longus (Left)',
    insertion: 'Anatomical insertion of Flexor Hallucis Longus (Left)',
    action: 'Primary action of Flexor Hallucis Longus (Left)'
  },
  'flexor_hallucis_longus_right': {
    id: 'flexor_hallucis_longus_right',
    name: 'Flexor Hallucis Longus (Right)',
    meshIdentifier: 'Mesh_FlexorHallucisLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Flexor Hallucis Longus (Right)',
    insertion: 'Anatomical insertion of Flexor Hallucis Longus (Right)',
    action: 'Primary action of Flexor Hallucis Longus (Right)'
  },
  'tibialis_anterior_left': {
    id: 'tibialis_anterior_left',
    name: 'Tibialis Anterior (Left)',
    meshIdentifier: 'Mesh_TibialisAnteriorLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Anterior (Left)',
    insertion: 'Anatomical insertion of Tibialis Anterior (Left)',
    action: 'Primary action of Tibialis Anterior (Left)'
  },
  'tibialis_anterior_right': {
    id: 'tibialis_anterior_right',
    name: 'Tibialis Anterior (Right)',
    meshIdentifier: 'Mesh_TibialisAnteriorRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Tibialis Anterior (Right)',
    insertion: 'Anatomical insertion of Tibialis Anterior (Right)',
    action: 'Primary action of Tibialis Anterior (Right)'
  },
  'extensor_digitorum_longus_left': {
    id: 'extensor_digitorum_longus_left',
    name: 'Extensor Digitorum Longus (Left)',
    meshIdentifier: 'Mesh_ExtensorDigitorumLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Digitorum Longus (Left)',
    insertion: 'Anatomical insertion of Extensor Digitorum Longus (Left)',
    action: 'Primary action of Extensor Digitorum Longus (Left)'
  },
  'extensor_digitorum_longus_right': {
    id: 'extensor_digitorum_longus_right',
    name: 'Extensor Digitorum Longus (Right)',
    meshIdentifier: 'Mesh_ExtensorDigitorumLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Digitorum Longus (Right)',
    insertion: 'Anatomical insertion of Extensor Digitorum Longus (Right)',
    action: 'Primary action of Extensor Digitorum Longus (Right)'
  },
  'extensor_hallucis_longus_left': {
    id: 'extensor_hallucis_longus_left',
    name: 'Extensor Hallucis Longus (Left)',
    meshIdentifier: 'Mesh_ExtensorHallucisLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Hallucis Longus (Left)',
    insertion: 'Anatomical insertion of Extensor Hallucis Longus (Left)',
    action: 'Primary action of Extensor Hallucis Longus (Left)'
  },
  'extensor_hallucis_longus_right': {
    id: 'extensor_hallucis_longus_right',
    name: 'Extensor Hallucis Longus (Right)',
    meshIdentifier: 'Mesh_ExtensorHallucisLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Extensor Hallucis Longus (Right)',
    insertion: 'Anatomical insertion of Extensor Hallucis Longus (Right)',
    action: 'Primary action of Extensor Hallucis Longus (Right)'
  },
  'peroneus_tertius_left': {
    id: 'peroneus_tertius_left',
    name: 'Peroneus Tertius (Left)',
    meshIdentifier: 'Mesh_PeroneusTertiusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Peroneus Tertius (Left)',
    insertion: 'Anatomical insertion of Peroneus Tertius (Left)',
    action: 'Primary action of Peroneus Tertius (Left)'
  },
  'peroneus_tertius_right': {
    id: 'peroneus_tertius_right',
    name: 'Peroneus Tertius (Right)',
    meshIdentifier: 'Mesh_PeroneusTertiusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Peroneus Tertius (Right)',
    insertion: 'Anatomical insertion of Peroneus Tertius (Right)',
    action: 'Primary action of Peroneus Tertius (Right)'
  },
  'fibularis_longus_left': {
    id: 'fibularis_longus_left',
    name: 'Fibularis Longus (Left)',
    meshIdentifier: 'Mesh_FibularisLongusLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Longus (Left)',
    insertion: 'Anatomical insertion of Fibularis Longus (Left)',
    action: 'Primary action of Fibularis Longus (Left)'
  },
  'fibularis_longus_right': {
    id: 'fibularis_longus_right',
    name: 'Fibularis Longus (Right)',
    meshIdentifier: 'Mesh_FibularisLongusRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Longus (Right)',
    insertion: 'Anatomical insertion of Fibularis Longus (Right)',
    action: 'Primary action of Fibularis Longus (Right)'
  },
  'fibularis_brevis_left': {
    id: 'fibularis_brevis_left',
    name: 'Fibularis Brevis (Left)',
    meshIdentifier: 'Mesh_FibularisBrevisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Brevis (Left)',
    insertion: 'Anatomical insertion of Fibularis Brevis (Left)',
    action: 'Primary action of Fibularis Brevis (Left)'
  },
  'fibularis_brevis_right': {
    id: 'fibularis_brevis_right',
    name: 'Fibularis Brevis (Right)',
    meshIdentifier: 'Mesh_FibularisBrevisRight',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Fibularis Brevis (Right)',
    insertion: 'Anatomical insertion of Fibularis Brevis (Right)',
    action: 'Primary action of Fibularis Brevis (Right)'
  },
  'abductor_hallucis_left': {
    id: 'abductor_hallucis_left',
    name: 'Abductor Hallucis (Left)',
    meshIdentifier: 'Mesh_AbductorHallucisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Hallucis (Left)',
    insertion: 'Anatomical insertion of Abductor Hallucis (Left)',
    action: 'Primary action of Abductor Hallucis (Left)'
  },
  'abductor_hallucis_right': {
    id: 'abductor_hallucis_right',
    name: 'Abductor Hallucis (Right)',
    meshIdentifier: 'Mesh_AbductorHallucisRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Hallucis (Right)',
    insertion: 'Anatomical insertion of Abductor Hallucis (Right)',
    action: 'Primary action of Abductor Hallucis (Right)'
  },
  'flexor_hallucis_brevis_left': {
    id: 'flexor_hallucis_brevis_left',
    name: 'Flexor Hallucis Brevis (Left)',
    meshIdentifier: 'Mesh_FlexorHallucisBrevisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Hallucis Brevis (Left)',
    insertion: 'Anatomical insertion of Flexor Hallucis Brevis (Left)',
    action: 'Primary action of Flexor Hallucis Brevis (Left)'
  },
  'flexor_hallucis_brevis_right': {
    id: 'flexor_hallucis_brevis_right',
    name: 'Flexor Hallucis Brevis (Right)',
    meshIdentifier: 'Mesh_FlexorHallucisBrevisRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Hallucis Brevis (Right)',
    insertion: 'Anatomical insertion of Flexor Hallucis Brevis (Right)',
    action: 'Primary action of Flexor Hallucis Brevis (Right)'
  },
  'adductor_hallucis_left': {
    id: 'adductor_hallucis_left',
    name: 'Adductor Hallucis (Left)',
    meshIdentifier: 'Mesh_AdductorHallucisLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Adductor Hallucis (Left)',
    insertion: 'Anatomical insertion of Adductor Hallucis (Left)',
    action: 'Primary action of Adductor Hallucis (Left)'
  },
  'adductor_hallucis_right': {
    id: 'adductor_hallucis_right',
    name: 'Adductor Hallucis (Right)',
    meshIdentifier: 'Mesh_AdductorHallucisRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Adductor Hallucis (Right)',
    insertion: 'Anatomical insertion of Adductor Hallucis (Right)',
    action: 'Primary action of Adductor Hallucis (Right)'
  },
  'abductor_digiti_minimi_foot_left': {
    id: 'abductor_digiti_minimi_foot_left',
    name: 'Abductor Digiti Minimi Foot (Left)',
    meshIdentifier: 'Mesh_AbductorDigitiMinimiFootLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Digiti Minimi Foot (Left)',
    insertion: 'Anatomical insertion of Abductor Digiti Minimi Foot (Left)',
    action: 'Primary action of Abductor Digiti Minimi Foot (Left)'
  },
  'abductor_digiti_minimi_foot_right': {
    id: 'abductor_digiti_minimi_foot_right',
    name: 'Abductor Digiti Minimi Foot (Right)',
    meshIdentifier: 'Mesh_AbductorDigitiMinimiFootRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Abductor Digiti Minimi Foot (Right)',
    insertion: 'Anatomical insertion of Abductor Digiti Minimi Foot (Right)',
    action: 'Primary action of Abductor Digiti Minimi Foot (Right)'
  },
  'flexor_digiti_minimi_brevis_foot_left': {
    id: 'flexor_digiti_minimi_brevis_foot_left',
    name: 'Flexor Digiti Minimi Brevis Foot (Left)',
    meshIdentifier: 'Mesh_FlexorDigitiMinimiBrevisFootLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Digiti Minimi Brevis Foot (Left)',
    insertion: 'Anatomical insertion of Flexor Digiti Minimi Brevis Foot (Left)',
    action: 'Primary action of Flexor Digiti Minimi Brevis Foot (Left)'
  },
  'flexor_digiti_minimi_brevis_foot_right': {
    id: 'flexor_digiti_minimi_brevis_foot_right',
    name: 'Flexor Digiti Minimi Brevis Foot (Right)',
    meshIdentifier: 'Mesh_FlexorDigitiMinimiBrevisFootRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Flexor Digiti Minimi Brevis Foot (Right)',
    insertion: 'Anatomical insertion of Flexor Digiti Minimi Brevis Foot (Right)',
    action: 'Primary action of Flexor Digiti Minimi Brevis Foot (Right)'
  },
  'quadratus_plantae_left': {
    id: 'quadratus_plantae_left',
    name: 'Quadratus Plantae (Left)',
    meshIdentifier: 'Mesh_QuadratusPlantaeLeft',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Quadratus Plantae (Left)',
    insertion: 'Anatomical insertion of Quadratus Plantae (Left)',
    action: 'Primary action of Quadratus Plantae (Left)'
  },
  'quadratus_plantae_right': {
    id: 'quadratus_plantae_right',
    name: 'Quadratus Plantae (Right)',
    meshIdentifier: 'Mesh_QuadratusPlantaeRight',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Quadratus Plantae (Right)',
    insertion: 'Anatomical insertion of Quadratus Plantae (Right)',
    action: 'Primary action of Quadratus Plantae (Right)'
  },
  'lumbrical_foot_1_left': {
    id: 'lumbrical_foot_1_left',
    name: 'Lumbrical Foot 1 (Left)',
    meshIdentifier: 'Mesh_LumbricalFoot1Left',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 1 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Foot 1 (Left)',
    action: 'Primary action of Lumbrical Foot 1 (Left)'
  },
  'lumbrical_foot_1_right': {
    id: 'lumbrical_foot_1_right',
    name: 'Lumbrical Foot 1 (Right)',
    meshIdentifier: 'Mesh_LumbricalFoot1Right',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 1 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Foot 1 (Right)',
    action: 'Primary action of Lumbrical Foot 1 (Right)'
  },
  'lumbrical_foot_2_left': {
    id: 'lumbrical_foot_2_left',
    name: 'Lumbrical Foot 2 (Left)',
    meshIdentifier: 'Mesh_LumbricalFoot2Left',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 2 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Foot 2 (Left)',
    action: 'Primary action of Lumbrical Foot 2 (Left)'
  },
  'lumbrical_foot_2_right': {
    id: 'lumbrical_foot_2_right',
    name: 'Lumbrical Foot 2 (Right)',
    meshIdentifier: 'Mesh_LumbricalFoot2Right',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 2 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Foot 2 (Right)',
    action: 'Primary action of Lumbrical Foot 2 (Right)'
  },
  'lumbrical_foot_3_left': {
    id: 'lumbrical_foot_3_left',
    name: 'Lumbrical Foot 3 (Left)',
    meshIdentifier: 'Mesh_LumbricalFoot3Left',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 3 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Foot 3 (Left)',
    action: 'Primary action of Lumbrical Foot 3 (Left)'
  },
  'lumbrical_foot_3_right': {
    id: 'lumbrical_foot_3_right',
    name: 'Lumbrical Foot 3 (Right)',
    meshIdentifier: 'Mesh_LumbricalFoot3Right',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 3 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Foot 3 (Right)',
    action: 'Primary action of Lumbrical Foot 3 (Right)'
  },
  'lumbrical_foot_4_left': {
    id: 'lumbrical_foot_4_left',
    name: 'Lumbrical Foot 4 (Left)',
    meshIdentifier: 'Mesh_LumbricalFoot4Left',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 4 (Left)',
    insertion: 'Anatomical insertion of Lumbrical Foot 4 (Left)',
    action: 'Primary action of Lumbrical Foot 4 (Left)'
  },
  'lumbrical_foot_4_right': {
    id: 'lumbrical_foot_4_right',
    name: 'Lumbrical Foot 4 (Right)',
    meshIdentifier: 'Mesh_LumbricalFoot4Right',
    targetZone: 'lower_body',
    muscleGroup: 'foot',
    origin: 'Anatomical origin of Lumbrical Foot 4 (Right)',
    insertion: 'Anatomical insertion of Lumbrical Foot 4 (Right)',
    action: 'Primary action of Lumbrical Foot 4 (Right)'
  },
  'rectus_abdominis_upper': {
    id: 'rectus_abdominis_upper',
    name: 'Rectus Abdominis (Upper)',
    meshIdentifier: 'Mesh_RectusAbdominisUpper',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Rectus Abdominis (Upper)',
    insertion: 'Anatomical insertion of Rectus Abdominis (Upper)',
    action: 'Primary action of Rectus Abdominis (Upper)'
  },
  'rectus_abdominis_middle': {
    id: 'rectus_abdominis_middle',
    name: 'Rectus Abdominis (Middle)',
    meshIdentifier: 'Mesh_RectusAbdominisMiddle',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Rectus Abdominis (Middle)',
    insertion: 'Anatomical insertion of Rectus Abdominis (Middle)',
    action: 'Primary action of Rectus Abdominis (Middle)'
  },
  'rectus_abdominis_lower': {
    id: 'rectus_abdominis_lower',
    name: 'Rectus Abdominis (Lower)',
    meshIdentifier: 'Mesh_RectusAbdominisLower',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Rectus Abdominis (Lower)',
    insertion: 'Anatomical insertion of Rectus Abdominis (Lower)',
    action: 'Primary action of Rectus Abdominis (Lower)'
  },
  'trapezius_upper': {
    id: 'trapezius_upper',
    name: 'Trapezius (Upper)',
    meshIdentifier: 'Mesh_TrapeziusUpper',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Trapezius (Upper)',
    insertion: 'Anatomical insertion of Trapezius (Upper)',
    action: 'Primary action of Trapezius (Upper)'
  },
  'trapezius_middle': {
    id: 'trapezius_middle',
    name: 'Trapezius (Middle)',
    meshIdentifier: 'Mesh_TrapeziusMiddle',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Trapezius (Middle)',
    insertion: 'Anatomical insertion of Trapezius (Middle)',
    action: 'Primary action of Trapezius (Middle)'
  },
  'trapezius_lower': {
    id: 'trapezius_lower',
    name: 'Trapezius (Lower)',
    meshIdentifier: 'Mesh_TrapeziusLower',
    targetZone: 'upper_body',
    muscleGroup: 'back',
    origin: 'Anatomical origin of Trapezius (Lower)',
    insertion: 'Anatomical insertion of Trapezius (Lower)',
    action: 'Primary action of Trapezius (Lower)'
  },
  'gluteus_maximus_upper': {
    id: 'gluteus_maximus_upper',
    name: 'Gluteus Maximus (Upper)',
    meshIdentifier: 'Mesh_GluteusMaximusUpper',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Maximus (Upper)',
    insertion: 'Anatomical insertion of Gluteus Maximus (Upper)',
    action: 'Primary action of Gluteus Maximus (Upper)'
  },
  'gluteus_maximus_lower': {
    id: 'gluteus_maximus_lower',
    name: 'Gluteus Maximus (Lower)',
    meshIdentifier: 'Mesh_GluteusMaximusLower',
    targetZone: 'lower_body',
    muscleGroup: 'gluteal',
    origin: 'Anatomical origin of Gluteus Maximus (Lower)',
    insertion: 'Anatomical insertion of Gluteus Maximus (Lower)',
    action: 'Primary action of Gluteus Maximus (Lower)'
  },
  'gastrocnemius_medial_head': {
    id: 'gastrocnemius_medial_head',
    name: 'Gastrocnemius (Medial Head)',
    meshIdentifier: 'Mesh_GastrocnemiusMedialHead',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Gastrocnemius (Medial Head)',
    insertion: 'Anatomical insertion of Gastrocnemius (Medial Head)',
    action: 'Primary action of Gastrocnemius (Medial Head)'
  },
  'gastrocnemius_lateral_head': {
    id: 'gastrocnemius_lateral_head',
    name: 'Gastrocnemius (Lateral Head)',
    meshIdentifier: 'Mesh_GastrocnemiusLateralHead',
    targetZone: 'lower_body',
    muscleGroup: 'calf',
    origin: 'Anatomical origin of Gastrocnemius (Lateral Head)',
    insertion: 'Anatomical insertion of Gastrocnemius (Lateral Head)',
    action: 'Primary action of Gastrocnemius (Lateral Head)'
  },
  'obliquus_internus_upper': {
    id: 'obliquus_internus_upper',
    name: 'Internal Oblique (Upper)',
    meshIdentifier: 'Mesh_ObliquusInternusUpper',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Internal Oblique (Upper)',
    insertion: 'Anatomical insertion of Internal Oblique (Upper)',
    action: 'Primary action of Internal Oblique (Upper)'
  },
  'obliquus_internus_lower': {
    id: 'obliquus_internus_lower',
    name: 'Internal Oblique (Lower)',
    meshIdentifier: 'Mesh_ObliquusInternusLower',
    targetZone: 'core',
    muscleGroup: 'abdominals',
    origin: 'Anatomical origin of Internal Oblique (Lower)',
    insertion: 'Anatomical insertion of Internal Oblique (Lower)',
    action: 'Primary action of Internal Oblique (Lower)'
  },
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
  'neck', 'head', 'shoulder', 'chest', 'arm', 'forearm', 'hand',
  'back', 'abdominals', 'core', 'pelvic', 'thorax', 'hip',
  'gluteal', 'thigh', 'calf', 'foot'
]

// Muscle count
export const MUSCLE_COUNT = Object.keys(MUSCLE_MAP).length

export default MUSCLE_MAP
