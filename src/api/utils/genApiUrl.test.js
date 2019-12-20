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
  })
})
