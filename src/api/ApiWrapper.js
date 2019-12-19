/** Class ApiWrapper - Wrapper for the vpic.NHTSA.dot.gov Vehicle VIN Decoding API
 * @category api
 * @requires api/utils
 * @alias api/ApiWrapper
 *
 * @example <caption>Create a new ApiWrapper</caption>
 * // TODO COMPLETED:
 *
 * const { ApiWrapper } = require('./api')
 * const wrapper = new ApiWrapper({ baseUrl, endpoint, format })
 * const apiUrl = wrapper.generateApiUrl({
 *   vin,
 *   params: {
 *     modelYear: 2001
 *   }
 * })
 *
 * // TODO NEXT UP:
 * const apiReponse = wrapper.fetch(apiUrl)
 * // Should have fetch(apiUrl)
 * // Should return the fetched response within new Response() class
 *
 */
class ApiWrapper {
  /**
   * @param {object} options={} <a name="options"></a>
   * #### Options to pass to the ApiWrapper class constructor. <br>
   *  - *Defaults* can be overridden by passing an object of options to the class constructor,
   *    or by changing them on the class instance after instantiation. </br>
   *  - *Order of Precedence* of options upon <b>instantiation</b>, Highest to Lowest: <br>
   *    1. `options.option`
   *    2. `process.env.OPTION`
   *    3. `Default`
   *
   * @param {string} options.baseURL=https://vpic.nhtsa.dot.gov/api/vehicles <a name="options.baseUrl"></a>
   *  The base string of the full url to fetch/post requests to
   *  - Should *only* be overridden *if* the NHTSA URL changes in the future.
   *  > <b>INFO:</b>
   *    Default can also be overridden before or after class instantiation via: <br>
   *    `process.env.NHTSA_API_URL`
   *
   * @param {string} options.endpoint=DecodeVinValues <a name="options.endpoint"></a>
   *  #### Endpoint of the NHTSA API to request from.
   *  - <b>Default</b>: `DecodeVinValues` requests that `response.Results` be a flattened array,
   *  containing a single object of Key:Value pairs, for easier consumption. <br>
   *  - See {@link TODO:ListOfEndpoints} for a valid list of NHTSA Endpoints <br>
   *  > <b>INFO:</b>
   *    Default can also be overridden before or after class instantiation via: <br>
   *    `process.env.NHTSA_API_ENDPOINT`
   *
   * @param {string} options.format=json <a name="options.format"></a>
   *  #### Option to specify what the response format be, when requesting data from the NHTSA API.
   *
   *  ---
   *
   *  <b>Default</b>: `'json'` - append "?format=json" to url and receive JSON response. <br>
   *  `'csv'` - to append "?format=csv" to url and receive CSV response. <br>
   *  `'xml'` - to append "?format=xml" to url and receive XML response. <br>
   *
   *  ---
   *
   * > <b>INFO:</b>
   *   Default can also be overridden before or after class instantiation via: <br>
   *   `process.env.NHTSA_API_FORMAT`<br>
   *
   * > <b>INFO:</b>
   *   The default response format from the NHTSA api, with no `?format=` query param, is `XML`.<br><br>
   *   Most endpoints have an optional "?format=" query param, used to override this default behaviour.<br><br>
   *   By default, this class appends a `?format=json` query string to every NHTSA fetch or post request.<br><br>
   */
  constructor(options = {}) {
    this._baseUrl =
      options.baseUrl ||
      process.env.NHTSA_API_URL ||
      'https://vpic.nhtsa.dot.gov/api/vehicles'

    this._endpoint =
      options.endpoint || process.env.NHTSA_API_URL || 'DecodeVinValues'

    this._format = options.format || process.env.NHTSA_API_FORMAT || 'json'
  }

  /**
   * @property {string} baseUrl='https://vpic.nhtsa.dot.gov/api/vehicles' Set this property via:<br>
   *  `ApiWrapper.baseUrl` or `process.env.NHTSA_API_URL`
   * @description The base url of the NHTSA API.
   * @see #options.baseUrl
   */
  get baseUrl() {
    return this._baseUrl
  }
  set baseUrl(/** string */ value) {
    this._baseUrl = value
  }

  /**
   * @property {string} endpoint=DecodeVinValues Set this property via:<br>
   *  `ApiWrapper.endpoint` or `process.env.NHTSA_API_ENDPOINT`
   * @description The NHTSA API endpoint to request data from.
   * @see #options.endpoint
   */
  get endpoint() {
    return this._endpoint
  }
  set endpoint(/** string */ value) {
    this._endpoint = value
  }

  /**
   * @property {string} format=json Set this propety via:<br>
   *  `ApiWrapper.format` or `process.env.NHTSA_API_FORMAT`
   * @description Format to use when building url query strings.<br>
   * @see #options.format
   */
  get format() {
    return this._format
  }
  set format(/** string */ value) {
    this._format = value
  }

  /**
   * @async
   * @param {object} options Key:Value pairs of options to pass the function
   * @param {string} options.vin `Required` Vehicle Indentification Number to decode
   * @param {string} [options.endpoint] Which api url endpoint to request data from.<br>
   *  - Defaults to [ApiWrapper.endpoint](#endpoint) if not provided
   * @param {object} [options.params] Query string parameters to append to the generated url
   * - See api/utils.{@link genQueryString}
   *
   * @example
   *  // Called with only vin option, uses internal variables of ApiWrapper as default:
   *  ApiWrapper.generateApiUrl({ vin: 'EXAMPLEVIN' })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/EXAMPLEVIN?format=json"
   *
   *  // Called with vin, endpoint, and params option, overriding ApiWrapper internal variables:
   *  ApiWrapper.generateApiUrl({
   *   vin: 'EXAMPLEVIN',
   *   endpoint: 'DecodeVinValuesExtended',
   *   params: {
   *    format: 'csv',
   *    modelYear: 2001
   *   }
   * })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/EXAMPLEVIN?format=csv&modelYear=2001"
   *
   *  // Called with vin, and params option, omitting endpoint and params.format
   *  // so that it defaults to internal variable value "format = 'json'" and default endpoint:
   *  ApiWrapper.generateApiUrl({
   *   vin: 'EXAMPLEVIN',
   *   params: {
   *    modelYear: 2001
   *   }
   * })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/EXAMPLEVIN?format=json&modelYear=2001"
   *
   */
  async generateApiUrl({ vin, endpoint, params }) {
    // Use default endpoint if not provided
    endpoint = endpoint || this.endpoint

    // Use params with default format if no params are provided
    if (!params) {
      params = { format: this.format }
    }
    // Ensure we always have a format:'json' param by adding it to provided params
    else if (!params.format) {
      params = { ...params, format: this.format }
    }

    // Import genEndPoint api/utls method
    const genEndpoint = require('./utils').genEndpoint
    // and generate an endpoint to append to the baseUrl
    const ep = await genEndpoint({
      vin,
      endpoint,
      params
    })

    // Return the complete API url
    return `${this.baseUrl}${ep}`
  }

  request() {
    return 'testing'
  }
}

module.exports = ApiWrapper
