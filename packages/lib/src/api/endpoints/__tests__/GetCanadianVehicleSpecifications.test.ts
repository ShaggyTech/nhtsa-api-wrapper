import { beforeEach, describe, expect, it } from 'vitest'
import { GetCanadianVehicleSpecifications } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetCanadianVehicleSpecifications.ts', () => {
  it('exports GetCanadianVehicleSpecifications function', () => {
    expect(GetCanadianVehicleSpecifications).toBeDefined()
    expect(GetCanadianVehicleSpecifications).toBeInstanceOf(Function)
  })
})

describe('GetCanadianVehicleSpecifications', () => {
  const endpointName = 'GetCanadianVehicleSpecifications'

  const yearString = '2013'
  const yearNumber = 2013
  const make = 'Audi'
  const model = 'A3'
  const units = 'US'

  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?make=&model=&units=&year=${yearString}&format=json`
  const mockUrlWithMake = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?make=${make}&model=&units=&year=${yearString}&format=json`
  const mockUrlWithModel = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?make=&model=${model}&units=&year=${yearString}&format=json`
  const mockUrlWithUnits = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?make=&model=&units=${units}&year=${yearString}&format=json`
  const mockUrlWithAllParams = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?make=${make}&model=${model}&units=${units}&year=${yearString}&format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetCanadianVehicleSpecifications({ year: yearString })
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided params.year as a string', async () => {
    const results = await GetCanadianVehicleSpecifications({ year: yearString })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.year as a number', async () => {
    const results = await GetCanadianVehicleSpecifications({ year: yearNumber })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.year and doFetch = true', async () => {
    const results = await GetCanadianVehicleSpecifications(
      { year: yearNumber },
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params year and make', async () => {
    const results = await GetCanadianVehicleSpecifications({
      year: yearNumber,
      make,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithMake,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithMake)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params year and model', async () => {
    const results = await GetCanadianVehicleSpecifications({
      year: yearNumber,
      model,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithModel,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithModel)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params year and units', async () => {
    const results = await GetCanadianVehicleSpecifications({
      year: yearNumber,
      units,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithUnits,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithUnits)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params', async () => {
    const results = await GetCanadianVehicleSpecifications({
      year: yearNumber,
      make,
      model,
      units,
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
    const results = await GetCanadianVehicleSpecifications(
      {
        year: yearNumber,
        make,
        model,
        units,
      },
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
  it('returns url string when provided params.year and doFetch = false', async () => {
    const results = await GetCanadianVehicleSpecifications(
      { year: yearNumber },
      false
    )

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided all params and doFetch = false', async () => {
    const results = await GetCanadianVehicleSpecifications(
      { year: yearNumber, make, model, units },
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
        GetCanadianVehicleSpecifications(arg as unknown as { year: number })
      ).rejects.toThrowError(/error validating argument named "params"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.page is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetCanadianVehicleSpecifications({ year: arg as unknown as number })
      ).rejects.toThrowError(/error validating argument named "year"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.make is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetCanadianVehicleSpecifications({
          year: yearNumber,
          make: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "make"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.model is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetCanadianVehicleSpecifications({
          year: yearNumber,
          model: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "model"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.units is not a string, %#',
    async (arg) => {
      await expect(() =>
        GetCanadianVehicleSpecifications({
          year: yearNumber,
          units: arg as unknown as string,
        })
      ).rejects.toThrowError(/error validating argument named "units"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
