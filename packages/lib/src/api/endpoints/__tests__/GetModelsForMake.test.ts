import { beforeEach, describe, expect, it } from 'vitest'
import { GetModelsForMake } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetModelsForMake.ts', () => {
  it('exports GetModelsForMake function', () => {
    expect(GetModelsForMake).toBeDefined()
    expect(GetModelsForMake).toBeInstanceOf(Function)
  })
})

describe('GetModelsForMake', () => {
  const endpointName = 'GetModelsForMake'
  const makeName = 'Audi'

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
    const response = GetModelsForMake(makeName)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided makeName', async () => {
    const results = await GetModelsForMake(makeName)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided makeName and doFetch = true', async () => {
    const results = await GetModelsForMake(makeName, true)

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
    const results = await GetModelsForMake(makeName, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([123, true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if makeName is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMake(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "makeName"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
