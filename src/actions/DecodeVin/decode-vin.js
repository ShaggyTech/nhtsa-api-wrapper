/**
 * @category Actions
 * @module actions/DecodeVin
 * @requires {@link module:node_modules/axios}
 * @requires {@link module:api/utils/genApiUrl}
 * @requires {@link module:api/utils/genQueryString}
 * @requires {@link isValidType}
 * @requires {@link ApiWrapper.DEFAULT_FORMAT}
 * @requires {@link ApiWrapper.DEFAULT_FORMAT}
 */

const axios = require('axios')

// utility helper functions
const { genApiUrl } = require('../../api/utils')
const { isValidType } = require('../../util/isValidType')

/**
 * @method DecodeVin
 * @async
 *
 * @description DecodeVin - NHTSA.dot.gov/vehicles API Action<br>
 *  > **INFO:**<br>
 *      *See **{@tutorial Tutorial-Action-DecodeVin}** Tutorial for more information on what*
 *         *this returns from the NHTSA API.*
 *
 * <br>
 * @param {string} vin `REQUIRED` <br> Vehicle Identification Number to decode
 * @param {object} [options] `baseUrl`, `format`, `modelYear`
 * @param {string} [options.baseUrl={@link ApiWrapper.BASE_URL}]
 *  Base URL of the API call to make
 * @param {string} [options.format={@link ApiWrapper.DEFAULT_FORMAT}  ]
 *  Output format of the API response
 * @param {string|number} [options.modelYear]
 *  Model Year of the vehicle (if known)
 *
 * @returns {Promise<Object>|Error} Returns a response from the NHTSA API request with additional values
 *   (url and action), to aid in debugging results.
 *
 *  -----
 *  #### On resolve: `Promise(<Object>)`
 *  - Empty options arg object or empty/invalid options.value(s) will be transformed
 *    to empty strings internally and will not reject with any Error
 *  ```javascript
 *  Promise.resolve({
 *    // Results from NHTSA API response
 *    "Count": Number,
 *    "Message": String,
 *    "SearchCriteria": String,
 *    "Results": [
 *      {
 *        "Value": String|Number,
 *        "ValueId": String,
 *        "Variable": String,
 *        "VariableId": Number
 *      }
 *    ],
 *    // URL that was used in axios.get()
 *    url: String,
 *    // Action this result came from
 *    action: String,
 *  })
 *  ```
 * -----
 *  #### On reject: `new Error(error<String>)`
 *  - If no or invalid vin argument is provided, an Error will be thrown
 *    to prevent unneccesary http calls that would not result in a valid return
 *  - Most invalid options will reject with Error(s) inside the modules
 *    they are used in and can be caught with a Try/Catch or async .catch blocks
 *
 *  ```javascript
 * Promise.reject(
 *   new Error('Error message...')
 * )
 *  ```
 * -----
 *
 * @tutorial Tutorial-Action-DecodeVin
 *
 * @see [ApiWrapper.DecodeVin](ApiWrapper.html#.DecodeVin)
 *
 * @example <caption>Basic Usage:</caption>
 * const wrapper = require('./main.js')
 *
 * const result = async wrapper.DecodeVin('WVWKG61J34D132375').catch(err => err)
 *
 * // => Promise.resolve(result<Object>),
 */

const DecodeVin = async (vin, options = {}) => {
  /**
   * @constant {string} DecodeVin.BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles
   *   Base URL of the API call to make, used in Actions
   */
  const BASE_URL = require('../../main').BASE_URL

  /**
   * @constant {string} DecodeVin.DEFAULT_FORMAT=https://vpic.nhtsa.dot.gov/api/vehicles
   *   Base URL of the API call to make, used in Actions
   */
  const DEFAULT_FORMAT = require('../../main').DEFAULT_FORMAT

  // Gatekeeping vin arg
  if (!(await isValidType({ type: 'string', value: vin })) || vin.length < 1) {
    return Promise.reject(
      new Error(
        `DecodeVin(vin, opts): vin - expected non-empty String but got: ${vin}`
      )
    )
  }

  const action = 'DecodeVin'

  const _baseUrl = options.baseUrl || BASE_URL
  const _format = options.format || DEFAULT_FORMAT
  const _modelYear = options.modelYear || ''

  const url = await genApiUrl({
    baseUrl: _baseUrl,
    action,
    resource: vin,
    params: {
      format: _format,
      modelYear: _modelYear
    }
  }).catch(err => Promise.reject(err))

  return await axios
    .get(url)
    .then(response => {
      // add url and action to the response.data and return
      return { ...response.data, url, action }
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

module.exports.DecodeVin = DecodeVin
