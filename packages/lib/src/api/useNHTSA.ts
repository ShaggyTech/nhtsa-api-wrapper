import {
  catchInvalidArguments,
  createQueryString,
  getTypeof,
  rejectWithError,
} from '@/utils'
import { NHTSA_BASE_URL, NHTSA_RESPONSE_FORMAT } from '@/constants'
import type { NhtsaResponse, QueryStringParams } from '@/types'

export type CreateUrlOptions = {
  endpointName: string
  allowEmptyParams?: boolean
  includeQueryString?: boolean
  path?: string
  params?: QueryStringParams
  saveUrl?: boolean
}

/**
 *This is the main composable function that is used to make requests to the NHTSA API.
 *
 * `useNHTSA` is a composable function that returns an object containing methods for making HTTP
 * requests to the NHTSA API. All request methods return a Promise that resolves to an object
 * containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.
 *
 * Pleas see the [`/api` README](https://github.com/shaggytech/nhtsa-api-wrapper/packages/lib/src/api)
 * for more information on the exported methods and how to use them.
 *
 * ---
 *
 * The exported methods are:
 *
 * - `get` - Makes a GET request, uses the internal url variable if no URL is provided
 *
 * - `post` - Makes a POST request, uses the internal url variable if no URL is provided
 *
 * - `cacheUrl` - Builds the URL string and stores it in internal state
 *
 * - `createUrl` - Builds the URL string but does not store it in internal state
 *
 * - `getURL` - Returns the internal URL string
 *
 */
