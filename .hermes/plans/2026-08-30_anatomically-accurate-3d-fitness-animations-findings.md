# Anatomically Accurate 3D Fitness Animations — Research Findings & Updated Plan

**Date:** 2026-08-30
**Status:** Research complete, ready to proceed with data acquisition

---

## Executive Summary

After extensive research, I found **5 viable sources** for anatomically accurate exercise animations, ranging from free (DeepMotion, Mixamo) to research-grade (Fit3D, FLAG3D) to commercial (TricksUp, MoveKit). The best path forward is a **tiered approach**: start with free/available options for immediate development, apply for research datasets for production quality, and consider commercial packs for exercises not covered by research data.

---

## Source Comparison Matrix

| Source | Exercises | Joints | License | Cost | Format | Status |
|---|---|---|---|---|---|---|
| **Fit3D** | 47 | 54 (SMPL-X) | Research only | Free | .npz → needs conversion | Access required |
| **FLAG3D** | 60 | 54 (SMPL-X) | Research only | Free | .npz → needs conversion | Access required |
| **DeepMotion** | Unlimited (from video) | 19-54 | Personal free / Paid commercial | Free tier: 60s/mo | GLB, FBX, BVH | **Available now** |
| **Mixamo** | ~20 exercise-specific | 19 | Free (Adobe) | Free | FBX → convert to GLB | **Available now** |
| **TricksUp Barbell Pack** | 50 barbell | Standard skeleton | Commercial | ~$50-100 | FBX | **Available now** |
| **TricksUp Kettlebell Pack** | 50 kettlebell | Standard skeleton | Commercial | ~$50-100 | FBX | **Available now** |
| **MoveKit** | 400+ | Standard skeleton | Commercial | Subscription | FBX | **Available now** |

---

## Detailed Source Analysis

### 1. Fit3D Dataset (Best Quality, Research Only)

**URL:** https://fit3d.imar.ro

**What it is:** Hollywood-grade motion capture dataset specifically for fitness exercises. 12-camera VICON system at 50fps, 13 subjects (1 licensed instructor + 12 trainees), 47 exercises covering all major muscle groups.

**Data format:** SMPL-X parameters (.npz files) with 54 joints, 10,475 vertices. Includes pose + shape parameters per frame.

**Exercises included:**
- Warmups (jumping jacks, high knees, etc.)
- Barbell (squat, bench press, deadlift, rows, etc.)
- Dumbbell (curls, presses, lunges, etc.)
- Equipment-free (push-ups, pull-ups, planks, etc.)
- Yoga/stretching

**Pros:**
- Gold standard for fitness motion capture
- SMPL-X 54 joints = anatomically correct
- Repetition segmentations included
- 3+ million frames of ground truth

**Cons:**
- Requires access approval (1-3 days)
- Research license only (non-commercial)
- 18GB download
- Needs conversion pipeline (SMPL-X → GLB)

**Conversion path:**
1. Download .npz files
2. Use ComfyUI SMPLToGLB node OR Python script with smplx + pygltflib
3. Export as GLB with embedded animation
4. Load in Three.js via GLTFLoader

**Action:** Register at fit3d.imar.ro → request access → download testing set (1.4GB)

---

### 2. DeepMotion Animate 3D (Best Free Option, Available Now)

**URL:** https://www.deepmotion.com/animate-3d

**What it is:** AI motion capture from video. Upload any exercise video → get 3D animation. Exports to GLB, FBX, BVH.

**Free tier:** 60 seconds/month, no credit card required. Free credit program lets you earn unlimited credits by labeling animations.

**How it works:**
1. Find exercise video on YouTube (or record yourself)
2. Upload to DeepMotion
3. AI extracts 3D motion
4. Export as GLB with skeleton + animation
5. Load in Three.js

**Pros:**
- Available immediately, no approval needed
- Can animate ANY exercise (just need a video)
- Exports directly to GLB
- Free credit program = potentially unlimited
- Works with custom characters

