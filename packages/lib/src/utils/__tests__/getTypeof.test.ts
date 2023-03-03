import { describe, expect, it } from 'vitest'
import { getTypeof } from '../getTypeof'

describe('getTypeof.ts - exports', () => {
  it('getTypeof function', () => {
    expect(getTypeof).toBeDefined()
    expect(getTypeof).toBeInstanceOf(Function)
  })
})

describe('getTypeof', () => {
  it('it returns correct type', () => {
    expect(getTypeof(undefined)).toBe('undefined')
    expect(getTypeof(null)).toBe('null')
    expect(getTypeof(true)).toBe('boolean')
    expect(getTypeof('this is a string')).toBe('string')
    expect(getTypeof(() => 'this is a function')).toBe('function')
    expect(getTypeof({ an: 'object' })).toBe('object')
    expect(getTypeof(['an', 'array'])).toBe('array')
  })

  it('it handles different Error types as type "error"', () => {
    const error = new Error('this is an error')
    const typeError = new TypeError('this is a type error')
    const rangeError = new RangeError('this is a range error')
    const referenceError = new ReferenceError('this is a reference error')
    const syntaxError = new SyntaxError('this is a syntax error')
    const uriError = new URIError('this is a URI error')

    expect(getTypeof(error)).toBe('error')
    expect(getTypeof(typeError)).toBe('error')
    expect(getTypeof(rangeError)).toBe('error')
    expect(getTypeof(referenceError)).toBe('error')
    expect(getTypeof(syntaxError)).toBe('error')
    expect(getTypeof(uriError)).toBe('error')
  })
})
