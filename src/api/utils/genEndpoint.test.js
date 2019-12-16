const { genEndpoint } = require('./genEndpoint')

describe('genEndpoint() - API Utils Method', () => {
  const vin = '3VWD07AJ5EM388202'
  const endpoint = 'DecodeVin'

  test('it is defined', () => {
    expect(genEndpoint).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('Succeeds with valid args and ', () => {
    test('no params', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin
      }).catch(err => err)
      expect(ep).toStrictEqual(`/${endpoint}/${vin}`)
    })
    test('one param', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: {
          format: 'json'
        }
      }).catch(err => err)
      expect(ep).toStrictEqual(`/${endpoint}/${vin}?format=json`)
    })
    test('two params', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: {
          format: 'csv',
          modelYear: 2001
        }
      }).catch(err => err)
      expect(ep).toStrictEqual(`/${endpoint}/${vin}?format=csv&modelYear=2001`)
    })
    test('three or more params', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: {
          format: 'xml',
          modelYear: 2001,
          page: '2'
        }
      }).catch(err => err)
      expect(ep).toStrictEqual(
        `/${endpoint}/${vin}?format=xml&modelYear=2001&page=2`
      )
    })
  })

  /**************
   * Errors
   **************/
  describe('Fails with ', () => {
    test('missing endpoint', async () => {
      const ep = await genEndpoint({
        vin
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid endpoint(empty string)', async () => {
      const ep = await genEndpoint({
        endpoint: '',
        vin
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid endpoint(object)', async () => {
      const ep = await genEndpoint({
        endpoint: { should: 'fail' },
        vin
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('missing vin', async () => {
      const ep = await genEndpoint({
        endpoint
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid vin(empty string)', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin: ''
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid vin(array)', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin: ['should', 'fail']
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid params(string)', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: 'should fail'
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid params(array)', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: ['should', 'fail']
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid params(empty object)', async () => {
      const ep = await genEndpoint({
        endpoint,
        vin,
        params: {}
      }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('invalid first arg', async () => {
      // Sanity check with correct params
      let ep = await genEndpoint({
        endpoint,
        vin,
        params: {
          format: 'json'
        }
      }).catch(err => {
        expect(err).toEqual('This should never be reached')
      })
      // no arg
      ep = await genEndpoint().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      // arg is empty object
      ep = await genEndpoint({}).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      // arg is an array
      ep = await genEndpoint(['test', 'invalid']).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      // arg is a string
      ep = await genEndpoint('test').catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      // arg is in an invalid nested object format
      ep = await genEndpoint({ outer: { inner: true } }).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
  })
})
