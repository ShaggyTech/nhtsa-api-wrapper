'use strict'

// NHTSA.gov API response filters
const { filterEmpty } = require('./api/apiFilters')

const { get } = require('./api/api')

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const { isValidVin } = require('./util')

class VinDecoder {
  constructor(options = {}) {
    // object to hold search history, will help reduce unnecessary repeat API calls
    this.history = {}
    // API Base URL
    this.baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
    // Options
    this.format = options.format || 'json'
    this.mode = options.mode || 'DecodeVinValuesExtended' // flat file format
    this.debug = options.debug || false
  }

  prepareApiUrl(vin, mode, format) {
    mode = mode || this.mode
    format = format || this.format
    return `${this.baseUrl}/${mode}/${vin}?format=${format}`
  }

  async decodeVin(/** String */ vin, options = {}) {
    // make sure we have a valid vin before making any network requests
    if (isValidVin(vin)) {
      console.log('INVALID VIN, TRY AGAIN')
      return null
    }

    //  url we are fetching from
    // example: https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json
    const apiUrl = this.prepareApiUrl(vin, 'decodeVin', options.format)

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
