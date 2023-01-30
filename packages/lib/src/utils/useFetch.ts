import type { NhtsaResponse } from '../api/types'
import { rejectWithError } from '.'

export const useFetch = () => {
  const get = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<NhtsaResponse<T>> => {
    const nhtsaResponse: NhtsaResponse<T> = await fetch(url, options)
      .then(async (response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        const jsonTypes = ['application/json', 'text/json']
        const contentType = response.headers.get('content-type')
        const isJson = jsonTypes.some((type) => contentType?.includes(type))

        if (!isJson) {
          throw Error(
            `response is not in JSON format; got content-type: ${contentType}`
          )
        }

        const data: NhtsaResponse<T> = await response.json()

        if (!data) {
          throw Error(
            `response is empty; got content-type: ${contentType}, responseStatusText: ${response.statusText}}`
          )
        }

        return data
      })
      .catch((error: Error) => {
        error.message = `error fetching data; ${error.message}`
        return rejectWithError(error)
      })

    /* Return the completed ApiResponse */
    return nhtsaResponse
  }

  return {
    get,
  }
}
