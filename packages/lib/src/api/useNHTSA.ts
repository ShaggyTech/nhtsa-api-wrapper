/**
 * @module api/useNHTSA
 * @category API
 */

import {
  catchInvalidArguments,
  createQueryString,
  getTypeof,
  rejectWithError,
} from '@/utils'
import {
  NHTSA_VPIC_URL,
  NHTSA_API_URL,
  NHTSA_RESPONSE_FORMAT,
  NHTSA_DEFAULT_API_TYPE,
} from '@/constants'
import type { ApiTypes, NhtsaResponse, QueryStringParams } from '@/types'

export type CreateUrlOptions = {
  endpointName: string
  apiType?: ApiTypes
  allowEmptyParams?: boolean
  includeQueryString?: boolean
  path?: string
  params?: QueryStringParams
  saveUrl?: boolean
}

/**
 * `useNHTSA` returns a composable object containing helper functions for working with the VPIC
 * API. It is used internally by the package and by users to make direct requests to the VPIC API.
 *
 * It returns an object containing methods for making HTTP requests to the VPIC API. All
 * request methods return a Promise that resolves to an object containing the full response data.
 *
 * The functions returned by the composable are:
 *
 * - `createCachedUrl` - Builds the URL string and stores it in internal state
 *
 * - `getCachedUrl` - Gets the URL stored in internal state
 *
 * - `setCachedUrl` - Directly sets the URL internal state, does not check if URL is valid
 *
 * - `clearCachedUrl` - Clears the URL stored in internal state
 *
 * - `createUrl` - Returns a built URL string but does not store it in internal state
 *
 * - `createPostBody` - Creates a POST body string from an object of key/value pairs
 *
 * - `get` - Makes a GET request, uses the internal url variable if no URL is provided
 *
 * - `post` - Makes a POST request, uses the internal url variable if no URL is provided
 *
 */
