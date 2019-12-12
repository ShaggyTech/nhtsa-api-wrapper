const generateUrl = (vin, decodeMode, responseFormat) => {
  // NHTSA.gov API Base Url
  const API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

  // Gatekeeping
  if (!vin || typeof vin !== 'string') {
    return { errMsg: 'api.generateUrl(): invalid argument (vin)' }
  }
  if (!decodeMode || typeof decodeMode !== 'string') {
    return { errMsg: 'api.generateUrl(): invalid argument (decodeMode)' }
  }
  if (!responseFormat || typeof responseFormat !== 'string') {
    return { errMsg: 'api.generateUrl(): invalid argument (responseFormat)' }
  }

  else return `${API_BASE_URL}/${decodeMode}/${vin}?format=${responseFormat}`
}

const handleResponseError = (error) => {
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
  }
  else {
    // console.log('Error', error)
    return error
  }
}


exports.generateUrl = generateUrl
exports.handleResponseError = handleResponseError