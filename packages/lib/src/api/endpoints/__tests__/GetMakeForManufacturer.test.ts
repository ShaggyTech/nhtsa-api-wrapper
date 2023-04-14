import { beforeEach, describe, expect, it } from 'vitest'
import { GetMakeForManufacturer } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetMakeForManufacturer.ts', () => {
  it('exports GetMakeForManufacturer function', () => {
    expect(GetMakeForManufacturer).toBeDefined()
    expect(GetMakeForManufacturer).toBeInstanceOf(Function)
  })
})

describe('GetMakeForManufacturer', () => {
  const endpointName = 'GetMakeForManufacturer'
  const manufacturer = 'Audi'
  const manufacturerNumber = 123

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturer}?format=json`
  const mockUrlNumber = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturerNumber}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetMakeForManufacturer(manufacturer)
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided manufacturer as a string', async () => {
    const results = await GetMakeForManufacturer(manufacturer)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided manufacturer as a number', async () => {
    const results = await GetMakeForManufacturer(manufacturerNumber)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrlNumber, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided manufacturer and doFetch = true', async () => {
    const results = await GetMakeForManufacturer(manufacturer, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided manufacturer and doFetch = false', async () => {
    const results = await GetMakeForManufacturer(manufacturer, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([true, false, ['a', 'b'], { a: 'b' }, undefined, null])(
    'rejects with error if manufacturer is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetMakeForManufacturer(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "manufacturer"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
