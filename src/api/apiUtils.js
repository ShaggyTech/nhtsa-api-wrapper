/******************************
 * Api Utility/Helper Methods
 *******************************/

/**
 * Returns a url used to fetch data from the NHTSA.gov API
 *
 * @alias module:apiUtils.generateUrl
 * @example
 * ```javascript
 * generateUrl({
 *  url: 'https://vpic.nhtsa.dot.gov/api',
 *  endpoint: 'DecodeVin',
 *  vin: '3VW...',
 *  format: 'json'
 *  })
 * ```
 * @param {string} vin <p>Vehicle Identification Number (VIN) to decode</p>
 * <p>Default: <code>undefined</code></p>
 * <p>Note: Cannot be overridden by <code>process.env</code> variables
 * and always defaults to <code>undefined</code> if not provided.</p>
 * @param {object} options
 * <p>Defaults can be overridden by providing them in the options object (ex: options.{param}).</p>
 * <p>Defaults can also be overridden by setting their corresponding <code>process.env</code> envirorment variable.</p>
 * <p>Precedence: <code>options.{param} -> process.env variable -> default</code></p>
 * @param {string} options.url <p>NHTSA API base URL</p>
 * <p>Default: <code>"https://vpic.nhtsa.dot.gov/api/vehicles"</code></p>
 * <p><code>process.env.NHTSA_API_URL</code></p>
 * @param {string} options.endpoint <p>Endpoint of the NHTSA API to request from</p>
 * <p>Default: <code>"DecodeVin"</code></p>
 * <p><code>process.env.NHTSA_API_ENDPOINT</code></p>
 * @param {string} options.format <p>Requested response format from the NHTSA API request</p>
 * <p>Default: <code>"json"</code></p>
 * <p><code>process.env.NHTSA_API_RESPONSE_FORMAT</code></p>
 * @returns {string} "<code>${url}/${apiEndpoint}/${vin}?format=${responseFormat}</code>"
 *
 */
const generateUrl = (vin, { url, endpoint, format } = {}) => {
  // API base Url
  url =
    url ||
    process.env.NHTSA_API_URL ||
    'https://vpic.nhtsa.dot.gov/api/vehicles'
  // what API endpoint to fetch from
  endpoint = endpoint || process.env.NHTSA_API_ENDPOINT || 'DecodeVin'
  // what is the requested response format
  format = format || process.env.NHTSA_API_RESPONSE_FORMAT || 'json'

  return `${url}/${endpoint}/${vin}?format=${format}`
}

/**
 * Handles any axios errors or custom errors from the api response
 * @alias module:apiUtils.handleResponseError
 * @param {any} error Response error to handle
 * @returns {Error} Either the modified axios response or the original error
 *
 */
const handleResponseError = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log('Error', error.response.data)
    // console.log('Error', error.response.status)
    // console.log('Error', error.response.headers)
    return error.response
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log('Error', error.request)
    return error.request
  } else if (error.message) {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message)
    return error.message
  } else {
    // console.log('Error', error)
    return error
  }
}

/**
 * Api Utility/Helper Methods
 * @module apiUtils
 */
module.exports.generateUrl = generateUrl
module.exports.handleResponseError = handleResponseError
