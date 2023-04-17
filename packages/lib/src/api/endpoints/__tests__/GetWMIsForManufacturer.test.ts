import { beforeEach, describe, expect, it } from 'vitest'
import { GetWMIsForManufacturer } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetWMIsForManufacturer.ts', () => {
  it('exports GetWMIsForManufacturer function', () => {
    expect(GetWMIsForManufacturer).toBeDefined()
    expect(GetWMIsForManufacturer).toBeInstanceOf(Function)
  })
})

describe('GetWMIsForManufacturer', () => {
  const endpointName = 'GetWMIsForManufacturer'

  const manufacturerString = 'Audi'
  const manufacturerNumber = 987
  const vehicleTypeString = 'Passenger'
  const vehicleTypeNumber = 1

  const mockUrlWithManufacturerString = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturerString}?format=json`
  const mockUrlWithManufacturerNumber = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturerNumber}?format=json`
  const mockUrlWithVehicleTypeString = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?vehicleType=${vehicleTypeString}&format=json`
  const mockUrlWithVehicleTypeNumber = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/?vehicleType=${vehicleTypeNumber}&format=json`
  const mockUrlWithAllParams = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${manufacturerString}?vehicleType=${vehicleTypeString}&format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetWMIsForManufacturer({
      manufacturer: manufacturerNumber,
    })
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided params.manufacturer as a string', async () => {
    const results = await GetWMIsForManufacturer({
      manufacturer: manufacturerString,
    })

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
    const results = await GetWMIsForManufacturer({
      manufacturer: manufacturerNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithManufacturerNumber,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithManufacturerNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.vehicleType as a string', async () => {
    const results = await GetWMIsForManufacturer({
      vehicleType: vehicleTypeString,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithVehicleTypeString,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithVehicleTypeString)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.vehicleType as a number', async () => {
    const results = await GetWMIsForManufacturer({
      vehicleType: vehicleTypeNumber,
    })

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithVehicleTypeNumber,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithVehicleTypeNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params', async () => {
    const results = await GetWMIsForManufacturer({
      manufacturer: manufacturerString,
      vehicleType: vehicleTypeString,
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

  it('fetches data when provided params.manufacturer and doFetch = true', async () => {
    const results = await GetWMIsForManufacturer(
      { manufacturer: manufacturerNumber },
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithManufacturerNumber,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithManufacturerNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided params.vehicleType and doFetch = true', async () => {
    const results = await GetWMIsForManufacturer(
      { vehicleType: vehicleTypeNumber },
      true
    )

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(
      mockUrlWithVehicleTypeNumber,
      expectedFetchOptions
    )
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrlWithVehicleTypeNumber)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided all params and doFetch = true', async () => {
    const results = await GetWMIsForManufacturer(
      {
        manufacturer: manufacturerString,
        vehicleType: vehicleTypeString,
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
  it('returns url string when provided params.manufacturer and doFetch = false', async () => {
    const results = await GetWMIsForManufacturer(
      { manufacturer: manufacturerNumber },
      false
    )

    expect(results).toEqual(mockUrlWithManufacturerNumber)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided params.vehicleType and doFetch = false', async () => {
    const results = await GetWMIsForManufacturer(
      { vehicleType: vehicleTypeNumber },
      false
    )

    expect(results).toEqual(mockUrlWithVehicleTypeNumber)
    expect(fetchMock.requests().length).toEqual(0)
  })

  it('returns url string when provided all params and doFetch = false', async () => {
    const results = await GetWMIsForManufacturer(
      { manufacturer: manufacturerString, vehicleType: vehicleTypeString },
      false
    )

    expect(results).toEqual(mockUrlWithAllParams)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it('rejects with error if no params are provided', async () => {
    await expect(() =>
      GetWMIsForManufacturer({} as unknown as { manufacturer: number })
    ).rejects.toThrowError(
      /must provide at least one of the following arguments: manufacturer, vehicleType/
    )
  })

  it('rejects with error if neither params.manufacturer nor params.vehicleType are provided', async () => {
    await expect(() =>
      GetWMIsForManufacturer({ mock: 'some value' } as unknown as {
        manufacturer: number
      })
    ).rejects.toThrowError(
      /must provide at least one of the following arguments: manufacturer, vehicleType/
    )
  })

  it.each([1234, ['a', 'b']])(
    'rejects with error if params is neither an object nor boolean, %#',
    async (arg) => {
      await expect(() =>
        GetWMIsForManufacturer(arg as unknown as { manufacturer: number })
      ).rejects.toThrowError(/error validating argument named "params"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.manufacturer is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetWMIsForManufacturer({
          manufacturer: arg as unknown as number,
          vehicleType: vehicleTypeNumber,
        })
      ).rejects.toThrowError(/error validating argument named "manufacturer"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )

  it.each([true, false, ['a', 'b'], { a: 'b' }, null])(
    'rejects with error if params.vehicleType is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetWMIsForManufacturer({
          manufacturer: manufacturerNumber,
          vehicleType: arg as unknown as number,
        })
      ).rejects.toThrowError(/error validating argument named "vehicleType"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
