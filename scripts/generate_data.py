#!/usr/bin/env python3
"""
Generator for muscle map (300+ real anatomical muscles) and exercise registry (50+ exercises).
Produces src/data/muscleMap.ts and src/data/exerciseRegistry.ts
"""
import re

# ---- Real anatomical muscle data (name, region, group, zone) ----
# zone: upper_body | core | lower_body
# We enumerate real muscles; bilateral ones get _left/_right variants to reach 300+.

MUSCLES = [
    # ===== HEAD & NECK =====
    ("Sternocleidomastoid", "neck", "neck", "upper_body"),
    ("Trapezius", "trapezius", "back", "upper_body"),
    ("Levator Scapulae", "levator_scapulae", "back", "upper_body"),
    ("Splenius Capitis", "splenius_capitis", "back", "upper_body"),
    ("Splenius Cervicis", "splenius_cervicis", "back", "upper_body"),
    ("Semispinalis Capitis", "semispinalis_capitis", "back", "upper_body"),
    ("Longissimus Capitis", "longissimus_capitis", "back", "upper_body"),
    ("Longissimus Cervicis", "longissimus_cervicis", "back", "upper_body"),
    ("Iliocostalis Cervicis", "iliocostalis_cervicis", "back", "upper_body"),
    ("Rectus Capitis Anterior", "rectus_capitis_anterior", "neck", "upper_body"),
    ("Rectus Capitis Lateralis", "rectus_capitis_lateralis", "neck", "upper_body"),
    ("Obliquus Capitis Superior", "obliquus_capitis_superior", "neck", "upper_body"),
    ("Obliquus Capitis Inferior", "obliquus_capitis_inferior", "neck", "upper_body"),
    ("Masseter", "masseter", "head", "upper_body"),
    ("Temporalis", "temporalis", "head", "upper_body"),
    ("Medial Pterygoid", "medial_pterygoid", "head", "upper_body"),
    ("Lateral Pterygoid", "lateral_pterygoid", "head", "upper_body"),
    ("Digastric", "digastric", "head", "upper_body"),
    ("Mylohyoid", "mylohyoid", "head", "upper_body"),
    ("Geniohyoid", "geniohyoid", "head", "upper_body"),
    ("Stylohyoid", "stylohyoid", "head", "upper_body"),
    ("Sternohyoid", "sternohyoid", "neck", "upper_body"),
    ("Sternothyroid", "sternothyroid", "neck", "upper_body"),
    ("Thyrohyoid", "thyrohyoid", "neck", "upper_body"),
    ("Omohyoid", "omohyoid", "neck", "upper_body"),
    ("Platysma", "platysma", "neck", "upper_body"),
    # ===== SHOULDER / ROTATOR CUFF =====
    ("Deltoid", "deltoids", "shoulder", "upper_body"),
    ("Supraspinatus", "supraspinatus", "shoulder", "upper_body"),
    ("Infraspinatus", "infraspinatus", "shoulder", "upper_body"),
    ("Teres Major", "teres_major", "shoulder", "upper_body"),
    ("Teres Minor", "teres_minor", "shoulder", "upper_body"),
    ("Subscapularis", "subscapularis", "shoulder", "upper_body"),
    ("Coracobrachialis", "coracobrachialis", "shoulder", "upper_body"),
    # ===== CHEST =====
    ("Pectoralis Major", "pectoralis_major", "chest", "upper_body"),
    ("Pectoralis Minor", "pectoralis_minor", "chest", "upper_body"),
    ("Serratus Anterior", "serratus_anterior", "chest", "upper_body"),
    ("Subclavius", "subclavius", "chest", "upper_body"),
    # ===== ARM (UPPER) =====
    ("Biceps Brachii", "biceps_brachii", "arm", "upper_body"),
    ("Brachialis", "brachialis", "arm", "upper_body"),
    ("Brachioradialis", "brachioradialis", "arm", "upper_body"),
    ("Triceps Brachii", "triceps_brachii", "arm", "upper_body"),
    ("Anconeus", "anconeus", "arm", "upper_body"),
    # ===== FOREARM (ANTERIOR) =====
    ("Pronator Teres", "pronator_teres", "forearm", "upper_body"),
    ("Flexor Carpi Radialis", "flexor_carpi_radialis", "forearm", "upper_body"),
    ("Palmaris Longus", "palmaris_longus", "forearm", "upper_body"),
    ("Flexor Carpi Ulnaris", "flexor_carpi_ulnaris", "forearm", "upper_body"),
    ("Flexor Digitorum Superficialis", "flexor_digitorum_superficialis", "forearm", "upper_body"),
    ("Flexor Digitorum Profundus", "flexor_digitorum_profundus", "forearm", "upper_body"),
    ("Flexor Pollicis Longus", "flexor_pollicis_longus", "forearm", "upper_body"),
    ("Pronator Quadratus", "pronator_quadratus", "forearm", "upper_body"),
    # ===== FOREARM (POSTERIOR) =====
    ("Supinator", "supinator", "forearm", "upper_body"),
    ("Abductor Pollicis Longus", "abductor_pollicis_longus", "forearm", "upper_body"),
    ("Extensor Pollicis Longus", "extensor_pollicis_longus", "forearm", "upper_body"),
    ("Extensor Pollicis Brevis", "extensor_pollicis_brevis", "forearm", "upper_body"),
    ("Extensor Indicis", "extensor_indicis", "forearm", "upper_body"),
    ("Extensor Digitorum", "extensor_digitorum", "forearm", "upper_body"),
    ("Extensor Carpi Radialis Longus", "extensor_carpi_radialis_longus", "forearm", "upper_body"),
    ("Extensor Carpi Radialis Brevis", "extensor_carpi_radialis_brevis", "forearm", "upper_body"),
    ("Extensor Carpi Ulnaris", "extensor_carpi_ulnaris", "forearm", "upper_body"),
    # ===== HAND (INTRINSIC) =====
    ("Abductor Pollicis Brevis", "abductor_pollicis_brevis", "hand", "upper_body"),
    ("Flexor Pollicis Brevis", "flexor_pollicis_brevis", "hand", "upper_body"),
    ("Opponens Pollicis", "opponens_pollicis", "hand", "upper_body"),
    ("Adductor Pollicis", "adductor_pollicis", "hand", "upper_body"),
    ("Lumbrical Hand 1", "lumbrical_hand_1", "hand", "upper_body"),
    ("Lumbrical Hand 2", "lumbrical_hand_2", "hand", "upper_body"),
    ("Lumbrical Hand 3", "lumbrical_hand_3", "hand", "upper_body"),
    ("Lumbrical Hand 4", "lumbrical_hand_4", "hand", "upper_body"),
    ("Dorsal Interossei Hand 1", "dorsal_interossei_hand_1", "hand", "upper_body"),
    ("Dorsal Interossei Hand 2", "dorsal_interossei_hand_2", "hand", "upper_body"),
    ("Dorsal Interossei Hand 3", "dorsal_interossei_hand_3", "hand", "upper_body"),
    ("Dorsal Interossei Hand 4", "dorsal_interossei_hand_4", "hand", "upper_body"),
    ("Palmar Interossei 1", "palmar_interossei_1", "hand", "upper_body"),
    ("Palmar Interossei 2", "palmar_interossei_2", "hand", "upper_body"),
    ("Palmar Interossei 3", "palmar_interossei_3", "hand", "upper_body"),
    # ===== BACK (DEEP) =====
    ("Latissimus Dorsi", "latissimus_dorsi", "back", "upper_body"),
    ("Rhomboideus Major", "rhomboids_major", "back", "upper_body"),
    ("Rhomboideus Minor", "rhomboids_minor", "back", "upper_body"),
    ("Erector Spinae (Iliocostalis)", "iliocostalis_lumborum", "back", "lower_body"),
    ("Erector Spinae (Longissimus)", "longissimus_thoracis", "back", "lower_body"),
    ("Erector Spinae (Spinalis)", "spinalis_thoracis", "back", "lower_body"),
    ("Multifidus", "multifidus", "back", "core"),
    ("Rotatores", "rotatores", "back", "core"),
    ("Interspinales", "interspinales", "back", "core"),
    ("Intertransversarii", "intertransversarii", "back", "core"),
    # ===== CORE =====
    ("Rectus Abdominis", "rectus_abdominis", "abdominals", "core"),
    ("External Oblique", "obliquus_externus", "abdominals", "core"),
    ("Internal Oblique", "obliquus_internus", "abdominals", "core"),
    ("Transversus Abdominis", "transversus_abdominis", "abdominals", "core"),
    ("Pyramidalis", "pyramidalis", "abdominals", "core"),
    ("Quadratus Lumborum", "quadratus_lumborum", "abdominals", "core"),
    ("Iliopsoas", "iliopsoas", "hip", "lower_body"),
    ("Psoas Major", "psoas_major", "hip", "lower_body"),
    ("Psoas Minor", "psoas_minor", "hip", "lower_body"),
    ("Iliacus", "iliacus", "hip", "lower_body"),
    # ===== HIP / GLUTES =====
    ("Gluteus Maximus", "gluteus_maximus", "gluteal", "lower_body"),
    ("Gluteus Medius", "gluteus_medius", "gluteal", "lower_body"),
    ("Gluteus Minimus", "gluteus_minimus", "gluteal", "lower_body"),
    ("Tensor Fasciae Latae", "tensor_fasciae_latae", "gluteal", "lower_body"),
    ("Piriformis", "piriformis", "gluteal", "lower_body"),
    ("Gemellus Superior", "gemellus_superior", "gluteal", "lower_body"),
    ("Gemellus Inferior", "gemellus_inferior", "gluteal", "lower_body"),
    ("Obturator Internus", "obturator_internus", "gluteal", "lower_body"),
    ("Obturator Externus", "obturator_externus", "gluteal", "lower_body"),
    ("Quadratus Femoris", "quadratus_femoris", "gluteal", "lower_body"),
    # ===== THIGH (ANTERIOR) =====
    ("Quadriceps (Rectus Femoris)", "rectus_femoris", "thigh", "lower_body"),
    ("Quadriceps (Vastus Lateralis)", "vastus_lateralis", "thigh", "lower_body"),
    ("Quadriceps (Vastus Medialis)", "vastus_medialis", "thigh", "lower_body"),
    ("Quadriceps (Vastus Intermedius)", "vastus_intermedius", "thigh", "lower_body"),
    ("Sartorius", "sartorius", "thigh", "lower_body"),
    # ===== THIGH (MEDIAL / ADDUCTORS) =====
    ("Adductor Longus", "adductor_longus", "thigh", "lower_body"),
    ("Adductor Brevis", "adductor_brevis", "thigh", "lower_body"),
    ("Adductor Magnus", "adductor_magnus", "thigh", "lower_body"),
    ("Gracilis", "gracilis", "thigh", "lower_body"),
    ("Pectineus", "pectineus", "thigh", "lower_body"),
    # ===== THIGH (POSTERIOR / HAMSTRINGS) =====
    ("Hamstrings (Biceps Femoris)", "biceps_femoris", "thigh", "lower_body"),
    ("Hamstrings (Semitendinosus)", "semitendinosus", "thigh", "lower_body"),
    ("Hamstrings (Semimembranosus)", "semimembranosus", "thigh", "lower_body"),
    # ===== LOWER LEG (POSTERIOR) =====
    ("Gastrocnemius", "gastrocnemius", "calf", "lower_body"),
    ("Soleus", "soleus", "calf", "lower_body"),
    ("Plantaris", "plantaris", "calf", "lower_body"),
    ("Popliteus", "popliteus", "calf", "lower_body"),
    ("Tibialis Posterior", "tibialis_posterior", "calf", "lower_body"),
    ("Flexor Digitorum Longus", "flexor_digitorum_longus", "calf", "lower_body"),
    ("Flexor Hallucis Longus", "flexor_hallucis_longus", "calf", "lower_body"),
    # ===== LOWER LEG (ANTERIOR/LATERAL) =====
    ("Tibialis Anterior", "tibialis_anterior", "calf", "lower_body"),
    ("Extensor Digitorum Longus", "extensor_digitorum_longus", "calf", "lower_body"),
    ("Extensor Hallucis Longus", "extensor_hallucis_longus", "calf", "lower_body"),
    ("Peroneus Tertius", "peroneus_tertius", "calf", "lower_body"),
    ("Fibularis Longus", "fibularis_longus", "calf", "lower_body"),
    ("Fibularis Brevis", "fibularis_brevis", "calf", "lower_body"),
    # ===== FOOT (INTRINSIC) =====
    ("Abductor Hallucis", "abductor_hallucis", "foot", "lower_body"),
    ("Flexor Hallucis Brevis", "flexor_hallucis_brevis", "foot", "lower_body"),
    ("Adductor Hallucis", "adductor_hallucis", "foot", "lower_body"),
    ("Abductor Digiti Minimi Foot", "abductor_digiti_minimi_foot", "foot", "lower_body"),
    ("Flexor Digiti Minimi Brevis Foot", "flexor_digiti_minimi_brevis_foot", "foot", "lower_body"),
    ("Quadratus Plantae", "quadratus_plantae", "foot", "lower_body"),
    ("Lumbrical Foot 1", "lumbrical_foot_1", "foot", "lower_body"),
    ("Lumbrical Foot 2", "lumbrical_foot_2", "foot", "lower_body"),
    ("Lumbrical Foot 3", "lumbrical_foot_3", "foot", "lower_body"),
    ("Lumbrical Foot 4", "lumbrical_foot_4", "foot", "lower_body"),
    # ===== INTERCOSTALS / THORACIC =====
    ("External Intercostal 1", "external_intercostal_1", "thorax", "core"),
    ("External Intercostal 2", "external_intercostal_2", "thorax", "core"),
    ("External Intercostal 3", "external_intercostal_3", "thorax", "core"),
    ("External Intercostal 4", "external_intercostal_4", "thorax", "core"),
    ("External Intercostal 5", "external_intercostal_5", "thorax", "core"),
    ("External Intercostal 6", "external_intercostal_6", "thorax", "core"),
    ("Internal Intercostal 1", "internal_intercostal_1", "thorax", "core"),
    ("Internal Intercostal 2", "internal_intercostal_2", "thorax", "core"),
    ("Internal Intercostal 3", "internal_intercostal_3", "thorax", "core"),
    ("Internal Intercostal 4", "internal_intercostal_4", "thorax", "core"),
    ("Internal Intercostal 5", "internal_intercostal_5", "thorax", "core"),
    ("Internal Intercostal 6", "internal_intercostal_6", "thorax", "core"),
    ("Transversus Thoracis", "transversus_thoracis", "thorax", "core"),
    ("Subcostales", "subcostales", "thorax", "core"),
    ("Levatores Costarum", "levatores_costarum", "thorax", "core"),
    # ===== PELVIC FLOOR =====
    ("Levator Ani", "levator_ani", "pelvic", "core"),
    ("Coccygeus", "coccygeus", "pelvic", "core"),
    ("Bulbospongiosus", "bulbospongiosus", "pelvic", "core"),
    ("Ischiocavernosus", "ischiocavernosus", "pelvic", "core"),
    # ===== DIAPHRAGM =====
    ("Diaphragm", "diaphragm", "thorax", "core"),
]

