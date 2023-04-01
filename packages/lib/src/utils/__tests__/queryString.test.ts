import { describe, expect, it } from 'vitest'
import { createQueryString, encodeQueryStringParams } from '../queryString'

describe('queryString.ts - exports', () => {
  it('createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  it('validateArgument function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })
})

describe('createQueryString', () => {
  /**************
   * Successes
   **************/
  it('returns correct string with: one param', () => {
    expect(
      createQueryString({
        modelYear: '2019',
      })
    ).toBe('?modelYear=2019&format=json')
  })

  it('returns correct string with: two params', () => {
    expect(
      createQueryString({
        modelYear: '2019',
        page: 2,
      })
    ).toBe('?modelYear=2019&page=2&format=json')
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

  /**************
   * Returns Default String
   **************/
  it('returns default string when: no params', () => {
    expect(createQueryString()).toBe('?format=json')
  })

  it('returns default string when: params are undefined', () => {
    expect(createQueryString(undefined)).toBe('?format=json')
  })

  it('returns default string when: params are an empty object', () => {
    expect(createQueryString({})).toBe('?format=json')
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

  it('ignores invalid values', () => {
    const params = { outer: { inner: true } }
    expect(createQueryString(params as unknown as Record<string, string>)).toBe(
      '?format=json'
    )
  })

  /****************
   * Throws Error
   ****************/
  it('throws error if first argument is an array', () => {
    expect(() =>
      createQueryString(['it', 'invalid'] as unknown as Record<string, string>)
    ).toThrowError()
  })

  it('arg is a string', () => {
    expect(() =>
      createQueryString('it' as unknown as Record<string, string>)
    ).toThrowError()
  })

  describe('allowEmptyStringValues option set to true:', () => {
    it('handles only one param containing an empty string value', () => {
      expect(createQueryString({ nothingHere: '' }, true)).toBe(
        '?nothingHere=&format=json'
      )
    })

    it('handles multiple params containing empty string values', () => {
      expect(createQueryString({ nothingHere: '', second: '' }, true)).toBe(
        '?nothingHere=&second=&format=json'
      )
    })

    it('handles a mix of non-empty values and empty string values', () => {
      expect(
        createQueryString({ nothingHere: '', modelYear: 2019 }, true)
      ).toBe('?nothingHere=&modelYear=2019&format=json')
    })
  })
})

describe('encodeQueryStringParams', () => {
  /**************
   * Successes
   **************/
  describe('returns correct object', () => {
    it('params is an empty object', () => {
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

  /****************
   * Throws Error
   ****************/
  describe('throws error', () => {
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
