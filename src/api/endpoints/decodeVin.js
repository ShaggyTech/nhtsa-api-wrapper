/**
 * @module DecodeVin
 * @description Returns a DecodeVin endpoint (path + query)
 *  for https://vpic.nhtsa.dot.gov/api/vehicles
 * <p>Example return: <code>"/DecodeVin/3VWD07AJ5EM388202?format=json"</code></p>
 * <p>
 * @param {string} vin VIN to decode
 * @param {object} params={} Query Parameters
 * @param {string} params.format=xml Any of: `xml`, `csv`, or `json`
 * <div>Can be set globally with <code>process.env.NHTSA_API_FORMAT</code></div>
 * @param {string} params.modelYear Optional: Model year of vehicle
 *
 * @returns {string} "/DecodeVin/:vin?:format&:modelYear"
 *
 * @example <caption>No Params</caption>
 * decodeVin("3VWD07AJ5EM388202")
 * // returns "/decodevin/3VWD07AJ5EM388202"
 *
 * @example <caption>With single param</caption>
 * decodeVin("3VWD07AJ5EM388202", {
 *  format: "json"
 * })
 * // returns "/decodevin/3VWD07AJ5EM388202?format=json"
 *
 * @example <caption>With multiple params</caption>
 * decodeVin("3VWD07AJ5EM388202", {
 *  format: "json",
 *  modelYear: "2014"
 * })
 * // returns "/decodevin/3VWD07AJ5EM388202?format=json&modelyear=2014"
 *
 * @example <caption>Invalid or missing VIN argument</caption>
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
 * // ALL of the above return: "/decodevin/INVALID_VIN"
 */

const decodeVin = (vin, params = {}) => {
  //
  if (!vin || typeof vin !== 'string') return '/DecodeVin/INVALID_VIN'
  // Default endpoint with no parameters
  let endpoint = `/DecodeVin/${vin}`

  // Setup QueryString
  const entries = Object.entries(params)
  const paramsLength = entries.length

  // if there are no params provided, we're done and can return the endpoint
  if (paramsLength < 1) return endpoint
  // else build the query string, add it to the endpoint, and return
  else {
    // Normalize the parameters to "key=value" strings used in the endpoint
    const queryStringArray = entries.map(([key, value], index) => {
      // if first param we need to prepend with '?' char
      let prepend = index < 1 ? '?' : ''
      // if there is another param coming after this one we need to append with '&' char
      let append = index < paramsLength - 1 ? '&' : ''

      // return the completed string
      return `${prepend}${key}=${value}${append}`
    })

    const queryString = queryStringArray.join('')

    return (endpoint += queryString)
  }
}

module.exports = decodeVin
