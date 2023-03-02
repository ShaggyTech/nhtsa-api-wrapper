/**
 * @module utils/errorHandler
 * @category Utility Functions
 */

import { getTypeof } from '@/utils'

/**
 * Checks if `error` is an instance of any Error type.
 *
 * @param error - Any type of value
 * @returns - True if `error` is an instance of Error, TypeError, etc.
 */
export const isError = (error: unknown): boolean => {
  return getTypeof(error) === 'error'
}

/**
 * Handles errors by returning an Error instance.
 * Accepts any type of value but will return default error message of `an unknown error occurred` if
 * `error` is not an Error type or a message string.
 *
 * @param error - Any type of value
 * @returns - instance of Error with message
 */
export const handleError = (error: unknown): Error => {
  let message = 'an unknown error occurred.'
  if (isError(error)) {
    if (!(error as Error).message) {
      ;(error as Error).message = message
    }
    return error as Error
  }
  if (getTypeof(error) === 'string') {
    message = error as string
  }
  return Error(message)
}

/**
 * Returns a Promise rejection containing an Error instance.
 * Uses {@link handleError} to return a default error message if `error` is
 * not an Error type.
 *
 * @param error - Any type of value
 */
export const rejectWithError = async (error: unknown): Promise<never> => {
  if (!isError(error)) {
    error = handleError(error)
  }
  return Promise.reject(error)
}
