import { describe, it, expect } from 'vitest'
import { handleError, isError, rejectWithError } from '../errorHandler'

const defaultErrorMessage = 'an unknown error occurred.'

describe('errorHandler.ts - exports', () => {
  it('isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  it('handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  it('rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })
})

describe('isError', () => {
  it('returns true for errors', () => {
    expect(isError(Error())).toBe(true)
    expect(isError(TypeError())).toBe(true)
    expect(isError(SyntaxError())).toBe(true)
    expect(isError(EvalError())).toBe(true)
    expect(isError(RangeError())).toBe(true)
    expect(isError(ReferenceError())).toBe(true)
    expect(isError(URIError())).toBe(true)
  })

  it('returns false for non-errors', () => {
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
})

describe('handleError', () => {
  it('returns same Error when provided an Error', () => {
    expect(handleError(Error('test error'))).toBeInstanceOf(Error)
    expect(handleError(Error('test error')).message).toBe('test error')

    expect(handleError(TypeError('test error'))).toBeInstanceOf(TypeError)
    expect(handleError(SyntaxError('test error'))).toBeInstanceOf(SyntaxError)
    expect(handleError(EvalError('test error'))).toBeInstanceOf(EvalError)
    expect(handleError(RangeError('test error'))).toBeInstanceOf(RangeError)
    expect(handleError(ReferenceError('test error'))).toBeInstanceOf(
      ReferenceError
    )
    expect(handleError(URIError('test error'))).toBeInstanceOf(URIError)
  })

  it('returns an Error with message when provided a message string', () => {
    expect(handleError('test error')).toBeInstanceOf(Error)
    expect(handleError('test error').message).toBe('test error')

    expect(handleError('')).toBeInstanceOf(Error)
    expect(handleError('').message).toBe('')
  })

  it('returns an Error with default message', () => {
    expect(handleError(Error())).toBeInstanceOf(Error)
    expect(handleError(Error()).message).toBe(defaultErrorMessage)

    expect(handleError(undefined)).toBeInstanceOf(Error)
    expect(handleError(undefined).message).toBe(defaultErrorMessage)

    expect(handleError(null)).toBeInstanceOf(Error)
    expect(handleError(null).message).toBe(defaultErrorMessage)

    expect(handleError({ message: 'test error', b: 2 })).toBeInstanceOf(Error)
    expect(handleError({ message: 'test error', b: 2 }).message).toBe(
      defaultErrorMessage
    )

    expect(handleError(['a', 'b', 'c'])).toBeInstanceOf(Error)
    expect(handleError(['a', 'b', 'c']).message).toBe(defaultErrorMessage)
  })
})

describe('rejectWithError', () => {
  it('rejects with provided Error', async () => {
    await expect(rejectWithError(Error('test error'))).rejects.toBeInstanceOf(
      Error
    )
    await expect(rejectWithError(Error('test error'))).rejects.toHaveProperty(
      'message',
      'test error'
    )
  })

  it('rejects with a new Error if not provided an Error', async () => {
    await expect(rejectWithError('test error')).rejects.toBeInstanceOf(Error)
    await expect(rejectWithError('test error')).rejects.toHaveProperty(
      'message',
      'test error'
    )

    await expect(rejectWithError('')).rejects.toBeInstanceOf(Error)
    await expect(rejectWithError('')).rejects.toHaveProperty('message', '')

    await expect(rejectWithError(Error())).rejects.toBeInstanceOf(Error)
    await expect(rejectWithError(Error())).rejects.toHaveProperty(
      'message',
      defaultErrorMessage
    )

    await expect(rejectWithError(undefined)).rejects.toBeInstanceOf(Error)
    await expect(rejectWithError(undefined)).rejects.toHaveProperty(
      'message',
      defaultErrorMessage
    )
  })
})
