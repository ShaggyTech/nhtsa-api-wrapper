export const rejectWithError = async (message: string): Promise<never> =>
  Promise.reject(Error(message))
