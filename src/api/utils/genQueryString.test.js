const { genQueryString } = require('./genQueryString')

describe('genQueryString() - API Utils Method', () => {
  test('it is defined', () => {
    expect(genQueryString).toBeDefined()
  })

  test('generates valid query strings', async () => {
    // single param
    let qs = await genQueryString({
      format: 'xml'
    }).catch(err => err)
    expect(qs).toStrictEqual('?format=xml')

    // two params
    qs = await genQueryString({
      format: 'xml',
      modelYear: '2019'
    }).catch(err => err)
    expect(qs).toStrictEqual('?format=xml&modelYear=2019')

    // multiple params
    qs = await genQueryString({
      format: 'xml',
      modelYear: '2019',
      page: 1
    }).catch(err => err)
    expect(qs).toStrictEqual('?format=xml&modelYear=2019&page=1')
  })

  test('handles invalid params arg', async () => {
    // Sanity check
    let qs = await genQueryString({ testParam: 'testing' }).catch(err => {
      expect(err).toBe(undefined)
    })
    // no arg
    qs = await genQueryString().catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    // arg is empty object
    qs = await genQueryString({}).catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    // arg is an array
    qs = await genQueryString(['test', 'invalid']).catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    // arg is a string
    qs = await genQueryString('test').catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    // arg is in an invalid nested object format, no error thrown
    qs = await genQueryString({ outer: { inner: true } }).catch(err => err)
    expect(qs).toStrictEqual('?outer=[object Object]')
  })
})
