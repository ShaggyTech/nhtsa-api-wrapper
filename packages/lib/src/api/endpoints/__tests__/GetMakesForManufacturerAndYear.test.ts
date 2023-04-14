import { beforeEach, describe, expect, it } from 'vitest'
import { GetMakesForManufacturerAndYear } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetMakesForManufacturerAndYear.ts', () => {
  it('exports GetMakesForManufacturerAndYear function', () => {
    expect(GetMakesForManufacturerAndYear).toBeDefined()
    expect(GetMakesForManufacturerAndYear).toBeInstanceOf(Function)
  })
})

describe('GetMakesForManufacturerAndYear', () => {
  const endpointName = 'GetMakesForManufacturerAndYear'
  const manufacturer = 'Audi'
  const manufacturerNumber = 123
  const yearString = '2019'
  const yearNumber = 2019

  const params = {
    year: yearString,
  }

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturer}?year=${yearString}&format=json`
  const mockUrlNumber = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturerNumber}?year=${yearNumber}&format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetMakesForManufacturerAndYear(manufacturer, params)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided manufacturer and params.year as strings', async () => {
    const results = await GetMakesForManufacturerAndYear(manufacturer, params)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided manufacturer and params.year as numbers', async () => {
    const results = await GetMakesForManufacturerAndYear(manufacturerNumber, {
      year: yearNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrlNumber, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided manufacturer, params.year, and doFetch = true', async () => {
    const results = await GetMakesForManufacturerAndYear(
      manufacturer,
      params,
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided manufacturer, params.year, and doFetch = false', async () => {
    const results = await GetMakesForManufacturerAndYear(
      manufacturer,
      params,
      false
    )

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if manufacturer is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetMakesForManufacturerAndYear(arg as unknown as string, params)
      ).rejects.toThrowError(/error validating argument named "manufacturer"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if params.year is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetMakesForManufacturerAndYear(manufacturer, {
          year: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "year"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
