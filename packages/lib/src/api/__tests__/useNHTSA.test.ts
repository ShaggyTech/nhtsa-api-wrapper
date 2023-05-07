import { beforeEach, describe, expect, it } from 'vitest'
import { useNHTSA } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

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

    it('returns createCachedUrl function', () => {
      const { createCachedUrl } = useNHTSA()
      expect(createCachedUrl).toBeDefined()
      expect(createCachedUrl).toBeInstanceOf(Function)
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

  describe('createPostBody', () => {
    it('returns a body string for VPIC POST requests', () => {
      const { createPostBody } = useNHTSA()

      const body = createPostBody('5UXWX7C5*BA;5YJSA3DS*EF,2015')
      expect(body).toBe('DATA=5UXWX7C5*BA;5YJSA3DS*EF,2015&format=json')
    })

    it('returns a URI encoded body string for VPIC POST requests', () => {
      const { createPostBody } = useNHTSA()

      const body = createPostBody('5UXWX7C5*BA; 5YJSA3DS*EF, 2015')
      expect(body).toBe('DATA=5UXWX7C5*BA;%205YJSA3DS*EF,%202015&format=json')
    })

    it('returns a URI encoded body string for VPIC POST requests if no data is provided', () => {
      const { createPostBody } = useNHTSA()

      let body = createPostBody('')
      expect(body).toBe('DATA=format=json')

      body = createPostBody(undefined as unknown as string)
      expect(body).toBe('DATA=format=json')
    })
  })

  describe('createCachedUrl', () => {
    /***********************
     * Returns url string
     ***********************/
    it('caches url when provided an object', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      const url = createCachedUrl({ endpointName: 'Test', path: 'path' })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Test/path?format=json'
      )

      createCachedUrl({ endpointName: 'Another', path: 'path' })
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Another/path?format=json'
      )
    })

    it('caches url when provided a string', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      let url = createCachedUrl('mock url 5')
      expect(url).toBe('mock url 5')
      expect(getCachedUrl()).toBe('mock url 5')

      url = createCachedUrl('mock url 6')
      expect(url).toBe('mock url 6')
      expect(getCachedUrl()).toBe('mock url 6')
    })

    it('does not cache url when provided an object with saveUrl = false', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      let url = createCachedUrl({
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
      createCachedUrl({ endpointName: 'Another', path: 'path' })
      expect(getCachedUrl()).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/Another/path?format=json'
      )

      url = createCachedUrl({
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
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = createCachedUrl({
        endpointName: 'DecodeVin',
        path: 'testVin',
        params: { page: '', modelYear: 2009 },
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/testVin?modelYear=2009&format=json'
      )
    })

    it('uses empty string values when provided an object with allowEmptyParams = true', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = createCachedUrl({
        endpointName: 'DecodeVin',
        params: { page: '', vin: 'testVIN' },
        allowEmptyParams: true,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/?page=&vin=testVIN&format=json'
      )
    })

    it('does not include default query string when provided an object with includeQueryString = false', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = createCachedUrl({
        endpointName: 'DecodeVinValuesBatch',
        includeQueryString: false,
      })
      expect(url).toBe(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesBatch/'
      )
    })

    /***********************
     * rejects with error
     ***********************/
    it('rejects with error if endpointName is not provided in input object', () => {
      const { createCachedUrl } = useNHTSA()

      expect(() =>
        createCachedUrl({ endpointName: undefined as unknown as string })
      ).toThrowError()
    })
  })

  describe('get', () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })

    const endpointName = 'DecodeVin'
    const vin = 'WA1A4AFY2J2008189'
    const params = { modelYear: 2018 }
    const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${vin}?modelYear=2018&format=json`

    /***********************
     * Returns data
     ***********************/
    it('returns data when given a string', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { get } = useNHTSA()
      const data = await get(mockUrl)

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    it('returns data when given an object of CreateUrlOptions', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { get } = useNHTSA()
      const data = await get({
        endpointName: endpointName,
        path: vin,
        params,
      })

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    it('uses a cached url if not provided one', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { createCachedUrl, get } = useNHTSA()
      createCachedUrl({
        endpointName: endpointName,
        path: vin,
        params,
      })
      const data = await get()

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    /***********************
     * rejects with error
     ***********************/
    it.each([1234, ['a', 'b'], null])(
      'rejects with error if there is no url cached and no valid url is provided, %#',
      async (arg) => {
        const { get } = useNHTSA()
        await expect(() => get(arg as unknown as string)).rejects.toThrowError(
          /error validating argument named "url"/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    it.each([{}, { a: 'b' }, { endpointName: undefined }])(
      'rejects with error if endpointName is not provided in CreateUrlOptions object, %#',
      async (arg) => {
        const { get } = useNHTSA()
        await expect(() => get(arg as unknown as string)).rejects.toThrowError(
          /Endpoint name is required to create a VPIC URL string/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    /***********************
     * Network errors
     ***********************/
    it('rejects with error if there is no response', async () => {
      fetchMock.mockResolvedValue(undefined as unknown as Response)

      const { get } = useNHTSA()
      await expect(() => get(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: APi responded with an error, no response object returned/
      )
    })

    it('rejects with error if !response.ok', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(
          {},
          {
            status: 500,
            ok: false,
            headers: new Headers({ 'Content-Type': 'application/xml' }),
          }
        )
      )

      const { get } = useNHTSA()
      await expect(() => get(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: APi response not ok/
      )
    })

    it('rejects with error if response is not json', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(
          {},
          {
            status: 200,
            ok: true,
            headers: new Headers({ 'Content-Type': 'application/xml' }),
          }
        )
      )

      const { get } = useNHTSA()
      await expect(() => get(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: API response not in JSON format/
      )
    })

    it('rejects with error if there is no json() method on the response', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse({}, { json: null } as unknown as Response)
      )

      const { get } = useNHTSA()
      await expect(() => get(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: API response not in JSON format/
      )
    })

    it('rejects with error if there is no data in response', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(undefined as unknown as object)
      )

      const { get } = useNHTSA()
      await expect(() => get(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: VPIC API returned no data/
      )
    })
  })

  describe('post', () => {
    beforeEach(() => {
      fetchMock.resetMocks()
    })

    const endpointName = 'DecodeVinValuesBatch'
    const body = '5UXWX7C5*BA;5YJSA3DS*EF,2015'
    const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/`

    /***********************
     * Returns data
     * ***********************/
    it('returns data when given an object of CreateUrlOptions', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { post } = useNHTSA()
      const data = await post({ endpointName }, { body })

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('POST')
      expect(fetchMock.requests()[0].headers.get('Content-Type')).toEqual(
        'application/x-www-form-urlencoded'
      )
    })

    it('returns data when given a URL string', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { post } = useNHTSA()
      const data = await post(mockUrl, { body })

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('POST')
      expect(fetchMock.requests()[0].headers.get('Content-Type')).toEqual(
        'application/x-www-form-urlencoded'
      )
    })

    it('uses a cached url if not provided one', async () => {
      fetchMock.mockResolvedValue(createMockResponse(mockResults))

      const { createCachedUrl, getCachedUrl, post } = useNHTSA()
      createCachedUrl({ endpointName, includeQueryString: false })
      const data = await post(getCachedUrl(), { body })

      expect(data).toEqual(mockResults)
      expect(fetchMock.requests()[0].url).toEqual(mockUrl)
      expect(fetchMock.requests()[0].method).toEqual('POST')
    })

    /***********************
     * rejects with error
     ***********************/
    it.each([1234, ['a', 'b'], null])(
      'rejects with error if there is no url cached and no valid url is provided, %#',
      async (arg) => {
        const { post } = useNHTSA()

        await expect(() => post(arg as unknown as string)).rejects.toThrowError(
          /error validating argument named "url"/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    it.each([{}, { a: 'b' }, { endpointName: undefined }])(
      'rejects with error if endpointName is not provided in CreateUrlOptions object, %#',
      async (arg) => {
        const { post } = useNHTSA()
        await expect(() => post(arg as unknown as string)).rejects.toThrowError(
          /Endpoint name is required to create a VPIC URL string/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    it.each([{ a: 'b' }, 32, ['a', 'b']])(
      'rejects with error if body is not a string, %#',
      async (arg) => {
        const { post } = useNHTSA()

        await expect(() =>
          post(
            { endpointName, includeQueryString: false },
            { body: arg as unknown as string }
          )
        ).rejects.toThrowError(/error validating argument named "options.body"/)
      }
    )

    /***********************
     * Network errors
     ***********************/
    it('rejects with error if there is no response', async () => {
      fetchMock.mockResolvedValue(undefined as unknown as Response)

      const { post } = useNHTSA()
      await expect(() => post(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: APi responded with an error, no response object returned/
      )
    })

    it('rejects with error if !response.ok', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(
          {},
          {
            status: 500,
            ok: false,
            headers: new Headers({ 'Content-Type': 'application/xml' }),
          }
        )
      )

      const { post } = useNHTSA()
      await expect(() => post(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: APi response not ok/
      )
    })

    it('rejects with error if response is not json', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(
          {},
          {
            status: 200,
            ok: true,
            headers: new Headers({ 'Content-Type': 'application/xml' }),
          }
        )
      )

      const { post } = useNHTSA()
      await expect(() => post(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: API response not in JSON format/
      )
    })

    it('rejects with error if there is no json() method on the response', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse({}, { json: null } as unknown as Response)
      )

      const { post } = useNHTSA()
      await expect(() => post(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: API response not in JSON format/
      )
    })

    it('rejects with error if there is no data in response', async () => {
      fetchMock.mockResolvedValue(
        createMockResponse(undefined as unknown as object)
      )

      const { post } = useNHTSA()
      await expect(() => post(mockUrl)).rejects.toThrowError(
        /There was an error fetching API data: VPIC API returned no data/
      )
    })
  })
})
