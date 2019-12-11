const isValidVin = require('./isValidVin')

describe('VIN Validation Algorithm', () => {
  test('it should return true with a valid VIN', () => {
    // valid uppercase
    expect(isValidVin('3VWD07AJ5EM388202')).toBe(true)
    // valid lowercase
    expect(isValidVin('3vwd07aj5em388202')).toBe(true)
  })
  
  test('it should fail with invalid arguments', () => {
    // invalid
    expect(isValidVin('3VWD07AJ5EM388203')).toBe(false)
    // too short
    expect(isValidVin('3VWD07AJ5EM38820')).toBe(false)
    expect(isValidVin('1234567890')).toBe(false)
    expect(isValidVin('')).toBe(false)
    // invalid argument type
    expect(isValidVin([])).toBe(false)
    expect(isValidVin({})).toBe(false)
    expect(isValidVin(() => true)).toBe(false)
    // missing argument
    expect(isValidVin()).toBe(false)
    // invalid check digit (vin[8])
    expect(isValidVin('3VWD07AJAEM388203')).toBe(false)
    // check digit is equal to 'X'
    expect(isValidVin('3VWD07AJXEM388203')).toBe(false)
  })
})