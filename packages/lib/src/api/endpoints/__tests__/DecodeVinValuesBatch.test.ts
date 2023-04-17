import { beforeEach, describe, expect, it } from 'vitest'
import { DecodeVinValuesBatch } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/DecodeVinValuesBatch.ts', () => {
  it('exports DecodeVinValuesBatch function', () => {
    expect(DecodeVinValuesBatch).toBeDefined()
    expect(DecodeVinValuesBatch).toBeInstanceOf(Function)
  })
})

describe('DecodeVinValuesBatch', () => {
  const endpointName = 'DecodeVinValuesBatch'
  const inputString = '5UXWX7C5*BA, 2011; 5YJSA3DS*EF'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/`

  const expectedBody = `DATA=${encodeURI(inputString)}&format=json`
  const expectedFetchOptions = {
    body: expectedBody,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = DecodeVinValuesBatch('test')
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided inputString only', async () => {
    const results = await DecodeVinValuesBatch(inputString)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toBeCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('POST')
  })

  it('fetches data when provided inputString and doFetch = true', async () => {
    const results = await DecodeVinValuesBatch(inputString, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toBeCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('POST')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided inputString and doFetch = false', async () => {
    const results = await DecodeVinValuesBatch(inputString, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it('rejects with error if inputString is undefined', async () => {
    await expect(() =>
      DecodeVinValuesBatch(undefined as unknown as string)
    ).rejects.toThrowError(/error validating argument named "inputString"/)

    expect(fetchMock.requests().length).toEqual(0)
  })

  it.each([1234, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if inputString is not a string, %#',
    async (arg) => {
      await expect(() =>
        DecodeVinValuesBatch(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "inputString"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
