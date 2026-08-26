import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

// Screens
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text>3D Fitness App</Text>
    <Text>Select a muscle to begin</Text>
  </View>
)

const MuscleSelectScreen = () => (
  <View style={styles.screen}>
    <Text>Muscle Selection</Text>
  </View>
)

const ExerciseDetailScreen = () => (
  <View style={styles.screen}>
    <Text>Exercise Detail</Text>
  </View>
)

const DemoScreen = () => (
  <View style={styles.screen}>
    <Text>3D Demo</Text>
  </View>
)

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>Profile</Text>
  </View>
)

// Navigation types
export type RootStackParamList = {
  Home: undefined
  MuscleSelect: undefined
  ExerciseDetail: { exerciseId: string }
  Demo: { exerciseId: string }
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4A90E2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Fitness 3D' }}
          />
          <Stack.Screen 
            name="MuscleSelect" 
            component={MuscleSelectScreen} 
            options={{ title: 'Select Muscle' }}
          />
          <Stack.Screen 
            name="ExerciseDetail" 
            component={ExerciseDetailScreen} 
            options={{ title: 'Exercise' }}
          />
          <Stack.Screen 
            name="Demo" 
            component={DemoScreen} 
            options={{ title: 'Demo' }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Profile' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})