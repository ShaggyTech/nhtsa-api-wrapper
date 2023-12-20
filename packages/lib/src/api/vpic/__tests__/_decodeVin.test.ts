import { beforeEach, describe, expect, test } from 'vitest'
import { decodeVin } from '../_decodeVin'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const endpointName = 'DecodeVin'
const vin = 'WA1A4AFY2J2008189'
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const params = { modelYear }

const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
const mockUrl = `${baseUrl}/${endpointName}/${vin}?format=json`
const mockUrlWithParams = `${baseUrl}/${endpointName}/${vin}?modelYear=${modelYear}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof decodeVin>
  expectedUrl: string
}

describe('api/endpoints/decodeVin.ts', () => {
  test('exports decodeVin function', () => {
    expect(decodeVin).toBeDefined()
    expect(decodeVin).toBeInstanceOf(Function)
  })
})

describe('decodeVin()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(decodeVin).toBeDefined()
    expect(decodeVin).toBeInstanceOf(Function)
    expect(decodeVin(vin)).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  describe('Fetches API data:', () => {
    test.each<TestEach>([
      {
        description: 'when passed a VIN string',
        args: [vin],
        expectedUrl: mockUrl,
      },
      {
        description: 'when passed a VIN string and doFetch = true',
        args: [vin, true],
        expectedUrl: mockUrl,
      },
      {
        description: 'when passed a VIN string and params',
        args: [vin, { ...params }],
        expectedUrl: mockUrlWithParams,
      },
      {
        description: 'when passed a VIN string, params, and doFetch = true',
        args: [vin, { ...params }, true],
        expectedUrl: mockUrlWithParams,
      },
      {
        description: 'when params.modelYear passed as a string',
        args: [vin, { modelYear: modelYearString }],
        expectedUrl: mockUrlWithParams,
      },
      {
        description: 'when params.modelYear passed as a number',
        args: [vin, { modelYear: modelYearNumber }],
        expectedUrl: mockUrlWithParams,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await decodeVin(...args)

      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expectedFetchOptions)
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(expectedUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })
  })

  /*****************************
   * doFetch = false
   ****************************/
  describe('Returns API URL string:', () => {
    test.each<TestEach>([
      {
        description: 'when passed a VIN string and doFetch = false',
        args: [vin, false],
        expectedUrl: mockUrl,
      },
      {
        description: 'when passed a VIN string, params, and doFetch = false',
        args: [vin, { ...params }, false],
        expectedUrl: mockUrlWithParams,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await decodeVin(...args)

      expect(results).toEqual(expectedUrl)
      expect(fetchMock.requests().length).toEqual(0)
    })
  })

  /*****************************
   * rejects with error
   ***************************/
  describe('Rejects with Error if:', () => {
    describe('VIN is undefined or is not a string', () => {
      test.each([
        undefined,
        123,
        { object: 123 },
        ['array'],
        true,
        false,
        null,
        () => 'function',
      ])('%s', async (arg) => {
        await expect(() =>
          decodeVin(arg as unknown as string)
        ).rejects.toThrowError(/error validating argument named "vin"/)

        expect(fetchMock.requests().length).toEqual(0)
      })
    })

    describe('params is neither an object nor boolean', () => {
      test.each(['string', 123, ['array'], null, () => 'function'])(
        '%s',
        async (params) => {
          await expect(() =>
            decodeVin(
              vin,
              // @ts-expect-error Type 'x' is not assignable to type ...
              params
            )
          ).rejects.toThrowError(/error validating argument named "params"/)

          expect(fetchMock.requests().length).toEqual(0)
        }
      )
    })

    describe('params.modelYear is neither a string nor number', () => {
      test.each([
        { modelYear: true },
        { modelYear: false },
        { modelYear: ['a', 'b'] },
        { modelYear: { a: 'b' } },
        { modelYear: null },
        { modelYear: () => 'function' },
      ])('%s', async (params) => {
        await expect(() =>
          decodeVin(
            vin,
            // @ts-expect-error Types of property 'modelYear' are incompatible.
            params
          )
        ).rejects.toThrowError(/error validating argument named "modelYear"/)

        expect(fetchMock.requests().length).toEqual(0)
      })
    })
  })
})
