# 🏗️ GitHub CLI APK Build Plan — 3D Fitness App

**Target:** `https://github.com/RyuuPyroXi/fitness3d.git`
**Goal:** Build a signed Android APK via GitHub Actions on first attempt
**Constraints:** Free GitHub Actions minutes, must work first time

---

## ⚠️ PRE-CHECKLIST — MUST BE COMPLETE BEFORE CREATING WORKFLOW

### 1. GitHub Authentication
```bash
# Required: gh must be authenticated
gh auth login --with-token <TOKEN>
# OR
gh auth login
```
**Current state:** ❌ `gh` is NOT authenticated (`You are not logged into any GitHub hosts`)

### 2. Repository Must Exist on GitHub
- ✅ Remote configured: `origin https://github.com/RyuuPyroXi/fitness3d.git`
- ❌ **Repository does NOT exist yet on GitHub** (`fatal: repository 'https://github.com/RyuuPyroXi/fitness3d.git/' not found`)
- **Must create the repo first:** `gh repo create fitness3d --public --source=. --remote=origin`

### 3. GitHub Token Required
- Memory states: "Provides GitHub tokens for builds" and "Retains plaintext tokens intentionally (C1/C2 security accepted)"
- Token must be added to `gh` auth OR as repo secret `GH_TOKEN`

### 4. Local Build Verification (DO THIS FIRST!)
```bash
cd /home/Ryuu/fitness3d
npm install --legacy-peer-deps
npx expo prebuild --platform android   # Generate Android project
npx react-native run-android           # Test local build
```
**This is critical — verify the app compiles locally BEFORE setting up CI!**

---

## 📋 PHASE 1: REPO SETUP (Do First)

### Step 1.1 — Create GitHub Repository
```bash
# Create the repo on GitHub
gh repo create fitness3d --public --source=/home/Ryuu/fitness3d --remote=origin --push

# Or if repo already exists as a placeholder:
# gh repo create fitness3d --public --source=/home/Ryuu/fitness3d --remote=origin --push
```

### Step 1.2 — Push All Code
```bash
cd /home/Ryuu/fitness3d
git add -A
git commit -m "fix: all TS errors resolved, dependencies installed, bugs fixed" --allow-empty
git push origin main
```

### Step 1.3 — Verify Remote
```bash
git remote -v
# Should show: origin https://github.com/RyuuPyroXi/fitness3d.git (fetch/push)
```

---

## 📋 PHASE 2: LOCAL BUILD VERIFICATION (Critical — Do Before CI!)

### Step 2.1 — Install Dependencies
```bash
cd /home/Ryuu/fitness3d
npm install --legacy-peer-deps
```

### Step 2.2 — Generate Android Project
```bash
npx expo prebuild --platform android
# This generates the android/ directory needed for CI
```

### Step 2.3 — Verify Build
```bash
# Check that the Android project was generated
ls -la android/
# Should show: app/, build.gradle, settings.gradle, etc.

# Verify TypeScript
npx tsc --noEmit
# Should show: 0 errors
```

### Step 2.4 — Check for Common CI Failures
- ✅ `android/` directory exists
- ✅ `android/app/build.gradle` exists
- ✅ `android/gradle/wrapper/gradle-wrapper.properties` exists
- ✅ `app.json` exists (for Expo config)
- ✅ `package.json` has correct scripts

---

## 📋 PHASE 3: GITHUB ACTIONS WORKFLOW CREATION

### Step 3.1 — Create Workflow Directory
```bash
mkdir -p .github/workflows
```

### Step 3.2 — Create Workflow File
Create `.github/workflows/android-build.yml` with the following content:

```yaml
name: Build Android APK

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:  # Allow manual triggers

env:
  NODE_VERSION: '18.x'
  EXPO_VERSION: '~51.0.39'

jobs:
  build-apk:
    runs-on: ubuntu-latest
    timeout-minutes: 30  # Free tier: 2000 min/month

    steps:
      # Checkout code
      - name: Checkout Repository
        uses: actions/checkout@v4

      # Setup Node.js
      - name: Setup Node.js ${{ env.NODE_VERSION }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      # Install Expo CLI
      - name: Install Expo CLI
        run: npm install -g expo-cli@~51.0.0

      # Install dependencies
      - name: Install Dependencies
        run: npm install --legacy-peer-deps

      # Prebuild Android project
      - name: Prebuild Android
        run: npx expo prebuild --platform android --no-install

      # Setup JDK for Android build
      - name: Setup JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      # Build APK
      - name: Build APK
        run: cd android && ./gradlew assembleDebug

      # Upload APK artifact
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: fitness3d-apk
          path: android/app/build/outputs/apk/debug/app-debug.apk
          retention-days: 7

      # Also upload the build ZIP
      - name: Upload Build ZIP
        uses: actions/upload-artifact@v4
        with:
          name: fitness3d-source
          path: fitness3d_build.zip
          retention-days: 7
```

