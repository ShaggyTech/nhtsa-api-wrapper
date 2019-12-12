'use strict'

// NHTSA.gov API response filters
const { filterEmpty } = require('./api/apiFilters')
// Axios wrapper to fetch data from the nhtsa.gov api
const { get } = require('./api/api')

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const { isValidVin } = require('./util')
const { generateUrl } = require('./apiUtils')

const DEFAULT_API_DECODE_MODE = 'DecodeVinValuesExtended' // returns a flat file
const DEFAULT_API_RESPONSE_FORMAT = 'json'

class VinDecoder {
  constructor(options = {}) {
    // object to hold search history, will help reduce unnecessary repeat API calls
    this.history = {}
    // API Base URL
    this.baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
    // Options
    this.format = options.format || 'json'
    this.decodeMode = options.decodeMode || DEFAULT_API_DECODE_MODE // flat file format
    this.responseFormat = options.responseFormat || DEFAULT_API_RESPONSE_FORMAT // json
    this.debug = options.debug || false
  }

  async decodeVin(/** String */ vin, options = {}) {
    // make sure we have a valid vin before making any network requests
    if (isValidVin(vin)) {
      console.log('INVALID VIN, TRY AGAIN')
      return null
    }

    //  url we are fetching from
    // example: https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json
    const apiUrl = generateUrl(vin, 'decodeVin', 'json')

    return await get(apiUrl)
      .then(response => {
        // console.log(response)
        const results  = response.Results

        // return the unfiltered response if this.debug option is true (false by default)
        if (this.debug) return response
        else return { ...response, Results: filterEmpty(results) }
      })
      .catch(err => {
        console.warn(err)
        return err
      })
  }
}

module.exports = VinDecoder
