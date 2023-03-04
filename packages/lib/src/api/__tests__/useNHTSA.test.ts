import { describe, expect, it } from 'vitest'
import { useNHTSA } from '../'

describe('api/useNHTSA.ts', () => {
  it('exports useNHTSA function', () => {
    expect(useNHTSA).toBeDefined()
    expect(useNHTSA).toBeInstanceOf(Function)
  })
})

describe('useNHTSA', () => {
  describe('Internal State', () => {
    it('has url string internal state', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()
      cacheUrl({ endpointName: 'Test', path: 'path' })
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
    })
  })
})
