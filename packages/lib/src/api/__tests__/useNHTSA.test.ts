import { beforeEach, describe, expect, test } from 'vitest'
import { useNHTSA } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'
import { ApiTypes } from '../types'

describe('api/useNHTSA.ts', () => {
  test('exports useNHTSA function', () => {
    expect(useNHTSA).toBeDefined()
    expect(useNHTSA).toBeInstanceOf(Function)
  })
})

describe('useNHTSA', () => {
  describe('return object with functions', () => {
    test('returns object', () => {
      const nhtsa = useNHTSA()
      expect(nhtsa).toBeDefined()
      expect(nhtsa).toBeInstanceOf(Object)
    })

    test('returns setCachedUrl function', () => {
      const { setCachedUrl } = useNHTSA()
      expect(setCachedUrl).toBeDefined()
      expect(setCachedUrl).toBeInstanceOf(Function)
    })

    test('returns getCachedUrl function', () => {
      const { getCachedUrl } = useNHTSA()
      expect(getCachedUrl).toBeDefined()
      expect(getCachedUrl).toBeInstanceOf(Function)
    })

    test('returns clearCachedUrl function', () => {
      const { clearCachedUrl } = useNHTSA()
      expect(clearCachedUrl).toBeDefined()
      expect(clearCachedUrl).toBeInstanceOf(Function)
    })

    test('returns createCachedUrl function', () => {
      const { createCachedUrl } = useNHTSA()
      expect(createCachedUrl).toBeDefined()
      expect(createCachedUrl).toBeInstanceOf(Function)
    })

    test('returns createUrl function', () => {
      const { createUrl } = useNHTSA()
      expect(createUrl).toBeDefined()
      expect(createUrl).toBeInstanceOf(Function)
    })

    test('returns createPostBody function', () => {
      const { createPostBody } = useNHTSA()
      expect(createPostBody).toBeDefined()
      expect(createPostBody).toBeInstanceOf(Function)
    })

    test('returns get function', () => {
      const { get } = useNHTSA()
      expect(get).toBeDefined()
      expect(get).toBeInstanceOf(Function)
    })

    test('returns post function', () => {
      const { post } = useNHTSA()
      expect(post).toBeDefined()
      expect(post).toBeInstanceOf(Function)
    })
  })

  describe('useNHTSA.setCachedUrl()', () => {
    test('sets cached url', () => {
      const { setCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 1')
      expect(getCachedUrl()).toBe('mock url 1')
    })
  })

  describe('useNHTSA.getCachedUrl()', () => {
    test('gets cached url', () => {
      const { setCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 2')
      expect(getCachedUrl()).toBe('mock url 2')
      expect(getCachedUrl()).toBe('mock url 2')
    })
  })

  describe('clearCachedUrl', () => {
    test('clears url', () => {
      const { setCachedUrl, getCachedUrl, clearCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      setCachedUrl('mock url 3')
      expect(getCachedUrl()).toBe('mock url 3')
      clearCachedUrl()
      expect(getCachedUrl()).toBe(undefined)
    })
  })

  describe('useNHTSA.createUrl()', () => {
    test('creates url without caching', () => {
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

  describe('useNHTSA.createPostBody()', () => {
    test('returns a body string for VPIC POST requests', () => {
      const { createPostBody } = useNHTSA()

      const body = createPostBody('5UXWX7C5*BA;5YJSA3DS*EF,2015')
      expect(body).toBe('DATA=5UXWX7C5*BA;5YJSA3DS*EF,2015&format=json')
    })

    test('returns a URI encoded body string for VPIC POST requests', () => {
      const { createPostBody } = useNHTSA()

      const body = createPostBody('5UXWX7C5*BA; 5YJSA3DS*EF, 2015')
      expect(body).toBe('DATA=5UXWX7C5*BA;%205YJSA3DS*EF,%202015&format=json')
    })

    test('returns a default body string for VPIC POST requests if no data is provided', () => {
      const { createPostBody } = useNHTSA()

      let body = createPostBody('')
      expect(body).toBe('DATA=format=json')

      body = createPostBody(
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'string'.
        undefined
      )
      expect(body).toBe('DATA=format=json')
    })
  })

  describe('useNHTSA.createCachedUrl()', () => {
    /***********************
     * Returns url string
     ***********************/
    test('caches url when provided an object', () => {
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

    test('caches url when provided a string', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)
      let url = createCachedUrl('mock url 5')
      expect(url).toBe('mock url 5')
      expect(getCachedUrl()).toBe('mock url 5')

      url = createCachedUrl('mock url 6')
      expect(url).toBe('mock url 6')
      expect(getCachedUrl()).toBe('mock url 6')
    })

    test('does not cache url when provided an object with saveUrl = false', () => {
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

    test('ignores empty string params by default', () => {
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

    test('uses empty string values when provided an object with allowEmptyParams = true', () => {
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

    test('does not include default query string when includeQueryString = false', () => {
      const { createCachedUrl, getCachedUrl } = useNHTSA()

      expect(getCachedUrl()).toBe(undefined)

      const url = createCachedUrl({
        endpointName: 'someEndpoint',
        includeQueryString: false,
      })
      expect(url).toBe('https://vpic.nhtsa.dot.gov/api/vehicles/someEndpoint/')
    })

    describe('sets correct base API url based on options.apiType or uses default "vpic"', () => {
      const { createCachedUrl } = useNHTSA()

      test('vpic.nhtsa.dot.gov/api/vehicles/, apiType: undefined', () => {
        const url = createCachedUrl({
          endpointName: 'someEndpoint',
        })
        expect(url).toBe(
          'https://vpic.nhtsa.dot.gov/api/vehicles/someEndpoint/?format=json'
        )
      })

      test.each<ApiTypes>(['vpic'])(
        'vpic.nhtsa.dot.gov/api/vehicles/, apiType: "%s"',
        (apiType) => {
          const url = createCachedUrl({
            endpointName: 'someEndpoint',
            apiType,
          })
          expect(url).toBe(
            'https://vpic.nhtsa.dot.gov/api/vehicles/someEndpoint/?format=json'
          )
        }
      )

      test.each<ApiTypes>([
        'complaints',
        'cssiStation',
        'products',
        'recalls',
        'safetyRatings',
      ])('api.nhtsa.gov/, apiType: "%s"', (apiType) => {
        const url = createCachedUrl({
          endpointName: 'someEndpoint',
          apiType,
        })
        expect(url).toBe(`https://api.nhtsa.gov/someEndpoint/`)
      })
    })

    /***********************
     * Throws Error
     ***********************/
    describe('Throws Error:', () => {
      describe('if arg is an object but endpointName is not a string:', () => {
        test.each([
          {},
          { a: 'b' },
          { endpointName: undefined },
          { endpointName: null },
          { endpointName: 123 },
          { endpointName: 1234n },
          { endpointName: 0 },
          { endpointName: -0 },
          { endpointName: 0n },
          { endpointName: [] },
          { endpointName: ['1', '2', '3'] },
          { endpointName: () => 'a function' },
          { endpointName: true },
          { endpointName: false },
          { endpointName: new Date() },
          { endpointName: new Number() },
          { endpointName: new Boolean() },
          { endpointName: new Error() },
        ])('createCachedUrl( %s )', async (arg) => {
          const { createCachedUrl } = useNHTSA()
          expect(() =>
            createCachedUrl(
              // @ts-expect-error Types of property 'endpointName' are incompatible. Type 'x' is not assignable to type 'string'.
              arg
            )
          ).toThrowError(
            /options.endpointName is required to create a URL string/
          )

          expect(fetchMock.requests().length).toEqual(0)
        })
      })
    })
  })

  describe('useNHTSA.get()', () => {
    const endpointName = 'DecodeVin'
    const vin = 'WA1A4AFY2J2008189'
    const params = { modelYear: 2018 }
    const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${vin}?modelYear=2018&format=json`

    /***********************
     * Returns data
     ***********************/
    describe('Returns Data:', () => {
      beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResolvedValue(createMockResponse(mockResults))
      })

      test('when passed a string', async () => {
        const { get } = useNHTSA()
        const data = await get(mockUrl)

        expect(data).toEqual(mockResults)
        expect(fetchMock.requests()[0].url).toEqual(mockUrl)
        expect(fetchMock.requests()[0].method).toEqual('GET')
      })

      test('when passed an object of CreateUrlOptions', async () => {
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

      test('uses a cached url if not passed one', async () => {
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
    })

    /***********************
     * Rejects with Error
     ***********************/
    describe('Rejects with Error:', () => {
      beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResolvedValue(createMockResponse(mockResults))
      })

      describe('If first arg is defined but is neither a string nor object:', () => {
        test.each([
          123,
          1234n,
          0,
          -0,
          0n,
          [],
          ['1', '2', '3'],
          () => 'a function',
          true,
          false,
          null,
          undefined,
          NaN,
          new Date(),
          new Number(),
          new Boolean(),
          new Error(),
        ])('get( %s )', async (arg) => {
          const { get } = useNHTSA()
          await expect(() =>
            get(
              // @ts-expect-error Argument of type 'x' is not assignable to parameter of type 'string | CreateUrlOptions | undefined'.
              arg
            )
          ).rejects.toThrowError(/error validating argument named "url"/)

          expect(fetchMock.requests().length).toEqual(0)
        })
      })

      describe('If first arg is an object but endpointName is not provided:', () => {
        test.each([
          {},
          { a: 'b' },
          { endpointName: undefined },
          { endpointName: null },
          { endpointName: 123 },
          { endpointName: 1234n },
          { endpointName: 0 },
          { endpointName: -0 },
          { endpointName: 0n },
          { endpointName: [] },
          { endpointName: ['1', '2', '3'] },
          { endpointName: () => 'a function' },
          { endpointName: true },
          { endpointName: false },
          { endpointName: new Date() },
          { endpointName: new Number() },
          { endpointName: new Boolean() },
          { endpointName: new Error() },
        ])('get( %s )', async (arg) => {
          const { get } = useNHTSA()
          await expect(() =>
            get(
              // @ts-expect-error Types of property 'endpointName' are incompatible. Type 'x' is not assignable to type 'string'.
              arg
            )
          ).rejects.toThrowError(
            /options.endpointName is required to create a URL string/
          )

          expect(fetchMock.requests().length).toEqual(0)
        })
      })

      describe('If second arg is defined but is not an object:', () => {
        test.each([
          123,
          1234n,
          0,
          -0,
          0n,
          [],
          ['1', '2', '3'],
          () => 'a function',
          true,
          false,
          NaN,
          new Date(),
          new Number(),
          new Boolean(),
          new Error(),
        ])('get( %s )', async (arg) => {
          const { get } = useNHTSA()
          await expect(() =>
            get(
              { endpointName },
              // @ts-expect-error Argument of type 'x' is not assignable to parameter of type 'BodyInit | null | undefined'.
              arg
            )
          ).rejects.toThrowError(/error validating argument named "options"/)

          expect(fetchMock.requests().length).toEqual(0)
        })
      })
    })

    /***********************
     * Network Errors
     ***********************/
    describe('Network Errors - Rejects with Error:', () => {
      test('if there is no response', async () => {
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'Response'.
        fetchMock.mockResolvedValue(undefined)

        const { get } = useNHTSA()
        await expect(() => get(mockUrl)).rejects.toThrowError(
          /API responded with an unknown error or sent no response/
        )
      })

      test('If response.ok === false', async () => {
        fetchMock.mockResolvedValue(
          createMockResponse(
            { a: 'b' },
            {
              ok: false,
            }
          )
        )

        const { get } = useNHTSA()
        await expect(() => get(mockUrl)).rejects.toThrowError(
          /API response not ok/
        )
      })

      test('if response content-type is not json', async () => {
        fetchMock.mockResolvedValue(
          createMockResponse(
            { a: 'b' },
            {
              headers: new Headers({ 'Content-Type': 'application/xml' }),
            }
          )
        )

        const { get } = useNHTSA()
        await expect(() => get(mockUrl)).rejects.toThrowError(
          /API response not in JSON format/
        )
      })

      test('if the response does not have a json() function', async () => {
        fetchMock.mockResolvedValue(
          // @ts-expect-error Type 'null' is not assignable to type '(() => Promise<any>) | undefined'.
          createMockResponse({ a: 'b' }, { json: 'empty' })
        )

        const { get } = useNHTSA()
        await expect(() => get(mockUrl)).rejects.toThrowError(
          /API response not in JSON format/
        )
      })

      test('if there is no data in response', async () => {
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'object'.
        fetchMock.mockResolvedValue(createMockResponse(undefined, {}))

        const { get } = useNHTSA()
        await expect(() => get(mockUrl)).rejects.toThrowError(
          /API returned no data/
        )
      })
    })
  })

  describe('useNHTSA.post()', () => {
    const endpointName = 'DecodeVinValuesBatch'
    const body = '5UXWX7C5*BA;5YJSA3DS*EF,2015'
    const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/`

    /***********************
     * Returns data
     * ***********************/
    describe('Returns Data:', () => {
      beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResolvedValue(createMockResponse(mockResults))
      })
      test('when passed an object of CreateUrlOptions', async () => {
        const { post } = useNHTSA()
        const data = await post({ endpointName }, { body })

        expect(data).toEqual(mockResults)
        expect(fetchMock.requests()[0].url).toEqual(mockUrl)
        expect(fetchMock.requests()[0].method).toEqual('POST')
        expect(fetchMock.requests()[0].headers.get('Content-Type')).toEqual(
          'application/x-www-form-urlencoded'
        )
      })

      test('when passed a URL string', async () => {
        const { post } = useNHTSA()
        const data = await post(mockUrl, { body })

        expect(data).toEqual(mockResults)
        expect(fetchMock.requests()[0].url).toEqual(mockUrl)
        expect(fetchMock.requests()[0].method).toEqual('POST')
        expect(fetchMock.requests()[0].headers.get('Content-Type')).toEqual(
          'application/x-www-form-urlencoded'
        )
      })

      test('using a cached url if one is not passed', async () => {
        const { createCachedUrl, getCachedUrl, post } = useNHTSA()
        createCachedUrl({ endpointName, includeQueryString: false })
        const data = await post(getCachedUrl(), { body })

        expect(data).toEqual(mockResults)
        expect(fetchMock.requests()[0].url).toEqual(mockUrl)
        expect(fetchMock.requests()[0].method).toEqual('POST')
      })
    })

    /***********************
     * rejects with error
     ***********************/
    describe('Rejects with Error:', () => {
      beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResolvedValue(createMockResponse(mockResults))
      })

      describe('If first arg is defined but is neither a string nor object:', () => {
        test.each([
          123,
          1234n,
          0,
          -0,
          0n,
          [],
          ['1', '2', '3'],
          () => 'a function',
          true,
          false,
          null,
          undefined,
          NaN,
          new Date(),
          new Number(),
          new Boolean(),
          new Error(),
        ])('post( %s )', async (arg) => {
          const { post } = useNHTSA()
          await expect(() =>
            post(
              // @ts-expect-error Argument of type 'x' is not assignable to parameter of type 'string | CreateUrlOptions | undefined'.
              arg
            )
          ).rejects.toThrowError(/error validating argument named "url"/)

          expect(fetchMock.requests().length).toEqual(0)
        })
      })

      describe('If first arg is an object but endpointName is not provided:', () => {
        test.each([
          {},
          { a: 'b' },
          { endpointName: undefined },
          { endpointName: null },
          { endpointName: 123 },
          { endpointName: 1234n },
          { endpointName: 0 },
          { endpointName: -0 },
          { endpointName: 0n },
          { endpointName: [] },
          { endpointName: ['1', '2', '3'] },
          { endpointName: () => 'a function' },
          { endpointName: true },
          { endpointName: false },
          { endpointName: new Date() },
          { endpointName: new Number() },
          { endpointName: new Boolean() },
          { endpointName: new Error() },
        ])('post( %s )', async (arg) => {
          const { post } = useNHTSA()
          await expect(() =>
            post(
              // @ts-expect-error Types of property 'endpointName' are incompatible. Type 'x' is not assignable to type 'string'.
              arg
            )
          ).rejects.toThrowError(
            /options.endpointName is required to create a URL string/
          )

          expect(fetchMock.requests().length).toEqual(0)
        })
      })

      describe('If second arg is defined but is not an object:', () => {
        test.each([
          123,
          1234n,
          0,
          -0,
          0n,
          [],
          ['1', '2', '3'],
          () => 'a function',
          true,
          false,
          NaN,
          new Date(),
          new Number(),
          new Boolean(),
          new Error(),
        ])('post( url, %s )', async (arg) => {
          const { post } = useNHTSA()
          await expect(() =>
            post(
              { endpointName },
              // @ts-expect-error Argument of type 'x' is not assignable to parameter of type 'BodyInit | null | undefined'.
              arg
            )
          ).rejects.toThrowError(/error validating argument named "options"/)

          expect(fetchMock.requests().length).toEqual(0)
        })
      })

      describe('if second arg is an object but "body" property is not a string:', () => {
        test.each([
          123,
          1234n,
          0,
          -0,
          0n,
          [],
          ['1', '2', '3'],
          {},
          { a: '1', b: '2', c: '3' },
          () => 'a function',
          true,
          false,
          null,
          undefined,
          NaN,
          new Date(),
          new Object(),
        ])('post( url, { body: %s } )', async (arg) => {
          const { post } = useNHTSA()

          await expect(() =>
            post(
              { endpointName, includeQueryString: false },
              {
                // @ts-expect-error Type 'number' is not assignable to type 'BodyInit | null | undefined'
                body: arg,
              }
            )
          ).rejects.toThrowError(
            /error validating argument named "options.body"/
          )
        })
      })
    })

    /***********************
     * Network errors
     ***********************/
    describe('Network Errors - Rejects with Error:', () => {
      const body = '5UXWX7C5*BA;5YJSA3DS*EF,2015'

      test('If there is no response', async () => {
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'Response'.
        fetchMock.mockResolvedValue(undefined)

        const { post } = useNHTSA()
        await expect(() => post(mockUrl, { body })).rejects.toThrowError(
          /API responded with an unknown error or sent no response/
        )
      })

      test('If response.ok === false', async () => {
        fetchMock.mockResolvedValue(
          createMockResponse(
            { a: 'b' },
            {
              ok: false,
            }
          )
        )

        const { post } = useNHTSA()
        await expect(() => post(mockUrl, { body })).rejects.toThrowError(
          /API response not ok/
        )
      })

      test('If response content-type is not json', async () => {
        fetchMock.mockResolvedValue(
          createMockResponse(
            { a: 'b' },
            {
              headers: new Headers({ 'Content-Type': 'application/xml' }),
            }
          )
        )

        const { post } = useNHTSA()
        await expect(() => post(mockUrl, { body })).rejects.toThrowError(
          /API response not in JSON format/
        )
      })

      test('If the response does not have a json() function', async () => {
        fetchMock.mockResolvedValue(
          // @ts-expect-error Type 'null' is not assignable to type '(() => Promise<any>) | undefined'.
          createMockResponse({ a: 'b' }, { json: 'empty' })
        )

        const { post } = useNHTSA()
        await expect(() => post(mockUrl, { body })).rejects.toThrowError(
          /API response not in JSON format/
        )
      })

      test('If there is no data in response', async () => {
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'object'.
        fetchMock.mockResolvedValue(createMockResponse(undefined, {}))

        const { post } = useNHTSA()
        await expect(() => post(mockUrl, { body })).rejects.toThrowError(
          /API returned no data/
        )
      })
    })
  })
})
