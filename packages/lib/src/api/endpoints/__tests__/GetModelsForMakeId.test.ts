import { beforeEach, describe, expect, it } from 'vitest'
import { GetModelsForMakeId } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetModelsForMakeId.ts', () => {
  it('exports GetModelsForMakeId function', () => {
    expect(GetModelsForMakeId).toBeDefined()
    expect(GetModelsForMakeId).toBeInstanceOf(Function)
  })
})

describe('GetModelsForMakeId', () => {
  const endpointName = 'GetModelsForMakeId'
  const makeIdString = '789'
  const makeIdNumber = 789

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${makeIdNumber}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetModelsForMakeId(makeIdString)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided makeId as a string', async () => {
    const results = await GetModelsForMakeId(makeIdString)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided makeId as a number', async () => {
    const results = await GetModelsForMakeId(makeIdNumber)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided makeId and doFetch = true', async () => {
    const results = await GetModelsForMakeId(makeIdNumber, true)

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
    const results = await GetModelsForMakeId(makeIdNumber, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if makeId is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetModelsForMakeId(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "makeId"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
