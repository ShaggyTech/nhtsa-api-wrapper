import { describe, expect, test } from 'vitest'
import { isValidVin, generateRandomVIN } from '../isValidVin'

describe('isValidVin.ts - exports:', () => {
  test('isValidVin function', () => {
    expect(isValidVin).toBeDefined()
    expect(isValidVin).toBeInstanceOf(Function)
  })

  test('generateRandomVIN function', () => {
    expect(generateRandomVIN).toBeDefined()
    expect(generateRandomVIN).toBeInstanceOf(Function)
  })
})

describe('isValidVin())', () => {
  describe('returns true when passed a known valid VIN', () => {
    test.each([
      '3VWD07AJ5EM388202',
      '3VWD07AJ5EM388202 ',
      '1FMJK2AT1KEA36140',
      '5XYZU3LA1EG176607',
      '1M8GDM9AXKP042788',
      '3vwd07aj5em388202',
    ])('%s', (vin) => {
      expect(isValidVin(vin)).toBe(true)
    })
  })

  describe('returns true when passed a structurally valid VIN that does not correspond to an actual vehicle', () => {
    test.each([
      '00000000000000000',
      '11111111111111111',
      generateRandomVIN(),
      generateRandomVIN(),
      generateRandomVIN(),
      generateRandomVIN(),
    ])('%s', (vin) => {
      expect(isValidVin(vin)).toBe(true)
    })
  })

  describe('returns false when passed an invalid VIN', () => {
    test.each([
      '3VWD07AJ5EM3882020',
      '3VWD07AJ5EM388203',
      '3VWD07AJAEM388203',
      '3VWD07AJXEM388203',
      '3VWD07AJ5EM38820',
      '1234567890',
      '',
    ])('%s', (vin) => {
      expect(isValidVin(vin)).toBe(false)
    })
  })

  describe('returns false when passed arg that is not a string', () => {
    test.each([[], {}, undefined, null, true, false, 0, 1, NaN, () => {}])(
      '%s',
      (vin) => {
        // @ts-expect-error Type 'x' is not assignable to type 'string'.
        expect(isValidVin(vin)).toBe(false)
      }
    )
  })
})

describe('generateRandomVIN()', () => {
  test('returns a string', () => {
    expect(typeof generateRandomVIN()).toBe('string')
  })

  test('returns a string that is 17 characters long', () => {
    expect(generateRandomVIN().length).toBe(17)
  })

  test('returns a string that is 17 characters long and is a valid VIN', () => {
    const vin = generateRandomVIN()
    expect(vin.length).toBe(17)
    expect(isValidVin(vin)).toBe(true)
  })
})