### Step 3.3 — Create Build ZIP (for artifact upload)
```bash
cd /home/Ryuu/fitness3d
zip -r /tmp/fitness3d_build.zip . -x './node_modules/*' './.git/*' './android/*'
```

### Step 3.4 — Commit Workflow
```bash
git add .github/workflows/android-build.yml
git commit -m "ci: add GitHub Actions Android build workflow"
git push origin main
```

---

## 📋 PHASE 4: TRIGGER & VERIFY

### Step 4.1 — Trigger the Workflow
```bash
# Option A: Push a commit to trigger
git commit --allow-empty -m "ci: trigger build"
git push origin main

# Option B: Manual trigger via GitHub CLI
gh workflow run android-build.yml --ref main
```

### Step 4.2 — Monitor the Workflow
```bash
# Watch the workflow run
gh run watch

# Or check status
gh run list --limit 5

# View logs
gh run view <RUN_ID> --log
```

### Step 4.3 — Download the APK
```bash
# List artifacts
gh run download <RUN_ID> -n fitness3d-apk

# Or download by workflow run
gh api repos/RyuuPyroXi/fitness3d/actions/runs/<RUN_ID>/artifacts \
  --jq '.artifacts[] | select(.name=="fitness3d-apk") | .archive_download_url' \
  | xargs curl -L -o fitness3d-debug.apk
```

---

## 📋 PHASE 5: OPTIMIZATION (Save Free Minutes)

### 5.1 — Cache Dependencies
Add to workflow for faster builds:
```yaml
- name: Cache npm packages
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### 5.2 — Cache Android Gradle
```yaml
- name: Cache Gradle
  uses: actions/cache@v4
  with:
    path: ~/.gradle/caches
    key: ${{ runner.os }}-gradle-${{ hashFiles('android/**/*.gradle') }}
    restore-keys: |
      ${{ runner.os }}-gradle-
```

### 5.3 — Use `expo-build:android` Instead (If Available)
```yaml
# Alternative: Use Expo's built-in build (requires EAS)
- name: Build with EAS
  run: npx eas build --platform android --profile development
```

---

## ⚡ QUICK-START COMMANDS (Copy-Paste Ready)

```bash
# 1. Authenticate gh
gh auth login --with-token

# 2. Create repo
gh repo create fitness3d --public --source=/home/Ryuu/fitness3d --remote=origin --push

# 3. Push code
cd /home/Ryuu/fitness3d && git add -A && git commit -m "ci: initial" --allow-empty && git push origin main

# 4. Generate Android project
npx expo prebuild --platform android --no-install

# 5. Verify local build works
cd android && ./gradlew assembleDebug  # OR: npx react-native run-android

# 6. Create workflow directory and file
mkdir -p .github/workflows
# [Paste workflow YAML content]

# 7. Commit and push
git add .github/ && git commit -m "ci: add Android build" && git push origin main

# 8. Trigger build
gh workflow run android-build.yml --ref main

# 9. Watch build
gh run watch
```

---

## 🔍 TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| `gh: not authenticated` | Run `gh auth login` |
| `repository not found` | Run `gh repo create` first |
| `No matching package` | Check `npm view` for valid versions |
| `Gradle build fails` | Check `android/build.gradle` and `app/build.gradle` |
| `Expo prebuild fails` | Run `npx expo prebuild --clean` first |
| `Free minutes exhausted` | Use `ubuntu-latest` runner, cache dependencies |
| `Workflow times out` | Increase `timeout-minutes` or optimize steps |
| `APK too large` | Check `android/app/build.gradle` for proguard |
| `Missing android/ dir` | Run `npx expo prebuild` locally first |

---

## 📊 FREE TIER USAGE ESTIMATE

| Step | Estimated Time | Minutes Used |
|------|---------------|-------------|
| Checkout | ~10s | 0.2 |
| Setup Node | ~20s | 0.3 |
| npm install | ~5 min | 5.0 |
| Prebuild | ~3 min | 3.0 |
| Setup JDK | ~1 min | 1.0 |
| Gradle assembleDebug | ~8 min | 8.0 |
| Upload artifacts | ~10s | 0.2 |
| **Total per build** | **~17 min** | **~17 min** |

**Free tier:** 2,000 min/month (ubuntu-latest)
**Budget:** ~117 builds/month at 17 min each
**Recommendation:** Use `workflow_dispatch` for manual triggers to avoid wasting minutes on PRs during development.

---

## 🎯 SUCCESS CRITERIA

- [ ] `gh auth login` completed
- [ ] Repository `fitness3d` exists on GitHub
- [ ] Code pushed to `main` branch
- [ ] `android/` directory generated locally
- [ ] Local `./gradlew assembleDebug` succeeds
- [ ] `.github/workflows/android-build.yml` committed
- [ ] Workflow triggered and runs without errors
- [ ] `app-debug.apk` artifact uploaded
- [ ] APK downloaded and verified (installable on device)

**Do not proceed to the next phase until all items above are checked.**
