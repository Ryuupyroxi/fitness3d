#!/usr/bin/env python3
"""
Generator for exercise registry (50+ exercises) mapped to valid muscle IDs.
Produces src/data/exerciseRegistry.ts
"""
EXERCISES = [
    # ===== CHEST =====
    ("bench_press", "Bench Press", "Classic upper body compound movement targeting the chest primarily, with secondary work for shoulders and triceps.", ["pectoralis_major", "deltoids", "triceps_brachii"], "weight_training", 8, "barbell", ["Keep feet flat on the floor, glutes on the bench", "Squeeze shoulder blades together before unracking", "Lower bar to mid-chest, not lower", "Elbows at 45 degree angle from torso", "Drive through heels to press up"]),
    ("push_ups", "Push-ups", "Bodyweight horizontal push movement. Scalable from knee push-ups to one-arm variations.", ["pectoralis_major", "triceps_brachii", "deltoids"], "bodyweight", 3, "bodyweight", ["Hands slightly wider than shoulders", "Body in a straight line from head to heels", "Lower until elbows touch ribs", "Focus on chest driving toward the floor"]),
    ("decline_push_ups", "Decline Push-ups", "Elevated feet push-up increases triceps and upper chest emphasis.", ["pectoralis_major", "triceps_brachii", "deltoids"], "bodyweight", 4, "bodyweight", ["Feet on elevated surface", "Keep elbows tucked close to body", "Maintain tight core throughout"]),
    ("incline_bench_press", "Incline Bench Press", "Upper chest development with anterior deltoid emphasis.", ["pectoralis_major", "deltoids"], "weight_training", 7, "barbell", ["Set bench at 30-45 degrees", "Grip slightly wider than neutral", "Arc path from mid-chest to shoulders"]),
    ("cable_crossovers", "Cable Flyes", "Isolation movement for chest stretch and peak contraction.", ["pectoralis_major"], "weight_training", 5, "cable_machine", ["Maintain slight bend in elbows", "Focus on pec squeeze at peak contraction", "Feet shoulder-width apart"]),
    ("dumbbell_flyes", "Dumbbell Flyes", "Stretch and isolation for the pectorals using a wide arc.", ["pectoralis_major"], "weight_training", 4, "dumbbell", ["Slight bend in elbows throughout", "Feel the stretch at the bottom", "Squeeze at top"]),
    ("dips_chest", "Chest Dips", "Bodyweight dip emphasizing lower chest with forward lean.", ["pectoralis_major", "triceps_brachii"], "bodyweight", 5, "bodyweight", ["Lean forward to target chest", "Lower until slight stretch", "Push through palms"]),
    # ===== BACK =====
    ("pull_ups", "Pull-ups", "King of upper body back exercises. Targets lats intensely.", ["latissimus_dorsi", "biceps_brachii"], "bodyweight", 6, "bodyweight", ["Dead hang at start - shoulders away from ears", "Pull chest to bar, not nose", "Squeeze lats at top", "Control descent"]),
    ("lat_pulldown", "Lat Pulldown", "Machine-assisted version of pull-up for back and lats.", ["latissimus_dorsi", "biceps_brachii"], "weight_training", 4, "cable_machine", ["Pull bar to upper chest", "Use back muscles, not arms", "Lift with shoulder blades first"]),
    ("barbell_rows", "Barbell Rows", "Horizontal pulling movement for mid-back thickness.", ["latissimus_dorsi", "rhomboids_major", "biceps_brachii"], "weight_training", 7, "barbell", ["Hinge at hips, back flat", "Pull to lower ribs", "Elbows stay close to body"]),
    ("face_pull", "Face Pull", "Rear delt and upper trap activation for posture correction.", ["trapezius", "rhomboids_major"], "weight_training", 3, "cable_machine", ["Pull toward face, thumbs up", "Squeeze rear delts", "Light weight, high reps"]),
    ("deadlift", "Deadlift", "Full-body hinge movement; posterior chain king.", ["gluteus_maximus", "hamstrings", "erector_spinae", "latissimus_dorsi"], "weight_training", 9, "barbell", ["Flat back throughout", "Bar close to body", "Drive through heels"]),
    ("seated_row", "Seated Cable Row", "Controlled horizontal pull for back thickness.", ["latissimus_dorsi", "rhomboids_major", "trapezius"], "weight_training", 5, "cable_machine", ["Squeeze shoulder blades", "Avoid rocking", "Full range of motion"]),
    ("pullup_neutral", "Neutral-Grip Pull-up", "Joint-friendly pull-up variant for lats and biceps.", ["latissimus_dorsi", "biceps_brachii"], "bodyweight", 6, "bodyweight", ["Neutral grip reduces shoulder strain", "Full hang at bottom", "Controlled tempo"]),
    ("good_mornings", "Good Mornings", "Hinge exercise isolating spinal erectors and hamstrings.", ["erector_spinae", "hamstrings", "gluteus_maximus"], "weight_training", 6, "barbell", ["Soft knees, flat back", "Hinge at hips", "Light weight focus"]),
    # ===== SHOULDERS & ARMS =====
    ("overhead_press", "Overhead Press", "Strict shoulder press standing. Tests core stability.", ["deltoids", "triceps_brachii", "trapezius"], "weight_training", 8, "barbell", ["Feet planted, core braced", "Bar path in line with ears", "Don't arch lower back"]),
    ("lateral_raises", "Lateral Raises", "Isolation movement for medial deltoids and shoulder width.", ["deltoids"], "weight_training", 3, "dumbbell", ["Slight bend in elbows", "Raise to shoulder height", "Don't swing"]),
    ("bicep_curl", "Bicep Curl", "Classic arm builder. Focus on mind-muscle connection.", ["biceps_brachii"], "weight_training", 2, "dumbbell", ["Elbows fixed at sides", "Full ROM with supination", "Don't use momentum"]),
    ("tricep_dips", "Tricep Dips", "Bodyweight triceps builder using parallel bars or bench.", ["triceps_brachii"], "bodyweight", 4, "bodyweight", ["Shoulders away from ears", "Lower until arms parallel", "Elbows point back"]),
    ("hammer_curl", "Hammer Curl", "Neutral-grip curl hitting brachialis and brachioradialis.", ["biceps_brachii", "brachialis", "brachioradialis"], "weight_training", 3, "dumbbell", ["Neutral grip", "Control the negative", "Elbows pinned"]),
    ("front_raise", "Front Raises", "Anterior deltoid isolation.", ["deltoids"], "weight_training", 3, "dumbbell", ["Raise to shoulder height", "Avoid swinging", "Engage core"]),
    ("rear_delt_fly", "Rear Delt Fly", "Posterior shoulder isolation with bent-over posture.", ["trapezius", "deltoids"], "weight_training", 3, "dumbbell", ["Hinge at hips", "Squeeze shoulder blades", "Light weight"]),
    ("tricep_pushdown", "Tricep Pushdown", "Cable isolation for triceps.", ["triceps_brachii"], "weight_training", 3, "cable_machine", ["Elbows at sides", "Full extension", "Avoid leaning"]),
    ("shrugs", "Dumbbell Shrugs", "Trap builder for upper back thickness.", ["trapezius"], "weight_training", 3, "dumbbell", ["Elevate shoulders to ears", "Hold squeeze", "Don't roll"]),
    ("preacher_curl", "Preacher Curl", "Isolation curl removing cheat momentum.", ["biceps_brachii", "brachialis"], "weight_training", 3, "barbell", ["Keep upper arms on pad", "Slow negative", "Full stretch"]),
    # ===== CORE =====
    ("plank", "Plank", "Foundation core stability exercise.", ["rectus_abdominis", "transversus_abdominis", "obliquus_externus"], "bodyweight", 2, "bodyweight", ["Elbows under shoulders", "Body straight", "Breathe steadily"]),
    ("hanging_leg_raise", "Hanging Leg Raise", "Lower abs and hip flexors. Progress from bent-knee to straight.", ["rectus_abdominis", "iliopsoas"], "bodyweight", 5, "bodyweight", ["Control descent", "Don't swing", "Full ROM"]),
    ("russian_twist", "Russian Twist", "Oblique targeting with rotational core control.", ["obliquus_externus", "obliquus_internus"], "bodyweight", 3, "bodyweight", ["Lower back pressed to floor", "Rotate from torso", "Controlled tempo"]),
    ("bicycle_crunches", "Bicycle Crunches", "Dynamic oblique and rectus abdominis exercise.", ["rectus_abdominis", "obliquus_externus"], "bodyweight", 3, "bodyweight", ["Elbow to opposite knee", "Don't overextend neck"]),
    ("dead_bugs", "Dead Bugs", "Core stability with limb coordination.", ["transversus_abdominis", "rectus_abdominis"], "bodyweight", 2, "bodyweight", ["Lying on back, knees bent 90", "Move opposite arm/leg", "Don't arch back"]),
    ("cable_crunch", "Cable Crunch", "Loaded spinal flexion for the rectus abdominis.", ["rectus_abdominis", "obliquus_externus"], "weight_training", 4, "cable_machine", ["Kneel stable", "Curl down, not just bend", "Squeeze at bottom"]),
    ("side_plank", "Side Plank", "Lateral core and oblique stability.", ["obliquus_externus", "obliquus_internus", "transversus_abdominis"], "bodyweight", 3, "bodyweight", ["Straight line body", "Lift hips", "Modify on knee if needed"]),
    ("mountain_climbers", "Mountain Climbers", "Dynamic core and cardio movement.", ["rectus_abdominis", "iliopsoas"], "bodyweight", 4, "bodyweight", ["Keep hips low", "Drive knees to chest", "Fast but controlled"]),
    ("leg_raise_floor", "Floor Leg Raise", "Lower-ab focused supine raise.", ["rectus_abdominis", "iliopsoas"], "bodyweight", 3, "bodyweight", ["Lower back flat", "Slow controlled", "Point toes"]),
    ("pallof_press", "Pallof Press", "Anti-rotation core stability.", ["transversus_abdominis", "obliquus_externus"], "weight_training", 3, "cable_machine", ["Resist rotation", "Press straight out", "Brace core"]),
    ("toe_touches", "Standing Toe Touches", "Flexibility and rectus abdominis activation.", ["rectus_abdominis", "obliquus_externus"], "stretches", 2, "bodyweight", ["Reach toward toes", "Don't bounce", "Breathe out"]),
    ("bird_dog", "Bird Dog", "Quadruped stability for spine and core.", ["erector_spinae", "gluteus_maximus", "transversus_abdominis"], "bodyweight", 2, "bodyweight", ["Extend opposite arm/leg", "Keep hips level", "Hold briefly"]),
    ("crunches", "Crunches", "Classic spinal flexion for the abs.", ["rectus_abdominis"], "bodyweight", 2, "bodyweight", ["Lift shoulder blades only", "Exhale up", "Don't pull neck"]),
    # ===== GLUTES / HIPS =====
    ("glute_bridge", "Glute Bridge", "Hip extension strength for glutes and hamstrings.", ["gluteus_maximus", "hamstrings"], "bodyweight", 2, "bodyweight", ["Squeeze glutes at top", "Don't hyperextend back", "Hold 2 seconds"]),
    ("hip_thrust", "Hip Thrust", "Advanced glute builder using bench and barbell.", ["gluteus_maximus", "hamstrings"], "weight_training", 5, "barbell", ["Upper back on bench", "Feet flat", "Squeeze at top"]),
    ("single_leg_rdl", "Single-Leg Romanian Deadlift", "Hamstring and glute balance exercise.", ["hamstrings", "gluteus_maximus"], "weight_training", 6, "dumbbell", ["Hinge at hips", "Soft knee", "Counterbalance with arm"]),
    ("clamshell", "Clamshell", "Hip abductor strengthening for glute medius stability.", ["gluteus_medius", "tensor_fasciae_latae"], "bodyweight", 1, "bodyweight", ["Lie on side, knees bent", "Lift top knee", "Don't rotate pelvis"]),
    ("fire_hydrant", "Fire Hydrant", "Gluteus medius and minimus activator.", ["gluteus_medius", "gluteus_minimus"], "bodyweight", 2, "bodyweight", ["Lift leg outward", "Keep torso still", "Squeeze glute"]),
    ("curl_up", "Abductor Machine", "Targeted glute medius machine work.", ["gluteus_medius"], "weight_training", 3, "machine", ["Press knees outward", "Controlled", "Squeeze at top"]),
    ("donkey_kicks", "Donkey Kicks", "Glute max isolation from all-fours.", ["gluteus_maximus"], "bodyweight", 2, "bodyweight", ["Drive heel to ceiling", "Keep back flat", "Squeeze"]),
    ("piriformis_stretch", "Piriformis Stretch", "External rotator mobility stretch.", ["piriformis", "gluteus_maximus"], "stretches", 2, "bodyweight", ["Cross ankle over knee", "Lean forward gently", "Breathe"]),
    ("cossack_squat", "Cossack Squat", "Lateral mobility and adductor stretch.", ["adductor_longus", "gluteus_medius", "quadriceps_femoris"], "bodyweight", 4, "bodyweight", ["Shift weight side to side", "Keep one leg straight", "Upright torso"]),
    ("hip_flexor_stretch", "Hip Flexor Stretch", "Opens anterior hip and iliopsoas.", ["iliopsoas", "psoas_major"], "stretches", 2, "bodyweight", ["Half-kneeling", "Tuck pelvis", "Lean forward"]),
    # ===== QUADS / THIGHS =====
    ("squat", "Squat", "King of lower body compound movements.", ["quadriceps_femoris", "gluteus_maximus", "hamstrings"], "weight_training", 7, "barbell", ["Barbell over midfoot", "Chest up", "Drive through heels"]),
    ("goblet_squat", "Goblet Squat", "Beginner-friendly front-loaded squat pattern.", ["quadriceps_femoris", "deltoids"], "weight_training", 4, "dumbbell", ["Hold weight close to chest", "Elbows forward", "Same form as barbell"]),
    ("lunges", "Walking Lunges", "Unilateral leg development, balance, and hip mobility.", ["quadriceps_femoris", "gluteus_maximus"], "bodyweight", 4, "bodyweight", ["Front knee at ankle", "Back knee taps floor", "Torso upright"]),
    ("leg_press", "Leg Press", "Machine compound for quads and glutes.", ["quadriceps_femoris", "gluteus_maximus"], "weight_training", 5, "machine", ["Full range", "Don't lock knees", "Drive through heels"]),
    ("leg_extension", "Leg Extension", "Isolation for the quadriceps.", ["quadriceps_femoris", "rectus_femoris", "vastus_lateralis"], "weight_training", 3, "machine", ["Full extension", "Control negative", "Squeeze quads"]),
    ("bulgarian_split_squat", "Bulgarian Split Squat", "Unilateral quad and glute builder.", ["quadriceps_femoris", "gluteus_maximus"], "bodyweight", 6, "bodyweight", ["Rear foot elevated", "Front heel planted", "Upright chest"]),
    ("front_squat", "Front Squat", "Quadriceps-dominant barbell squat.", ["quadriceps_femoris", "gluteus_maximus", "erector_spinae"], "weight_training", 8, "barbell", ["Elbows high", "Upright torso", "Brace core"]),
    ("step_up", "Step-Ups", "Functional unilateral leg drive.", ["quadriceps_femoris", "gluteus_maximus"], "bodyweight", 4, "bodyweight", ["Drive through heel", "Control descent", "Use a box"]),
    ("wall_sit", "Wall Sit", "Isometric quad endurance.", ["quadriceps_femoris"], "bodyweight", 3, "bodyweight", ["Thighs parallel", "Back flat", "Hold"]),
    ("sissy_squat", "Sissy Squat", "Advanced quad isolation.", ["quadriceps_femoris", "rectus_femoris"], "bodyweight", 6, "bodyweight", ["Lean back", "Knees track forward", "Controlled"]),
    ("pause_squat", "Pause Squat", "Squat with isometric hold at depth.", ["quadriceps_femoris", "gluteus_maximus"], "weight_training", 7, "barbell", ["Pause at bottom", "Explode up", "Stay tight"]),
    # ===== HAMSTRINGS =====
    ("romanian_deadlift", "Romanian Deadlift", "Hinge movement for hamstrings and glutes.", ["hamstrings", "gluteus_maximus"], "weight_training", 6, "barbell", ["Soft knees", "Hinge at hips", "Bar close"]),
    ("leg_curl", "Lying Leg Curl", "Isolation for hamstrings.", ["hamstrings", "biceps_femoris", "semitendinosus"], "weight_training", 3, "machine", ["Full curl", "Squeeze", "Slow negative"]),
    ("nordic_curl", "Nordic Hamstring Curl", "Eccentric hamstring builder.", ["hamstrings", "biceps_femoris"], "bodyweight", 5, "bodyweight", ["Lower slowly", "Use assist", "Control"]),
    ("good_morning_db", "Dumbbell Good Morning", "Hinge with dumbbells for spinal erectors.", ["erector_spinae", "hamstrings"], "weight_training", 5, "dumbbell", ["Hinge at hips", "Flat back", "Light load"]),
    # ===== CALVES =====
    ("calf_raise", "Standing Calf Raise", "Ankle plantarflexion strength.", ["gastrocnemius", "soleus"], "weight_training", 2, "dumbbell", ["Full ROM at bottom", "Pause at top", "Don't lock knees"]),
    ("seated_calf_raise", "Seated Calf Raise", "Soleus isolation for calf development.", ["soleus"], "weight_training", 2, "machine", ["Full stretch", "Higher reps", "Squeeze at top"]),
    ("calf_raise_single", "Single-Leg Calf Raise", "Unilateral calf stability.", ["gastrocnemius", "soleus"], "bodyweight", 3, "bodyweight", ["Balance", "Full range", "Slow"]),
    ("jump_squat", "Jump Squat", "Plyometric lower-body power.", ["quadriceps_femoris", "gluteus_maximus", "gastrocnemius"], "bodyweight", 5, "bodyweight", ["Soft landing", "Explode up", "Arm swing"]),
    # ===== FULL BODY / CONDITIONING =====
    ("burpee", "Burpee", "Full-body conditioning movement.", ["pectoralis_major", "quadriceps_femoris", "gluteus_maximus", "rectus_abdominis"], "bodyweight", 5, "bodyweight", ["Drop to plank", "Push up", "Jump"]),
    ("thruster", "Dumbbell Thruster", "Squat to press complex.", ["quadriceps_femoris", "deltoids", "gluteus_maximus"], "weight_training", 6, "dumbbell", ["Squat deep", "Press on stand", "Fluid motion"]),
    ("kettlebell_swing", "Kettlebell Swing", "Hip-hinge power for posterior chain.", ["gluteus_maximus", "hamstrings", "erector_spinae"], "weight_training", 6, "kettlebell", ["Hinge don't squat", "Snap hips", "Control"]),
    ("mountain_climber_x", "Cross-Body Mountain Climber", "Rotational core cardio.", ["obliquus_externus", "rectus_abdominis", "iliopsoas"], "bodyweight", 4, "bodyweight", ["Drive knee across", "Keep hips low", "Fast"]),
    ("bear_crawl", "Bear Crawl", "Quadruped core and shoulder stability.", ["rectus_abdominis", "deltoids", "sartorius"], "bodyweight", 4, "bodyweight", ["Knees near floor", "Move opposite limbs", "Stay low"]),
    ("wall_angel", "Wall Angels", "Posture drill for shoulders and upper back.", ["trapezius", "deltoids", "serratus_anterior"], "stretches", 2, "bodyweight", ["Back flat on wall", "Slide arms up", "Keep contact"]),
    ("cat_cow", "Cat-Cow", "Spinal mobility flow.", ["erector_spinae", "rectus_abdominis", "multifidus"], "stretches", 1, "bodyweight", ["Inhale arch", "Exhale round", "Slow"]),
    ("child_pose", "Child's Pose", "Restorative lower back stretch.", ["erector_spinae", "gluteus_maximus"], "stretches", 1, "bodyweight", ["Sit back on heels", "Reach forward", "Breathe"]),
    ("downward_dog", "Downward Dog", "Full posterior chain stretch.", ["hamstrings", "gastrocnemius", "erector_spinae"], "stretches", 2, "bodyweight", ["Hips high", "Heels reach down", "Flat back"]),
    ("hip_circle", "Hip Circle", "Dynamic glute activation.", ["gluteus_medius", "gluteus_maximus"], "bodyweight", 2, "bodyweight", ["Small steps", "Keep tension", "Controlled"]),
    ("rowing_machine", "Rowing Erg", "Cardio with posterior chain emphasis.", ["latissimus_dorsi", "hamstrings", "gluteus_maximus", "rectus_abdominis"], "bodyweight", 4, "machine", ["Drive with legs", "Swing body", "Pull to ribs"]),
    ("jump_lunge", "Jump Lunge", "Plyometric unilateral power.", ["quadriceps_femoris", "gluteus_maximus"], "bodyweight", 5, "bodyweight", ["Switch mid-air", "Soft landing", "Upright"]),
]

