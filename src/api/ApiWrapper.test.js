const ApiWrapper = require('./ApiWrapper')

describe('Tests ApiWrapper Class', () => {
  // save a copy of process.env variables to restore from
  const oldEnv = { ...process.env }
  // prevent process.env pollution
  process.env = Object.assign({})

  const mockEnv = {
    NHTSA_API_BASE_URL: 'MOCK_URL',
    NHTSA_API_ACTION: 'MOCK_ACTIOn',
    NHTSA_API_FORMAT: 'MOCK_FORMAT'
  }

  // cleanup process.env after our tests have finished
  afterAll(() => {
    process.env = Object.assign({ ...oldEnv })
  })

  test('it exists', () => {
    expect(ApiWrapper).toBeDefined()
  })

  test('it has all default properties', async () => {
    const wrapper = new ApiWrapper()

    const baseUrl = wrapper.baseUrl
    expect(baseUrl).toEqual('https://vpic.nhtsa.dot.gov/api/vehicles')

    const action = wrapper.action
    expect(action).toEqual('DecodeVinValues')

    const format = wrapper.format
    expect(format).toEqual('json')
  })

  test('before instantiation, it sets all properties', async () => {
    const options = {
      baseUrl: 'https://testapi.com',
      action: 'TESTING_ACTION',
      format: 'TESTING_FORMAT'
    }
    const wrapper = new ApiWrapper(options)

    expect(wrapper.baseUrl).toEqual('https://testapi.com')
    expect(wrapper.action).toEqual('TESTING_ACTION')
    expect(wrapper.format).toEqual('TESTING_FORMAT')

    const url = await wrapper
      .generateApiUrl({
        resource: 'TESTING_RESOURCE'
      })
      .catch(err => err)

    expect(url).toEqual(
      'https://testapi.com/TESTING_ACTION/TESTING_RESOURCE?format=TESTING_FORMAT'
    )
  })

  test('before instantiation, it recognizes process.env variables and sets internals to match', async () => {
    // Mock enviroment variables
    const mockEnv = {
      NHTSA_API_BASE_URL: 'MOCK_URL',
      NHTSA_API_ACTION: 'MOCK_ACTION',
      NHTSA_API_FORMAT: 'MOCK_FORMAT'
    }
    process.env = { ...mockEnv }

    const wrapper = new ApiWrapper()

    expect(wrapper.baseUrl).toEqual('MOCK_URL')
    expect(wrapper.action).toEqual('MOCK_ACTION')
    expect(wrapper.format).toEqual('MOCK_FORMAT')

    let url = await wrapper
      .generateApiUrl({
        resource: 'TESTING_RESOURCE'
      })
      .catch(err => err)

    expect(url).toEqual(
      'MOCK_URL/MOCK_ACTION/TESTING_RESOURCE?format=MOCK_FORMAT'
    )

    // cleanup after ourselves and make sure it goes back to defaults
    process.env = Object.assign({})
    const newWrapper = new ApiWrapper()
    url = await newWrapper
      .generateApiUrl({
        resource: 'TESTING_RESOURCE'
      })
      .catch(err => err)
    expect(url).toEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/TESTING_RESOURCE?format=json'
    )
  })

  test('after instantiation, it sets all properties', async () => {
    const wrapper = new ApiWrapper()

    wrapper.baseUrl = 'test.base-url.com'
    expect(wrapper.baseUrl).toEqual('test.base-url.com')

    wrapper.action = 'TestAction'
    expect(wrapper.action).toEqual('TestAction')

    wrapper.format = 'csv'
    expect(wrapper.format).toEqual('csv')
  })
})

/**********************************
 *
 * generateApiUrl()
 *
 **********************************/
describe('generateApiUrl() method', () => {
  const wrapper = new ApiWrapper()

  test('it exists', async () => {
    expect(wrapper.generateApiUrl).toBeDefined()
  })

  /***************
   * SUCCESSES
   ***************/
  describe('Succeeds when called with - ', () => {
    test('no options, default action and query string with default format', async () => {
      const resource = '3VWD07AJ5EM388202'

      const expected =
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=json'

      const request = await wrapper
        .generateApiUrl({ resource })
        .catch(err => err)
      expect(request).toEqual(expected)
    })

    test('params option, user supplied format param', async () => {
      const resource = '3VWD07AJ5EM388202'
      let params = {
        format: 'csv',
        modelYear: 2001
      }

      const expected =
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=csv&modelYear=2001'

      const request = await wrapper
        .generateApiUrl({ resource, params })
        .catch(err => err)
      expect(request).toEqual(expected)
    })

    test('action option', async () => {
      const resource = '3VWD07AJ5EM388202'
      const action = 'TestAction'

      const expected =
        'https://vpic.nhtsa.dot.gov/api/vehicles/TestAction/3VWD07AJ5EM388202?format=json'

      const request = await wrapper
        .generateApiUrl({ resource, action })
        .catch(err => err)
      expect(request).toEqual(expected)
    })

    test('params option and no format set', async () => {
      const resource = '3VWD07AJ5EM388202'
      const params = {
        modelYear: 2012
      }

      const expected =
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?modelYear=2012&format=json'

      const request = await wrapper
        .generateApiUrl({ resource, params })
        .catch(err => err)
      expect(request).toEqual(expected)
    })

    test('missing action option', async () => {
      const resource = '3VWD07AJ5EM388202'

      const url = await wrapper
        .generateApiUrl({
          resource
        })
        .catch(err => {
          expect(err).toEqual(expect.any(Error))
        })
      expect(url).toEqual(
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=json'
      )
    })
  })

  /***************
   * FAILURES
   ***************/
  describe('it returns an error with - ', () => {
    const action = 'TEST_ACTION'
    const resource = 'TEST_RESOURCE'

    const wrapper = new ApiWrapper()
    let url

    test('sanity check, should not fail', async () => {
      url = await wrapper
        .generateApiUrl({
          action,
          resource
        })
        .catch(err => {
          expect(err).toEqual('should never be reached')
        })
      expect(url).toBeDefined()
    })

    test('no args', async () => {
      url = await wrapper.generateApiUrl().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('empty options', async () => {
      url = await wrapper.generateApiUrl({}).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('missing resource option', async () => {
      url = await wrapper
        .generateApiUrl({
          action
        })
        .catch(err => {
          expect(err).toEqual(expect.any(Error))
        })
      expect(url).toBeUndefined()
    })

    test('invalid action option', async () => {
      url = await wrapper
        .generateApiUrl({
          resource,
          action: ['test', 'should fail']
        })
        .catch(err => {
          expect(err).toEqual(expect.any(Error))
        })
      expect(url).toBeUndefined()
    })
  })
})
