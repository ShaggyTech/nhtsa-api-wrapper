'use strict'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const ApiWrapper = require('../libs/api')
const filterFalsey = ApiWrapper.filterFalsey

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const isValidVin = require('../libs/isValidVin')

class VinDecoder {
  constructor(
    isDevMode = false,
    defaultMode = 'DecodeVinValuesExtended',
    defaultFormat = 'json'
  ) {
    // object to hold search history, will help reduce unnecessary repeat API calls
    this.history = {}
    this.isDevMode = isDevMode
    this.baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/'
    this.errorUrl = 'https://vpic.nhtsa.dot.gov/api/error404.html'
    this.defaultMode = defaultMode
    this.defaultFormat = defaultFormat
  }

  // check vin validity without making a network request
  isValid(/** String */ vin) {
    return isValidVin(vin)
  }

  prepareApiUrl(vin, mode, format) {
    mode = mode || this.defaultMode
    format = format || this.defaultFormat
    return `${this.baseUrl}${mode}/${vin}?format=${format}`
  }

  async decodeVin(/** String */ vin) {
    // make sure we have a valid vin before making any network requests
    if (!this.isValid(vin)) {
      console.log('INVALID VIN, TRY AGAIN')
      return null
    }

    //  url we are fetching from
    const apiUrl = this.prepareApiUrl(vin, 'decodeVin')

    return await fetch(apiUrl)
      .then(result => {
        if (result.url === this.errorUrl) {
          throw new Error({
            msg: `API ERROR`,
            ErrorCode: 'Unknown',
            vin
          })
        }
        return result.json()
      })
      .then(result => {
        // TODO: FILTER RESULT OF NULL VALUES
        // libs/api.js ---> filterFalsey(ResultsArr)
        // filterFalsey(result)
        const ResultsArr = result.Results[0]
        const errObj = ResultsArr.Error
        if (errObj)
          throw new Error({
            ErrorCode,

            vin
          })
        return Results
      })
      .catch(err => {
        console.warn(err)
        return err
      })
  }
}

module.exports = VinDecoder
