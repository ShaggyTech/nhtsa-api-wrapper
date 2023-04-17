import { beforeEach, describe, expect, it } from 'vitest'
import { GetModelsForMakeIdYear } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetModelsForMakeIdYear.ts', () => {
  it('exports GetModelsForMakeIdYear function', () => {
    expect(GetModelsForMakeIdYear).toBeDefined()
    expect(GetModelsForMakeIdYear).toBeInstanceOf(Function)
  })
})

describe('GetModelsForMakeIdYear', () => {
  const endpointName = 'GetModelsForMakeIdYear'
  const makeIdString = '987'
  const makeIdNumber = 987
  const modelYearString = '2019'
  const modelYearNumber = 2019
  const vehicleType = 'Moto'

  const mockUrlModelYear = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/makeId/${makeIdString}/modelYear/${modelYearString}?format=json`
  const mockUrlVehicleType = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/makeId/${makeIdString}/vehicleType/${vehicleType}?format=json`
  const mockUrlAllParams = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/makeId/${makeIdString}/modelYear/${modelYearString}/vehicleType/${vehicleType}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetModelsForMakeIdYear({
      makeId: makeIdString,
      modelYear: modelYearString,
    })
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided params.makeId and params.modelYear as strings', async () => {
    const results = await GetModelsForMakeIdYear({
      makeId: makeIdString,
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

  it('fetches data when provided params.makeId and params.modelYear as numbers', async () => {
    const results = await GetModelsForMakeIdYear({
      makeId: makeIdNumber,
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
    const results = await GetModelsForMakeIdYear({
      makeId: makeIdNumber,
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
    const results = await GetModelsForMakeIdYear({
      makeId: makeIdNumber,
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
    const results = await GetModelsForMakeIdYear(
      { makeId: makeIdNumber, modelYear: modelYearNumber, vehicleType },
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
    const results = await GetModelsForMakeIdYear(
      { makeId: makeIdNumber, modelYear: modelYearNumber, vehicleType },
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
        GetModelsForMakeIdYear({
          makeId: arg as unknown as string,
          vehicleType,
        })
      ).rejects.toThrowError(/error validating argument named "makeId"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if params.modelYear is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMakeIdYear({
          makeId: makeIdNumber,
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
        GetModelsForMakeIdYear({
          makeId: makeIdNumber,
          vehicleType: arg as unknown as string,
        })
      ).rejects.toThrowError()

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
