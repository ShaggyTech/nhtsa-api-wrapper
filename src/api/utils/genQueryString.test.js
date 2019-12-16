const { genQueryString } = require('./genQueryString')

describe('genQueryString() - API Utils Method', () => {
  test('it is defined', () => {
    expect(genQueryString).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('Succeeds with ', () => {
    test('single param', async () => {
      const qs = await genQueryString({
        format: 'xml'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml')
    })
    test('two params', async () => {
      const qs = await genQueryString({
        format: 'xml',
        modelYear: '2019'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019')
    })
    test('more than two params', async () => {
      const qs = await genQueryString({
        format: 'xml',
        modelYear: '2019',
        page: 1
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019&page=1')
    })
    test('arg is in an invalid nested object format, but will not fail', async () => {
      const qs = await genQueryString({ outer: { inner: true } }).catch(
        err => err
      )
      expect(qs).toStrictEqual('?outer=[object Object]')
    })
  })

  /**************
   * Failures
   **************/
  describe('Fails when ', () => {
    test('sanity check, should not fail', async () => {
      const qs = await genQueryString({ testParam: 'testing' }).catch(err => {
        expect(err).toEqual('should never be reached')
      })
    })
    test('no arg', async () => {
      const qs = await genQueryString().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('arg is empty object', async () => {
      const qs = await genQueryString({}).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('arg is array', async () => {
      const qs = await genQueryString(['test', 'invalid']).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
    test('arg is a string', async () => {
      const qs = await genQueryString('test').catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
    })
  })
})