**Cons:**
- Quality depends on video source
- 60 seconds/month free (but earnable credits fix this)
- Not as clean as professional MoCap
- Hands/fingers may be inaccurate

**Best for:** Exercises not in Fit3D, quick prototyping, custom exercises.

**Action:** Sign up at portal.deepmotion.com → upload exercise videos → export GLBs

---

### 3. Mixamo (Free, Limited Exercise Selection)

**URL:** https://www.mixamo.com

**What it is:** Adobe's free animation library with 2500+ motion-captured clips and auto-rigging.

**Exercise-relevant animations:**
- Squat, Lunge, Push-up (some variations)
- Walk, Run, Jump (warmup)
- Dance, Fight (not exercise-specific)

**Pros:**
- Completely free, no registration for browsing
- Auto-rigging for custom characters
- FBX export (convert to GLB via trice3d.com)
- High quality motion capture

**Cons:**
- Very few exercise-specific animations
- Mostly game/fantasy focused
- 19-joint skeleton (not SMPL-X)

**Best for:** Warmup animations, placeholder clips, testing.

**Action:** Browse mixamo.com → download exercise-relevant FBX → convert to GLB

---

### 4. TricksUp Animation Packs (Commercial, Comprehensive)

**URL:** https://forums.unrealengine.com/t/tricksup-sport-barbell-animation-pack/2658626

**What it is:** Handcrafted keyframe animation packs specifically for fitness.

**Barbell Pack (50 exercises):**
- Squats (Back Squat, Front Squat, Hack Squat, etc.)
- Deadlifts (Conventional, Romanian, Sumo, etc.)
- Bench Press (Flat, Incline, Decline, Wide/Narrow grip)
- Overhead Press (Strict, Push Press, Jerk)
- Rows (Bent Over, Pendlay, etc.)
- Plus: Lunges, Good Mornings, Shrugs, etc.

**Kettlebell Pack (50 exercises):**
- Swings, Cleans, Snatches, Presses
- Goblet Squats, Turkish Get-Ups
- Lunges, Rows, etc.

**Pros:**
- Specifically designed for fitness
- 50 exercises per pack = 100 total
- Handcrafted keyframes = clean motion
- Commercial license available
- Works with Mixamo characters

**Cons:**
- Paid (~$50-100 per pack)
- Keyframe (not MoCap) = less organic
- Standard skeleton (not SMPL-X)

**Best for:** Production app with commercial license, exercises not in research datasets.

**Action:** Purchase from Unreal Marketplace → export FBX → convert to GLB

---

### 5. FLAG3D Dataset (Research, More Categories)

**URL:** https://andytang15.github.io/FLAG3D

**What it is:** 60 fitness activity categories with SMPL parameters + language instructions.

**Pros:**
- More categories than Fit3D (60 vs 47)
- Includes language instructions for proper form
- SMPL parameters included

**Cons:**
- Also requires access approval
- Research license only
- Similar conversion pipeline needed

**Best for:** Supplementing Fit3D with additional exercises.

---

## Recommended Strategy: Tiered Approach

### Tier 1: Immediate (Free, Available Now)
1. **DeepMotion** — sign up, upload exercise videos, export GLBs
2. **Mixamo** — download exercise-relevant animations
3. **CesiumMan** — keep as placeholder/fallback

**Target:** 10-15 exercises with reasonable quality

### Tier 2: Research Data (Free, Needs Approval)
1. **Fit3D** — apply for access, convert SMPL-X to GLB
2. **FLAG3D** — apply for additional exercises

**Target:** 47 exercises with Hollywood-grade accuracy

### Tier 3: Commercial (Paid, Production-Ready)
1. **TricksUp Barbell Pack** — 50 barbell exercises
2. **TricksUp Kettlebell Pack** — 50 kettlebell exercises
3. **MoveKit** — 400+ exercises (subscription)

**Target:** Full 79 exercises with commercial license

---

## Updated Implementation Plan

### Phase 1: Immediate Actions (This Week)

