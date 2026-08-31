# Free-Only Anatomically Accurate 3D Fitness Animations — Research Findings

**Date:** 2026-08-30
**Constraint:** $0 budget — free sources only

---

## Free Sources Available

| Source | Exercises | Joints | Format | Status |
|---|---|---|---|---|
| **Fit3D** | 47 | 54 (SMPL-X) | .npz → convert | Access required (1-3 days) |
| **FLAG3D** | 60 | 54 (SMPL-X) | .npz → convert | Access required |
| **DeepMotion** | Unlimited (from video) | 19-54 | GLB, FBX, BVH | **Free tier: 60s/mo + earn unlimited** |
| **Mixamo** | ~20 exercise-specific | 19 | FBX → convert | **Free now** |
| **MotionMillion (HF)** | 26.4% fitness of 2000+ hrs | SMPL | .tar.gz | **Free download** |
| **CesiumMan** | 1 walk cycle | 19 | GLB | **Free now (MIT)** |

---

## Key Finding: DeepMotion Free Credit Program = Unlimited Free Animations

DeepMotion's free tier gives 60 seconds/month, but their **Free Animation Credit Program** lets you earn unlimited credits:
1. Upload exercise video → get animation
2. Add text description → earn labeling credits (100% of cost back)
3. Correct animation in editor → earn correction credits (100% of cost back)
4. **Result: unlimited free animations**

This means we can convert ANY exercise video (YouTube, phone recording) into a GLB animation for free.

---

## Recommended Free Strategy

### Immediate (Today)
1. **Mixamo** — download exercise-relevant FBX files, convert to GLB via trice3d.com
2. **DeepMotion** — sign up, upload exercise videos, earn credits for unlimited GLBs
3. **CesiumMan** — keep as placeholder/fallback

### This Week
4. **Fit3D** — request access at fit3d.imar.ro (research license, free)
5. **FLAG3D** — request access at andytang15.github.io/FLAG3D (research license, free)
6. **MotionMillion** — download from Hugging Face (includes fitness category)

### Conversion Pipeline (Free)
- **ComfyUI SMPLToGLB** — converts SMPL-X .npz → animated GLB
- **Trice 3D** — free online FBX → GLB converter
- **Python script** — smplx + pygltflib for batch conversion

---

## Action Plan

1. ✅ Research complete — identified all free sources
2. → Sign up for DeepMotion (free, immediate)
3. → Download Mixamo exercise animations
4. → Request Fit3D + FLAG3D access
5. → Download MotionMillion fitness subset from Hugging Face
6. → Build conversion pipeline (SMPL-X → GLB)
7. → Integrate into Three.js code

**No money required.** All sources are free (research licenses or MIT open source).
