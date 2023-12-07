import { describe, test, expect } from 'vitest'
import { handleError, isError, rejectWithError } from '../errorHandler'

const defaultErrorMessage = 'an unknown error occurred.'

describe('errorHandler.ts - exports', () => {
  test('isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  test('handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  test('rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })
})

describe('isError()', () => {
  describe('returns true for Error types:', () => {
    test.each([
      ['Error', Error()],
      ['TypeError', TypeError()],
      ['SyntaxError', SyntaxError()],
      ['EvalError', EvalError()],
      ['RangeError', RangeError()],
      ['ReferenceError', ReferenceError()],
      ['URIError', URIError()],
    ])('%s', (_, error) => {
      expect(isError(error)).toBe(true)
    })
  })

  describe('returns false for non-Error types:', () => {
    test.each([
      ['string', 'string'],
      ['number', 123],
      ['object', { message: 'test' }],
      ['array', [1, 2, 3]],
      ['null', null],
      ['undefined', undefined],
      ['true', true],
      ['false', false],
      ['function', () => null],
      ['Map', new Map()],
      ['Date', new Date()],
      ['RegExp', new RegExp('test')],
      ['Promise', Promise.resolve()],
    ])('%s', (_, error) => {
      expect(isError(error)).toBe(false)
      // @ts-expect-error Expected 1 arguments, but got 0.
      expect(isError()).toBe(false)
    })
  })
})

describe('handleError()', () => {
  describe('returns same Error and default message when passed an Error type without a message:', () => {
    test.each([
      ['Error', Error()],
      ['TypeError', TypeError()],
      ['SyntaxError', SyntaxError()],
      ['EvalError', EvalError()],
      ['RangeError', RangeError()],
      ['ReferenceError', ReferenceError()],
      ['URIError', URIError()],
    ])('%s', (_, error) => {
      expect(handleError(error)).toBeInstanceOf(Error)
    })
  })

  describe('returns same Error and message when passed an Error type containing a message:', () => {
    const errorMsg = 'some test error message'
    test.each([
      ['Error', Error(errorMsg)],
      ['TypeError', TypeError(errorMsg)],
      ['SyntaxError', SyntaxError(errorMsg)],
      ['EvalError', EvalError(errorMsg)],
      ['RangeError', RangeError(errorMsg)],
      ['ReferenceError', ReferenceError(errorMsg)],
      ['URIError', URIError(errorMsg)],
    ])('%s', (_, error) => {
      expect(handleError(error)).toBeInstanceOf(Error)
      expect(handleError(error).message).toBe(errorMsg)
    })
  })

  describe('returns a new Error with same message when passed a message string:', () => {
    test.each([
      ['string', 'some error message'],
      ['empty string', ''],
    ])('%s', (_, errorMsg) => {
      expect(handleError(errorMsg)).toBeInstanceOf(Error)
      expect(handleError(errorMsg).message).toBe(errorMsg)
    })
  })

  describe('returns an Error with a default message if not passed a string or Error:', () => {
    test.each([
      ['number', 123],
      ['object', { message: 'test' }],
      ['array', [1, 2, 3]],
      ['null', null],
      ['undefined', undefined],
      ['true', true],
      ['false', false],
      ['function', () => null],
      ['Map', new Map()],
      ['Date', new Date()],
      ['RegExp', new RegExp('test')],
      ['Promise', Promise.resolve()],
    ])('%s', (_, error) => {
      expect(handleError(error)).toBeInstanceOf(Error)
      expect(handleError(error).message).toBe(defaultErrorMessage)

      // @ts-expect-error Expected 1 arguments, but got 0.
      expect(handleError()).toBeInstanceOf(Error)
      // @ts-expect-error Expected 1 arguments, but got 0.
      expect(handleError().message).toBe(defaultErrorMessage)
    })
  })
})

describe('rejectWithError() - returns rejected promise:', () => {
  describe('with same Error and default message when passed an Error type without a message', () => {
    test.each([
      ['Error', Error()],
      ['TypeError', TypeError()],
      ['SyntaxError', SyntaxError()],
      ['EvalError', EvalError()],
      ['RangeError', RangeError()],
      ['ReferenceError', ReferenceError()],
      ['URIError', URIError()],
    ])('%s', async (_, error) => {
      await expect(rejectWithError(error)).rejects.toBeInstanceOf(Error)
      await expect(rejectWithError(error)).rejects.toHaveProperty(
        'message',
        defaultErrorMessage
      )
    })
  })

  describe('with same Error and message when when passed an Error type with a message', () => {
    test.each([
      ['Error', Error('test error')],
      ['TypeError', TypeError('test error')],
      ['SyntaxError', SyntaxError('test error')],
      ['EvalError', EvalError('test error')],
      ['RangeError', RangeError('test error')],
      ['ReferenceError', ReferenceError('test error')],
      ['URIError', URIError('test error')],
    ])('%s', async (_, error) => {
      await expect(rejectWithError(error)).rejects.toBeInstanceOf(Error)
      await expect(rejectWithError(error)).rejects.toHaveProperty(
        'message',
        'test error'
      )
    })
  })

  describe('with new Error when a passed a string as the error message', () => {
    test.each([
      ['string', 'test error'],
      ['empty string', ''],
    ])('%s', async (_, errorMsg) => {
      await expect(rejectWithError(errorMsg)).rejects.toBeInstanceOf(Error)
      await expect(rejectWithError(errorMsg)).rejects.toHaveProperty(
        'message',
        errorMsg
      )
    })
  })

  describe('with a new Error and default message if not passed an Error or string', () => {
    test.each([
      ['number', 123],
      ['object', { message: 'test' }],
      ['array', [1, 2, 3]],
      ['null', null],
      ['undefined', undefined],
      ['true', true],
      ['false', false],
      ['function', () => null],
      ['Map', new Map()],
      ['Date', new Date()],
      ['RegExp', new RegExp('test')],
      ['Promise', Promise.resolve()],
    ])('%s', async (_, error) => {
      await expect(rejectWithError(error)).rejects.toBeInstanceOf(Error)
      await expect(rejectWithError(error)).rejects.toHaveProperty(
        'message',
        defaultErrorMessage
      )

      // @ts-expect-error Expected 1 arguments, but got 0.
      await expect(rejectWithError()).rejects.toBeInstanceOf(Error)
      // @ts-expect-error Expected 1 arguments, but got 0.
      await expect(rejectWithError()).rejects.toHaveProperty(
        'message',
        defaultErrorMessage
      )
    })
  })
})
