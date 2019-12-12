/******************************
 * Api Utility/Helper Methods
 *******************************/

/**
 * Returns a url used to fetch data from the NHTSA.gov API
 * @alias module:apiUtils.generateUrl
 * @param {string} vin VIN to decode
 * @param {string=} apiEndpoint=DecodeVinValuesExtended Endpoint of the NHTSA.gov API to request from
 * @param {string=} responseFormat=json Requested response format from NHTSA.gov API call
 * @returns {string} url ex: https://vpic.nhtsa.dot.gov/api/vehicles/{apiEndpoint}/{vin}?format={responseFormat}
 *
 */
const generateUrl = (vin, apiEndpoint, responseFormat) => {
  // Gatekeeping
  if (!vin || typeof vin !== 'string') {
    return { errMsg: 'api.generateUrl(): invalid argument (vin)' }
  }

  // API url options
  apiEndpoint =
    apiEndpoint || process.env.DEFAULT_API_ENDPOINT || 'DecodeVinValuesExtended'
  responseFormat =
    responseFormat || process.env.DEFAULT_API_RESPONSE_FORMAT || 'json'

  // NHTSA.gov API Base Url
  const baseUrl =
    process.env.API_BASE_URL || 'https://vpic.nhtsa.dot.gov/api/vehicles'

  return `${baseUrl}/${apiEndpoint}/${vin}?format=${responseFormat}`
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
