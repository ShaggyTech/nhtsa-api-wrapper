/**
 * @category Actions
 * @module actions
 * @description A collection of API Action wrappers for use with the NHSTA vehicles API <br>
 *  > See **[Tutorial - NHSTA API Actions](tutorial-Tutorial-Actions.html)**
 *  > for all available API Actions<br>
 *
 * @example <caption>Import All actions:</caption>
 * const actions = require('./actions')
 * // then:
 * const response = await actions.DecodeVin(vin, { ...options })
 * const flatResponse = await actions.DecodeVinValues(vin, { ...options })
 *
 * @example <caption>Import individual actions:</caption>
 * const DecodeVin = require('./actions').DecodeVin
 * // then:
 * const response = await DecodeVin(vin, { ...options })
 *
 * @example <caption>Import individual actions by using spread operator:</caption>
 * const { DecodeVin, DecodeVinValues } = require('./actions')
 * // then:
 * const response = await DecodeVin(vin, { ...options })
 * const flatResponse = await DecodeVinValues(vin, { ...options })
 *
 * @example <caption>Import individual actions from their repsective folder:</caption>
 * const DecodeVin = require('./actions/DecodeVin')
 * // then:
 * const response = await DecodeVin({ ...options })
 *
 * @example <caption>Import individual actions directly from their respective file:</caption>
 * const DecodeVin = require('./actions/DecodeVin/decode-vin')
 * // then:
 * const response = await DecodeVin({ ...options })
 *
 */

/**
 * @async
 * @function DecodeVin
 * @description DecodeVin - NHTSA.dot.gov/vehicles API Action <br>
 * Used in: {@link ApiWrapper}<br>
 * @see {@link module:actions/DecodeVin} for more complete documentation
 */

/**
 * @async
 * @function DecodeVinValues
 * @description DecodeVinValues - NHTSA.dot.gov/vehicles API Action <br>
 * Used in: {@link ApiWrapper}<br>
 * @see {@link module:actions/DecodeVinValues} for more complete documentation
 */

const DecodeVin = require('./DecodeVin')
const DecodeVinValues = require('./DecodeVinValues')

exports.DecodeVin = DecodeVin
exports.DecodeVinValues = DecodeVinValues