def to_reps(d):
    return [max(4, d - 3), d + 6]

lines = []
lines.append("/**")
lines.append(" * Exercise Registry")
lines.append(" * Fitness 3D App - Phase 2")
lines.append(" * ")
lines.append(" * Comprehensive database of 50+ exercises mapped to muscles")
lines.append(" * Works without 3D models - serves as fallback data source")
lines.append(" */")
lines.append("")
lines.append("import type { Exercise, ExerciseCategory } from '../types'")
lines.append("import { MUSCLE_MAP } from '../data/muscleMap'")
lines.append("")
lines.append("export const EXERCISE_REGISTRY: Record<string, Exercise> = {")

for (eid, name, desc, muscles, cat, diff, equip, tips) in EXERCISES:
    reps = to_reps(diff)
    lines.append(f"  '{eid}': {{")
    lines.append(f"    id: '{eid}',")
    lines.append(f"    name: '{name}',")
    # escape single quotes in desc
    desc = desc.replace("'", "\\'")
    lines.append(f"    description: '{desc}',")
    lines.append(f"    muscles: {muscles},")
    lines.append(f"    category: '{cat}',")
    lines.append(f"    difficultyRating: {diff},")
    lines.append(f"    equipment: '{equip}',")
    lines.append(f"    animationClip: '{eid}_clip',")
    tips_js = "[" + ", ".join(f"'{t.replace(chr(39), chr(92)+chr(39))}'" for t in tips) + "]"
    lines.append(f"    formTips: {tips_js},")
    if cat == "stretches":
        lines.append(f"    duration: 30,")
    else:
        lines.append(f"    repsRange: {reps},")
    lines.append(f"    imageKitId: '{eid}_img'")
    lines.append(f"  }},")

