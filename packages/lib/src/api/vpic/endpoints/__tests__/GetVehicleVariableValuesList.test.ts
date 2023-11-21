import { beforeEach, describe, expect, it } from 'vitest'
import { GetVehicleVariableValuesList } from '../'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

describe('api/endpoints/GetVehicleVariableValuesList.ts', () => {
  it('exports GetVehicleVariableValuesList function', () => {
    expect(GetVehicleVariableValuesList).toBeDefined()
    expect(GetVehicleVariableValuesList).toBeInstanceOf(Function)
  })
})

describe('GetVehicleVariableValuesList', () => {
  const endpointName = 'GetVehicleVariableValuesList'
  const variableValue = 'WVW'
  const mockUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/${endpointName}/${variableValue}?format=json`

  const expectedFetchOptions = {
    saveUrl: true,
    method: 'GET',
  }

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  it('returns a Promise', () => {
    const response = GetVehicleVariableValuesList('test')
    expect(response).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  it('fetches data when provided variableValue only', async () => {
    const results = await GetVehicleVariableValuesList(variableValue)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  it('fetches data when provided variableValue and doFetch = true', async () => {
    const results = await GetVehicleVariableValuesList(variableValue, true)

    expect(results).toEqual(mockResults)
    expect(fetchMock).toHaveBeenCalledWith(mockUrl, expectedFetchOptions)
    expect(fetchMock.requests().length).toEqual(1)
    expect(fetchMock.requests()[0].url).toEqual(mockUrl)
    expect(fetchMock.requests()[0].method).toEqual('GET')
  })

  /*****************************
   * doFetch = false
   ****************************/
  it('returns url string when provided variableValue and doFetch = false', async () => {
    const results = await GetVehicleVariableValuesList(variableValue, false)

    expect(results).toEqual(mockUrl)
    expect(fetchMock.requests().length).toEqual(0)
  })

  /*****************************
   * rejects with error
   ***************************/
  it.each([['a', 'b'], { a: 'b' }, null, undefined])(
    'rejects with error if variableValue is neither a string nor number, %#',
    async (arg) => {
      await expect(() =>
        GetVehicleVariableValuesList(arg as unknown as string)
      ).rejects.toThrowError(/error validating argument named "variableValue"/)

      expect(fetchMock.requests().length).toEqual(0)
    }
  )
})
