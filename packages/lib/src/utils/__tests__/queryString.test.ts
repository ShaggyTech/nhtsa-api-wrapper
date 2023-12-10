import { describe, expect, test } from 'vitest'
import { createQueryString, encodeQueryStringParams } from '../queryString'

describe('queryString.ts - exports', () => {
  test('createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  test('validateArgument function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })
})

describe('encodeQueryStringParams()', () => {
  /**************
   * Successes
   **************/
  describe('returns correct object with values URI component encoded', () => {
    test.each([
      [{}, {}],
      [{ modelYear: '2019' }, { modelYear: '2019' }],
      [
        { modelYear: '2019', page: 2 },
        { modelYear: '2019', page: '2' },
      ],
      [
        { modelYear: '2019', page: 2, variable: 'vehicle type' },
        { modelYear: '2019', page: '2', variable: 'vehicle%20type' },
      ],
      [
        {
          modelYear: '2019',
          page: 2,
          variable: 'vehicle type',
          mixed: 'something./?&=+[]{}-_|!@#$%^&*()<>:;",',
        },
        {
          modelYear: '2019',
          page: '2',
          variable: 'vehicle%20type',
          mixed:
            'something.%2F%3F%26%3D%2B%5B%5D%7B%7D-_%7C!%40%23%24%25%5E%26*()%3C%3E%3A%3B%22%2C',
        },
      ],
    ])('params: %s', (params, expected) => {
      expect(encodeQueryStringParams(params)).toEqual(expected)
    })
  })

  /****************
   * Throws Error
   ****************/
  describe('throws error when params is not passed or is not an object', () => {
    test.each([
      [undefined],
      ['string'],
      [123],
      [true],
      [false],
      [() => 'function'],
    ])('params: %s', (params) => {
      expect(() =>
        // @ts-expect-error Type 'x' is not assignable to type 'QueryStringParams'.
        encodeQueryStringParams(params)
      ).toThrowError(/error validating argument named "params"/)
    })
  })
})

describe('createQueryString()', () => {
  /**************
   * Successes
   **************/
  describe('returns correct string', () => {
    test.each([
      [undefined, '?format=json'],
      [{}, '?format=json'],
      [{ modelYear: '2019' }, '?modelYear=2019&format=json'],
      [{ modelYear: '2019', page: 2 }, '?modelYear=2019&page=2&format=json'],
      [
        { modelYear: '2019', page: 2, variable: 'vehicle type' },
        '?modelYear=2019&page=2&variable=vehicle%20type&format=json',
      ],
      [
        {
          modelYear: '2019',
          page: 2,
          variable: 'vehicle type',
          mixed: 'something./?&=+[]{}-_|!@#$%^&*()<>:;",',
        },
        '?modelYear=2019&page=2&variable=vehicle%20type&mixed=something.%2F%3F%26%3D%2B%5B%5D%7B%7D-_%7C!%40%23%24%25%5E%26*()%3C%3E%3A%3B%22%2C&format=json',
      ],
    ])('params: %s', (params, expected) => {
      expect(createQueryString(params)).toBe(expected)
    })

    describe('and ignores empty string values', () => {
      test.each([
        [{ empty: '' }, '?format=json'],
        [{ empty: '', modelYear: 2019 }, '?modelYear=2019&format=json'],
      ])('params: %s', (params, expected) => {
        expect(createQueryString(params)).toBe(expected)
      })
    })

    describe('and allows empty string values with allowEmptyStringValues option set to true', () => {
      test.each([
        [{ empty: '' }, '?empty=&format=json'],
        [
          { empty: '', empty2: '', empty3: undefined },
          '?empty=&empty2=&format=json',
        ],
        [{ empty: '', modelYear: 2019 }, '?empty=&modelYear=2019&format=json'],
      ])('params: %s', (params, expected) => {
        expect(createQueryString(params, true)).toBe(expected)
      })
    })

    describe('and ignores invalid params', () => {
      test.each([
        [{ invalid: ['a', 'b'], invalid2: { a: 'b' } }, '?format=json'],
        [
          { modelYear: '2019', invalid: ['a', 'b'], invalid2: { a: 'b' } },
          '?modelYear=2019&format=json',
        ],
      ])('params: %s', (params, expected) => {
        // @ts-expect-error Type 'x' is not assignable to type 'QueryStringTypes'.
        expect(createQueryString(params)).toBe(expected)
      })
    })
  })

  /****************
   * Throws Error
   ****************/
  describe('throws Error if params is not an object', () => {
    test.each(['string', ['array'], 123, true, false, () => 'function'])(
      'params: %s',
      (params) => {
        expect(() =>
          // @ts-expect-error Type 'x' is not assignable to type 'QueryStringParams'.
          createQueryString(params)
        ).toThrowError(/error validating argument named "params"/)
      }
    )
  })
})
