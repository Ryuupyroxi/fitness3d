# Fitness 3D App
Interactive 3D Android Fitness Application

## Overview
This app provides an interactive 3D experience for fitness exercises, allowing users to:
- Select muscles through intuitive 3D raycasting
- View exercise demonstrations with smooth animations
- Track workout progress with MMKV storage
- Access posture tips during exercises

## Technology Stack
- **Framework:** React Native + Expo
- **3D Engine:** Three.js (expo-gl)
- **State Management:** Zustand
- **Storage:** React Native MMKV
- **Navigation:** React Navigation
- **UI:** React Native Paper + Custom Components

## Project Structure
```
fitness3d/
├── App.tsx                 # Main app entry point
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Git ignore rules
├── src/
│   ├── types/              # TypeScript interfaces
│   ├── store/              # Zustand state management
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic services
│   ├── data/               # Static data (muscle maps, exercises)
│   ├── navigation/         # React Navigation setup
│   └── screens/            # Screen components
├── assets/
│   ├── images/             # Static images
│   └── models/             # 3D GLTF/GLB models
├── __tests__/              # Jest test files
└── docs/                   # Documentation
```

## Getting Started
```bash
cd fitness3d
npm install
npm run dev
```

## Build Commands
```bash
# Development
npm run dev

# Android Development
npm run android

# Production Build
npm run build
```

## Features by Phase
See PLAN.md for detailed implementation phases.