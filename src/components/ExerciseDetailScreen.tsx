/**
 * Exercise Detail Screen
 * Fitness 3D App - Phase 3: Data Layer
 * 
 * Shows detailed exercise information, muscle targets, and form tips
 */

import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated
} from 'react-native'
import { useAppStore } from '../store/useAppStore'
import { getMuscleById, getExercisesForMuscle } from '../data/muscleMap'
import { EXERCISE_REGISTRY } from '../data/exerciseRegistry'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'

const { width, height } = Dimensions.get('window')

interface ExerciseDetailProps {
  route: { params: { exerciseId: string } }
  navigation: any
}

export const ExerciseDetailScreen: React.FC<ExerciseDetailProps> = ({ route, navigation }) => {
  const { exerciseId } = route.params
  const [exercise, setExercise] = useState(EXERCISE_REGISTRY[exerciseId])
  const [selectedTab, setSelectedTab] = useState<'overview' | 'demo' | 'tips'>('overview')
  const [progress, setProgress] = useState(0)
  const animation = useState(new Animated.Value(0))[0]

  useEffect(() => {
    const ex = EXERCISE_REGISTRY[exerciseId]
    if (ex) {
      setExercise(ex)
      navigation.setOptions({ title: ex.name })
    }
  }, [exerciseId, navigation])

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const getMuscles = () => {
    if (!exercise?.muscles) return []
    return exercise.muscles.map(id => getMuscleById(id)).filter(Boolean) as any[]
  }

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      {(['overview' as const, 'demo' as const, 'tips' as const]).map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === tab && styles.tabActive]}
          onPress={() => setSelectedTab(tab)}
        >
          <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderOverView = () => {
    if (!exercise) return null
    const muscles = getMuscles()

    return (
      <Animated.ScrollView
        style={styles.scrollContent}
        contentContainerStyle={{ paddingBottom: 80 }}

      >
        <View style={styles.section}>
          <Text style={styles.title}>About</Text>
          <Text style={styles.description}>{exercise.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Target Muscles</Text>
          <View style={styles.muscleGrid}>
            {muscles.map((muscle) => (
              <View key={muscle.id} style={styles.muscleChip}>
                <Text style={styles.muscleName}>{muscle.name}</Text>
                <Text style={styles.muscleZone}>{muscle.targetZone}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Equipment</Text>
          <Text style={styles.infoItem}>{exercise.equipment}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Reps / Sets</Text>
          <Text style={styles.infoItem}>
            {exercise.repsRange?.[0]}-{exercise.repsRange?.[1]} reps
            {exercise.duration && ` • ${exercise.duration}s`}
          </Text>
        </View>
      </Animated.ScrollView>
    )
  }

  const renderDemo = () => {
    return (
      <View style={styles.tabContent as any}>
        <View style={styles.demoPlaceholder}>
          <Ionicons name="play-circle" size={80} color="#4A90E2" />
          <Text style={styles.demoText}>3D Animation Demo</Text>
          <Text style={styles.caption}>Connect to ThreeCanvas for live render</Text>
        </View>
      </View>
    )
  }

  const renderFormTips = () => {
    if (!exercise?.formTips) return null

    return (
      <Animated.ScrollView style={styles.scrollContent}>
        {exercise.formTips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Text style={styles.tipNumber}>{index + 1}</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerTitle}>{exercise?.name || 'Exercise'}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="share" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {renderTabs()}

      {selectedTab === 'overview' && renderOverView()}
      {selectedTab === 'demo' && renderDemo()}
      {selectedTab === 'tips' && renderFormTips()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  scrollContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  infoItem: {
    fontSize: 16,
    color: '#333',
  },
  muscleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  muscleChip: {
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  muscleName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2',
  },
  muscleZone: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  demoPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  demoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },
  caption: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  tipCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4A90E2',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '600',
    marginRight: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  tabContent: {
    paddingBottom: 20,
  },
})

export default ExerciseDetailScreen