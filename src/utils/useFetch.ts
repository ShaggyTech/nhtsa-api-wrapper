import type { NhtsaResponse } from '../api/types'

export const useFetch = () => {
  const get = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<NhtsaResponse<T>> => {
    const nhtsaResponse: NhtsaResponse<T> = await fetch(url, options)
      .then(async (response) => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json')
        const data: NhtsaResponse<T> = isJson ? await response.json() : null

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.Message) || response.status
          return Promise.reject(error)
        }

        return data
      })
      .catch((err: Error) =>
        Promise.reject(Error(`Error fetching data: ${err}`))
      )

    /* Return the completed ApiResponse */
    return nhtsaResponse
  }

  return {
    get,
  }
}
