/**
 * @module utils/genQueryString
 */

/**
 * @async
 * @function genQueryString
 * @description Generates a query string for use with an NHTSA.gov API endpoint URL string
 *
 * @param {object} params An object containing `key<ParamName>` <b>:</b> `value<String>` api query parameters to use.
 * @returns {Promise<string>|Error} An API query string <br>
 * On resolve: `Promise(<string>)`<br>
 * On reject: `new Error(error<string>)`
 *
 * @example <caption>Single Param:</caption>
 * const qs = await genQueryString({
 *   format: 'json'
 * }).catch(error => error)
 * // => Promise("?format=json")
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await genQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 * // => Promise("?format=json&modelYear=2006&page=2")
 *
 * @example <caption>Error Handling -   invalid params will reject with an Error: </caption>
 * // No params provided; produces an error which is caught and returned as is
 * const qs = await genQueryString().catch(error => error)
 * // => error<Error>
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

    /**
     * Map an array with [key]:value entries, to ":key=:value" strings
     */
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
