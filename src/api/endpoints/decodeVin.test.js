const decodeVin = require('./decodeVin')

describe('decodeVin NHTSA.gov API endpoint', () => {
  test('first test', () => {
    const response = decodeVin('TEST_ARG')
    expect(response).toStrictEqual('not implemented yet')
  })
})
