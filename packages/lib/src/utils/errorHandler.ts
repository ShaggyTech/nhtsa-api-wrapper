import { getTypeof } from '@/utils'

export const isError = (error: unknown): boolean => {
  return getTypeof(error) === 'error'
}

export const handleError = (error: unknown): Error => {
  let message = 'an unknown error occurred.'
  if (isError(error)) {
    return error as Error
  }
  if (getTypeof(error) === 'string') {
    message = error as string
  }
  return Error(message)
}

export const rejectWithError = async (error: unknown): Promise<never> => {
  if (!isError(error)) {
    error = handleError(error)
  }
  return Promise.reject(error)
}
