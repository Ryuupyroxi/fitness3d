# Anatomically Accurate 3D Fitness Animations — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Replace the CesiumMan placeholder (19 joints, procedural keyframes) with **anatomically accurate motion capture data** from the **Fit3D dataset** using the **SMPL-X model** (54 joints, 10,475 vertices) — so the app shows real fitness exercise animations with correct joint rotations for shoulders, spine, hips, and hands.

**Architecture:** Download Fit3D SMPL-X parameters → convert to animated GLB via ComfyUI SMPLToGLB → load in Three.js via GLTFLoader → map to 79 exercises in the existing procedural animation system → render in Expo GLView on Android.

**Tech Stack:** SMPL-X (54-joint body model), Fit3D (VICON MoCap), Three.js GLTFLoader, ComfyUI SMPLToGLB, Expo 51, React Native, TypeScript

**Current State:**
- CesiumMan.glb (19 joints, 491 KB) placeholder works but is NOT anatomically accurate
- 79 procedural keyframe animations defined but use crude joint angles
- Region-based selection works on single-mesh model
- demo.html shows the pipeline works

**Target State:**
- 47 Fit3D exercises with Hollywood-grade VICON motion capture
- SMPL-X 54-joint skeleton (vs 19) — proper shoulder, spine, hip, hand articulation
- Animated GLB files for each exercise loaded at runtime
- Region selection maps to accurate muscle groups on the denser skeleton

---

## Phase 1: Acquire Motion Capture Data

### Task 1: Request Fit3D Dataset Access

**Objective:** Get access to the Fit3D dataset (18GB train + 1.4GB test)

**Steps:**
1. Go to https://fit3d.imar.ro
2. Register for an account
3. Request dataset access
4. Wait for approval (usually 1-3 days)
5. Once approved, download the testing set (1.4GB) — contains SMPL-X parameters for all 47 exercises

**Files:**
- Download: `fit3d_testing_set.tar.gz` (1.4GB)
- Contains: SMPL-X `.npz` files per exercise per subject

**Verification:**
```bash
ls datasets/fit3d/testing/
# Should see directories for each exercise
```

### Task 2: Alternative — Source Pre-Converted SMPL-X GLBs

**Objective:** While waiting for Fit3D, find pre-converted SMPL-X exercise animations

