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

/**
 * @category Main
 * @class ApiWrapper
 * @alias ApiWrapper
 */
class ApiWrapper {
  /**
   * -------------------
   * Action - DecodeVin
   * -------------------
   * @description **DecodeVin** - NHTSA.dot.gov/vehicles API Action<br><br>
   *  > **INFO:**<br>
   *    *See **{@link module:actions/DecodeVin}** for more information on how to use this function.*
   *
   *  > **INFO:**<br>
   *    *See **{@tutorial Tutorial-Action-DecodeVin}** Tutorial for more information on what*
   *      *this returns from the NHTSA API.*
   *
   * @param {string} vin `REQUIRED` <br> Vehicle Identification Number to decode
   * @param {object} [options={}] See **{@link module:actions/DecodeVin}**
   *
   * @see module:actions/DecodeVin
   */
  static async DecodeVin(vin, options = {}) {
    return new Promise((resolve, reject) => {
      resolve(require('./actions').DecodeVin(vin, options)).catch(err =>
        reject(err)
      )
    })
  }
}

/**
 * @property {string} ApiWrapper.BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles
 *   Base URL of the API call to make, used in Actions
 */
ApiWrapper.BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

/**
 * @property {string} ApiWrapper.DEFAULT_FORMAT=json
 *   Output format of the API response
 */
ApiWrapper.DEFAULT_FORMAT = 'json'

module.exports = ApiWrapper
