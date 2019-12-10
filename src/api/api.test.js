const { get } = require('./api.js')

test('decodeVin request mode', () => {
  const getResponse = get(
    'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json'
  )
  expect(getResponse.test).toBe('it works!')
})