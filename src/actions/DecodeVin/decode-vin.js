const axios = require('axios')

// utility helper functions
const { genApiUrl } = require('../../api/utils')
const { isValidType } = require('../../util/isValidType')

// Defaults inherited from main class
const BASE_URL = require('../../main').BASE_URL
const DEFAULT_FORMAT = require('../../main').DEFAULT_FORMAT

const DecodeVin = async (vin, options = {}) => {
  // Gatekeeping resource to stop unneccesary http calls with invalid or empty vin strings
  // all other errors will be caught and rejected inside the modules required and used here
  // Empty params object or invalid params values (not String or Number) will simply return with
  //   an empty string
  if (!(await isValidType({ type: 'string', value: vin })) || vin.length < 1) {
    return Promise.reject(
      new Error(
        `DecodeVin(vin, opts): vin - expected non-empty String but got: ${vin}`
      )
    )
  }

  const action = 'DecodeVin'

  const _resource = vin
  const _baseUrl = options.baseUrl || BASE_URL
  const _format = options.format || DEFAULT_FORMAT
  const _modelYear = options.modelYear || ''

  const url = await genApiUrl({
    baseUrl: _baseUrl,
    action,
    resource: _resource,
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

module.exports = DecodeVin
