'use strict'

require('dotenv').config()

// NHTSA.gov API response filters
const { filterEmpty } = require('./api/apiFilters')
// Axios wrapper to fetch data from the nhtsa.gov api
const { get } = require('./api/api')

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const { isValidVin } = require('./util')
const { generateUrl } = require('./api/apiUtils')

// Setup API defaults
const API_ENDPOINT = process.env.NHTSA_API_ENDPOINT // will return a flat file by default
const API_RESPONSE_FORMAT = process.env.NHTSA_API_RESPONSE_FORMAT // json

class VinDecoder {
  constructor(options = {}) {
    // object to hold search history, will help reduce unnecessary repeat API calls
    this.history = {}
    // API Base URL
    this.baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
    // Options
    this.format = options.format || 'json'
    this.apiEndpoint = options.apiEndpoint || API_ENDPOINT // flat file format
    this.responseFormat = options.responseFormat || API_RESPONSE_FORMAT // json
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
        const results = response.Results

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
