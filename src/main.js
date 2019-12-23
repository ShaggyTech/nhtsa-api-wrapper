'use strict'

require('dotenv').config()

// NHTSA.gov API response filters
const { filterEmpty } = require('./api/utils/filterEmpty')
// Axios wrapper to fetch data from the nhtsa.gov api
const { get } = require('./api/api')

// https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json

const { isValidVin } = require('./util')
const { generateUrl } = require('./api/apiUtils')

// const { DecodeVin } = require('./actions')

class ApiWrapper {
  static async DecodeVin(vin, options = {}) {
    return new Promise((resolve, reject) => {
      resolve(require('./actions').DecodeVin(vin, options)).catch(err =>
        reject(err)
      )
    })
  }
}

ApiWrapper.BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'
ApiWrapper.DEFAULT_FORMAT = 'json'

module.exports = ApiWrapper
