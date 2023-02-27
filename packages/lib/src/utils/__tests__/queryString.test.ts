import { describe, test, expect } from 'vitest'
import { createQueryString, encodeQueryStringParams } from '../queryString'

describe('createQueryString - utility helper function', () => {
  test('it exists', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  /**************
   * Successes
   **************/
  describe('returns correct string with:', () => {
    test('no params', () => {
      expect(createQueryString()).toBe('?format=json')
    })

    test('one param', () => {
      expect(
        createQueryString({
          modelYear: '2019',
        })
      ).toBe('?modelYear=2019&format=json')
    })

    test('two params', () => {
      expect(
        createQueryString({
          modelYear: '2019',
          page: 2,
        })
      ).toBe('?modelYear=2019&page=2&format=json')
    })

    test('ignores empty string values #1', () => {
      expect(
        createQueryString({
          empty: '',
        })
      ).toBe('?format=json')
    })

    test('ignores empty string values #2', () => {
      expect(
        createQueryString({
          empty: '',
          modelYear: 2019,
        })
      ).toBe('?modelYear=2019&format=json')
    })

    test('URI encodes string values', () => {
      expect(
        createQueryString({
          variable: 'vehicle type',
          mixed: 'something./?&=+[]{}-_|!@#$%^&*()<>:;",',
        })
      ).toBe(
        '?variable=vehicle%20type&mixed=something.%2F%3F%26%3D%2B%5B%5D%7B%7D-_%7C!%40%23%24%25%5E%26*()%3C%3E%3A%3B%22%2C&format=json'
      )
    })
  })

  describe('returns default string when:', () => {
    test('params arg is an empty object', () => {
      expect(createQueryString({})).toBe('?format=json')
    })

    test('params arg is undefined', () => {
      expect(createQueryString(undefined)).toBe('?format=json')
    })

    test('only one param is provided containing an empty string value', () => {
      expect(createQueryString({ nothingHere: '' })).toBe('?format=json')
    })

    test('ignores invalid values', () => {
      const params = { outer: { inner: true } }
      expect(
        createQueryString(params as unknown as Record<string, string>)
      ).toBe('?format=json')
    })
  })

  describe('it handles allowEmptyStringValues option set to true:', () => {
    test('only one param is provided containing an empty string value', () => {
      expect(createQueryString({ nothingHere: '' }, true)).toBe(
        '?nothingHere=&format=json'
      )
    })

    test('multiple params are provided containing empty string values', () => {
      expect(createQueryString({ nothingHere: '', second: '' }, true)).toBe(
        '?nothingHere=&second=&format=json'
      )
    })

    test('a mix of non-empty values and empty string values are provided', () => {
      expect(
        createQueryString({ nothingHere: '', modelYear: 2019 }, true)
      ).toBe('?nothingHere=&modelYear=2019&format=json')
    })
  })

  /**************
   * Failures
   **************/
  describe('fails when:', () => {
    test('arg is an array', () => {
      expect(() =>
        createQueryString(['test', 'invalid'] as unknown as Record<
          string,
          string
        >)
      ).toThrowError()
    })

    test('arg is a string', () => {
      expect(() =>
        createQueryString('test' as unknown as Record<string, string>)
      ).toThrowError()
    })
  })
})

describe('encodeQueryStringParams - utility helper function', () => {
  test('it is defined', () => {
    expect(encodeQueryStringParams).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('it returns correct string with:', () => {
    test('params as an empty object', () => {
      expect(encodeQueryStringParams({})).toEqual({})
    })

    test('one param', () => {
      expect(
        encodeQueryStringParams({
          modelYear: '2019',
        })
      ).toEqual({ modelYear: '2019' })
    })

    test('one param with spaces', () => {
      expect(
        encodeQueryStringParams({
          variable: 'Some Variable',
        })
      ).toEqual({ variable: 'Some%20Variable' })
    })

    test('empty string value', () => {
      expect(
        encodeQueryStringParams({
          empty: '',
        })
      ).toEqual({ empty: '' })
    })

    test('params with encodable characters', () => {
      expect(
        encodeQueryStringParams({
          variable: 'something./?&=+[] {}-_|!@#$%^&*()<>:;"',
        })
      ).toEqual({
        variable:
          'something.%2F%3F%26%3D%2B%5B%5D%20%7B%7D-_%7C!%40%23%24%25%5E%26*()%3C%3E%3A%3B%22',
      })
    })
  })

  /**************
   * Failures
   **************/
  describe('fails when:', () => {
    test('params is undefined', () => {
      expect(() =>
        encodeQueryStringParams(undefined as unknown as Record<string, string>)
      ).toThrowError()
    })

    test('params is an array', () => {
      expect(() =>
        encodeQueryStringParams(['test', 'invalid'] as unknown as Record<
          string,
          string
        >)
      ).toThrowError()
    })

    test('params is a string', () => {
      expect(() =>
        encodeQueryStringParams('test' as unknown as Record<string, string>)
      ).toThrowError()
    })
  })
})
