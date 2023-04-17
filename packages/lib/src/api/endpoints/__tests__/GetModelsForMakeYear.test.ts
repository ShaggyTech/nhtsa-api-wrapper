import { beforeEach, describe, expect, it } from 'vitest'
import { GetModelsForMakeYear } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetModelsForMakeYear.ts', () => {
  it('exports GetModelsForMakeYear function', () => {
    expect(GetModelsForMakeYear).toBeDefined()
    expect(GetModelsForMakeYear).toBeInstanceOf(Function)
  })
})

describe('GetModelsForMakeYear', () => {
  const endpointName = 'GetModelsForMakeYear'
  const make = 'Audi'
  const modelYearString = '2019'
  const modelYearNumber = 2019
  const vehicleType = 'Moto'

  const mockUrlModelYear = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/make/${make}/modelYear/${modelYearString}?format=json`
  const mockUrlVehicleType = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/make/${make}/vehicleType/${vehicleType}?format=json`
  const mockUrlAllParams = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/make/${make}/modelYear/${modelYearString}/vehicleType/${vehicleType}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetModelsForMakeYear({
      make,
      modelYear: modelYearString,
    })
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided params.make and params.modelYear as a string', async () => {
    const results = await GetModelsForMakeYear({
      make,
      modelYear: modelYearString,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlModelYear,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlModelYear)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.make and params.modelYear as a number', async () => {
    const results = await GetModelsForMakeYear({
      make,
      modelYear: modelYearNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlModelYear,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlModelYear)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.makeId and params.vehicleType', async () => {
    const results = await GetModelsForMakeYear({
      make,
      vehicleType,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlVehicleType,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlVehicleType)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params', async () => {
    const results = await GetModelsForMakeYear({
      make,
      modelYear: modelYearNumber,
      vehicleType,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlAllParams,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlAllParams)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params and doFetch = true', async () => {
    const results = await GetModelsForMakeYear(
      { make, modelYear: modelYearNumber, vehicleType },
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlAllParams,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlAllParams)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided params and doFetch = false', async () => {
    const results = await GetModelsForMakeYear(
      { make, modelYear: modelYearNumber, vehicleType },
      false
    )

    expect(results).toEqual(mockUrlAllParams)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if params.makeId is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMakeYear({
          make: arg as unknown as string,
          vehicleType,
        })
      ).rejects.toThrowError(/error validating argument named "make"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if params.modelYear is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMakeYear({
          make,
          modelYear: arg as unknown as string,
        })
      ).rejects.toThrowError()

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([1234, true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if params.vehicleType is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMakeYear({
          make,
          vehicleType: arg as unknown as string,
        })
      ).rejects.toThrowError()

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
