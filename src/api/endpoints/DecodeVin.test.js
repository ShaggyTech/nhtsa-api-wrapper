const decodeVin = require('./DecodeVin')

describe('decodeVin() Succeeds with: ', () => {
  test('no params', async () => {
    const endpoint = await decodeVin('3VWD07AJ5EM388202')
    expect(endpoint).toStrictEqual('/DecodeVin/3VWD07AJ5EM388202')
  })

  test('empty params object', async () => {
    const endpoint = await decodeVin('3VWD07AJ5EM388202', {})
    expect(endpoint).toStrictEqual('/DecodeVin/3VWD07AJ5EM388202')
  })

  test('single param', async () => {
    const endpoint = await decodeVin('3VWD07AJ5EM388202', {
      format: 'json'
    })
    expect(endpoint).toStrictEqual('/DecodeVin/3VWD07AJ5EM388202?format=json')
  })

  test('multiple params', async () => {
    const endpoint = await decodeVin('3VWD07AJ5EM388202', {
      format: 'json',
      modelYear: '2001'
    })
    expect(endpoint).toStrictEqual(
      '/DecodeVin/3VWD07AJ5EM388202?format=json&modelYear=2001'
    )
  })
})

describe('decodeVin() - Fails with: ', () => {
  test('invalid vin argument', async () => {
    // no vin argument - no params
    let endpoint = await decodeVin()
    expect(endpoint).toEqual(expect.any(Error))

    // vin is empty string - no params
    endpoint = await decodeVin('')
    expect(endpoint).toEqual(expect.any(Error))

    // vin is not of type 'string'
    endpoint = await decodeVin(['vin_number']) // array
    expect(endpoint).toEqual(expect.any(Error))
    endpoint = await decodeVin({ vin: 'vin_number' }) // object
    expect(endpoint).toEqual(expect.any(Error))

    // vin is empty string - with params
    endpoint = await decodeVin('', {
      format: 'json',
      modelYear: '2014'
    })
    expect(endpoint).toEqual(expect.any(Error))

    // vin is not provided as the first argument - with params as only argument
    endpoint = await decodeVin({
      format: 'json',
      modelYear: '2014'
    })
    expect(endpoint).toEqual(expect.any(Error))
  })

  test('invalid params argument', async () => {
    const vin = '3VWD07AJ5EM388202'

    // is array
    let endpoint = await decodeVin(vin, ['testing', 'test'])
    expect(endpoint).toEqual(expect.any(Error))
    // is string
    endpoint = await decodeVin(vin, 'test')
    expect(endpoint).toEqual(expect.any(Error))
  })
})
