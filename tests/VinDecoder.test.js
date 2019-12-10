const VinDecoder = require('../src/main')

let decoder = new VinDecoder()

test('recognizes a valid VIN', () => {
  expect(decoder.isValid('3VWD07AJ5EM388202')).toBe(true)
})

test('API - returns results with known good VIN', () => {
  const results = decoder.decodeVin('3VWD07AJ5EM388202')
  // console.log(await results)
  expect(results).toBeTruthy()
})