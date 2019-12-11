const { generateUrl, handleResponseError } = require('./apiUtils')

describe('generateUrl() API Utility Method', () => {
  test('generates a default url', async () => {
    const url = await generateUrl(
      'VIN_NUMBER_GOES_HERE',
      'DECODE_TYPE',
      'RESPONSE_FORMAT'
    )

    expect(url).toStrictEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DECODE_TYPE/VIN_NUMBER_GOES_HERE?format=RESPONSE_FORMAT'
    )

    expect(url.errMsg).toBeFalsy()
  })

  test('supplied with invalid arguments, returns an Object: { errMsg: "" }', async () => {
    // no arguments
    let url = await generateUrl()
    expect(url.errMsg).toBeTruthy()
    // no second or third arg
    url = generateUrl('VIN_NUMBER_GOES_HERE')
    expect(url.errMsg).toBeTruthy()
    // no third arg
    url = generateUrl('VIN_NUMBER_GOES_HERE', 'DECODE_TYPE')
    expect(url.errMsg).toBeTruthy()
    // invalid argument types
    url = generateUrl('VIN_NUMBER_GOES_HERE', {}, 'RESPONSE_FORMAT')
    expect(url.errMsg).toBeTruthy()
  })
})

describe('handleResponseError() API Utility Method', () => {
  test('it should correctly handle API response errors', () => {
    expect(handleResponseError({response: 'Response error'})).toStrictEqual('Response error')
    expect(handleResponseError({request: 'Request error'})).toStrictEqual('Request error')
    expect(handleResponseError({message: 'Message error'})).toStrictEqual('Message error')
    expect(handleResponseError('Generic error')).toStrictEqual('Generic error')
  })
})
