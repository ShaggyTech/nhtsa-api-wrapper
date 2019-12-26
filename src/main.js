'use strict'

require('dotenv').config()

const actions = require('./actions')

/**
 * @category Main
 * @class ApiWrapper
 * @alias ApiWrapper
 * @requires module:actions
 */
class ApiWrapper {
  /**
   * @property {string} BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles
   *   Base URL of the API call to make, used in Actions
   */
  static get BASE_URL() {
    return 'https://vpic.nhtsa.dot.gov/api/vehicles'
  }
  /**
   * @property {string} DEFAULT_FORMAT=json
   *   Output format of the API response
   */
  static get DEFAULT_FORMAT() {
    return 'json'
  }

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
   * @param {object} [options={}] Key:Value options to pass the function
   *   See **[DecodeVin options arg](module-actions_DecodeVin.html#options)**
   *     for valid keys and value types
   *
   * @see module:actions/DecodeVin
   */

  static async DecodeVin(vin, options = {}) {
    return new Promise((resolve, reject) =>
      resolve(actions.DecodeVin(vin, options).catch(err => reject(err)))
    )
  }

  /**
   * -------------------
   * Action - DecodeVinValues
   * -------------------
   * @description **DecodeVinValues** - NHTSA.dot.gov/vehicles API Action<br><br>
   *  > **INFO:**<br>
   *    *See **{@link module:actions/DecodeVinValues}** for more information on how to use this function.*
   *
   *  > **INFO:**<br>
   *    *See **{@tutorial Tutorial-Action-DecodeVinValues}** Tutorial for more information on what*
   *      *this returns from the NHTSA API.*
   *
   * @param {string} vin `REQUIRED` <br> Vehicle Identification Number to decode
   * @param {object} [options={}] Key:Value options to pass the function
   *   See **[DecodeVinValues options arg](module-actions_DecodeVinValues.html#options)**
   *     for valid keys and value types
   *
   * @see module:actions/DecodeVinValues
   */

  static async DecodeVinValues(vin, options = {}) {
    return new Promise((resolve, reject) =>
      resolve(actions.DecodeVinValues(vin, options).catch(err => reject(err)))
    )
  }

  /**
   * -------------------
   * Action - DecodeVinExtended
   * -------------------
   * @description **DecodeVinExtended** - NHTSA.dot.gov/vehicles API Action<br><br>
   *  > **INFO:**<br>
   *    *See **{@link module:actions/DecodeVinExtended}** for more information on how to use this function.*
   *
   *  > **INFO:**<br>
   *    *See **{@tutorial Tutorial-Action-DecodeVinExtended}** Tutorial for more information on what*
   *      *this returns from the NHTSA API.*
   *
   * @param {string} vin `REQUIRED` <br> Vehicle Identification Number to decode
   * @param {object} [options={}] Key:Value options to pass the function
   *   See **[DecodeVinExtended options arg](module-actions_DecodeVinExtended.html#options)**
   *     for valid keys and value types
   *
   * @see module:actions/DecodeVinExtended
   */

  static async DecodeVinExtended(vin, options = {}) {
    return new Promise((resolve, reject) =>
      resolve(actions.DecodeVinExtended(vin, options).catch(err => reject(err)))
    )
  }
}

module.exports.ApiWrapper = ApiWrapper
