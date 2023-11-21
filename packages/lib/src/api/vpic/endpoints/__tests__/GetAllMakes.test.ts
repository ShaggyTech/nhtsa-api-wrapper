import { beforeEach, describe, expect, it } from 'vitest'
import { GetAllMakes } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetAllMakes.ts', () => {
  it('exports GetAllMakes function', () => {
    expect(GetAllMakes).toBeDefined()
    expect(GetAllMakes).toBeInstanceOf(Function)
  })
})

describe('GetAllMakes', () => {
  const endpointName = 'GetAllMakes'
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
    const response = GetAllMakes()
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data', async () => {
    const results = await GetAllMakes()

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided doFetch = true', async () => {
    const results = await GetAllMakes(true)

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
    const results = await GetAllMakes(false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/

  it.each([1234, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if doFetch is neither boolean nor undefined, %#',
    async (arg) => {
      await expect(() =>
        // @ts-expect-error - arg is not a boolean
        GetAllMakes(arg)
      ).rejects.toThrowError(/error validating argument named "doFetch"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