export const useNHTSA = () => {
  /* Internal State */
  let _url: string

  /** Sets cached VPIC URL in internal state */
  const setCachedUrl = (url: string) => (_url = url)

  /** Gets cached VPIC URL from internal state */
  const getCachedUrl = () => _url

  /** Clears cached VPIC URL from internal state
   * Call this method to release references and facilitate garbage collection
   * when the instance is no longer needed. This is particularly important
   * in long-lived applications or server-side contexts to prevent memory leaks.
   */
  const clearCachedUrl = () => (_url = undefined as unknown as string)

  /**
   * This builds the VPIC URL string and sets it as a private variable in the composable instance if
   * saveUrl option is true.
   *
   * Takes an object of type `CreateUrlOptions` as an argument and returns a full VPIC URL string.
   *
   * Set `allowEmptyParams` to true to allow empty parameters in the query string. This is useful if
   * you need to make a request with an empty parameter in some endpoints.
   *
   * Set `includeQueryString` to false to exclude the query string from the built URL string. This
   * is useful if you need to make a POST request with a URL that already has a query string in the
   * POST body.
   *
   * `path` is a search parameter that is not part of the query string for most NHTSA API endpoints.
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
   * @returns {string} VPIC API URL string
   */
  const createCachedUrl = (options: CreateUrlOptions | string): string => {
    if (typeof options === 'string') {
      setCachedUrl(options)
      return options
    }

    const {
      endpointName,
      apiType = NHTSA_DEFAULT_API_TYPE,
      allowEmptyParams = false,
      path = '',
      params,
      saveUrl = true,
    } = options

    let { includeQueryString = true } = options

    if (!endpointName || typeof endpointName !== 'string') {
      throw Error('options.endpointName is required to create a URL string')
    }

    if (apiType !== 'vpic') includeQueryString = false

    const queryString = includeQueryString
      ? createQueryString(params, allowEmptyParams)
      : ''

    const baseUrl = apiType === 'vpic' ? NHTSA_VPIC_URL : NHTSA_API_URL

    const url = encodeURI(`${baseUrl}/${endpointName}/${path}${queryString}`)

    if (saveUrl) {
      setCachedUrl(url)
    }

    return url
  }

  /**
   * Simply a wrapper for `createCachedUrl` with `saveUrl` set to false.
   *
   * Takes an object of type `CreateUrlOptions` as an argument and returns a full VPIC URL string.
   *
   * This builds the VPIC URL string but does not set it as a private cached variable of the
   * composable. Use `createCachedUrl` if you need to save the URL in the composable instance.
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
   * @returns {string} VPIC API URL string
   */
  const createUrl = (options: CreateUrlOptions) => {
    return createCachedUrl({ ...options, saveUrl: false })
  }

  /** Function to create final POST body string from a VPIC data string */
  const createPostBody = (data: string) => {
    return encodeURI(
      `DATA=${data ? data + '&' : ''}format=${NHTSA_RESPONSE_FORMAT}`
    )
  }

  /**
   * This uses native `fetch()` to make a request to the NHTSA API. It returns a promise that
   * resolves to a `NhtsaResponse<ResultsType>` object, where `ResultsType` is the type of the
   * objects in the `Results` or `results` array of the `NhtsaResponse` object.
   *
   * For example, `NhtsaResponse<DecodeVinResults>` has a `Results` key, which
   * contains an array of `DecodeVinResults` objects.
   *
   * This function returns the API response contents after parsing the response data as JSON.
   *
   * It will throw an error if the response is not ok, the response is not in JSON format, or the
   * response data is empty.
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
   * - it's `required` if there is no url cached in the composable instance
   * - if a `CreateUrlOptions` object is provided, `createCachedUrl` will be called with the object
   *   to build and cache the url
   * - if a string is provided, it is assumed the string is a full url and it will be cached in the
   *   as such in the composable instance
   *
   * ---
   *
   * ### Options
   *
   * If you need to set custom fetch options for request, set them in the `options` object.
   *
   * `options` is optional. If provided, it should be an object containing following properties:
   * - `options.saveUrl` - Whether to save the URL string in the composable instance when creating
   *   the url (default: true).
   * - Any other valid `RequestInit` options:
   *   https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   *
   * If `options.saveUrl` is true, the URL string will be saved in the composable instance after the
   * request is made. If false, the URL string will _not_ be saved in the composable instance and a
   * new URL string will need to be created for the next request.
   *
   * When called from post(), you should set `options.includeQueryString` to false as query strings
   * are not allowed in a POST request. Also, in POST requests, "&format=json" is appended to the
   * POST body string instead of in the query string. Using the post method directly for POST
   * requests will automatically set `options.includeQueryString` to false and append "&format=json"
   * to the POST body string.
   *
   * @param {string} [url] - URL string to use for the request
   * @param [options] - Object containing RequestInit options + custom options
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL string in the composable
   * instance
   * @returns {Promise<NhtsaResponse>} Promise that resolves to a NhtsaResponse object
   */
  const get = async <ResultsType, ApiType extends ApiTypes = 'vpic'>(
    url?: string | CreateUrlOptions,
    options: RequestInit & { saveUrl?: boolean } = {
      saveUrl: true,
      method: 'GET',
    }
  ): Promise<NhtsaResponse<ResultsType, ApiType>> => {
    /* Validate all function arguments */
    catchInvalidArguments({
      args: [
        {
          name: 'url',
          value: url,
          types: ['string', 'object'],
        },
        {
          name: 'options',
          value: options,
          types: ['object'],
        },
      ],
    })

    /*
     * Special note about typeof:
     * Values of null, arrray, new Date(), new String(), Error, and /regex/ are all typeof 'object'.
     * catchInvalidArguments() will correctly throw an error if url is neither a string nor object
     * in these cases as it uses our custom getTypeof() function to check the type.
     */

    /* If url is a string, set it as the cached url if options.saveUrl */
    if (typeof url === 'string' && options.saveUrl) {
      _url = url
    }

    /*
     * If url is an object, create a url string and set it as the cached url if options.saveUrl
     */
    if (typeof url === 'object') {
      url = createCachedUrl({
        ...url,
        saveUrl: options.saveUrl,
      })
    }

    /* If url is not a string by now, attempt getting it from the cache */
    url = typeof url === 'string' ? url : getCachedUrl()

    /* Ensure url is defined and is a string before fetching */
    catchInvalidArguments({
      args: [
        {
          name: 'url',
          value: url,
          required: true,
          types: ['string'],
        },
      ],
    })

    /* Fetch and parse the API response */
    const nhtsaResponse: NhtsaResponse<ResultsType, ApiType> = await fetch(
      url,
      options
    )
      .then(async (response) => {
        if (!response) {
          throw Error(`API responded with an unknown error or sent no response`)
        }

        /* Capture response details for error messages */
        const contentType = response.headers.get('content-type')
        const responseDetails =
          `{ ` +
          `content-type: ${contentType}, ` +
          `response.ok: ${response.ok}, ` +
          `response.status: ${response.status}, ` +
          `response.statusText: ${response.statusText}, ` +
          `response.url: ${response.url} ` +
          `}`

        if (!response.ok) {
          throw Error(`API response not ok, response was: ${responseDetails}`)
        }

        /* Ensure response is in JSON format */
        const jsonTypes = ['application/json', 'text/json']
        const isJson = jsonTypes.some((type) => contentType?.includes(type))
        if (!isJson || typeof response.json !== 'function') {
          throw Error(
            `API response not in JSON format, response was: ${responseDetails}`
          )
        }

        /* Ensure response data exists and return it */
        const data = await response.json()
        if (!data) {
          throw Error(`API returned no data, response was: ${responseDetails}`)
        } else return data
      })
      .catch((error: Error) => {
        error.message = `There was an error fetching NHTSA API data: ${error.message}`
        return rejectWithError(error)
      })

    /* Return the parsed API response */
    return nhtsaResponse
  }

  /**
   * This uses native `fetch()` to make a _POST_ request to the NHTSA API.
   *
   * `DecodeVinValueBatch` is the only NHTSA API endpoint that uses POST requests.
   *
   * ---
   *
   * ### Options
   *
   * If you need to set custom fetch options for the Request, set them in the `options` object.
   *
   * `options.body` should be a string consisting of the body request parameters in a format
   * described further in the `DecodeVinValueBatch` endpoint documentation. By default, "DATA" is
   * prepended and "&format=json" appended to `options.body`, even if you don't provide
   * `options.body`. This is required format for the NHTSA API POST request.
   *
   * This function otherwise mirrors parameters for the useNHTSA.get() function, see that function
   * for more details.
   *
   * @param {string} [url] - URL string to make the POST request to
   * @param [options] - Object containing RequestInit options + custom options
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL string in the composable
   * instance after the request is made (default: true).
   * @param {string} [options.body] - Body string to send in the POST request. Default string
   * "&format=json" is always appended to the body string.
   * @returns {Promise<NhtsaResponse<T>>} Promise that resolves to a NhtsaResponse object
   * containing the response data.
   */
  const post = async <ResultsType, ApiType extends ApiTypes = 'vpic'>(
    url?: string | CreateUrlOptions,
    options: RequestInit & { saveUrl?: boolean } = { saveUrl: true }
  ): Promise<NhtsaResponse<ResultsType, ApiType>> => {
    /* If url is an object, create and store a url string from it */
    if (url && getTypeof(url) === 'object') {
      /* POST requests should not include query string */
      url = createCachedUrl({
        ...(url as CreateUrlOptions),
        saveUrl: options.saveUrl,
        includeQueryString: false,
      })
    }

    url = getTypeof(url) === 'string' ? url : getCachedUrl()

    /* Validate url, RequestInit options, and options.body is a string */
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
          required: true,
        },
        {
          name: 'options.body',
          value: options.body,
          required: true,
          types: ['string'],
        },
      ],
    })

    /* Set specific POST fetch options */
    return await get(url, {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: createPostBody(options.body as string),
    })
  }

  return {
    setCachedUrl,
    getCachedUrl,
    clearCachedUrl,
    createCachedUrl,
    createUrl,
    createPostBody,
    get,
    post,
  }
}
