import { describe, expect, it } from 'vitest'
import { createQueryString, encodeQueryStringParams } from '../queryString'

describe('createQueryString - utility helper function', () => {
  it('exists', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  /**************
   * Successes
   **************/
  describe('returns correct string with:', () => {
    it('no params', () => {
      expect(createQueryString()).toBe('?format=json')
    })

    it('one param', () => {
      expect(
        createQueryString({
          modelYear: '2019',
        })
      ).toBe('?modelYear=2019&format=json')
    })

    it('two params', () => {
      expect(
        createQueryString({
          modelYear: '2019',
          page: 2,
        })
      ).toBe('?modelYear=2019&page=2&format=json')
    })

    it('ignores empty string values #1', () => {
      expect(
        createQueryString({
          empty: '',
        })
      ).toBe('?format=json')
    })

    it('ignores empty string values #2', () => {
      expect(
        createQueryString({
          empty: '',
          modelYear: 2019,
        })
      ).toBe('?modelYear=2019&format=json')
    })

    it('URI encodes string values', () => {
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
    it('params arg is an empty object', () => {
      expect(createQueryString({})).toBe('?format=json')
    })

    it('params arg is undefined', () => {
      expect(createQueryString(undefined)).toBe('?format=json')
    })

    it('only one param is provided containing an empty string value', () => {
      expect(createQueryString({ nothingHere: '' })).toBe('?format=json')
    })

    it('ignores invalid values', () => {
      const params = { outer: { inner: true } }
      expect(
        createQueryString(params as unknown as Record<string, string>)
      ).toBe('?format=json')
    })
  })

  describe('it handles allowEmptyStringValues option set to true:', () => {
    it('only one param is provided containing an empty string value', () => {
      expect(createQueryString({ nothingHere: '' }, true)).toBe(
        '?nothingHere=&format=json'
      )
    })

    it('multiple params are provided containing empty string values', () => {
      expect(createQueryString({ nothingHere: '', second: '' }, true)).toBe(
        '?nothingHere=&second=&format=json'
      )
    })

    it('a mix of non-empty values and empty string values are provided', () => {
      expect(
        createQueryString({ nothingHere: '', modelYear: 2019 }, true)
      ).toBe('?nothingHere=&modelYear=2019&format=json')
    })
  })

  /**************
   * Failures
   **************/
  describe('fails when:', () => {
    it('arg is an array', () => {
      expect(() =>
        createQueryString(['it', 'invalid'] as unknown as Record<
          string,
          string
        >)
      ).toThrowError()
    })

    it('arg is a string', () => {
      expect(() =>
        createQueryString('it' as unknown as Record<string, string>)
      ).toThrowError()
    })
  })
})

describe('encodeQueryStringParams - utility helper function', () => {
  it('it is defined', () => {
    expect(encodeQueryStringParams).toBeDefined()
  })

  /**************
   * Successes
   **************/
  describe('it returns correct string with:', () => {
    it('params as an empty object', () => {
      expect(encodeQueryStringParams({})).toEqual({})
    })

    it('one param', () => {
      expect(
        encodeQueryStringParams({
          modelYear: '2019',
        })
      ).toEqual({ modelYear: '2019' })
    })

    it('one param with spaces', () => {
      expect(
        encodeQueryStringParams({
          variable: 'Some Variable',
        })
      ).toEqual({ variable: 'Some%20Variable' })
    })

    it('empty string value', () => {
      expect(
        encodeQueryStringParams({
          empty: '',
        })
      ).toEqual({ empty: '' })
    })

    it('params with encodable characters', () => {
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
    it('params is undefined', () => {
      expect(() =>
        encodeQueryStringParams(undefined as unknown as Record<string, string>)
      ).toThrowError()
    })

    it('params is an array', () => {
      expect(() =>
        encodeQueryStringParams(['it', 'invalid'] as unknown as Record<
          string,
          string
        >)
      ).toThrowError()
    })

    it('params is a string', () => {
      expect(() =>
        encodeQueryStringParams('it' as unknown as Record<string, string>)
      ).toThrowError()
    })
  })
})
