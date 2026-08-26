/**
 * Muscle Selection Screen
 * Fitness 3D App - Phase 3: Data Layer
 * 
 * Grid/list view of all muscles organized by zone
 */

import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  SectionList,
} from 'react-native'
import { MUSCLE_MAP, MUSCLE_ZONES, getMusclesByZone } from '../data/muscleMap'
import { useAppStore } from '../store/useAppStore'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

type MuscleZone = 'upper_body' | 'core' | 'lower_body'

const ZONE_LABELS: Record<MuscleZone, string> = {
  upper_body: 'Upper Body',
  core: 'Core',
  lower_body: 'Lower Body',
}

const ZONE_ICONS: Record<MuscleZone, string> = {
  upper_body: 'person',
  core: 'heart',
  lower_body: 'walk',
}

export const MuscleSelectScreen: React.FC<any> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedZone, setSelectedZone] = useState<MuscleZone | null>(null)
  const selectMuscle = useAppStore((state) => state.selectMuscle)

  const filteredMuscles = Object.values(MUSCLE_MAP).filter((muscle) => {
    const matchesSearch = muscle.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesZone = selectedZone ? muscle.targetZone === selectedZone : true
    return matchesSearch && matchesZone
  })

  const groupedMuscles = filteredMuscles.reduce((acc, muscle) => {
    const zone = muscle.targetZone
    if (!acc[zone]) acc[zone] = []
    acc[zone].push(muscle)
    return acc
  }, {} as Record<MuscleZone, typeof filteredMuscles>)

  const sections = Object.entries(groupedMuscles)
    .filter(([, muscles]) => muscles.length > 0)
    .map(([zone, muscles]) => ({
      title: ZONE_LABELS[zone as MuscleZone],
      data: muscles as any[],
    }))

  const renderMuscleItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.muscleItem}
      onPress={() => {
        selectMuscle(item)
        navigation.navigate('Demo', { muscleId: item.id })
      }}
    >
      <View style={styles.muscleBadge}>
        <Ionicons name="bonemeal" size={24} color="#4A90E2" />
      </View>
      <View style={styles.muscleInfo}>
        <Text style={styles.muscleName}>{item.name}</Text>
        <Text style={styles.muscleGroup}>{item.muscleGroup}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#999" />
    </TouchableOpacity>
  )

  const renderSectionHeader = ({ section }: any) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.title}>Select a Muscle</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={32} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search muscles..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.zoneFilters}>
        {([null, ...Object.keys(ZONE_LABELS) as MuscleZone[]]).map((zone) => (
          <TouchableOpacity
            key={zone || 'all'}
            style={[
              styles.zoneChip,
              selectedZone === zone && styles.zoneChipActive,
            ]}
            onPress={() => setSelectedZone(zone)}
          >
            <Ionicons
              name={zone ? ZONE_ICONS[zone] : 'list'}
              size={16}
              color={selectedZone === zone ? '#fff' : '#4A90E2'}
            />
            <Text
              style={[
                styles.zoneText,
                selectedZone === zone && styles.zoneTextActive,
              ]}
            >
              {zone ? ZONE_LABELS[zone] : 'All'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <SectionList
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderMuscleItem}
        keyExtractor={(item) => item.id}
        stickySectionHeaders={false}
        contentContainerStyle={styles.listContent}
      />
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  zoneFilters: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 8,
  },
  zoneChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  zoneChipActive: {
    backgroundColor: '#4A90E2',
  },
  zoneText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
  zoneTextActive: {
    color: '#fff',
  },
  listContent: {
    paddingBottom: 80,
  },
  sectionHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  muscleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  muscleBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  muscleInfo: {
    flex: 1,
  },
  muscleName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  muscleGroup: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
})

export default MuscleSelectScreen