import { beforeEach, describe, expect, it } from 'vitest'
import { GetEquipmentPlantCodes } from '../'

import type { GetEquipmentPlantCodesParams } from '@/types'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetEquipmentPlantCodes.ts', () => {
  it('exports GetEquipmentPlantCodes function', () => {
    expect(GetEquipmentPlantCodes).toBeDefined()
    expect(GetEquipmentPlantCodes).toBeInstanceOf(Function)
  })
})

describe('GetEquipmentPlantCodes', () => {
  const endpointName = 'GetEquipmentPlantCodes'

  const equipmentTypeString = '13'
  const equipmentTypeNumber = 13
  const reportType = 'New'
  const yearString = '2018'
  const yearNumber = 2018

  const params: GetEquipmentPlantCodesParams = {
    equipmentType: equipmentTypeString,
    reportType,
    year: yearString,
  }

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?equipmentType=${equipmentTypeString}&reportType=${reportType}&year=${yearString}&format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetEquipmentPlantCodes(params)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided all params', async () => {
    const results = await GetEquipmentPlantCodes(params)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.equipmentType as a number', async () => {
    const results = await GetEquipmentPlantCodes({
      ...params,
      equipmentType: equipmentTypeNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.equipmentType as a string', async () => {
    const results = await GetEquipmentPlantCodes({
      ...params,
      equipmentType: equipmentTypeString,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.year as a number', async () => {
    const results = await GetEquipmentPlantCodes({
      ...params,
      year: yearNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.year as a string', async () => {
    const results = await GetEquipmentPlantCodes({
      ...params,
      year: yearString,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params and doFetch = true', async () => {
    const results = await GetEquipmentPlantCodes(params, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided params.year and doFetch = false', async () => {
    const results = await GetEquipmentPlantCodes(params, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([1234, ['a', 'b'], null, undefined])(
    'rejects with error if params is neither an object nor boolean, %#',
    async (arg) => {
      await expect(() =>
        GetEquipmentPlantCodes(arg as unknown as GetEquipmentPlantCodesParams)
      ).rejects.toThrowError(/error validating argument named "params"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if params.equipmentType is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetEquipmentPlantCodes({
          ...params,
          equipmentType: arg as unknown as 13,
        })
      ).rejects.toThrowError(/error validating argument named "equipmentType"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if params.reportTYpe is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetEquipmentPlantCodes({
          ...params,
          reportType: arg as unknown as 'All',
        })
      ).rejects.toThrowError(/error validating argument named "reportType"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if params.year is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetEquipmentPlantCodes({
          ...params,
          year: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "year"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
