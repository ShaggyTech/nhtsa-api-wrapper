'use strict'

// NHTSA.gov API response filters
const { filterFalsey } = require('../src/api/apiFilters')

const { get } = require('axios')

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const isValidVin = require('../libs/isValidVin')

class VinDecoder {
  constructor(options = {}) {
    // object to hold search history, will help reduce unnecessary repeat API calls
    this.history = {}
    // API Base URL
    this.baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
    // Options
    this.format = options.format || 'json'
    this.mode = options.mode || 'DecodeVinValuesExtended' // flat file format
    this.isDevMode = options.isDevMode || false
  }

  // check vin validity without making a network request
  isValid(/** String */ vin) {
    return isValidVin(vin)
  }

  prepareApiUrl(vin, mode, format) {
    mode = mode || this.mode
    format = format || this.format
    return `${this.baseUrl}${mode}/${vin}?format=${format}`
  }

  async decodeVin(/** String */ vin, options = {}) {
    // make sure we have a valid vin before making any network requests
    if (!this.isValid(vin)) {
      console.log('INVALID VIN, TRY AGAIN')
      return null
    }

    //  url we are fetching from
    // example: https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json
    const apiUrl = this.prepareApiUrl(vin, 'decodeVin', options.format)

    // TODO - move api requests into it's own file - src/api/apiRequest.js

    return await get(apiUrl)
      .then(result => {
        // TODO: FILTER RESULT OF NULL VALUES
        // libs/api.js ---> filterFalsey(ResultsArr)
        const filtered = filterFalsey(result)
        return filtered
      })
      .catch(err => {
        console.warn(err)
        return err
      })
  }
}

module.exports = VinDecoder
