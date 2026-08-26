/**
 * Test suite for Highlight Engine
 */
import HighlightEngine from '../src/services/highlightEngine'
import * as THREE from 'three'
import { MUSCLE_MAP } from '../src/data/muscleMap'

describe('HighlightEngine', () => {
  let engine: HighlightEngine
  let mesh: THREE.Mesh

  beforeEach(() => {
    engine = new HighlightEngine()
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x4a90e2 })
    )
  })

  it('should instantiate', () => {
    expect(engine).toBeDefined()
  })

  it('should highlight a muscle mesh', () => {
    engine.highlight(mesh, MUSCLE_MAP['biceps_brachii'])
    const material = mesh.material as THREE.MeshStandardMaterial
    expect(material.color.getHex()).toBe(0xff5733)
  })

  it('should clear highlight and revert color', () => {
    engine.highlight(mesh, MUSCLE_MAP['biceps_brachii'])
    engine.clearHighlight()
    const material = mesh.material as THREE.MeshStandardMaterial
    expect(material.color.getHex()).toBe(0x4a90e2)
  })

  it('should set new options', () => {
    engine.setOptions({ color: 0x00ff00 })
    engine.highlight(mesh, MUSCLE_MAP['biceps_brachii'])
    const material = mesh.material as THREE.MeshStandardMaterial
    expect(material.color.getHex()).toBe(0x00ff00)
  })
})
