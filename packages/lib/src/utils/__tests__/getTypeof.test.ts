import { describe, expect, test } from 'vitest'
import { getTypeof } from '../getTypeof'

describe('getTypeof.ts - exports', () => {
  test('getTypeof function', () => {
    expect(getTypeof).toBeDefined()
    expect(getTypeof).toBeInstanceOf(Function)
  })
})

describe('getTypeof()', () => {
  describe('returns correct type for primitive values:', () => {
    test.each([
      [undefined, 'undefined'],
      [null, 'null'],
      [true, 'boolean'],
      [false, 'boolean'],
      ['this is a string', 'string'],
      [123, 'number'],
      [123.456, 'number'],
      [NaN, 'number'],
      [Infinity, 'number'],
      [0, 'number'],
      [-0, 'number'],
      [Infinity, 'number'],
      [-Infinity, 'number'],
      [123n, 'bigint'],
      [Symbol('test'), 'symbol'],
    ])('value: %s = type: "%s"', (value, type) => {
      expect(getTypeof(value)).toBe(type)
    })
  })

  describe('returns correct type for non-primitive values:', () => {
    test.each([
      [{ message: 'test' }, 'object'],
      [{}, 'object'],
      [[1, 2, 3], 'array'],
      [() => null, 'function'],
      [class {}, 'function'],
      [new Map(), 'map'],
      [new Date(), 'date'],
      [new RegExp('test'), 'regexp'],
      [Promise.resolve(), 'promise'],
      [new Set(), 'set'],
      [new WeakMap(), 'weakmap'],
      [new WeakSet(), 'weakset'],
    ])(`value: %s = type: "%s"`, (value, type) => {
      expect(getTypeof(value)).toBe(type)
    })
  })

  describe('returns type "error" for all Error types:', () => {
    test.each([
      [Error(), 'error'],
      [TypeError(), 'error'],
      [SyntaxError(), 'error'],
      [EvalError(), 'error'],
      [RangeError(), 'error'],
      [ReferenceError(), 'error'],
      [URIError(), 'error'],
    ])(`value: %s = type: "%s"`, (error) => {
      expect(getTypeof(error)).toBe('error')
    })
  })
})
