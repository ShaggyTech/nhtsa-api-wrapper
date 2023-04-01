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

describe('utils/index.ts', () => {
  it('exports catchInvalidArguments function', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  it('exports createQueryString function', () => {
    expect(createQueryString).toBeDefined()
    expect(createQueryString).toBeInstanceOf(Function)
  })

  it('exports encodeQueryStringParams function', () => {
    expect(encodeQueryStringParams).toBeDefined()
    expect(encodeQueryStringParams).toBeInstanceOf(Function)
  })

  it('exports getTypeof function', () => {
    expect(getTypeof).toBeDefined()
    expect(getTypeof).toBeInstanceOf(Function)
  })

  it('exports handleError function', () => {
    expect(handleError).toBeDefined()
    expect(handleError).toBeInstanceOf(Function)
  })

  it('exports isError function', () => {
    expect(isError).toBeDefined()
    expect(isError).toBeInstanceOf(Function)
  })

  it('exports isValidVin function', () => {
    expect(isValidVin).toBeDefined()
    expect(isValidVin).toBeInstanceOf(Function)
  })

  it('exports rejectWithError function', () => {
    expect(rejectWithError).toBeDefined()
    expect(rejectWithError).toBeInstanceOf(Function)
  })

  it('exports validateArgument function', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })
})
