# 3D Model Status — Fitness 3D App

## Model Assets (assets/models/)

### body.glb — Anatomical Human (388 muscles) — 3.7 MB
- **Source:** Sketchfab "human anatomy" model
- **Format:** GLTF 2.0 binary (Khronos Blender exporter)
- **Nodes:** 1 | **Meshes:** 1 (`mesh_helmet_LP_13930damagedHelmet`) | **Skins:** 0 | **Anims:** 0
- **Vertices:** 14,556 | **Triangles:** 4,852
- **Textures:** 5 (embedded in buffer)
- **⚠️ CRITICAL ISSUE:** Single mesh — NOT split into 388 named muscle meshes
  - The `meshIdentifier` values in `muscleMap.ts` (e.g., `Mesh_PectoralisMajorLeft`) do NOT correspond to actual mesh names in this file.
  - The GLTF only has JOINTS_0/WEIGHTS_0 attributes on the helmet mesh (orphaned, not part of a human skeleton).
  - **This file cannot support muscle-by-muscle selection until it is re-rigged/split.**
- **Status:** Placeholder anatomy reference — NOT usable for muscle selection yet

### CesiumMan.glb — Rigged Animated Humanoid — 491 KB ✅ ADDED 2026-08-30
- **Source:** KhronosGroup glTF-Sample-Models (CesiumMan)
- **Format:** GLTF 2.0 binary
- **Nodes:** 22 | **Meshes:** 1 | **Skins:** 1 (19 joints) | **Anims:** 1
- **Skeleton:** Humanoid (torso, arms, legs, neck — 19 joints)
- **Animation:** Walk cycle, 57 channels (translation + rotation per joint), LINEAR interpolation
- **Attributes:** POSITION, NORMAL, TEXCOORD_0, **JOINTS_0, WEIGHTS_0** ✅ proper skinning
- **Status:** ✅ Ready for runtime animation — the FIRST actually animated, rigged model in the repo

## Model Requirements vs Reality

| Requirement | body.glb | CesiumMan.glb |
|---|---|---|
| Rigged (skin joints) | ❌ No skin | ✅ 19-joint skin |
| Animated | ❌ 0 animations | ✅ Walk animation |
| 388 named muscle meshes | ❌ 1 mesh total | ❌ 1 mesh (humanoid) |
| JOINTS_0/WEIGHTS_0 attrs | ⚠️ orphaned only | ✅ Properly attached |
| Muscle selection by name | ❌ Mesh names don't match | ❌ Single mesh |
| APK-ready | ⚠️ Included but useless | ✅ Bundled + loadable |

## What Needs to Happen (Next Steps)

1. **Use CesiumMan.glb as the runtime animated model** — it's the only file that actually animates. Replace body.glb references in `3dModelLoader.ts` with CesiumMan.glb for exercise demos.

2. **For muscle SELECTION, a new model is needed** — split into 388 named meshes, each skinned to the same 19-joint skeleton. Options:
   - Re-export the Sketchfab anatomy model with each muscle as a separate mesh named `Mesh_*` matching `muscleMap.ts`
   - Use CesiumMan topology + texture-based muscle highlighting (single mesh, select by region instead of by mesh name)
   - Build a custom model with 388 meshes in Blender/Maya

3. **Exercise animations** — each of the 79 exercises needs its own `animationClip`. CesiumMan has 1 walk cycle. We need 79 animation clips OR a single clip + speed modulation OR procedural animation from joint angles.

## Technical Notes
- `body.glb` JOINTS_0/WEIGHTS_0 exist but the mesh is a helmet — probably a Blender default scene that got exported accidentally.
- `muscleMap.ts` has 388 meshIdentifiers (172 single + 108 bilateral pairs = 388 total entries). **None exist in body.glb.**
- `exerciseRegistry.ts` has 79 exercises each referencing a unique `animationClip` (e.g., `bench_press_clip`). **None exist in any GLB in the repo.**
- `3dModelLoader.ts` loads `body.glb` per muscle call — will always hit the placeholder cube fallback with current assets.