export const useNHTSA = () => {
  /* Internal State */
  let _url: string

  /** Gets url from internal state */
  const getUrl = () => _url

  /** Function to create final POST body string */
  const createPostBody = (data: string) => {
    return encodeURI(`DATA=${data}&format=${NHTSA_RESPONSE_FORMAT}`)
  }

  /**
   * This builds the URL string and sets it as a private variable in the composable instance if
   * saveUrl option is true.
   *
   * Takes an object of type `CreateUrlOptions` as an argument and returns a full URL string.
   *
   * Set `allowEmptyParams` to true to allow empty parameters in the query string. This is useful if
   * you need to make a request with an empty parameter in some endpoints.
   *
   * Set `includeQueryString` to false to exclude the query string from the built URL string. This
   * is useful if you need to make a POST request with a URL that already has a query string in the
   * POST body.
   *
   * `path` is a search parameter that is not part of the query string for most NHSTA API endpoints.
   * For example if decoding a VIN, the path would be the VIN number. If you need to make a request
   * with a path, set `path` to the path string.
   *
   * `params` is an object containing the query string parameters to build into the URL. Default
   * query "format=json" is always included unless `includeQueryString` is false.
   *
   * `saveUrl` is a boolean that determines whether to save the URL in the composable instance.
   * Default is true.
   *
   * @param options Object of type `CreateUrlOptions` containing the following properties:
   * @param {string} options.endpointName - Name of the endpoint to use in the URL (required)
   * @param {boolean} [options.allowEmptyParams=false] - Whether to allow empty parameters in the
   * query string (default: false).
   * @param {boolean} [options.includeQueryString=true] - Whether to include the query string in
   * the built URL string (default: true). Set to false if making a POST request.
   * @param {string} [options.path=''] - Path to append to the URL (default: '')
   * @param {Object} [options.params] - Query string parameters to build into the URL. Default
   * query "format=json" is always included unless options.includeQueryString is false.
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL in the composable instance
   * (default: true)
   * @returns {string} URL string
   */
  const cacheUrl = ({
    endpointName,
    allowEmptyParams = false,
    includeQueryString = true,
    path = '',
    params,
    saveUrl = true,
  }: CreateUrlOptions): string => {
    if (!endpointName) {
      throw Error('Endpoint name is required to create URL string')
    }

    const queryString = includeQueryString
      ? createQueryString(params, allowEmptyParams)
      : ''

    const url = encodeURI(
      `${NHTSA_BASE_URL}/${endpointName}/${path}${queryString}`
    )

    if (saveUrl) {
      _url = url
    }

    return url
  }

  /**
   * Simply a wrapper for cacheUrl() with saveUrl set to false.
   *
   * Takes an object of type `CreateUrlOptions` as an argument and returns a full URL string.
   *
   * This builds the URL string but does not set it as a private cached variable of the composable.
   *
   * @param options Object of type `CreateUrlOptions` containing the following properties:
   * @param {string} options.endpointName - Name of the endpoint to use in the URL (required)
   * @param {boolean} [options.allowEmptyParams=false] - Whether to allow empty parameters in the
   * query string (default: false).
   * @param {boolean} [options.includeQueryString=true] - Whether to include the query string in
   * the built URL string (default: true). Set to false if making a POST request.
   * @param {string} [options.path=''] - Path to append to the URL (default: '')
   * @param {Object} [options.params] - Query string parameters to build into the URL. Default
   * query "format=json" is always included unless options.includeQueryString is false.
   * @returns {string} URL string
   */
  const createUrl = (options: CreateUrlOptions) => {
    return cacheUrl({ ...options, saveUrl: false })
  }

  /**
   * This uses native `fetch()` to make a request to the NHTSA API. Returns a promise that
   * resolves to a `NhtsaApiResponse<T>` object, where `T` is the type of the objects in the
   * `Results` array of the `NhtsaApiResponse` object, e.g. `NhtsaApiResponse<DecodeVinResults>`.
   *
   * _NOTE:_ All POST requests should use the post() method of this composable, which sets specific
   * POST fetch options before calling this method. Never call this method directly for POST
   * requests.
   *
   * ---
   *
   * ### url
   *
   * `url` is optional. If not provided, the URL string saved in the composable instance will be
   * used for the request. If no URL has been saved in the composable instance, an error will be
   * thrown stating that a url arg is required.
   *
   * `url` - either a full url `string` or an `object` of type `CreateUrlOptions`
   *
   * - `required` if there is no url cached in the composable instance
   * - if a `CreateUrlOptions` object is provided, `cacheUrl` will be called with the object to
   *   build and cache the url before making the request
   * - if a string is provided, it is assumed the string is a full url and it will be cached in the
   *   as such in the composable instance before making the request
   *
   * ### Options
   *
   * If you need to set custom fetch options for request, set them in the `options` object.
   *
   * `options` is optional. If provided, it should be an object containing following properties:
   * - `options.saveUrl` - Whether to save the URL string in the composable instance after
   *   the request is made (default: true).
   * - `options.body` - string to send in the NHTSA API POST request. (example: "modelYear=2009")
   * - Any other valid `RequestInit` options:
   *   https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   *
   * If `options.saveUrl` is true, the URL string will be saved in the composable instance after the
   * request is made. If false, the URL string will _not_ be saved in the composable instance and a
   * new URL string will need to be created for the next request.
   *
   * When called from post(), you should set `options.includeQueryString` to false as query strings
   * are not allowed in a POST request. In POST requests, "&format=json" is appended to the POST
   * body string instead of in the query string. Using the post method direclty for POST requests
   * will automatically set `options.includeQueryString` to false and append "&format=json" to the
   * POST body string.
   *
   * @param {string} [url] - URL string to use for the request
   * @param [options] - Object containing RequestInit options + custom options
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL string in the composable
   * instance
   * @returns {Promise<NhtsaApiResponse>} Promise that resolves to a NhtsaApiResponse object
   */
  const get = async <T>(
    url?: string | CreateUrlOptions,
    options: RequestInit & { saveUrl?: boolean } = { saveUrl: true }
  ): Promise<NhtsaResponse<T>> => {
    /* If url is an object, create and store a url string from it */
    if (url && getTypeof(url) === 'object') {
      url = cacheUrl({ ...(url as CreateUrlOptions), saveUrl: options.saveUrl })
    }

    url = getTypeof(url) === 'string' ? url : getUrl()

    catchInvalidArguments({
      args: [
        {
          name: 'url',
          value: url,
          required: true,
          types: ['string'],
        },
        {
          name: 'options',
          value: options,
          types: ['object'],
        },
      ],
    })

    /* url guranateed to be a string at this point, so ok to cast it */
    if (options.saveUrl) {
      _url = url as string
    }

    const nhtsaResponse: NhtsaResponse<T> = await fetch(url as string, options)
      .then(async (response) => {
        if (!response) {
          throw Error(
            `APi responded with an error, no response object returned`
          )
        }
        const contentType = response.headers.get('content-type')
        const responseDetails =
          `content-type: ${contentType},` +
          `responseStatus: ${response.status},` +
          `responseUrl: ${response.url}`

        if (!response.ok) {
          throw Error(`APi responded with an error, got ${responseDetails}`)
        }

        const jsonTypes = ['application/json', 'text/json']
        const isJson = jsonTypes.some((type) => contentType?.includes(type))
        if (!isJson) {
          throw Error(
            `API response is not in JSON format, got ${responseDetails}`
          )
        }

        const data: NhtsaResponse<T> = await response.json()
        if (!data) {
          throw Error(
            `API response OK but returned no data, got ${responseDetails}`
          )
        } else return data
      })
      .catch((error: Error) => {
        error.message = `There was an error fetching API data: ${error.message}`
        return rejectWithError(error)
      })

    /* Return the completed ApiResponse */
    return nhtsaResponse
  }

  /**
   * This uses native `fetch()` to make a _POST_ request to the NHTSA API. Returns a promise that
   * resolves to a `NhtsaApiResponse<T>` object, where `T` is the type of the objects in the
   * `Results` array of the `NhtsaApiResponse` object, e.g. `NhtsaApiResponse<DecodeVinResults>`.
   *
   * `DecodeVinValueBatch` is the only NHTSA API endpoint that uses POST requests.
   *
   * This method sets specific POST fetch options before calling get(). All POST requests should use
   * post() instead of calling get() directly as get() does not set the correct fetch options for
   * POST.
   *
   * ---
   *
   * ### url
   *
   * `url` is optional. If not provided, the URL string saved in the composable instance will be
   * used for the request. If no URL has been saved in the composable instance, an error will be
   * thrown stating that a url arg is required.
   *
   * `url` - either a full url `string` or an `object` of type `CreateUrlOptions`
   *
   * - `required` if there is no url cached in the composable instance
   * - if a `CreateUrlOptions` object is provided, `cacheUrl` will be called with the object to
   *   build and cache the url before making the request
   * - if a string is provided, it is assumed the string is a full url and it will be cached in the
   *   as such in the composable instance before making the request
   *
   * ### Options
   *
   * If you need to set custom fetch options for request, set them in the `options` object.
   *
   * `options`: Object containing RequestInit options + custom options
   * - `options.saveUrl` - Whether to save the URL string in the composable instance after
   *   the request is made (default: true).
   * - `options.body` - string to send in the NHTSA API POST request. (example: "modelYear=2009")
   * - Any other valid `RequestInit` options:
   *   https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   *
   * If `options.saveUrl` is true, the URL string will be saved in the composable instance after the
   * request is made. If false, the URL string will _not_ be saved in the composable instance and a
   * new URL string will be need to be created for the next request.
   *
   * `options.body` should be a string consisting of the body request parameters in a format
   * described further in the `DecodeVinValueBatch` endpoint documentation. Put simply, by default,
   * "DATA" is prepended and "&format=json" appended to `options.body`, even if you
   * don't provide `options.body`. This is required format for the NHTSA API POST request.
   *
   * @param {string} [url] - URL string to make the POST request to
   * @param [options] - Object containing RequestInit options + custom options
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL string in the composable
   * instance after the request is made (default: true).
   * @param {string} [options.body] - Body string to send in the POST request. Default string
   * "&format=json" is always appended to the body string.
   * @returns {Promise<NhtsaApiResponse<T>>} Promise that resolves to a NhtsaApiResponse object
   * containing the response data.
   */
  const post = async <T>(
    url?: string | CreateUrlOptions,
    options: RequestInit & { saveUrl?: boolean } = { saveUrl: true }
  ): Promise<NhtsaResponse<T>> => {
    /* If url is an object, create and store a url string from it */
    if (url && getTypeof(url) === 'object') {
      /* POST requests should not include query string */
      url = cacheUrl({
        ...(url as CreateUrlOptions),
        saveUrl: options.saveUrl,
        includeQueryString: false,
      })
    }

    url = getTypeof(url) === 'string' ? url : getUrl()

    catchInvalidArguments({
      args: [
        {
          name: 'url',
          value: url,
          required: true,
          types: ['string'],
        },
        {
          name: 'options',
          value: options,
          types: ['object'],
        },
        {
          name: 'options.body',
          value: options.body,
          types: ['string'],
        },
      ],
    })

    /* Set specific POST fetch options, url and body guaranteed to be a string after this point */
    return await get(url, {
      ...options,
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: createPostBody(options.body as string),
    })
  }

  return {
    getUrl,
    cacheUrl,
    createUrl,
    createPostBody,
    get,
    post,
  }
}