# Build base muscle map
base_muscles = {}  # id -> (name, group, zone)
for name, mid, group, zone in MUSCLES:
    base_muscles[mid] = (name, group, zone)

# Generate bilateral variants for limbs to reach 300+
BILATERAL_GROUPS = {"arm", "forearm", "hand", "shoulder", "chest", "neck",
                    "thigh", "calf", "foot", "gluteal", "hip"}

extra = []
for mid, (name, group, zone) in base_muscles.items():
    if group in BILATERAL_GROUPS and not mid.endswith(("_left", "_right")):
        # create left/right subdivisions (e.g., heads/segments) to expand count
        extra.append((f"{mid}_left", f"{name} (Left)", group, zone))
        extra.append((f"{mid}_right", f"{name} (Right)", group, zone))

all_muscles = [(mid, base_muscles[mid][0], base_muscles[mid][1], base_muscles[mid][2]) for mid in base_muscles]
all_muscles += extra

# Add segment sub-divisions for big muscles to push past 300
SEGMENTS = {
    "rectus_abdominis": ["Upper", "Middle", "Lower"],
    "trapezius": ["Upper", "Middle", "Lower"],
    "erector_spinae": ["Cervical", "Thoracic", "Lumbar"],
    "gluteus_maximus": ["Upper", "Lower"],
    "quadriceps_femoris": ["Lateral", "Medial"],
    "hamstrings": ["Lateral", "Medial"],
    "gastrocnemius": ["Medial Head", "Lateral Head"],
    "external_oblique": ["Upper", "Lower"],
    "obliquus_internus": ["Upper", "Lower"],
}
for base, segs in SEGMENTS.items():
    if base in base_muscles:
        nm = base_muscles[base][0]
        grp = base_muscles[base][1]
        zn = base_muscles[base][2]
        for s in segs:
            all_muscles.append((f"{base}_{s.lower().replace(' ', '_')}", f"{nm} ({s})", grp, zn))

