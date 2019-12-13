const { generateUrl, handleResponseError } = require('./apiUtils')

describe('generateUrl() API Utility Method', () => {
  // save a copy of process.env variables
  const oldEnv = { ...process.env }
  const mockEnv = {
    NHTSA_API_URL: 'MOCK_URL',
    NHTSA_API_ENDPOINT: 'MOCK_ENDPOINT',
    NHTSA_API_RESPONSE_FORMAT: 'MOCK_FORMAT'
  }

  // cleanup
  afterEach(() => {
    process.env = Object.assign({ ...oldEnv })
  })

  describe('It should return the correct URL string based on provided arguments', () => {
    test('no arguments provided', async () => {
      // start with an empty process.env object
      process.env = Object.assign({})

      const url = await generateUrl()

      expect(url).toStrictEqual(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/undefined?format=json'
      )

      expect(url.errMsg).toBeFalsy()
    })
    test('no options provided', async () => {
      // start with an empty process.env object
      process.env = Object.assign({})

      const url = await generateUrl('VIN_NUMBER_GOES_HERE')

      expect(url).toStrictEqual(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/VIN_NUMBER_GOES_HERE?format=json'
      )

      expect(url.errMsg).toBeFalsy()
    })

    test('options values take precedence over proces.env values', async () => {
      process.env = Object.assign({ ...mockEnv })
      const options = {
        url: 'TEST_URL',
        endpoint: 'TEST_ENDPOINT',
        format: 'TEST_FORMAT'
      }
      const url = await generateUrl('VIN_NUMBER_GOES_HERE', options)

      expect(url).toStrictEqual(
        'TEST_URL/TEST_ENDPOINT/VIN_NUMBER_GOES_HERE?format=TEST_FORMAT'
      )

      expect(url.errMsg).toBeFalsy()
    })

    test('process.env values take precedence over default options values', async () => {
      process.env = Object.assign({ ...mockEnv })
      const url = await generateUrl('VIN_NUMBER_GOES_HERE')

      expect(url).toStrictEqual(
        'MOCK_URL/MOCK_ENDPOINT/VIN_NUMBER_GOES_HERE?format=MOCK_FORMAT'
      )

      expect(url.errMsg).toBeFalsy()
    })
  })
})

describe('handleResponseError() API Utility Method', () => {
  test('it should correctly handle API response errors', async () => {
    expect(handleResponseError({ response: 'Response error' })).toStrictEqual(
      'Response error'
    )
    expect(handleResponseError({ request: 'Request error' })).toStrictEqual(
      'Request error'
    )
    expect(handleResponseError({ message: 'Message error' })).toStrictEqual(
      'Message error'
    )
    expect(handleResponseError('Generic error')).toStrictEqual('Generic error')
  })
})
