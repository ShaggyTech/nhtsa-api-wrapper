import { queryString } from '../queryString'

describe('queryString() - API Utils Method', () => {
  test('it is defined', () => {
    expect(queryString).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('Returns correct string with: ', () => {
    test('one param', async () => {
      const qs = await queryString({
        format: 'xml'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml')
    })

    test('two params', async () => {
      const qs = await queryString({
        format: 'xml',
        modelYear: '2019'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019')
    })

    test('more than two params', async () => {
      const qs = await queryString({
        format: 'xml',
        modelYear: '2019',
        page: 1
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=xml&modelYear=2019&page=1')
    })

    test('param values equal to empty strings #1', async () => {
      const qs = await queryString({
        empty: '',
        format: 'csv'
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=csv')
    })

    test('param values equal to empty strings #2', async () => {
      const qs = await queryString({
        format: 'csv',
        empty: ''
      }).catch(err => err)
      expect(qs).toStrictEqual('?format=csv')
    })
  })

  describe('Returns empty string when: ', () => {
    test('params arg is an empty object', async () => {
      const qs = await queryString({}).catch(err => err)
      expect(qs).toStrictEqual('')
    })

    test('params arg is undefined', async () => {
      const qs = await queryString(undefined as any).catch(err => err)
      expect(qs).toStrictEqual('')
    })

    test('only one param is provided containing an empty string value', async () => {
      const qs = await queryString({ nothingHere: '' }).catch(err => err)
      expect(qs).toStrictEqual('')
    })

    test('param value is in an invalid nested object format', async () => {
      const params = { outer: { inner: true } }
      const qs = await queryString(params as any).catch(err => err)
      expect(qs).toStrictEqual('')
    })
  })

  /**************
   * Failures
   **************/
  describe('Fails when ', () => {
    test('sanity check, should not fail', async () => {
      const qs = await queryString({ testParam: 'testing' }).catch(err => {
        expect(err).toEqual('should never be reached')
      })
      expect(qs).toBeDefined()
    })

    test('arg is array', async () => {
      const qs = await queryString(['test', 'invalid'] as any).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(qs).toBeUndefined()
    })

    test('arg is a string', async () => {
      const qs = await queryString('test' as any).catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(qs).toBeUndefined()
    })
  })
})
