import { beforeEach, describe, expect, it } from 'vitest'
import { GetParts } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetParts.ts', () => {
  it('exports GetParts function', () => {
    expect(GetParts).toBeDefined()
    expect(GetParts).toBeInstanceOf(Function)
  })
})

describe('GetParts', () => {
  const endpointName = 'GetParts'

  const manufacturerString = 'Audi'
  const manufacturerNumber = 987
  const type = 565
  const fromDate = '1/1/2015'
  const toDate = '5/5/2015'
  const page = 1
  const pageString = '1'

  const encodedFromDate = encodeURIComponent(fromDate)
  const encodedToDate = encodeURIComponent(toDate)

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?format=json`
  const mockUrlWithManufacturerString = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?manufacturer=${manufacturerString}&format=json`
  const mockUrlWithManufacturerNumber = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?manufacturer=${manufacturerNumber}&format=json`
  const mockUrlWithType = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?type=${type}&format=json`
  const mockUrlWithFromDate = encodeURI(
    `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?fromDate=${encodedFromDate}&format=json`
  )
  const mockUrlWithToDate = encodeURI(
    `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?toDate=${encodedToDate}&format=json`
  )
  const mockUrlWithPage = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?page=${page}&format=json`
  const mockUrlWithAllParams = encodeURI(
    `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?manufacturer=${manufacturerString}&type=${type}&fromDate=${encodedFromDate}&toDate=${encodedToDate}&page=${pageString}&format=json`
  )

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

  it('fetches data when provided params.manufacturer as a string', async () => {
    const results = await GetParts({ manufacturer: manufacturerString })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithManufacturerString,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithManufacturerString)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.manufacturer as a number', async () => {
    const results = await GetParts({ manufacturer: manufacturerNumber })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithManufacturerNumber,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithManufacturerNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.type', async () => {
    const results = await GetParts({ type })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithType,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithType)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.fromDate', async () => {
    const results = await GetParts({ fromDate })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithFromDate,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithFromDate)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.toDate', async () => {
    const results = await GetParts({ toDate })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithToDate,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithToDate)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.page as a number', async () => {
    const results = await GetParts({ page })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithPage,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithPage)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.page as a string', async () => {
    const results = await GetParts({ page: pageString })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithPage,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithPage)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params and doFetch = true', async () => {
    const results = await GetParts(
      { manufacturer: manufacturerString, type, fromDate, toDate, page },
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
    const results = await GetParts(false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params.manufacturer and doFetch = false', async () => {
    const results = await GetParts({ manufacturer: manufacturerNumber }, false)

    expect(results).toEqual(mockUrlWithManufacturerNumber)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params.type and doFetch = false', async () => {
    const results = await GetParts({ type }, false)

    expect(results).toEqual(mockUrlWithType)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params.fromDate and doFetch = false', async () => {
    const results = await GetParts({ fromDate }, false)

    expect(results).toEqual(mockUrlWithFromDate)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params.toDate and doFetch = false', async () => {
    const results = await GetParts({ toDate }, false)

    expect(results).toEqual(mockUrlWithToDate)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided all params and doFetch = false', async () => {
    const results = await GetParts(
      { manufacturer: manufacturerString, type, fromDate, toDate, page },
      false
    )

    expect(results).toEqual(mockUrlWithAllParams)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([1234, ['a', 'b']])(
    'rejects with error if params is neither an object nor boolean, %#',
    async (arg) => {
      await expect(() =>
        GetParts(arg as unknown as object)
      ).rejects.toThrowError(/error validating argument named "params"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.manufacturer is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetParts({ manufacturer: arg as unknown as number })
      ).rejects.toThrowError(/error validating argument named "manufacturer"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.type is not a number, %#',
    async (arg) => {
      await expect(() =>
        GetParts({
          type: arg as unknown as 565,
        })
      ).rejects.toThrowError(/error validating argument named "type"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.fromDate is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetParts({
          fromDate: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "fromDate"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.toDate is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetParts({
          toDate: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "toDate"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.page is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetParts({
          page: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "page"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
