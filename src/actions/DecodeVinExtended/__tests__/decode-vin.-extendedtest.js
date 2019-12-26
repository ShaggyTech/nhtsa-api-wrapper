jest.mock('axios', () => require('../__mockApi__/axios'))

const axios = require('axios')

const DecodeVinExtended = require('../decode-vin-extended')

describe('DecodeVinExtended API Action', () => {
  test('it exists', () => {
    expect(DecodeVinExtended).toBeDefined()
    expect(DecodeVinExtended).toEqual(expect.any(Function))
  })

  test('it uses mocked axios.get return data from the nearest __mocks__ folder', async () => {
    const result = await DecodeVinExtended('TEST_VIN').catch(err => err)

    expect(result.Results[0].ValueId).toEqual(
      'data from __mocks__/mockResponse.js'
    )
    expect(result.Results[0].Variable).toEqual('Mocked Data')
  })

  /***************
   * SUCCESSES
   ***************/
  describe('Returns valid response with: ', () => {
    test('valid vin arg', async () => {
      const result = await DecodeVinExtended('TEST_VIN').catch(err => err)

      // it returns an object
      expect(result).toEqual(expect.any(Object))

      // it builds the correct url string
      const expectedUrl =
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/TEST_VIN?format=json'
      expect(result.url).toEqual(expectedUrl)

      // it adds the correct 'action' key to axios.get results object
      expect(result.action).toEqual('DecodeVinExtended')
    })

    test('valid vin arg, valid options', async () => {
      const result = await DecodeVinExtended('TEST_VIN', {
        baseUrl: 'test.api.com',
        format: 'csv',
        modelYear: 1991
      }).catch(err => err)

      // it returns an object
      expect(result).toEqual(expect.any(Object))

      // it builds the correct url string
      const expectedUrl =
        'test.api.com/DecodeVinExtended/TEST_VIN?format=csv&modelYear=1991'
      expect(result.url).toEqual(expectedUrl)
    })
  })

  /***************
   * FAILURES
   ***************/
  describe('Handles argument Errors when: ', () => {
    test('no args provided', async () => {
      const result = await DecodeVinExtended().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })

    test('vin arg is empty string', async () => {
      const result = await DecodeVinExtended('').catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })

    test('vin arg is invalid type Object', async () => {
      const result = await DecodeVinExtended({
        fails: 'INVALID_VIN_ARG'
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })

    test('vin arg is invalid type Array', async () => {
      const result = await DecodeVinExtended(['INVALID_VIN_ARG']).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })

    test('invalid baseUrl option, to test errors from genApiUrl module', async () => {
      const result = await DecodeVinExtended('TEST_VIN', {
        baseUrl: ['invalid baseUrl']
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })

    test('mocked axios.get rejects with an error inside request.get()', async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error('simulated error'))
      )

      const result = await DecodeVinExtended('TEST_VIN').catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })
  })
})
