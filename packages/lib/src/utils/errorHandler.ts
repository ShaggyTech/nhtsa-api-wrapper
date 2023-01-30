// export const errorHandler = (error: string | Error | TypeError | unknown) => {
//   if (error instanceof Error || error instanceof TypeError) {
//     return error.message && error.stack ? error.stack : ''
//   }
//   if (typeof error === 'string') {
//     return error
//   }
//   return 'An unknown error occurred'
// }

import { getTypeof } from '.'

export const isError = (error: unknown): boolean => {
  return getTypeof(error) === 'error'
}

export const handleError = (
  error: Error | TypeError | string | unknown
): Error => {
  let message: string
  let stack: string | undefined

  if (isError(error)) {
    message = (error as Error).message
    stack = (error as Error).stack
  } else if (getTypeof(error) === 'string') {
    message = error as string
  } else {
    message = 'an unknown error occurred.'
  }

  const modifiedError = new Error(message)
  modifiedError.stack = stack ? stack : 'unknown stack'

  return modifiedError
}

export const rejectWithError = async (error: unknown): Promise<never> => {
  if (!isError(error) || !(error as Error).message || !(error as Error).stack) {
    error = handleError(error)
  }
  return Promise.reject(error)
}
