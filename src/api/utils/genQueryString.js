/**
 * @module
 * @requires utils/isValidType
 * @async
 * @description API utility method to generate a query string,<br>
 *  for use with an NHTSA.gov API URL string. <br><br>
 *
 * @see {@link module:api/utils}
 *
 * @param {object} params <a name="params"></a> `REQUIRED`<br>
 *  #### An object containing key:value API query parameters to use.<br>
 *   - `{key<String> : value<String|Number>}`<br>
 *   > <b>INFO:</b><br>
 *     Param values must be of type `String` or `Number`<br>
 *     - Invalid params types or empty params values will be
 *         transformed into empty strings: `""`<br>
 *     - If params argument is an empty object,
 *       will resolve with `""`<br>
 *     - If there are no valid param values,
 *       will resolve with an empty string: `""`<br>
 *
 *   > <b>INFO:</b> <br>
 *       If params argument is missing or params argument is not of type Object,
 *         will reject with an `Error`.<br>
 *
 * @returns {Promise<string>|Error} An API query string <br>
 *  On resolve: `Promise(<string>)`<br>
 *  On reject: `new Error(error<string>)`
 *
 * @example <caption>Single Param:</caption>
 * const qs = await genQueryString({
 *   format: 'json'
 * }).catch(error => error)
 * // => Promise.resolve("?format=json")
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await genQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 * // => Promise.resolve("?format=json&modelYear=2006&page=2")
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await genQueryString({}).catch(error => error)
 * // => Promise.resolve("")
 *
 */

const { isValidType } = require('../../util/isValidType')

const genQueryString = async params => {
  // Error message begins with
  const errorBase = 'genQueryString(params<object>) - '

  // Params are required
  if (!params)
    return Promise.reject(
      new Error(
        `${errorBase} params are required to build a query string: ${params}`
      )
    )

  // Type check params to ensure it is an object
  if (!(await isValidType({ type: 'object', value: params }))) {
    return Promise.reject(
      new Error(
        `${errorBase} expected params to be of type Object but got params: ${params}`
      )
    )
  }

  // Setup QueryString for Array mapping
  const entries = Object.entries(params)
  const paramsLength = entries.length

  // Return an empty string if params are an empty object
  if (paramsLength < 1) return Promise.resolve('')

  // Check to see if we've already prepended a valid query param
  let isPrepended = false

  // Map an array with [key]:value entries, to ":key=:value" strings
  const queryStringArray = entries.map(([key, value], index) => {
    let prepend = ''
    let append = ''

    // skip any invalid values
    if (value && (typeof value === 'string' || typeof value === 'number')) {
      // if this is the first param we need to prepend the '?' char
      if (value !== '' && !isPrepended) {
        prepend = '?'
        isPrepended = true
      }
      // if there is another param coming after this one we need to append the '&' char
      if (index < paramsLength - 1) {
        // but only if the value is not empty
        if (entries[index + 1][1] !== '') {
          append = '&'
        }
      }

      // map the completed partial query string to queryStringArray
      return `${prepend}${key}=${value}${append}`
    }
  })

  // Join and return the completed query string
  return Promise.resolve(queryStringArray.join(''))
}

exports.genQueryString = genQueryString
