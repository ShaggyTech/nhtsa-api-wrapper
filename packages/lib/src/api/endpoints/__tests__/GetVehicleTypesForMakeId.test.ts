import { beforeEach, describe, expect, it } from 'vitest'
import { GetVehicleTypesForMakeId } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetVehicleTypesForMakeId.ts', () => {
  it('exports GetVehicleTypesForMakeId function', () => {
    expect(GetVehicleTypesForMakeId).toBeDefined()
    expect(GetVehicleTypesForMakeId).toBeInstanceOf(Function)
  })
})

describe('GetVehicleTypesForMakeId', () => {
  const endpointName = 'GetVehicleTypesForMakeId'
  const makeId = 'WVW'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${makeId}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetVehicleTypesForMakeId('test')
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided makeId only', async () => {
    const results = await GetVehicleTypesForMakeId(makeId)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided makeId and doFetch = true', async () => {
    const results = await GetVehicleTypesForMakeId(makeId, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided makeId and doFetch = false', async () => {
    const results = await GetVehicleTypesForMakeId(makeId, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if makeId is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetVehicleTypesForMakeId(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "makeId"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
