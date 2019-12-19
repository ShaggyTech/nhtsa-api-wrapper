const { genQueryString } = require('./genQueryString')

/**
 * @description An api/utils module that generates a full url for the NHTSA API
 * @category api/utils
 * @alias genApiUrl
 * @async
 * @requires api/utils
 *
 * @param {Object} args
 * @param {String} args.baseUrl Base url of the API
 * @param {String} args.action Action or collection to add to the url
 * @param {String} args.resource Resource to retrieve information about
 * @param {Object} [args.params] Parameter key:value pairs to convert into a query string
 *
 * @returns {Promise<String>|Error} Full API url
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
      `${errorBase} expected baseUrl to be of type String, got: ${typeofBaseUrl}`
    )
  }

  // Gatekeeping action arg - exists and is a string
  const typeofAction = Object.prototype.toString.call(action)
  if (typeofAction !== '[object String]') {
    return Promise.reject(
      `${errorBase} expected action to be of type String, got: ${typeofAction}`
    )
  }

  // Gatekeeping resource arg - exists and is a string
  const typeofResource = Object.prototype.toString.call(resource)
  if (typeofResource !== '[object String]') {
    return Promise.reject(
      `${errorBase} expected action to be of type String, got: ${typeofResource}`
    )
  }

  // generate and return with query string if params are provided and of the correct type
  if (params) {
    // Gatekeeping params
    const typeofParams = Object.prototype.toString.call(params)
    if (typeofParams !== '[object Object]') {
      return Promise.reject(
        `${errorBase} expected params to be of type Object, got: ${typeofParams}`
      )
    }

    // If we have no params(empty object), skip generation of queryString
    if (Object.entries(params).length < 1) return Promise.resolve(url)

    // Else build the query string based on provied params
    const queryString = await genQueryString(params).catch(err => err)
    // and handle any errors
    if (queryString instanceof Error) {
      return new Error(
        `${errorBase} error creating queryString: ${queryString}`
      )
    } else return Promise.resolve(`${url}${queryString}`) // return the completed url with queryString
  } else return Promise.resolve(url) // return the completed url with no queryString
}

exports.genApiUrl = genApiUrl
