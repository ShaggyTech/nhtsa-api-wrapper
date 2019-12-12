const axios = require('axios')

// API Utility Helpers
const { handleResponseError } = require('./apiUtils')

// axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

const get = async url => {
  // Gatekeeping
  if (!url || typeof url !== 'string') {
    return handleResponseError({
      errMsg: 'api.get(): invalid argument (url)'
    })
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
