const { genApiUrl } = require('./genApiUrl')

describe('api/utils genApiUrl() method', () => {
  test('it is defined', async () => {
    expect(genApiUrl).toBeDefined()
  })

  describe('it succeeds with ', () => {
    const baseUrl = 'https://test-url.com'
    const action = 'TEST_ACTION'
    const resource = 'TEST_RESOURCE'

    test('a valid resource and action, but no params', async () => {
      const url = await genApiUrl({
        baseUrl,
        action,
        resource
      })
      expect(url).toEqual('https://test-url.com/TEST_ACTION/TEST_RESOURCE')
    })

    test('a valid resource and action, with params', async () => {
      const url = await genApiUrl({
        baseUrl,
        action,
        resource,
        params: {
          format: 'test_format',
          modelYear: 1991
        }
      })
      expect(url).toEqual(
        'https://test-url.com/TEST_ACTION/TEST_RESOURCE?format=test_format&modelYear=1991'
      )
    })
  })
})
