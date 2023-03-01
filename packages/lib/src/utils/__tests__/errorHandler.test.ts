import { describe, it, expect } from 'vitest'
import { isError, handleError, rejectWithError } from '../errorHandler'

describe('errorHandler - utility helper functions for error handling', () => {
  it('exports isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  it('exports handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  it('exports rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })
})

describe('isError', () => {
  /**************
   * Successes
   **************/
  it('correctly identifies errors', () => {
    expect(isError(new Error())).toBe(true)
    expect(isError(new TypeError())).toBe(true)
    expect(isError(new SyntaxError())).toBe(true)
    expect(isError(new EvalError())).toBe(true)
    expect(isError(new RangeError())).toBe(true)
    expect(isError(new ReferenceError())).toBe(true)
    expect(isError(new URIError())).toBe(true)
  })

  it('correctly identifies non-errors', () => {
    expect(isError(123)).toBe(false)
    expect(isError('string')).toBe(false)
    expect(isError({ message: 'test' })).toBe(false)
    expect(isError([1, 2, 3])).toBe(false)
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)
    expect(isError(true)).toBe(false)
    expect(isError(false)).toBe(false)
    expect(isError(() => null)).toBe(false)
  })

  /**************
   * Failures
   **************/
  // describe('fails when:', () => {
  //   test('arg is an array', () => {
  //     expect(() =>
  //       createQueryString(['test', 'invalid'] as unknown as Record<
  //         string,
  //         string
  //       >)
  //     ).toThrowError()
  //   })

  //   test('arg is a string', () => {
  //     expect(() =>
  //       createQueryString('test' as unknown as Record<string, string>)
  //     ).toThrowError()
  //   })
  // })
})

// describe('encodeQueryStringParams - utility helper function', () => {
//   test('it is defined', () => {
//     expect(encodeQueryStringParams).toBeDefined()
//   })

//   /**************
//    * Successes
//    **************/
//   describe('it returns correct string with:', () => {
//     test('params as an empty object', () => {
//       expect(encodeQueryStringParams({})).toEqual({})
//     })

//     test('one param', () => {
//       expect(
//         encodeQueryStringParams({
//           modelYear: '2019',
//         })
//       ).toEqual({ modelYear: '2019' })
//     })

//     test('one param with spaces', () => {
//       expect(
//         encodeQueryStringParams({
//           variable: 'Some Variable',
//         })
//       ).toEqual({ variable: 'Some%20Variable' })
//     })

//     test('empty string value', () => {
//       expect(
//         encodeQueryStringParams({
//           empty: '',
//         })
//       ).toEqual({ empty: '' })
//     })

//     test('params with encodable characters', () => {
//       expect(
//         encodeQueryStringParams({
//           variable: 'something./?&=+[] {}-_|!@#$%^&*()<>:;"',
//         })
//       ).toEqual({
//         variable:
//           'something.%2F%3F%26%3D%2B%5B%5D%20%7B%7D-_%7C!%40%23%24%25%5E%26*()%3C%3E%3A%3B%22',
//       })
//     })
//   })

//   /**************
//    * Failures
//    **************/
//   describe('fails when:', () => {
//     test('params is undefined', () => {
//       expect(() =>
//         encodeQueryStringParams(undefined as unknown as Record<string, string>)
//       ).toThrowError()
//     })

//     test('params is an array', () => {
//       expect(() =>
//         encodeQueryStringParams(['test', 'invalid'] as unknown as Record<
//           string,
//           string
//         >)
//       ).toThrowError()
//     })

//     test('params is a string', () => {
//       expect(() =>
//         encodeQueryStringParams('test' as unknown as Record<string, string>)
//       ).toThrowError()
//     })
//   })
// })
