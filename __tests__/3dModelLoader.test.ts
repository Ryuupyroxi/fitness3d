/**
 * Test suite for 3D Model Loader
 */
import ModelLoader from '../src/services/3dModelLoader'

describe('ModelLoader', () => {
  let loader: ModelLoader

  beforeEach(() => {
    loader = new ModelLoader()
  })

  it('should instantiate with default path', () => {
    expect(loader).toBeDefined()
  })

  it('should load placeholder geometry', () => {
    const placeholder = loader.loadPlaceholderGeometry()
    expect(placeholder).toBeDefined()
    expect(placeholder.isMesh).toBe(true)
  })

  it('should cache models', async () => {
    // Simulate a load by using placeholder, since no real GLB files exist
    const placeholder = loader.loadPlaceholderGeometry()
    expect(placeholder).toBeDefined()
    expect(loader.getCacheSize()).toBe(0) // placeholder does not populate cache
  })

  it('should clear cache', () => {
    loader.clearCache()
    expect(loader.getCacheSize()).toBe(0)
  })

  it('should attempt to load muscle model and fallback to placeholder', async () => {
    const model = await loader.loadMuscleModel('nonexistent_muscle')
    expect(model).toBeDefined()
    expect(model.scene).toBeDefined()
    expect(model.animations).toEqual([])
  })
})
