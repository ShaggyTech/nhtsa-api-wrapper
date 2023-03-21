import { beforeEach, describe, expect, it } from 'vitest'
import { GetParts } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetParts.ts', () => {
  it('exports GetParts function', () => {
    expect(GetParts).toBeDefined()
    expect(GetParts).toBeInstanceOf(Function)
  })
})

describe('GetParts', () => {
  const endpointName = 'GetParts'
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
    const response = GetParts()
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data', async () => {
    const results = await GetParts()

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided doFetch = true', async () => {
    const results = await GetParts(true)

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
    const results = await GetParts(false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })
})
