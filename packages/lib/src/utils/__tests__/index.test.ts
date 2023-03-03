import { describe, expect, it } from 'vitest'
import {
  catchInvalidArguments,
  createQueryString,
  encodeQueryStringParams,
  getTypeof,
  handleError,
  isError,
  isValidVin,
  rejectWithError,
  validateArgument,
} from '../'

describe('utils/index.ts - exports', () => {
  it('catchInvalidArguments function', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  it('createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  it('encodeQueryStringParams function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })

  it('getTypeof function', () => {
    expect(getTypeof).toBeDefined()
    expect(getTypeof).toBeInstanceOf(Function)
  })

  it('handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  it('isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  it('isValidVin function', () => {
    expect(isValidVin).toBeDefined()
    expect(isValidVin).toBeInstanceOf(Function)
  })

  it('rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })

  it('validateArgument function', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })
})
