const { genQueryString } = require('./genQueryString')

describe('genQueryString() - API Utils Method', () => {
  test('it is defined', () => {
    expect(genQueryString).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('Succeeds with ', () => {
    test('params arg is an empty object, returns empty string', async () => {
      const qs = await genQueryString({}).catch(err => err)
      expect(qs).toStrictEqual('')
    })
    test('single param, returns correct string', async () => {
      const qs = await genQueryString({
        format: 'xml'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml')
    })
    test('two params, returns correct string', async () => {
      const qs = await genQueryString({
        format: 'xml',
        modelYear: '2019'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019')
    })
    test('more than two params, returns correct string', async () => {
      const qs = await genQueryString({
        format: 'xml',
        modelYear: '2019',
        page: 1
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019&page=1')
    })
    test('skips empty param values #1', async () => {
      const qs = await genQueryString({
        empty: '',
        format: 'csv'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=csv')
    })
    test('skips empty param values #2', async () => {
      const qs = await genQueryString({
        format: 'csv',
        empty: ''
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=csv')
    })
    test('one param provided, containing an empty string value, returns empty string', async () => {
      const qs = await genQueryString({ empty: '' }).catch(err => err)
      expect(qs).toStrictEqual('')
    })
    test('param value is in an invalid nested object format', async () => {
      const params = { outer: { inner: true } }
      const qs = await genQueryString(params).catch(err => err)
      expect(qs).toStrictEqual('')
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
      expect(qs).toBeDefined()
    })
    test('no arg', async () => {
      const qs = await genQueryString().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(qs).toBeUndefined()
    })
    test('arg is array', async () => {
      const qs = await genQueryString(['test', 'invalid']).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(qs).toBeUndefined()
    })
    test('arg is a string', async () => {
      const qs = await genQueryString('test').catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(qs).toBeUndefined()
    })
  })
})
