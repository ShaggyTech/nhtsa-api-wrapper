jest.mock('./genQueryString')
const { genQueryString } = require('./genQueryString')

const { genApiUrl } = require('./genApiUrl')

describe('api/utils genApiUrl() method', () => {
  test('it is defined', async () => {
    expect(genApiUrl).toBeDefined()
  })

  /***************
   * SUCCESSES
   ***************/
  describe('it succeeds with ', () => {
    const baseUrl = 'https://test-url.com'
    const action = 'TEST_ACTION'
    const resource = 'TEST_RESOURCE'

    beforeEach(() => {
      // We don't want to use the mocked version of genQueryString for this test
      // as the mocked version always returns a rejected Promise containing an error
      genQueryString.mockImplementationOnce(
        jest.requireActual('./genQueryString').genQueryString
      )
    })

    test('valid args, but no params', async () => {
      const url = await genApiUrl({
        baseUrl,
        action,
        resource
      }).catch(err => err)
      expect(url).toEqual('https://test-url.com/TEST_ACTION/TEST_RESOURCE')
    })

    test('valid args, with params', async () => {
      const url = await genApiUrl({
        baseUrl,
        action,
        resource,
        params: {
          format: 'test_format',
          modelYear: 1991
        }
      }).catch(err => err)
      expect(url).toEqual(
        'https://test-url.com/TEST_ACTION/TEST_RESOURCE?format=test_format&modelYear=1991'
      )
    })

    test('valid args, with empty params object', async () => {
      const url = await genApiUrl({
        baseUrl,
        action,
        resource,
        params: {}
      }).catch(err => err)
      expect(url).toEqual('https://test-url.com/TEST_ACTION/TEST_RESOURCE')
    })
  })

  /***************
   * FAILURES
   ***************/
  describe('it returns an error with - ', () => {
    const baseUrl = 'https://test-url.com'
    const action = 'TEST_ACTION'
    const resource = 'TEST_RESOURCE'
    let url

    test('sanity check, should not fail', async () => {
      url = await genApiUrl({
        baseUrl,
        action,
        resource
      }).catch(err => {
        expect(err).toEqual('should never be reached')
      })
      expect(url).toBeDefined()
    })

    test('no args', async () => {
      url = await genApiUrl().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('empty args', async () => {
      url = await genApiUrl({}).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('missing baseUrl arg', async () => {
      url = await genApiUrl({
        action,
        resource
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('missing action arg', async () => {
      url = await genApiUrl({
        baseUrl,
        resource
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('missing resource arg', async () => {
      url = await genApiUrl({
        baseUrl,
        action
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('params arg is not of type Object', async () => {
      url = await genApiUrl({
        baseUrl,
        action,
        resource,
        params: ['this should fail']
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })

    test('when genQueryString returns an error', async () => {
      // Mock an error returned from genQueryString to test that it is properly caught
      genQueryString.mockReturnValue(
        Promise.reject(new Error('mocked return value from inside the test'))
      )

      url = await genApiUrl({
        baseUrl,
        action,
        resource,
        params: {
          should: 'not_show_up_in_return'
        }
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(url).toBeUndefined()
    })
  })
})