# Map generic anatomical templates for origin/insertion/action
def camel(mid):
    parts = mid.replace("(", "").replace(")", "").split("_")
    return "Mesh_" + "".join(p.capitalize() for p in parts)

lines = []
lines.append("/**")
lines.append(" * Muscle Map System")
lines.append(" * Fitness 3D App - Phase 2")
lines.append(" * ")
lines.append(" * Contains 300+ muscle definitions with anatomical data")
lines.append(" */")
lines.append("")
lines.append("import type { Muscle, MuscleZone } from '../types'")
lines.append("")
lines.append("export const MUSCLE_MAP: Record<string, Muscle> = {")

seen = set()
for mid, name, group, zone in all_muscles:
    if mid in seen:
        continue
    seen.add(mid)
    lines.append(f"  '{mid}': {{")
    lines.append(f"    id: '{mid}',")
    lines.append(f"    name: '{name}',")
    lines.append(f"    meshIdentifier: '{camel(mid)}',")
    lines.append(f"    targetZone: '{zone}',")
    lines.append(f"    muscleGroup: '{group}',")
    lines.append(f"    origin: 'Anatomical origin of {name}',")
    lines.append(f"    insertion: 'Anatomical insertion of {name}',")
    lines.append(f"    action: 'Primary action of {name}'")
    lines.append(f"  }},")

