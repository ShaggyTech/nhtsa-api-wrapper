import { createQueryString, rejectWithError, catchInvalidArguments } from '.'
import { NHTSA_BASE_URL, NHTSA_RESPONSE_FORMAT } from '@/constants'
import type { QueryStringParams, NhtsaResponse } from '@/types'

/**
 * `useFetch` is a composable function that returns an object containing methods for making HTTP
 * requests to the NHTSA API. All request methods return a Promise that resolves to an object
 * containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.
 *
 * The exported methods are:
 * - createUrl() - Builds the URL string and stores it in an internal instance variable
 * - get() - Makes a GET request, uses the internal url variable if no URL is provided
 * - post() - Makes a POST request, uses the internal url variable if no URL is provided
 *
 * ---
 *
 * **Important!** This composable uses the native fetch method to make requests with no polyfills
 * included. You may need to polyfill the fetch() method if you expect this package to be used in
 * older browsers or Node.js versions < 18. See root package README for more info on polyfilling
 * native fetch in your project.
 *
 * ---
 *
 * An explanation of how this composable works:
 *
 * When you call useFetch(), it returns an object containing the methods you can use to interact
 * with the NHTSA API. Each time you call useFetch(), a new instance of the composable is created
 * and returned. This means you can call useFetch() multiple times and each instance will have
 * its own internal state. This is why you must call createUrl() before making a request, so that
 * the URL is stored in the instance's internal state. For example:
 *
 * ```javascript
 * const { createUrl, get } = useFetch()
 * createUrl({...options})
 * get()
 * ```
 *
 * In the example, a url is stored as private variable inside the composable instance created by
 * calling createFetch(). This is done so that the URL can be accessed by all methods after setting
 * it when using the same instance. This is also why, in the example, the URL is not passed to the
 * get() method.
 *
 * After the first createUrl(), any of the other methods in the same instance can access the
 * stored URL. This means you can call createUrl() multiple times from the same instance and it
 * will overwrite the previous URL, then you can make a new get() call using the newest URL.
 *
 * Note that createUrl() is not called automatically by any of the other methods. You must call it
 * yourself before making a request or provide get and post methods with the pre-built URL as an
 * argument. If you call get() or post() without first calling createUrl() or providing the URL as
 * an argument, an error will be thrown. For example:
 *
 * ```javascript
 * const { get } = useFetch()
 * get() // throws an error, URL is undefined because createUrl() was never called first
 * ```
 *
 * All composable methods will also set the internal URL variable if you pass them a URL
 * string. This will always overwrite the current URL stored in the composable instance and
 * immediately make the request if method is get or post. The only exception to this is when
 * providing option of `saveUrl: false` to instance methods, see _Options_ section below for more
 * info.
 *
 * For example you could do this if you don't need to build the URL first:
 *
 * ```javascript
 * const { get, post } = useFetch()
 * get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/1?format=json')
 * post('https://some.other.api.com/api/endpoint', { body: 'some data' })
 * get() // fetches 'https://some.other.api.com/api/endpoint'
 * ```
 *
 * In the example above, get uses the provided URL, saves it in the composable instance, and makes
 * the request. Then, the post method is called with a url, it uses that new URL, saves it,
 * and makes the request. Finally, the get method is called again without a URL, it uses the URL
 * saved by the preceding post method, and makes the request with that same URL.
 *
 * If you make another request with get() or post() without first calling createUrl() or providing
 * the URL as an argument, it will use the most recently stored URL value. For example:
 *
 * ```javascript
 * const { get, post, createUrl } = useFetch()
 * createUrl({...options}) // initializes and saves the first url
 * get() // uses url initialized with createUrl()
 * get() // uses same url as preceding get()
 * get('https://some.other.api.com/api/endpoint') // uses and sets a new url
 * post(undefined, { body: 'some data' }) // uses same url as preceding get()
 * get() // uses same url as two preceding requests
 * createUrl({...options}) // saves a new url
 * get() // uses url saved with preceding createUrl()
 * ```
 *
 * The above example shows how `useFetch` can be used to make multiple requests
 * with different URLs using only one instance of the composable. This is useful if you need to
 * make multiple requests to the same API with different endpoints or query string parameters.
 *
 * ---
 *
 * ### Options
 *
 * All of the above is default behavior, but you can also pass option `{ saveUrl: false }` to all
 * composable methods to prevent them from saving the URL in the composable instance. This is
 * useful if you need to make a request with a URL and you don't want to save or overwrite the
 * current URL stored in the composable instance.
 *
 * In this example all of the code is using the same composable instance:
 *
 * ```javascript
 * const { get, post, createUrl } = useFetch()
 *
 * // save url in a local variable only, not in the composable instance
 * const url = createUrl({ ...options, saveUrl: false })
 * get(url, { saveUrl: false })
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
 * createUrl({ ...options, saveUrl: false })
 *
 * get() // Error, url still undefined
 * get(url) // uses url saved in the local variable above and saves it in the composable instance
 * get() // uses url saved in the composable instance during the preceding get() call
 * ```
 */
