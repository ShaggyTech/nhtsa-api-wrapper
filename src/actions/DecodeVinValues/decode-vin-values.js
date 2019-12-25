/**
 * @category Actions
 * @module actions/DecodeVinValues
 *
 * @requires {@link ApiWrapper.BASE_URL}
 * @requires {@link ApiWrapper.DEFAULT_FORMAT}
 *
 * @requires {@link module:api/utils/genApiUrl}
 * @requires {@link module:api/utils/genQueryString}
 *
 * @requires {@link isValidType}
 *
 * @requires {@link module:node_modules/axios}
 */

const axios = require('axios')

// utility helper functions
const { genApiUrl } = require('../../api/utils')
const { isValidType } = require('../../util/isValidType')

/**
 * @function DecodeVinValues
 * @async
 *
 * @description DecodeVinValues - NHTSA.dot.gov/vehicles API Action<br>
 *  > **INFO:**<br>
 *      *See **{@tutorial Tutorial-Action-DecodeVinValues}** Tutorial for more information on what*
 *         *this returns from the NHTSA API.*
 *
 * <br>
 * @param {string} vin `REQUIRED` <br> Vehicle Identification Number to decode
 * @param {object} [options] <a name="options"></a> `baseUrl`, `format`, `modelYear`
 * @param {string} [options.baseUrl={@link ApiWrapper.BASE_URL}]
 *  Base URL of the API call to make
 * @param {string} [options.format={@link ApiWrapper.DEFAULT_FORMAT}]
 *  Output format of the API response
 * @param {string|number} [options.modelYear]
 *  Model Year of the vehicle (if known)
 *
 * @returns {Promise<object>|Error} Returns a response from the NHTSA API request with additional values
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
 *      // Results is a Single Object containing key:value<String> pairs
 *      {
 *        // ...etc,
 *        ManufacturerId: '1147',
 *        Model: 'R32',
 *        ModelYear: '2004',
 *        // ...etc,
 *        ValveTrainDesign: '',
 *        VehicleType: 'PASSENGER CAR',
 *        WheelBaseLong: '',
 *        WheelBaseShort: '',
 *        // ...etc
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
 * @tutorial Tutorial-Action-DecodeVinValues
 *
 * @see [ApiWrapper.DecodeVinValues](ApiWrapper.html#.DecodeVinValues)
 *
 * @example <caption>Basic Usage:</caption>
 * const { DecodeVinValues } = require('./main.js').ApiWrapper
 *
 * const result = await DecodeVinValues('WVWKG61J34D132375').catch(err => err)
 *
 * // => Promise.resolve(result<object>),
 */

const DecodeVinValues = async (vin, options = {}) => {
  /**
   * @constant {string} [BASE_URL={@link ApiWrapper.BASE_URL}]
   *   Base URL of the API call to make, used in Actions
   */
  const BASE_URL = require('../../main').ApiWrapper.BASE_URL

  /**
   * @constant {string} [DEFAULT_FORMAT={@link ApiWrapper.DEFAULT_FORMAT}]
   *   Base URL of the API call to make, used in Actions
   */
  const DEFAULT_FORMAT = require('../../main').ApiWrapper.DEFAULT_FORMAT

  // Gatekeeping vin arg
  if (!(await isValidType({ type: 'string', value: vin })) || vin.length < 1) {
    return Promise.reject(
      new Error(
        `DecodeVinValues(vin, opts): vin - expected non-empty String but got: ${vin}`
      )
    )
  }

  const action = 'DecodeVinValues'

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
    .catch(err => Promise.reject(err))
}

module.exports = DecodeVinValues
