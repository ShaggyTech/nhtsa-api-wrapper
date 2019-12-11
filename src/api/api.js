const axios = require('axios').default

const DEFAULT_DECODE_TYPE = 'DecodeVinValuesExtended'
const DEFAULT_RESPONSE_FORMAT = 'json'

// API Utility Helpers
const { generateUrl, handleResponseError } = require('./apiUtils')

// axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

const get = async (url, options = {}) => {
  // What type of decode will this be?
  const decodeType = options.decodeType || DEFAULT_DECODE_TYPE
  // What will the response format be
  const responseFormat = options.responseFormat || DEFAULT_RESPONSE_FORMAT

  // Generate our API url as a string
  const endpoint = generateUrl(vin, decodeType, responseFormat)

  // If there was an error, an object will be returned
  if (typeof endpoint === 'object') {
    return new Error(endpoint.errMsg)
  }

  return await axios
    .get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return handleResponseError(error)
    })
}

exports.get = get
