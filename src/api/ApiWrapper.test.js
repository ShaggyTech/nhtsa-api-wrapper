const ApiWrapper = require('./ApiWrapper')

describe('Tests ApiWrapper Class', () => {
  // prevent process.env pollution
  process.env = Object.assign({})

  // save a copy of process.env variables to restore from
  const oldEnv = { ...process.env }

  const mockEnv = {
    NHTSA_API_URL: 'MOCK_URL',
    NHTSA_API_ENDPOINT: 'MOCK_ENDPOINT',
    NHTSA_API_RESPONSE_FORMAT: 'MOCK_FORMAT'
  }

  // cleanup process.env after our tests have finished
  afterEach(() => {
    process.env = Object.assign({ ...oldEnv })
  })

  test('it exists', () => {
    expect(ApiWrapper).toBeDefined()
  })

  test('it has all default properties', async () => {
    const wrapper = new ApiWrapper()

    const request = await wrapper.request()
    expect(request).toEqual('testing')

    const baseUrl = wrapper.baseUrl
    expect(baseUrl).toEqual('https://vpic.nhtsa.dot.gov/api/vehicles')

    const endpoint = wrapper.endpoint
    expect(endpoint).toEqual('DecodeVinValues')

    const format = wrapper.format
    expect(format).toEqual('json')
  })

  test('it sets all properties', async () => {
    const wrapper = new ApiWrapper()

    wrapper.baseUrl = 'test.url.com'
    expect(wrapper.baseUrl).toEqual('test.url.com')

    wrapper.endpoint = 'TestEndpoint'
    expect(wrapper.endpoint).toEqual('TestEndpoint')

    wrapper.format = 'csv'
    expect(wrapper.format).toEqual('csv')
  })

  describe('generateApiUrl() method', () => {
    const wrapper = new ApiWrapper()

    test('it exists', async () => {
      expect(wrapper.generateApiUrl).toBeDefined()
    })

    describe('Succeeds when called with - ', () => {
      test('no options, default endpoint and query string', async () => {
        const vin = '3VWD07AJ5EM388202'

        const expected =
          'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=json'

        const request = await wrapper.generateApiUrl({ vin })
        expect(request).toEqual(expected)
      })

      test('params option', async () => {
        const vin = '3VWD07AJ5EM388202'
        let params = {
          format: 'csv',
          modelYear: 2001
        }

        const expected =
          'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=csv&modelYear=2001'

        const request = await wrapper.generateApiUrl({ vin, params })
        expect(request).toEqual(expected)
      })

      test('endpoint option', async () => {
        const vin = '3VWD07AJ5EM388202'
        const endpoint = 'TestEndpoint'

        const expected =
          'https://vpic.nhtsa.dot.gov/api/vehicles/TestEndpoint/3VWD07AJ5EM388202?format=json'

        const request = await wrapper.generateApiUrl({ vin, endpoint })
        expect(request).toEqual(expected)
      })

      test('params option and no format set', async () => {
        const vin = '3VWD07AJ5EM388202'
        const params = {
          modelYear: 2012
        }

        const expected =
          'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?modelYear=2012&format=json'

        const request = await wrapper.generateApiUrl({ vin, params })
        expect(request).toEqual(expected)
      })
    })
  })
})