export const useFetch = () => {
  /**
   * Private variable to store the URL string in the composable instance
   * @private
   * */
  let _url: string

  /**
   * This builds the URL string and sets it as a private variable if saveUrl
   * option is true.
   *
   * Set `allowEmptyParams` to true to allow empty parameters in the query string. This is useful
   * if you need to make a request with an empty parameter in some endpoints
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
  const createUrl = ({
    endpointName,
    allowEmptyParams = false,
    includeQueryString = true,
    path = '',
    params,
    saveUrl = true,
  }: {
    endpointName: string
    allowEmptyParams?: boolean
    includeQueryString?: boolean
    path?: string
    params?: QueryStringParams
    saveUrl?: boolean
  }): string => {
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
   * This uses native fetch to make a request to the NHTSA API. Returns a promise
   * that resolves to a NhtsaApiResponse object.
   *
   * ---
   * ### url
   *
   * `url` is optional. If not provided, the URL string saved in the composable instance will be
   * used for the request. If no URL has been saved in the composable instance, an error will be
   * thrown stating that a url arg is required.
   * ---
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
   * If `saveUrl` is true, the URL string will be saved in the composable instance after the
   * request is made. If false, the URL string will _not_ be saved in the composable instance and a
   * new URL string will be need to be created for the next request.
   *
   * When called from post(), you should set `includeQueryString` to false in the options object as
   * the query string is not allowed in a POST request. In POST requests, the "format=json"
   * parameter is added to the POST body string instead of in the query string. Using the post
   * method for POST requests allows this to be added automatically to the end of the body string.
   *
   * _NOTE:_ All POST requests should use the post() method of this composable, which sets specific
   * POST fetch options before calling this method. Never call this method directly for POST
   * requests.
   *
   * @param {string} [url] - URL string to use for the request
   * @param [options] - Object containing RequestInit options + custom options
   * @param {boolean} [options.saveUrl=true] - Whether to save the URL string in the composable
   * instance
   * @returns {Promise<NhtsaApiResponse>} Promise that resolves to a NhtsaApiResponse object
   */
  const get = async <T>(
    url?: string,
    options: RequestInit & { saveUrl?: boolean } = { saveUrl: true }
  ): Promise<NhtsaResponse<T>> => {
    url = url ?? _url

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

    if (options.saveUrl) {
      _url = url
    }

    const nhtsaResponse: NhtsaResponse<T> = await fetch(url, options)
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
   * This uses native `fetch()` to make a POST request to the NHTSA API. Returns a
   * promise that resolves to a NhtsaApiResponse object.
   *
   * `DecodeVinValueBatch` is the only NHTSA API endpoint that accepts POST requests.
   *
   * This method sets specific POST fetch options before calling get(). All POST requests should use
   * post() instead of calling get() directly as get() does not set the correct fetch options for
   * POST.
   * ---
   * ### url
   *
   * `url` is optional. If not provided, the URL string saved in the composable instance will be
   * used for the request. If no URL has been saved in the composable instance, an error will be
   * thrown stating that a url arg is required.
   * ---
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
   * If `saveUrl` is true, the URL string will be saved in the composable instance after the
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
    url?: string,
    options: RequestInit & { saveUrl?: boolean } = { saveUrl: true }
  ): Promise<NhtsaResponse<T>> => {
    url = url ?? _url

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
          value: options,
          types: ['string'],
        },
      ],
    })

    return await get(url, {
      ...options,
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: encodeURI(`DATA=${options?.body}&format=${NHTSA_RESPONSE_FORMAT}`),
    })
  }

  return {
    createUrl,
    get,
    post,
  }
}
