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
          throw Error(`${response.status} ${response.url}`)
        }

        const jsonTypes = ['application/json', 'text/json']
        const contentType = response.headers.get('content-type')
        const isJson = jsonTypes.some((type) => contentType?.includes(type))

        if (!isJson) {
          throw Error(
            `API response is not in JSON format; got ` +
              `content-type: ${contentType}, responseStatus: ${response.status}}, responseUrl: ${response.url}`
          )
        }

        const data: NhtsaResponse<T> = await response.json()

        if (!data) {
          throw Error(
            `API responded but returned no data; got ` +
              `content-type: ${contentType}, responseStatus: ${response.status}}, responseUrl: ${response.url}`
          )
        }

        return data
      })
      .catch((error: Error) => {
        error.message = `API error fetching data: ${error.message}`
        return rejectWithError(error)
      })

    /* Return the completed ApiResponse */
    return nhtsaResponse
  }

  const post = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<NhtsaResponse<T>> => {
    return await get(url, {
      ...options,
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

  return {
    get,
    post,
  }
}
