const isValidVin = require('../libs/isValidVin')

test('returns true with known good VINs', () => {
  // valid uppercase
  expect(isValidVin('3VWD07AJ5EM388202')).toBe(true)
  // valid lowercase
  expect(isValidVin('3vwd07aj5em388202')).toBe(true)
})

test('returns false with known bad VINs', () => {
  // invalid
  expect(isValidVin('3VWD07AJ5EM388203')).toBe(false)
  // too short
  expect(isValidVin('3VWD07AJ5EM38820')).toBe(false)
  expect(isValidVin('1234567890')).toBe(false)
  expect(isValidVin('')).toBe(false)
  // invalid argument type
  expect(isValidVin([])).toBe(false)
  expect(isValidVin({})).toBe(false)
  // missing argument
  expect(isValidVin()).toBe(false)
})