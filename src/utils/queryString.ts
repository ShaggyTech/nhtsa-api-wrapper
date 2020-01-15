// Param union type
type Param = string | number

export interface Params {
  // eslint-disable-next-line prettier/prettier
  [propName: string]: Param;
}

/**
 * @async
 * @description Utility method to generate a query string,<br>
 *  for use with an NHTSA.gov API URL string. <br><br>
 *
 * @param {object} params <a name="params"></a> `REQUIRED`<br>
 *  #### An object containing key:value API query parameters to use.<br>
 *
 * All params will be converted into strings with
 *
 * @returns {Promise<string>|Error} An API query string <br>
 *  - On resolve: `Promise(<string>)`<br>
 *  - On reject: `new Error(error<string>)`
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

export function queryString(params: Params = {}): Promise<string> {
  // Error message begins with
  const errorBase = 'queryString(params) - '

  // Type guard params argument
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return Promise.reject(
      new Error(
        `${errorBase} params in the form of an object are required to build a query string, got: ${params}`
      )
    )
  }

  // Setup QueryString for Array mapping
  const entries = Object.entries(params)
  const paramsLength = entries.length

  // Return an empty string if params are an empty object
  if (paramsLength < 1) return Promise.resolve('')

  // Used to check if we've already prepended a first valid query param
  let isPrepended = false

  // Map [key]:value entries to "key=value" strings in an array
  const queryStringArray = entries.map(([key, value], index) => {
    let prepend = ''
    let append = ''

    // skip any invalid values, string or number types are valid
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
    return
  })

  // Join and return the completed query string
  return Promise.resolve(queryStringArray.join(''))
}
