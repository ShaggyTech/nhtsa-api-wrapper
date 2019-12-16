/**
 * @module endpoints/DecodeVin
 * @requires utils/genQueryString Helper to build api query strings
 */

const { genQueryString } = require('../utils/genQueryString')

/**
 * @async
 * @function DecodeVin
 * @description Build and return a /DecodeVin/ endpoint (VIN + optional query string)
 * @returns {Promise<string>|Error} API Endpoint w/ optional Query String<br>
 *   On resolve: `Promise(<string>)`<br>
 *   On reject: `new Error(error<string>)`
 *
 * @param {string} vin VIN to decode
 * @param {object} params Query Parameters
 * @param {string} params.format=xml Any of: `xml`, `csv`, or `json`
 * <div>Can be set globally with <code>process.env.NHTSA_API_FORMAT</code></div>
 * @param {string} params.modelYear Optional: Model year of vehicle
 *
 * @example <caption>No Params:</caption>
 * const decodeVin = require('.api/utils/DecodeVin')
 * decodeVin("3VWD07AJ5EM388202")
 * decodeVin("3VWD07AJ5EM388202", {})
 * // returns "/DecodeVin/3VWD07AJ5EM388202"
 *
 * @example <caption>With single param:</caption>
 * decodeVin("3VWD07AJ5EM388202", {
 *  format: "json"
 * })
 * // returns "/DecodeVin/3VWD07AJ5EM388202?format=json"
 *
 * @example <caption>With multiple params:</caption>
 * decodeVin("3VWD07AJ5EM388202", {
 *  format: "json",
 *  modelYear: "2014"
 * })
 * // returns "/DecodeVin/3VWD07AJ5EM388202?format=json&modelyear=2014"
 *
 * @example <caption>Invalid or missing arguments, all of the below will return an Error:</caption>
 * // Invalid vin
 * decodeVin()
 * decodeVin('')
 * decodeVin(['vin_number'])
 * decodeVin({vin: 'vin_number'})
 *
 * decodeVin('', {
 *  format: 'json',
 *  modelYear: '2014'
 * })
 *
 * decodeVin({
 *  format: 'json',
 *  modelYear: '2014'
 * })
 *
 * // Invalid params
 * decodeVin('vin_number', ['invalid', 'array'])
 * decodeVin('vin_number', 'invalid string')
 */

const DecodeVin = async (vin, params = {}) => {
  let endpoint = '/DecodeVin/'

  // Gatekeeping vin arg
  const typeofVin = Object.prototype.toString.call(vin)
  if (!vin || typeofVin !== '[object String]')
    return new Error(`DecodeVin(vin, params) - invalid vin arg: ${vin}`)

  // Default endpoint with no parameters
  endpoint += vin

  // Gatekeeping params arg
  const paramsLength = Object.entries(params).length
  if (paramsLength < 1) return endpoint

  // Build the query string based on provied params arg
  const queryString = await genQueryString(params).catch(err => err)
  // Error catcher
  if (queryString instanceof Error)
    return new Error(`DecodeVin(vin, params) - invalid params: ${queryString}`)

  return (endpoint += queryString)
}

module.exports = DecodeVin
