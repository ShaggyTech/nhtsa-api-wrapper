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
 * `useNHTSA` is a composable function that returns an object containing methods for making HTTP
 * requests to the NHTSA API. All request methods return a Promise that resolves to an object
 * containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.
 *
 * The exported methods are:
 * - getURL() - Returns the internal URL string
 * - cacheUrl() - Builds the URL string and stores it in internal state
 * - createUrl() - Builds the URL string but does not store it in internal state
 * - get() - Makes a GET request, uses the internal url variable if no URL is provided
 * - post() - Makes a POST request, uses the internal url variable if no URL is provided
 *
 * `cacheUrl`, `get`, and `post` methods will cache url to internal state if you pass them a url
 * string or options object. They will always overwrite the current cached url and immediately make
 * the request. The only exception to this is when providing option of `saveUrl: false` when using
 * an options object.
 *
 * The above is default behavior, but you can also pass `options.saveUrl = false` when using
 * an options object with the `cacheUrl`, `createUrl`, `get`, and `post` methods. This will prevent
 * the composable from saving the URL in the composable instance.
 *
 * ### Options
 *
 * `options` in the context of this composable is as an object of type CreateUrlOptions with the
 * following properties:
 *
 * Options for `cacheUrl` and `createUrl`:
 * - `endpointName` - The name of the endpoint to use, see [NHTSA API Endpoints](#TODO-LINK-TO-DOCS)
 *   (required)
 * - `allowEmptyParams` - If true, empty params will be included in the query string
 *   (default: false)
 * - `includeQueryString` - If true, the query string will be included in the url (default: true)
 * - `path` - The final path to use in the full url path (default: '')
 * - `params` - An object of query string params to include in the url (default: {})
 * - `saveUrl` - If true, the url will be cached in the composable instance (default: true)
 *
 * Options for `get` and `post`:
 * - `url` - either a full url string or an object of type CreateUrlOptions as described above
 *   - if an object is provided, cacheUrl() will be called with the object to build the url
 *   - if a string is provided, the string will be used as the url and cached in the composable
 * - `options` - An object of type < { body: string, saveUrl: boolean } & RequestInit >
 *
 * In this example all of the code is using the same composable instance and _{...options}_ is an
 * object of type CreateUrlOptions:
 *
 * ```javascript
 * const { get, post, createUrl } = useNHTSA()
 *
 * const urlString = createUrl({ ...options }) // does not cache url
 * get(url, { saveUrl: false }) // does not cache url
 * get() // Error, url still undefined
 *
 * // These work as expected but the url is not saved in the composable instance
 * get('https://some.other.api.com/api/endpoint', { saveUrl: false })
 * post('https://some.other.api.com/api/endpoint', {
 *   body: 'some data',
 *   saveUrl: false
 * })
 *
 * // this has no effect, the url is never saved nor used
 * createUrl({ ...options })
 *
 * get() // Error, url still undefined
 * cacheUrl({ ...options}) // caches url in composable instance
 * get() // uses url cached during the preceding cacheUrl() call
 * get(urlString) // uses urlString const and caches it in composable instance, overwriting previous url
 * get() // uses url cached during the preceding get() call
 * ```
 *
 * ### **Important!**
 *
 * This composable uses the native fetch method to make requests with no polyfills included. You may
 * need to polyfill the fetch() method if you expect this package to be used in older browsers or
 * Node.js versions < 18. See root repo README for more info on how to polyfill fetch or use this
 * package as a URL builder only.
 *
 * ### How this composable works:
 *
 * When you call useNHTSA(), it returns an object containing methods you can use to interact
 * with the NHTSA API. Each time you call useNHTSA(), a new instance of the composable is created
 * and returned. This means you can call useNHTSA() multiple times and each instance will have
 * its own internal state. This is why you must call createUrl() before making a request, so that
 * the URL is stored in the instance's internal state.
 *
 * Note that neither `cacheUrl` or `createUrl` are called automatically by get() or post() methods.
 * You must call them yourself before making a request or provide get and post methods with the
 * pre-built url as an argument. If you call get() or post() without first calling cacheUrl or
 * createUrl, or providing an argument, an error will be thrown.
 *
 * Example usage:
 *
 * _{...options}_ is an object of type CreateUrlOptions in these examples
 *
 * ```javascript
 * const { createUrl, get } = useNHTSA()
 * cacheUrl({...options}) // store the url in the instance's internal state
 * get() // make the request using the url from the instance's internal state
 * ```
 *
 * ```javascript
 * // Give options directly to get() or post()
 * const getResponse = await useNHTSA().get({...options})
 * const postResponse = await useNHTSA().post({...options})
 * ```
 * ```javascript
 * // Use object destructuring in similar way as above
 * const { get, post } = useNHTSA()
 * const getResponse = await get({...options})
 * const postResponse = await post({...options})
 *```
 * Accepts a full url string
 * ```javascript
 * const { createUrl, get } = useNHTSA()
 * // create a url string with options
 * const urlString = createUrl({...options})
 * // or full url, ex: "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/SOME_VIN?format=json"
 * const reponse = get(urlString)
 * ```
 * Accepts an object of type CreateUrlOptions
 *  ```javascript
 * const { get } = useNHTSA()
 * const response = get({ ...options})
 * ```
 * Use cacheUrl() to save the url to the instance state and call get() or post() without
 * arguments. Will use the cached url from the most recent cacheUrl() call.
 * ```javascript
 * const { createUrl, cacheUrl, get, post } = useNHTSA()
 *
 * const urlString = createUrl({...options}) // doesn't save to internal state
 * get(urlString, { saveUrl: false }) // uses the url string but doesn't save it to internal state
 * get() // errors because no url is cached
 * cacheUrl({...otherOptions}) // saves url to internal state, also returns the url string
 * get() // uses the url from the most recent createUrl() call
 * get(urlString) // use the urlString variable, and save it to the internal state
 * ```
 *
 * You could do this if you don't need to build the URL first:
 *
 * ```javascript
 * const { get, post } = useNHTSA()
 * get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/1?format=json')
 * post('https://some.other.api.com/api/endpoint', { body: 'some data' })
 * get() // fetches most recent cached url: 'https://some.other.api.com/api/endpoint'
 * ```
 */
export const useFetch = () => {
  /* Internal State */
  let _url: string

  /** Gets url from internal state */
  const getUrl = () => _url

  /** Function to create final POST body string */
  const createPostBody = (data: string) => {
    return encodeURI(`DATA=${data}&format=${NHTSA_RESPONSE_FORMAT}`)
  }

  /**
   * This builds the URL string and sets it as a private variable if saveUrl option is true.
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
   * @param options Object containing the following properties:
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

  const createUrl = (options: CreateUrlOptions) => {
    return cacheUrl({ ...options, saveUrl: false })
  }

  /**
   * This uses native `fetch()` to make a request to the NHTSA API. Returns a promise that resolves
   * to a NhtsaApiResponse object.
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
   * This uses native `fetch()` to make a POST request to the NHTSA API. Returns a promise that
   * resolves to a NhtsaApiResponse object.
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