**Task 1.1: Sign up for DeepMotion**
- Go to https://portal.deepmotion.com
- Create free account
- Upload 5 exercise videos (squat, bench, deadlift, push-up, pull-up)
- Export as GLB
- Test in Three.js

**Task 1.2: Download Mixamo exercise animations**
- Browse https://www.mixamo.com
- Search: squat, lunge, push-up, etc.
- Download as FBX
- Convert to GLB via https://trice3d.com/convert

**Task 1.3: Request Fit3D access**
- Go to https://fit3d.imar.ro/user/register
- Create account
- Request dataset access
- Wait for approval (1-3 days)

### Phase 2: Conversion Pipeline (Week 1-2)

**Task 2.1: Set up SMPL-X model**
- Register at https://smpl-x.is.tue.mpg.de
- Download SMPL-X v1.1 neutral model
- Install: `pip install smplx torch`

**Task 2.2: Build SMPL-X → GLB converter**
- Option A: ComfyUI SMPLToGLB node
- Option B: Python script with smplx + pygltflib
- Test with sample data

**Task 2.3: Batch convert Fit3D exercises**
- Once Fit3D access granted
- Download testing set (1.4GB)
- Convert all 47 exercises to GLB
- Optimize for mobile (decimate, compress)

### Phase 3: Code Integration (Week 2-3)

**Task 3.1: Update 3D model loader**
- Support both CesiumMan (19 joint) and SMPL-X (54 joint)
- Lazy loading for exercise GLBs
- Cache management

**Task 3.2: Update ThreeCanvas**
- Render SMPL-X model
- Play exercise animations
- Region selection for 54-joint skeleton

**Task 3.3: Map exercises to animations**
- 47 Fit3D exercises → Fit3D GLBs
- 32 remaining → DeepMotion or procedural
- Fallback to CesiumMan walk cycle

### Phase 4: Testing & Optimization (Week 3)

**Task 4.1: Validate anatomical accuracy**
- Compare animations to reference videos
- Check joint angles at key positions
- Verify no hyperextension

**Task 4.2: Performance testing**
- Test on Android device
- Measure FPS (target: ≥30fps)
- Check memory usage (target: <500MB)

**Task 4.3: Build APK**
- EAS build
- Test on physical device

---

## Tools & Skills Available

| Tool | Purpose | Status |
|---|---|---|
| **three-js-3d-graphics skill** | Three.js/GLTF patterns, CesiumMan skeleton, region selection | ✅ Loaded |
| **pygltflib** | GLTF inspection and verification | ✅ Installed |
| **ComfyUI SMPLToGLB** | Convert SMPL-X .npz → animated GLB | 🔧 Needs setup |
| **Trice 3D** | Free online FBX → GLB converter | ✅ Available |
| **DeepMotion** | AI motion capture from video → GLB | ✅ Free tier |
| **Mixamo** | Free exercise animations | ✅ Available |
| **Fit3D** | Research dataset (47 exercises, SMPL-X) | ⏳ Access required |
| **FLAG3D** | Research dataset (60 exercises, SMPL-X) | ⏳ Access required |
| **TricksUp** | Commercial animation packs (100 exercises) | 💰 Paid |

---

## Open Questions for User

1. **Commercial vs Research** — Is this app commercial? (Affects Fit3D/FLAG3D license eligibility)
2. **Budget** — Willing to pay for TricksUp packs (~$100-200) if research data insufficient?
3. **Exercise priority** — Which 10 exercises matter most for MVP?
4. **Quality bar** — Is "good enough" (DeepMotion) acceptable, or must it be "Hollywood grade" (Fit3D)?

---

## Immediate Next Steps

1. ✅ Research complete — all viable sources identified
2. → Sign up for DeepMotion (free, immediate)
3. → Register for Fit3D (access required)
4. → Download Mixamo exercise animations
5. → Start conversion pipeline

**Plan saved at:** `.hermes/plans/2026-08-30_anatomically-accurate-3d-fitness-animations.md`
