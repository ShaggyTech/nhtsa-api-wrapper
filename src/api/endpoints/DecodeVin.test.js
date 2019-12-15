const decodeVin = require('./DecodeVin')

describe('decodeVin NHTSA.gov API endpoint', () => {
  test('no params provided', () => {
    const endpoint = decodeVin('3VWD07AJ5EM388202')
    expect(endpoint).toStrictEqual('/DecodeVin/3VWD07AJ5EM388202')
  })

  test('format param is provided', () => {
    const endpoint = decodeVin('3VWD07AJ5EM388202', {
      format: 'json'
    })
    expect(endpoint).toStrictEqual('/DecodeVin/3VWD07AJ5EM388202?format=json')
  })

  test('modelYear param provided', () => {
    const endpoint = decodeVin('3VWD07AJ5EM388202', {
      modelYear: '2014'
    })
    expect(endpoint).toStrictEqual(
      '/DecodeVin/3VWD07AJ5EM388202?modelYear=2014'
    )
  })

  test('format and modelYear params provided', () => {
    const endpoint = decodeVin('3VWD07AJ5EM388202', {
      format: 'json',
      modelYear: '2014'
    })
    expect(endpoint).toStrictEqual(
      '/DecodeVin/3VWD07AJ5EM388202?format=json&modelYear=2014'
    )
  })

  test('handles invalid vin argument', () => {
    // All function calls with no VIN provided, should return the desired result
    const desiredResult = '/DecodeVin/INVALID_VIN'

    // no vin argument - no params
    let endpoint = decodeVin()
    expect(endpoint).toStrictEqual(desiredResult)

    // vin is empty string - no params
    endpoint = decodeVin('')
    expect(endpoint).toStrictEqual(desiredResult)

    // vin is not of type 'string' - no params
    endpoint = decodeVin(['vin_number']) // array
    expect(endpoint).toStrictEqual(desiredResult)
    endpoint = decodeVin({ vin: 'vin_number' }) // object
    expect(endpoint).toStrictEqual(desiredResult)

    // vin is empty string - with params
    endpoint = decodeVin('', {
      format: 'json',
      modelYear: '2014'
    })
    expect(endpoint).toStrictEqual(desiredResult)

    // vin is not provided as the first argument - with params as only argument
    endpoint = decodeVin({
      format: 'json',
      modelYear: '2014'
    })
    expect(endpoint).toStrictEqual(desiredResult)
  })
})
