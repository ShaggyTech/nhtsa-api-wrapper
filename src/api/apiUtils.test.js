const { generateUrl, handleResponseError } = require('./apiUtils')

describe('generateUrl() API Utility Method', () => {
  // save a copy of process.env variables
  const env = { ...process.env }

  afterEach(() => {
    process.env = { ...env }
  })

  test('generates a url with no arguments', async () => {
    const url = await generateUrl('VIN_NUMBER_GOES_HERE')

    expect(url).toStrictEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/VIN_NUMBER_GOES_HERE?format=json'
    )

    expect(url.errMsg).toBeFalsy()
  })

  test('generates a url using all valid arguments', async () => {
    const url = await generateUrl(
      'VIN_NUMBER_GOES_HERE',
      'API_ENDPOINT',
      'RESPONSE_FORMAT'
    )

    expect(url).toStrictEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles/API_ENDPOINT/VIN_NUMBER_GOES_HERE?format=RESPONSE_FORMAT'
    )

    expect(url.errMsg).toBeFalsy()
  })

  test('properly handles no process.env variables', async () => {
    // clear out env variables
    process.env = Object.assign({})

    const url = await generateUrl('VIN_NUMBER_GOES_HERE')

    expect(url).toStrictEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/VIN_NUMBER_GOES_HERE?format=json'
    )

    expect(url.errMsg).toBeFalsy()
  })

  test('supplied with invalid arguments, returns an Object: { errMsg: "" }', async () => {
    // no arguments
    let url = await generateUrl()
    expect(url.errMsg).toBeTruthy()
  })
})

describe('handleResponseError() API Utility Method', () => {
  test('it should correctly handle API response errors', async () => {
    expect(handleResponseError({ response: 'Response error' })).toStrictEqual(
      'Response error'
    )
    expect(handleResponseError({ request: 'Request error' })).toStrictEqual(
      'Request error'
    )
    expect(handleResponseError({ message: 'Message error' })).toStrictEqual(
      'Message error'
    )
    expect(handleResponseError('Generic error')).toStrictEqual('Generic error')
  })
})
