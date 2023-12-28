import { describe, expect, test } from 'vitest'
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

describe('utils/index.ts', () => {
  test('exports catchInvalidArguments function', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  test('exports createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  test('exports encodeQueryStringParams function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })

  test('exports getTypeof function', () => {
    expect(getTypeof).toBeDefined()
    expect(getTypeof).toBeInstanceOf(Function)
  })

  test('exports handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  test('exports isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  test('exports isValidVin function', () => {
    expect(isValidVin).toBeDefined()
    expect(isValidVin).toBeInstanceOf(Function)
  })

  test('exports rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })

  test('exports validateArgument function', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })
})