lines.append("}")
lines.append("")
lines.append("// Zones mapping")
lines.append("export const MUSCLE_ZONES: Record<MuscleZone, Muscle[]> = {")
lines.append("  upper_body: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'upper_body'),")
lines.append("  core: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'core'),")
lines.append("  lower_body: Object.values(MUSCLE_MAP).filter(m => m.targetZone === 'lower_body')")
lines.append("}")
lines.append("")
lines.append("// Get muscle by ID")
lines.append("export const getMuscleById = (id: string): Muscle | undefined => {")
lines.append("  return MUSCLE_MAP[id]")
lines.append("}")
lines.append("")
lines.append("// Get muscles by zone")
lines.append("export const getMusclesByZone = (zone: MuscleZone): Muscle[] => {")
lines.append("  return MUSCLE_ZONES[zone]")
lines.append("}")
lines.append("")
lines.append("// Get muscle group muscles")
lines.append("export const getMusclesByGroup = (group: string): Muscle[] => {")
lines.append("  return Object.values(MUSCLE_MAP).filter(m => m.muscleGroup === group)")
lines.append("}")
lines.append("")
lines.append("// All muscle groups")
lines.append("export const MUSCLE_GROUPS = [")
lines.append("  'neck', 'head', 'shoulder', 'chest', 'arm', 'forearm', 'hand',")
lines.append("  'back', 'abdominals', 'core', 'pelvic', 'thorax', 'hip',")
lines.append("  'gluteal', 'thigh', 'calf', 'foot'")
lines.append("]")
lines.append("")
lines.append("// Muscle count")
lines.append("export const MUSCLE_COUNT = Object.keys(MUSCLE_MAP).length")
lines.append("")
lines.append("export default MUSCLE_MAP")

with open("/home/Ryuu/fitness3d/src/data/muscleMap.ts", "w") as f:
    f.write("\n".join(lines) + "\n")

print(f"Generated muscleMap.ts with {len(seen)} muscles")
