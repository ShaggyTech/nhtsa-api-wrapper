/**
 * @category api/utils
 * @alias genEndpoint
 * @async
 * @description API utility method to generate an endpoint string, with optional query string,<br>
 *   for use in combination with the base URL of the NHTSA.gov API</br>
 *
 * @see {@link module:api/utils}
 *
 * @param {object} options
 * @param {string} options.endpoint `REQUIRED`<br> Type of API endpoint we want to use, ex: `DecodeVinValuesExtended`
 * @param {string} options.vin `REQUIRED`<br> Vehicle Identifcation Number for the endpoint
 * @param {object} options.params `OPTIONAL`<br> Parameters to transform into an API URL Query String
 *
 * @returns {Promise<string>|Error} An API endpoint string with optional query string appended<br>
 * On resolve: `Promise(<string>)`<br>
 * On reject: `new Error(error<string>)`
 *
 * @example <caption>With no params, and therefore no query string appended</caption>
 * const ep = await genEndpoint({
 *   endpoint: 'DecodeVin',
 *   vin = '3VWD07AJ5EM388202'
 * }).catch(err => err)
 * // => Promise("/DecodeVin/3VWD07AJ5EM388202")
 *
 * @example <caption>With params, used to build a query string:</caption>
 * const ep = await genEndpoint({
 *   endpoint: 'DecodeVinValues',
 *   vin = '3VWD07AJ5EM388202',
 *   params: {
 *     format: 'xml',
 *     modelYear: 2001,
 *     page: '2'
 *   }
 * }).catch(err => err)
 * // => Promise("/DecodeVinValues/3VWD07AJ5EM388202?format=xml&modelYear=2001&page=2")
 *
 */

const { genQueryString } = require('./genQueryString')

const genEndpoint = async ({ endpoint, vin, params }) => {
  // beginning string for error messages
  const baseError = `genEndpoint({ endpoint, vin, params }) -`

  // Gatekeeping endpoint
  const typeofEndpoint = Object.prototype.toString.call(endpoint)
  if (!endpoint || typeofEndpoint !== '[object String]') {
    return new Error(
      `${baseError} expected endpoint to be of type String, got: ${typeofEndpoint}`
    )
  }

  // Gatekeeping vin
  const typeofVin = Object.prototype.toString.call(vin)
  if (!vin || typeofVin !== '[object String]') {
    return new Error(`${baseError} invalid vin arg, got: ${vin}`)
  }

  // Build the base of our endpoint from required options
  let _endpoint = `/${endpoint}/${vin}`

  // params cannot be undefined or we get errors below
  params = params || Object.assign({})

  // If we have no params, skip generation of queryString
  if (Object.entries(params).length < 1) return _endpoint

  // Else build the query string based on provied params
  const queryString = await genQueryString(params).catch(err => err)
  // and handle any errors
  if (queryString instanceof Error)
    return new Error(`${baseError} error creating queryString: ${queryString}`)

  // then add queryString and return the completed _endpoint
  return (_endpoint += queryString)
}

exports.genEndpoint = genEndpoint
