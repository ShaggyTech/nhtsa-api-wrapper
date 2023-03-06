import { describe, expect, it } from 'vitest'
import { useNHTSA } from '../'

describe('api/useNHTSA.ts', () => {
  it('exports useNHTSA function', () => {
    expect(useNHTSA).toBeDefined()
    expect(useNHTSA).toBeInstanceOf(Function)
  })
})

describe('useNHTSA', () => {
  describe('return object', () => {
    it('returns object', () => {
      const nhtsa = useNHTSA()
      expect(nhtsa).toBeDefined()
      expect(nhtsa).toBeInstanceOf(Object)
    })

    it('returns setCachedUrl function', () => {
      const { setCachedUrl } = useNHTSA()
      expect(setCachedUrl).toBeDefined()
      expect(setCachedUrl).toBeInstanceOf(Function)
    })

    it('returns getCachedUrl function', () => {
      const { getCachedUrl } = useNHTSA()
      expect(getCachedUrl).toBeDefined()
      expect(getCachedUrl).toBeInstanceOf(Function)
    })

    it('returns clearCachedUrl function', () => {
      const { clearCachedUrl } = useNHTSA()
      expect(clearCachedUrl).toBeDefined()
      expect(clearCachedUrl).toBeInstanceOf(Function)
    })

    it('returns cacheUrl function', () => {
      const { cacheUrl } = useNHTSA()
      expect(cacheUrl).toBeDefined()
      expect(cacheUrl).toBeInstanceOf(Function)
    })

    it('returns createUrl function', () => {
      const { createUrl } = useNHTSA()
      expect(createUrl).toBeDefined()
      expect(createUrl).toBeInstanceOf(Function)
    })

    it('returns createPostBody function', () => {
      const { createPostBody } = useNHTSA()
      expect(createPostBody).toBeDefined()
      expect(createPostBody).toBeInstanceOf(Function)
    })

    it('returns get function', () => {
      const { get } = useNHTSA()
      expect(get).toBeDefined()
      expect(get).toBeInstanceOf(Function)
    })

    it('returns post function', () => {
      const { post } = useNHTSA()
      expect(post).toBeDefined()
      expect(post).toBeInstanceOf(Function)
    })
  })

  describe('setCachedUrl', () => {
    it('sets cached url', () => {
      const { setCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 1')
      expect(getCachedUrl()).toBe('mock url 1')
    })
  })

  describe('getCachedUrl', () => {
    it('gets cached url', () => {
      const { setCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 2')
      expect(getCachedUrl()).toBe('mock url 2')
      expect(getCachedUrl()).toBe('mock url 2')
    })
  })

  describe('clearCachedUrl', () => {
    it('clears url', () => {
      const { setCachedUrl, getCachedUrl, clearCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 3')
      expect(getCachedUrl()).toBe('mock url 3')
      clearCachedUrl()
      expect(getCachedUrl()).toBe('')
    })
  })

  describe('createUrl', () => {
    it('creates url without caching', () => {
      const { createUrl, setCachedUrl, getCachedUrl } = useNHTSA()

      const url = createUrl({ endpointName: 'Test', path: 'path' })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
      expect(getCachedUrl()).toBe(undefined)

      setCachedUrl('mock url 4')
      createUrl({ endpointName: 'Another', path: 'path' })
      expect(getCachedUrl()).toBe('mock url 4')
    })
  })

  describe('cacheUrl', () => {
    /***********************
     * Returns url string
     ***********************/
    it('caches url when provided an object', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      const url = cacheUrl({ endpointName: 'Test', path: 'path' })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )

      cacheUrl({ endpointName: 'Another', path: 'path' })
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Another/path?format=json'
      )
    })

    it('caches url when provided a string', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      let url = cacheUrl('mock url 5')
      expect(url).toBe('mock url 5')
      expect(getCachedUrl()).toBe('mock url 5')

      url = cacheUrl('mock url 6')
      expect(url).toBe('mock url 6')
      expect(getCachedUrl()).toBe('mock url 6')
    })

    it('does not cache url when provided an object with saveUrl = false', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      let url = cacheUrl({
        endpointName: 'Test',
        path: 'path',
        saveUrl: false,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
      /* Cached url should still be undefined */
      expect(getCachedUrl()).toBe(undefined)

      /* Cache a url */
      cacheUrl({ endpointName: 'Another', path: 'path' })
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Another/path?format=json'
      )

      url = cacheUrl({
        endpointName: 'Test',
        path: 'path',
        saveUrl: false,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
      /* Cached url should not have changed */
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Another/path?format=json'
      )
    })

    it('ignores empty string params by default', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = cacheUrl({
        endpointName: 'DecodeVin',
        path: 'testVin',
        params: { page: '', modelYear: 2009 },
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/testVin?modelYear=2009&format=json'
      )
    })

    it('uses empty string values when provided an object with allowEmptyParams = true', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = cacheUrl({
        endpointName: 'DecodeVin',
        params: { page: '', vin: 'testVIN' },
        allowEmptyParams: true,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/?page=&vin=testVIN&format=json'
      )
    })

    it('does not include default query string when provided an object with includeQueryString = false', () => {
      const { cacheUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = cacheUrl({
        endpointName: 'DecodeVinValuesBatch',
        includeQueryString: false,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesBatch/'
      )
    })

    /***********************
     * Throws error
     ***********************/
    it('throws error if endpointName is not provided in input object', () => {
      const { cacheUrl } = useNHTSA()

      expect(() =>
        cacheUrl({ endpointName: undefined as unknown as string })
      ).toThrowError()
    })
  })
})