**Sources to check:**
1. **Mixamo** (https://www.mixamo.com) — has "Exercise" category animations (squats, push-ups, etc.)
2. **DeepMotion** (https://www.deepmotion.com/animate-3d) — AI motion capture from video, exports GLB
3. **ArtStation** search "gym exercise animations 3D" — some artists share clips
4. **CGTrader / TurboSquid** — purchasable exercise animation packs
5. **YouTube** → DeepMotion: record exercise video → export GLB

**Files:**
- Download at least 10 exercise animations as GLB/FBX
- Convert to GLB via https://trice3d.com/convert (free, in-browser)

**Verification:**
- Each GLB loads in Three.js
- Has skeleton with ≥19 joints
- Animation plays correctly

### Task 3: Set Up SMPL-X Model Locally

**Objective:** Install SMPL-X model for parameter → mesh conversion

**Steps:**
1. Register at https://smpl-x.is.tue.mpg.de
2. Download SMPL-X v1.1 neutral model
3. Install Python package:
```bash
pip install smplx
pip install torch  # if not already installed
```

**Files:**
- `smplx_body_models/smplx/SMPLX_NEUTRAL.npz`
- `smplx_body_models/smplx/SMPLX_NEUTRAL.pkl`

**Verification:**
```python
import smplx
model = smplx.create('smplx_body_models/', model_type='smplx', gender='neutral')
print(model.J_regressor.shape)  # Should be (54, 10475)
```

---

## Phase 2: Convert Motion Capture to Animated GLB

### Task 4: Convert Fit3D SMPL-X Parameters to GLB

**Objective:** Transform SMPL-X `.npz` files into animated GLB files for Three.js

**Option A: ComfyUI SMPLToGLB (Recommended)**
1. Install ComfyUI (https://github.com/comfyanonymous/ComfyUI)
2. Install ComfyUI-MotionCapture custom node
3. Use SMPLToGLB node:
   - Input: `.npz` file from Fit3D
   - Output: animated GLB with skeleton + mesh + animation tracks
   - FPS: 50 (matches Fit3D capture rate)

**Option B: Python Script with smplx + pygltflib**
```python
import numpy as np
import smplx
import torch
from pygltflib import GLTF2

# Load SMPL-X model
model = smplx.create('models/', model_type='smplx', gender='neutral')

# Load Fit3D parameters
data = np.load('fit3d_exercise.npz')
poses = data['poses']  # (N, 165) — 54 joints * 3
betas = data['betas']  # (10,) shape parameters
transl = data['transl']  # (N, 3) translation

# Generate mesh per frame
for i in range(len(poses)):
    output = model(
        torch.tensor(poses[i:i+1]),
        betas=torch.tensor(betas),
        transl=torch.tensor(transl[i:i+1])
    )
    vertices = output.vertices.detach().numpy()
    joints = output.joints.detach().numpy()  # (1, 54, 3)
    # ... export as GLB with animation tracks
```

**Files:**
- Create: `scripts/smplx_to_glb.py`
- Input: `datasets/fit3d/testing/**/*.npz`
- Output: `assets/models/exercises/{exercise_id}.glb`

**Verification:**
```python
from pygltflib import GLTF2
g = GLTF2().load('assets/models/exercises/squat.glb')
print(f"anims: {len(g.animations)}, skins: {len(g.skins)}, nodes: {len(g.nodes)}")
# Expected: anims=1, skins=1, nodes≥54
```

### Task 5: Batch Convert All 47 Exercises

**Objective:** Convert every Fit3D exercise to a separate GLB file

**Steps:**
1. Iterate over Fit3D testing set directories
2. For each exercise, pick the instructor's repetition (best form)
3. Convert to GLB with 50fps animation
4. Optimize: reduce to 30fps, compress with meshopt
5. Name files matching exercise IDs in `exerciseRegistry.ts`

**Files:**
- Create: `scripts/batch_convert_fit3d.sh`
- Output: `assets/models/exercises/{exercise_id}.glb` (47 files)

**Verification:**
```bash
ls assets/models/exercises/ | wc -l
# Should be 47
```

---

## Phase 3: Upgrade Three.js Code for SMPL-X

### Task 6: Update 3D Model Loader for SMPL-X GLBs

**Objective:** Replace CesiumMan loader with SMPL-X GLB loader

**Files:**
- Modify: `src/services/3dModelLoader.ts`

**Changes:**
```typescript
// Add SMPL-X joint mapping (54 joints vs CesiumMan's 19)
const SMPLX_JOINTS = {
  pelvis: 0, spine1: 1, spine2: 2, spine3: 3,
  neck: 4, head: 5, leftEye: 6, rightEye: 7,
  jaw: 8, leftShoulder: 9, leftElbow: 10, leftWrist: 11,
  // ... 42 more joints including fingers
};

// Load exercise GLB
async loadExerciseGLB(exerciseId: string): Promise<GLTFModel> {
  return this.loadModel(`assets/models/exercises/${exerciseId}.glb`);
}
```

**Verification:**
```bash
npx tsc --noEmit
# Should pass
```

### Task 7: Update ThreeCanvas for SMPL-X Skeleton

**Objective:** Render SMPL-X model with 54-joint skeleton and exercise animations

**Files:**
- Modify: `src/components/ThreeCanvas.tsx`

**Changes:**
1. Load SMPL-X GLB instead of CesiumMan
2. Scale model to fit viewport (SMPL-X is ~1.7m tall)
3. Update animation mixer for 54-joint skeleton
4. Update region selection bounding boxes for SMPL-X proportions
5. Add finger-level highlight for hand exercises

**Verification:**
- Model loads and displays
- Walk cycle plays by default
- Exercise animation plays on selection
- Region selection works on denser skeleton

### Task 8: Update Region Selection for SMPL-X Proportions

**Objective:** Adjust 3D bounding boxes to match SMPL-X body proportions

**Files:**
- Modify: `src/services/regionSelector.ts`

**Changes:**
- SMPL-X is taller (1.7m vs CesiumMan's 1.5m)
- Joint positions differ — update `BODY_REGIONS` centers/half-extents
- Add finger regions for hand exercises
- Add jaw/neck regions for facial exercises

**Verification:**
- Click on chest → highlights chest region
- Click on left hand → highlights left hand region
- Click on face → highlights neck/jaw region

---

## Phase 4: Map Exercises to Motion Capture Data

### Task 9: Map 79 Exercises to 47 Fit3D Clips

**Objective:** Each of the 79 exercises in the registry needs an animation source

**Mapping strategy:**
- 47 exercises → direct Fit3D match (use Fit3D GLB)
- 32 exercises → closest Fit3D match with procedural adjustment
- Remaining → procedural keyframes (fallback)

**Files:**
- Create: `src/data/exerciseToFit3dMapping.ts`

**Content:**
```typescript
export const EXERCISE_FIT3D_MAP: Record<string, string> = {
  squat: 'squat',           // Direct match
  bench_press: 'bench_press',
  deadlift: 'deadlift',
  push_ups: 'pushup',
  pull_ups: 'pullup',
  bicep_curl: 'bicep_curl',
  // ... map all 79
  // For exercises without Fit3D match, use procedural:
  plank: '__procedural__',
  burpee: '__procedural__',
};
```

**Verification:**
```bash
npx tsc --noEmit
# Should pass
```

### Task 10: Build Hybrid Animation System

**Objective:** Support both Fit3D GLB animations AND procedural keyframes

**Files:**
- Modify: `src/services/proceduralAnimation.ts`

**Changes:**
```typescript
export function getAnimationForExercise(exerciseId: string): THREE.AnimationClip | null {
  // 1. Check if Fit3D GLB exists
  const fit3dPath = `assets/models/exercises/${exerciseId}.glb`;
  if (fileExists(fit3dPath)) {
    // Load from GLB (async — return cached clip)
    return loadClipFromGLB(fit3dPath);
  }
  
  // 2. Fall back to procedural keyframes
  const animDef = EXERCISE_ANIMATIONS[exerciseId];
  if (animDef) {
    return getExerciseClip(animDef);
  }
  
  // 3. Final fallback: walk cycle
  return null;
}
```

**Verification:**
- Squat plays Fit3D motion capture
- Plank plays procedural keyframes
- Unknown exercise plays walk cycle

---

## Phase 5: Performance Optimization

### Task 11: Optimize GLB Files for Mobile

**Objective:** Reduce file sizes for Android APK (target <50MB total)

**Steps:**
1. Reduce polygon count (decimate to 50% — SMPL-X has 10,475 verts, can reduce to ~5,000)
2. Compress textures (if any) to 512x512
3. Reduce animation fps from 50 to 30
4. Use meshopt compression
5. Split into on-demand chunks (don't bundle all 47 in APK)

**Tools:**
- https://trice3d.com/convert (meshopt compression)
- Blender (decimate modifier)

**Verification:**
```bash
du -sh assets/models/exercises/
# Should be <50MB total
```

### Task 12: Implement Lazy Loading

**Objective:** Only load exercise GLBs when needed (not all at startup)

**Files:**
- Modify: `src/services/3dModelLoader.ts`

**Changes:**
```typescript
// Load on demand, cache after first load
private cache = new Map<string, GLTFModel>();

async loadExercise(exerciseId: string): Promise<GLTFModel> {
  if (this.cache.has(exerciseId)) return this.cache.get(exerciseId)!;
  
  const model = await this.loadModel(`assets/models/exercises/${exerciseId}.glb`);
  this.cache.set(exerciseId, model);
  return model;
}

// Preload next exercise in background
preloadExercise(exerciseId: string): void {
  if (!this.cache.has(exerciseId)) {
    this.loadExercise(exerciseId);  // fire and forget
  }
}
```

**Verification:**
- App starts in <2s
- First exercise loads in <500ms
- Subsequent exercises load instantly (cached)

---

## Phase 6: Testing & Validation

### Task 13: Validate Anatomical Accuracy

**Objective:** Verify that Fit3D animations show correct exercise form

**Checklist for each exercise:**
- [ ] Squat: hips go below knees, back stays straight
- [ ] Bench press: bar touches chest, elbows at 45°
- [ ] Deadlift: bar close to body, neutral spine
- [ ] Push-up: body straight line, full range of motion
- [ ] Pull-up: chin over bar, controlled descent
- [ ] Plank: straight line head to heels
- [ ] Lunge: front knee over ankle, back knee near floor

**Method:**
1. Side-by-side comparison: Fit3D animation vs YouTube reference video
2. Check joint angles at key positions
3. Verify no joint hyperextension or impossible poses

### Task 14: Test on Android Device

**Objective:** Verify performance on target hardware

**Steps:**
1. Build debug APK: `cd android && ./gradlew assembleDebug`
2. Install on Android device
3. Test:
   - App launches without crash
   - Model loads and animates at ≥30fps
   - Touch selection works
   - Exercise switching is smooth
   - No memory leaks after 10+ exercises

**Verification:**
- FPS counter shows ≥30fps
- No jank or stuttering
- Memory usage stays <500MB

---

## Phase 7: APK Build

### Task 15: Build Production APK

**Objective:** Generate signed APK for distribution

**Steps:**
1. Create `eas.json` with proper projectId
2. Run EAS build: `eas build --platform android --profile production`
3. Download APK
4. Test on physical device

**Files:**
- Create: `eas.json`
- Output: `fitness3d-production.apk`

**Verification:**
- APK installs and runs
- All 79 exercises playable
- No crashes after 30 minutes of use

---

## Available Tools & Skills

| Tool/Skill | Purpose | URL |
|---|---|---|
| **Fit3D Dataset** | 47 exercises, VICON MoCap, SMPL-X | https://fit3d.imar.ro |
| **SMPL-X Model** | 54-joint anatomical body model | https://smpl-x.is.tue.mpg.de |
| **ComfyUI SMPLToGLB** | Convert SMPL-X .npz → animated GLB | comfyai.run/documentation/SMPLToGLB |
| **Trice 3D** | Free online FBX/OBJ → GLB converter | https://trice3d.com/convert |
| **DeepMotion** | AI motion capture from video → GLB | https://www.deepmotion.com/animate-3d |
| **Mixamo** | 2500+ free animations + auto-rigging | https://www.mixamo.com |
| **FLAG3D** | 60 fitness categories + language | https://andytang15.github.io/FLAG3D |
| **pygltflib** | Python GLTF inspection/verification | `uv pip install pygltflib` |
| **three-js-3d-graphics skill** | Three.js/GLTF patterns for this repo | (already loaded) |

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Fit3D access denied | Can't get best data | Use Mixamo + DeepMotion as backup |
| SMPL-X too heavy for mobile | APK too large, slow loading | Decimate mesh, reduce fps, lazy load |
| 54-joint skeleton breaks existing code | Region selection fails | Update bounding boxes, test thoroughly |
| Fit3D license restrictions | Can't distribute commercially | Use for dev, switch to Mixamo for production |
| GLB conversion fails | No animations | Use pre-converted Mixamo clips as fallback |

---

## Open Questions

1. **Fit3D access timeline** — how long will approval take?
2. **Commercial use** — is this app commercial or personal/research?
3. **Exercise priority** — which 10 exercises matter most for MVP?
4. **APK size budget** — what's the max acceptable APK size?

---

## Next Steps

1. **Start Phase 1 immediately** — request Fit3D access (takes days)
2. **In parallel** — download Mixamo exercise animations as backup
3. **Set up SMPL-X** — install model and test conversion pipeline
4. **Implement Phase 2** — batch convert to GLB
5. **Upgrade code** — Tasks 6-10 for SMPL-X support
6. **Test & build** — Tasks 13-15

**Estimated timeline:** 2-3 weeks (depending on Fit3D approval)
