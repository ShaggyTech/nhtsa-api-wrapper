import { beforeEach, describe, expect, it } from 'vitest'
import { GetAllManufacturers } from '../'

// Mocks
import { createMockResponse } from '@vitest/helpers'
import { mockResults } from '@vitest/data'

describe('api/endpoints/GetAllManufacturers.ts', () => {
  it('exports GetAllManufacturers function', () => {
    expect(GetAllManufacturers).toBeDefined()
    expect(GetAllManufacturers).toBeInstanceOf(Function)
  })
})

describe('GetAllManufacturers', () => {
  const endpointName = 'GetAllManufacturers'
  const manufacturerType = 'Completed'
  const pageString = '2'
  const pageNumber = 2

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?format=json`
  const mockUrlWithManufacturerType = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?manufacturerType=${manufacturerType}&format=json`
  const mockUrlWithPage = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?page=${pageString}&format=json`
  const mockUrlWithAllParams = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?manufacturerType=${manufacturerType}&page=${pageString}&format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetAllManufacturers()
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data', async () => {
    const results = await GetAllManufacturers()

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided doFetch = true', async () => {
    const results = await GetAllManufacturers(true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.manufacturerType', async () => {
    const results = await GetAllManufacturers({ manufacturerType })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithManufacturerType,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithManufacturerType)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.page as a string', async () => {
    const results = await GetAllManufacturers({ page: pageString })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithPage,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithPage)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.page as a number', async () => {
    const results = await GetAllManufacturers({ page: pageNumber })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithPage,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithPage)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.manufacturerType and params.page', async () => {
    const results = await GetAllManufacturers({
      manufacturerType,
      page: pageNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithAllParams,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithAllParams)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params and doFetch = true', async () => {
    const results = await GetAllManufacturers(
      { manufacturerType, page: pageNumber },
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithAllParams,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithAllParams)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided doFetch = false', async () => {
    const results = await GetAllManufacturers(false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params and doFetch = false', async () => {
    const results = await GetAllManufacturers(
      { manufacturerType, page: pageNumber },
      false
    )

    expect(results).toEqual(mockUrlWithAllParams)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([1234, ['a', 'b'], null])(
    'rejects with error if params is neither an object nor boolean, %#',
    async (arg) => {
      await expect(() =>
        GetAllManufacturers(arg as unknown as object)
      ).rejects.toThrowError(/error validating argument named "params"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([123, true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.manufacturerType is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetAllManufacturers({ manufacturerType: arg } as unknown as object)
      ).rejects.toThrowError(
        /error validating argument named "manufacturerType"/
      )

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.page is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetAllManufacturers({ page: arg } as unknown as object)
      ).rejects.toThrowError(/error validating argument named "page"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
