import { beforeEach, describe, expect, it } from 'vitest'
import { GetMakesForVehicleType } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetMakesForVehicleType.ts', () => {
  it('exports GetMakesForVehicleType function', () => {
    expect(GetMakesForVehicleType).toBeDefined()
    expect(GetMakesForVehicleType).toBeInstanceOf(Function)
  })
})

describe('GetMakesForVehicleType', () => {
  const endpointName = 'GetMakesForVehicleType'
  const typeName = 'Moto'

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${typeName}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetMakesForVehicleType(typeName)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided typeName', async () => {
    const results = await GetMakesForVehicleType(typeName)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided typeName and doFetch = true', async () => {
    const results = await GetMakesForVehicleType(typeName, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided typeName and doFetch = false', async () => {
    const results = await GetMakesForVehicleType(typeName, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([123, true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if typeName is not not a string, %#',
    async (arg) => {
      await expect(() =>
        GetMakesForVehicleType(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "typeName"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
