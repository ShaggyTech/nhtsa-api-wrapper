import { beforeEach, describe, expect, it } from 'vitest'
import { GetVehicleTypesForMake } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetVehicleTypesForMake.ts', () => {
  it('exports GetVehicleTypesForMake function', () => {
    expect(GetVehicleTypesForMake).toBeDefined()
    expect(GetVehicleTypesForMake).toBeInstanceOf(Function)
  })
})

describe('GetVehicleTypesForMake', () => {
  const endpointName = 'GetVehicleTypesForMake'
  const makeName = 'WVW'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${makeName}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetVehicleTypesForMake('test')
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided makeName only', async () => {
    const results = await GetVehicleTypesForMake(makeName)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided makeName and doFetch = true', async () => {
    const results = await GetVehicleTypesForMake(makeName, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided makeName and doFetch = false', async () => {
    const results = await GetVehicleTypesForMake(makeName, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([1234, ['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if makeName is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetVehicleTypesForMake(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "makeName"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
