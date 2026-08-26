/**
 * Navigation Setup for Fitness 3D App
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Screen components (to be implemented)
export const HomeScreen = () => {
  const { view } = require('react-native')
  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Home Screen
    </view>
  )
}

export const MuscleSelectScreen = () => {
  const { view } = require('react-native')
  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Muscle Select
    </view>
  )
}

export const ExerciseDetailScreen = () => {
  const { view } = require('react-native')
  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Exercise Detail
    </view>
  )
}

export const DemoScreen = () => {
  const { view } = require('react-native')
  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      3D Demo
    </view>
  )
}

export const ProfileScreen = () => {
  const { view } = require('react-native')
  return (
    <view style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Profile
    </view>
  )
}

export type RootStackParamList = {
  Home: undefined
  MuscleSelect: undefined
  ExerciseDetail: { exerciseId: string }
  Demo: { muscleId: string; exerciseId: string }
  Profile: undefined
}

export type RootStackNavigatorProps = {
  initialRouteName?: keyof RootStackParamList
}