lines.append("}")
lines.append("")
lines.append("// Category helpers")
lines.append("export const EXERCISE_CATEGORIES: ExerciseCategory[] = [")
lines.append("  'stretches',")
lines.append("  'weight_training',")
lines.append("  'bodyweight'")
lines.append("]")
lines.append("")
lines.append("export const getExercisesByMuscle = (muscleId: string): Exercise[] => {")
lines.append("  return Object.values(EXERCISE_REGISTRY).filter(ex => ex.muscles.includes(muscleId))")
lines.append("}")
lines.append("")
lines.append("export const getExercisesByCategory = (category: ExerciseCategory): Exercise[] => {")
lines.append("  return Object.values(EXERCISE_REGISTRY).filter(ex => ex.category === category)")
lines.append("}")
lines.append("")
lines.append("export const getExercisesByDifficulty = (maxDifficulty: number): Exercise[] => {")
lines.append("  return Object.values(EXERCISE_REGISTRY).filter(ex => ex.difficultyRating <= maxDifficulty)")
lines.append("}")
lines.append("")
lines.append("export const TOTAL_EXERCISES = Object.keys(EXERCISE_REGISTRY).length")
lines.append("")
lines.append("export default EXERCISE_REGISTRY")

with open("/home/Ryuu/fitness3d/src/data/exerciseRegistry.ts", "w") as f:
    f.write("\n".join(lines) + "\n")

print(f"Generated exerciseRegistry.ts with {len(EXERCISES)} exercises")
