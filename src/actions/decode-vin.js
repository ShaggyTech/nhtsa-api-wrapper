const { genApiUrl } = require('../api/utils')
const { get } = require('../request')

const BASE_URL = require('../main').BASE_URL
const DEFAULT_FORMAT = require('../main').DEFAULT_FORMAT

const DecodeVin = async (vin, options = {}) => {
  const action = 'DecodeVin'
  const resource = vin

  const baseUrl = options.baseUrl || BASE_URL
  const format = options.format || DEFAULT_FORMAT
  const modelYear = options.modelYear || ''

  const url = await genApiUrl({
    baseUrl,
    action,
    resource,
    params: {
      format,
      modelYear
    }
  }).catch(err => Promise.reject(err))

  const response = await get(url).catch(err => {
    return Promise.reject(err)
  })
  return response
}

module.exports = DecodeVin
