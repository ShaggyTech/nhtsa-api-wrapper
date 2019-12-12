/**
 *
 * @param {string} vin VIN to decode
 * @param {string} apiEndpoint nhtsa.gov api to request from
 */
const generateUrl = (vin, apiEndpoint, responseFormat) => {
  // Gatekeeping
  if (!vin || typeof vin !== 'string') {
    return { errMsg: 'api.generateUrl(): invalid argument (vin)' }
  }

  // NHTSA.gov API Base Url
  const baseUrl =
    process.env.API_BASE_URL || 'https://vpic.nhtsa.dot.gov/api/vehicles'

  // API url options
  apiEndpoint =
    apiEndpoint || process.env.DEFAULT_API_ENDPOINT || 'DecodeVinValuesExtended'
  responseFormat =
    responseFormat || process.env.DEFAULT_API_RESPONSE_FORMAT || 'json'

  return `${baseUrl}/${apiEndpoint}/${vin}?format=${responseFormat}`
}

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

exports.generateUrl = generateUrl
exports.handleResponseError = handleResponseError
