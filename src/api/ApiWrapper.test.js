const ApiWrapper = require('./ApiWrapper')

describe('Tests ApiWrapper Class', () => {
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

    test('with valid input', async () => {
      const vin = '3VWD07AJ5EM388202'
      let params = {
        format: 'csv'
      }

      const expected =
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=csv'

      const request = await wrapper.generateApiUrl(vin, params)
      expect(request).toEqual(expected)
    })
  })
})
