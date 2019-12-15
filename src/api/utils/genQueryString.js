/**
 * @module utils/genQueryString
 * @description Generates a query string for use with the NHTSA.gov API base URL
 *
 * <p>Example return:   <code>"?format=json&modelYear=2019"</code></p>
 * <p></p>
 * @param {object} params An object of key:value api query parameters to use
 * @promise
 * @returns {Promise(String)|Error} "?:param1=param1.value&:param2=param2.value"
 *
 * @example <caption>Single Param:</caption>
 * const qs = await genQueryString({
 *   format: 'json'
 * }).catch(err => err)
 * // => "?format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await genQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(err => err)
 * // => "?format=json&modelYear=2006&page=2"
 *
 * @example <caption>Error Handling -   invalid params will reject with an Error: </caption>
 * // Simple await and catch that returns the Error as is
 *
 * const qs = await genQueryString().catch(err => err)
 * // => <Error> err
 *
 */

const genQueryString = async params =>
  new Promise((resolve, reject) => {
    // Gatekeeping
    if (!params)
      return reject(
        new Error(`genQueryString(params) got invalid params: ${params}`)
      )

    // Type check params to ensure it is an object
    const typeofParams = Object.prototype.toString.call(params)
    if (typeofParams !== '[object Object]')
      return reject(
        new Error(
          `genQueryString(params) expected params to be of type Object, got: ${typeofParams}`
        )
      )

    // Setup QueryString for Array mapping
    const entries = Object.entries(params)
    const paramsLength = entries.length

    // More gatekeeping
    if (paramsLength < 1)
      return reject(
        new Error(`genQueryString(params): got invalid params: ${params}`)
      )

    // Make an array with [key]:value entries => array of strings equal to ":key=:value"
    const queryStringArray = entries.map(([key, value], index) => {
      // if first param we need to prepend the '?' char
      let prepend = index < 1 ? '?' : ''
      // if there is another param coming after this one we need to append the '&' char
      let append = index < paramsLength - 1 ? '&' : ''
      // return the completed string
      return `${prepend}${key}=${value}${append}`
    })

    return resolve(queryStringArray.join(''))
  })

exports.genQueryString = genQueryString
