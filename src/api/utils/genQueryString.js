/**
 * @module
 * @async
 * @description API utility method to generate a query string,<br>
 *  for use with an NHTSA.gov API URL string. <br>
 *
 * @see {@link module:api/utils}
 *
 * @param {object} params An object containing key:value <br>
 *  { `key<ParamName>` <b>:</b> `value<String>`}<br>
 *  api query parameters to use.
 *
 * @returns {Promise<string>|Error} An API query string <br>
 *  On resolve: `Promise(<string>)`<br>
 *  On reject: `new Error(error<string>)`
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
 */

const genQueryString = async params =>
  new Promise((resolve, reject) => {
    // Error message begins with
    const errorBase = 'genQueryString(params) - '
    // Params are required
    if (!params)
      return reject(
        new Error(
          `${errorBase} params are required to build a query string: ${params}`
        )
      )

    // Type check params to ensure it is an object
    const typeofParams = Object.prototype.toString.call(params)
    if (typeofParams !== '[object Object]')
      return reject(
        new Error(
          `${errorBase} expected params to be of type Object, got: ${typeofParams}`
        )
      )

    // Setup QueryString for Array mapping
    const entries = Object.entries(params)
    const paramsLength = entries.length

    // More gatekeeping
    if (paramsLength < 1)
      return reject(
        new Error(`${errorBase} params are required, got: ${params}`)
      )

    /**
     * Map an array with [key]:value entries, to ":key=:value" strings
     */
    const queryStringArray = entries.map(([key, value], index) => {
      // if first param we need to prepend the '?' char
      let prepend = ''
      let append = ''

      if (value) {
        // if this is the first param we need to prepend the '?' char
        if (index < 1) {
          prepend = '?'
        }
        // if there is another param coming after this one we need to append the '&' char
        if (index < paramsLength - 1) {
          // but only if the value is not empty
          if (entries[index + 1][1] !== '') {
            append = '&'
          }
        }

        // return the completed string
        return `${prepend}${key}=${value}${append}`
      }
    })

    return resolve(queryStringArray.join(''))
  })

exports.genQueryString = genQueryString
