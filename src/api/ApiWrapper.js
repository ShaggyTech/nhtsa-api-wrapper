const { isValidType } = require('../util/isValidType')
const { genApiUrl } = require('./utils')

/** Class ApiWrapper - Wrapper for the vpic.NHTSA.dot.gov Vehicle VIN Decoding API
 * @category api
 * @requires api/utils
 * @requires isValidType
 * @alias api/ApiWrapper
 *
 * @example <caption>Create a new ApiWrapper</caption>
 * // TODO COMPLETED:
 *
 * const { ApiWrapper } = require('./api')
 * const wrapper = new ApiWrapper({ baseUrl, action, format })
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
   *    `process.env.NHTSA_API_BASE_URL`
   *
   * @param {string} options.action=DecodeVinValues <a name="options.action"></a>
   *  #### Action (collection) of the NHTSA API to request data from.
   *  - <b>Default</b> is `DecodeVinValues`, which requests that `response.Results` be a flattened array,
   *    containing a single object of Key:Value pairs, for easier data consumption. <br>
   *  - See {@link TODO:ListOfActions} for a valid list of NHTSA Actions and their purpose. <br>
   *  > <b>INFO:</b>
   *    Default can also be overridden before or after class instantiation via: <br>
   *    `process.env.NHTSA_API_ACTION`
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
   *   - Most api actions have an optional `?format=` query param, used to override this default behaviour.<br><br>
   *   - By default, this class appends a `?format=json` query string to every NHTSA fetch or post request.<br><br>
   *   - FYI, the default response format from the NHTSA api, with no `?format=` query param, is `XML`.<br><br>
   */
  constructor(options = {}) {
    this._baseUrl =
      options.baseUrl ||
      process.env.NHTSA_API_BASE_URL ||
      'https://vpic.nhtsa.dot.gov/api/vehicles'

    this._action =
      options.action || process.env.NHTSA_API_ACTION || 'DecodeVinValues'

    this._format = options.format || process.env.NHTSA_API_FORMAT || 'json'
  }

  /**
   * @property {string} baseUrl='https://vpic.nhtsa.dot.gov/api/vehicles' Set this property via:<br>
   *  `ApiWrapper.baseUrl` or `process.env.NHTSA_API_BASE_URL`
   * @description The base url of the NHTSA API.
   * @see #options.baseUrl
   */
  get baseUrl() {
    return this._baseUrl
  }
  set baseUrl(/** string */ value) {
    this._baseUrl = value.toString()
  }

  /**
   * @property {string} action=DecodeVinValues Set this property via:<br>
   *  `ApiWrapper.action` or `process.env.NHTSA_API_ACTION`
   * @description The NHTSA API action/collection to request data from.
   * @see #options.action
   */
  get action() {
    return this._action
  }
  set action(/** string */ value) {
    this._action = value.toString()
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
    this._format = value.toString()
  }

  /**
   * @async
   * @param {object} options Key:Value pairs of options to build our URL with.
   * @param {string} options.resource `Required` Which Resource to retrieve information about<br>
   *   (VIN, Make, Manufacturer, etc.)
   * @param {string} [options.baseUrl] Base URL of the API<br>
   *   - Defaults to [ApiWrapper.baseUrl](#options.baseUrl) if not provided
   * @param {string} [options.action] Which Action/collection to request data from<br>
   *   (DecodeVinValues, GetModelsForMake, GetManufacturerDetails, etc.)
   *   - Defaults to [ApiWrapper.action](#options.action) if not provided
   * @param {object} [options.params] Query string parameters to append to the generated URL
   * - See api/utils.{@link genQueryString}
   *
   * @returns {Promise<string>|Error}
   *   On resolve: Promise(<string>)<br>
   *   On reject: Promise(new Error(error<string>))
   *
   * @example
   *  // Providing only the resource option, uses internal variables of ApiWrapper as default:
   *  ApiWrapper.generateApiUrl({ resource: '3VWD07AJ5EM388202' })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=json"
   *
   *  // Providing resource, action, and params option, overriding cooresponding ApiWrapper internal variables:
   *  ApiWrapper.generateApiUrl({
   *   resource: '3VWD07AJ5EM388202',
   *   action: 'DecodeVinValuesExtended',
   *   params: {
   *    format: 'csv',
   *    modelYear: 2001
   *   }
   * })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/3VWD07AJ5EM388202?format=csv&modelYear=2001"
   *
   *  // Providing resource and params option, omitting action and params.format
   *  // such that "format=json" is added to query string and ApiWrapper.action is used as default action
   *  ApiWrapper.generateApiUrl({
   *   resource: '3VWD07AJ5EM388202',
   *   params: {
   *    modelYear: 2001
   *   }
   * })
   *  // Returns:
   *  // https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/3VWD07AJ5EM388202?format=json&modelYear=2001"
   *
   */
  async generateApiUrl({ resource, baseUrl, action, params }) {
    const validResource = await isValidType({ type: 'String', value: resource })
    if (!validResource) {
      return Promise.reject(
        new Error(
          'ApiWrapper.generateApiUrl() - resource is required to generate an API URL, none provided.'
        )
      )
    }

    /** Uses default baseUrl if none provided */
    baseUrl = baseUrl || this.baseUrl
    /** Uses default action if none provided */
    action = action || this.action

    /** Ensure we always generate with a query string containing the 'format' param */
    if (!params) {
      /** If no params are provided, set params to include this.format */
      params = { format: this.format }
    } else if (!params.format) {
      /** If user didn't provide a 'format' param in their params object,
       *  add it to the user provided params */
      params = { ...params, format: this.format }
    }

    /** Generate and return the completed API URL */
    return await genApiUrl({
      baseUrl,
      resource,
      action,
      params
    }).catch(err => {
      return Promise.reject(
        new Error(
          `ApiWrapper.generateApiUrl() - Error generating url --> ${err}`
        )
      )
    })
  }
}

module.exports = ApiWrapper
