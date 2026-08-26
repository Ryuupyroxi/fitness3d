/*
 * Navigation Setup for Fitness 3D App
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'

// Define Stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>()

// Screen components
export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Home Screen
    </View>
  )
}

export const MuscleSelectScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Muscle Select
    </View>
  )
}

export const ExerciseDetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Exercise Detail
    </View>
  )
}

export const DemoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      3D Demo
    </View>
  )
}

export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      Profile
    </View>
  )
}

// Routing setup
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MuscleSelect" component={MuscleSelectScreen} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
        <Stack.Screen name="Demo" component={DemoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

export type RootStackParamList = {
  Home: undefined,
  MuscleSelect: undefined,
  ExerciseDetail: { exerciseId: string },
  Demo: { muscleId: string; exerciseId: string },
  Profile: undefined
}