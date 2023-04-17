import { beforeEach, describe, expect, it } from 'vitest'
import { DecodeWMI } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/DecodeWMI.ts', () => {
  it('exports DecodeWMI function', () => {
    expect(DecodeWMI).toBeDefined()
    expect(DecodeWMI).toBeInstanceOf(Function)
  })
})

describe('DecodeWMI', () => {
  const endpointName = 'DecodeWMI'
  const WMI = 'WVW'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${WMI}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = DecodeWMI('test')
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided WMI only', async () => {
    const results = await DecodeWMI(WMI)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided WMI and doFetch = true', async () => {
    const results = await DecodeWMI(WMI, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided WMI and doFetch = false', async () => {
    const results = await DecodeWMI(WMI, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([1234, ['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if WMI is not a string, %#',
    async (arg) => {
      await expect(() =>
        DecodeWMI(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "WMI"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
