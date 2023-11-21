import { beforeEach, describe, expect, it } from 'vitest'
import { GetVehicleVariableList } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetVehicleVariableList.ts', () => {
  it('exports GetVehicleVariableList function', () => {
    expect(GetVehicleVariableList).toBeDefined()
    expect(GetVehicleVariableList).toBeInstanceOf(Function)
  })
})

describe('GetVehicleVariableList', () => {
  const endpointName = 'GetVehicleVariableList'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetVehicleVariableList()
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data', async () => {
    const results = await GetVehicleVariableList()

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided doFetch = true', async () => {
    const results = await GetVehicleVariableList(true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided doFetch = false', async () => {
    const results = await GetVehicleVariableList(false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })
})
