/**
 * @category api
 * @requires api/utils
 * @class ApiWrapper
 * @alias api/ApiWrapper
 * @classdesc ApiWrapper to fetch or post(coming soon)
 *  data to the NHTSA.dot.gov API <br>
 * 
 * @constructor
 * @param {object} options={}
 * #### Options to pass to the ApiWrapper class constructor. <br>
 *  - Defaults can be overridden by passing an object of options to the class constructor,
 *    or by changing them on the class instance after instantiation. </br>
 *  - Order of Precedence upon instantiation, Highest to Lowest: <br>
 *    1. `options.option`
 *    2. `process.env.OPTION`
 *    3. `Default`
 * 
 *  - Defaults can also be overridden by setting their corresponding `process.env.OPTION` envirorment variable. </br>

 *
 * @param {string} options.baseURL=https://vpic.nhtsa.dot.gov/api/vehicles
 *  #### Used when generating the url to fetch from or post to.
 *  - Should *only* be overridden *if* the NHTSA URL changes in the future.
 *  > <b>NOTE:</b>
 *    Override this option via Node envirorment variable with:<br>
 *    `process.env.NHTSA_API_URL`
 * @param {string} options.endpoint=DecodeVinValues
 *  #### Endpoint of the NHTSA API to request from.
 *  - "DecodeVinValues" requests that `response.Results` be a flattened array,
 *  containing a single object of Key:Value pairs, for easier consumption. <br>
 *  - See {@link TODO:ListOfEndpoints} for a valid list of NHTSA Endpoints <br>
 *  > <b>NOTE:</b>
 *    Override this option via Node envirorment variable with:<br>
 *    `process.env.NHTSA_API_ENDPOINT`
 *
 * @param {string} options.format=json
 *  #### Format we want the NHTSA API response to be returned in.
 *  `'json'` to append "?format=json" to url and receive JSON response. `Default` <br>
 *  `'csv'` to append "?format=csv" to url and receive CSV response. <br>
 *  `'xml'` to append "?format=xml" to url and receive XML response. <br>
 *  `''` to omit '?format=' param entirely and receive XML response. <br>
 *
 *  ---
 * 
 *  - The default response from the NHTSA api, with no `?format=` query param, is `XML`.
 *  - Most endpoints have an optional "?format=" query param, used to override this default behaviour.
 *  - By default, this class appends a `?format=json` query string to every NHTSA fetch or post request.
 *
 *  > <b>NOTE:</b>
 *    Override this option via Node envirorment variable with: <br>
 *    `process.env.NHTSA_API_FORMAT`
 *
 * @example <caption>TODO ROADMAP</caption>
 * // TODO RENAME FILE TO index.js
 * const { ApiWrapper } = require('./api')
 * const wrapper = new ApiWrapper({ baseUrl, endpoint, format })
 * const apiReponseNamedAnthing = ApiWrapper.fetch(vin)
 *
 * // Under the hood:
 * // api/utils requires genEndpoint
 * const apiUrl = genApiUrl(vin, options = {})
 *
 * // Should fetch(apiUrl) after genApiUrl(vin, options = {}) and return api/fetch()
 * // Should return the fetched response with new Response(\<\>) class
 */

module.exports = class ApiWrapper {
  constructor(options = {}) {
    this._baseUrl = options.baseUrl || 'https://vpic.nhtsa.dot.gov/api/vehicles'
    this._endpoint = options.endpoint || 'DecodeVinValues'
    this._format = options.format || 'json'
  }

  get baseUrl() {
    return this._baseUrl
  }
  set baseUrl(/** string */ value) {
    this._baseUrl = value
  }

  get endpoint() {
    return this._endpoint
  }
  set endpoint(/** string */ value) {
    this._endpoint = value
  }

  get format() {
    return this._format
  }
  set format(/** string */ value) {
    this._format = value
  }

  /**
   * @method generateApiUrl
   * @memberof ApiWrapper
   *
   * @param {string} vin Vehicle Indentification Number to decode
   * @param {object} params Optional query string parameters to append to the generated url.
   *
   * @example
   *  // With ApiWrapper default options:
   *  ApiWrapper.generateApiUrl('EXAMPLEVIN', { format: 'csv' })
   *  // Returns https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/EXAMPLEVIN?format=csv"
   */
  async generateApiUrl(vin, params) {
    params = params || { format: this.format }
    const genEndpoint = require('./utils').genEndpoint
    const ep = await genEndpoint({
      vin,
      endpoint: this.endpoint,
      params
    })

    return `${this.baseUrl}${ep}`
  }

  request() {
    return 'testing'
  }
}
