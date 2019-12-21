const { genQueryString } = require('./genQueryString')

/**
 * @description An api/utils module that generates a full url for the NHTSA API
 * @category api/utils
 * @alias genApiUrl
 * @async
 * @requires api/utils genQueryString
 *
 * @param {Object} args
 * @param {String} args.baseUrl Base url of the API
 * @param {String} args.action Action or collection to request from<br>
 *   (DecodeVinValues, GetModelsForMake, GetManufacturerDetails, etc.)
 * @param {String} args.resource Resource to retrieve information about<br>
 *   (VIN, Make, Manufacturer, etc.)
 * @param {Object} [args.params] Parameter key:value pairs to convert into a query string<br>
 *   ex: `?format=json&modelYear=2001`
 *
 * @returns {Promise<String>|Error} Fully formed API url
 *
 * @example
 * const { genApiUrl } = require('./genApiUrl')
 *
 * const baseUrl = 'https://test-url.com'
 * const action = 'TEST_ACTION'
 * const resource = 'TEST_RESOURCE'
 *
 * const url = await genApiUrl({
 *   baseUrl,
 *   action,
 *   resource
 * }).catch(err => err)
 *   // Returns:
 *   'https://test-url.com/TEST_ACTION/TEST_RESOURCE'
 *
 * const urlWithQueryString = await genApiUrl({
 *   baseUrl,
 *   action,
 *   resource,
 *   params: {
 *     format: 'csv',
 *     modelYear: 1991
 *   }
 * }).catch(err => err)
 *   // Returns:
 *   'https://test-url.com/TEST_ACTION/TEST_RESOURCE?format=csv&modelYear=1991'
 *
 */
const genApiUrl = async ({ baseUrl, action, resource, params }) => {
  // beginning of error messages
  const errorBase = 'genApiUrl(args) - '

  // holds our generated url if params are provided
  let url = `${baseUrl}/${action}/${resource}`

  // Gatekeeping baseUrl arg - exists and is a string
  const typeofBaseUrl = Object.prototype.toString.call(baseUrl)
  if (typeofBaseUrl !== '[object String]') {
    return Promise.reject(
      new Error(
        `${errorBase} expected baseUrl to be of type String, got: ${typeofBaseUrl}`
      )
    )
  }

  // Gatekeeping action arg - exists and is a string
  const typeofAction = Object.prototype.toString.call(action)
  if (typeofAction !== '[object String]') {
    return Promise.reject(
      new Error(
        `${errorBase} expected action to be of type String, got: ${typeofAction}`
      )
    )
  }

  // Gatekeeping resource arg - exists and is a string
  const typeofResource = Object.prototype.toString.call(resource)
  if (typeofResource !== '[object String]') {
    return Promise.reject(
      new Error(
        `${errorBase} expected action to be of type String, got: ${typeofResource}`
      )
    )
  }

  // Generate and return with url with appended query string
  // if params are provided and of the correct type
  if (params) {
    // Gatekeeping params
    const typeofParams = Object.prototype.toString.call(params)
    if (typeofParams !== '[object Object]') {
      return Promise.reject(
        new Error(
          `${errorBase} expected params to be of type Object, got: ${typeofParams}`
        )
      )
    }

    // If we have no params(empty object), skip generation of queryString
    if (Object.entries(params).length < 1) return Promise.resolve(url)

    // Else build the query string based on provied params
    const queryString = await genQueryString(params).catch(err => err)
    // and handle any errors
    if (queryString instanceof Error) {
      return Promise.reject(
        new Error(`${errorBase} error creating queryString: ${queryString}`)
      )
    } else return Promise.resolve(`${url}${queryString}`) // return the completed url with queryString
  } else return Promise.resolve(url) // return the completed url with no queryString
}

exports.genApiUrl = genApiUrl
