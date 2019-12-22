/**
 * @module api/utils
 * @description A collection of api utility and helper methods
 *
 * @example
 * // Import All utils functions:
 * const utils = require('./api/utils')
 * // then:
 * const genApiUrl = utils.genApiUrl({ ...options })
 *
 * // Import individual functions:
 * const makeUrl = require('./api/utils').genApiUrl
 * // then:
 * const url = await makeUrl({ ...options })
 *
 * // Import individual functions by using spread operator:
 * const { genApiUrl } = require('./api/utils')
 * // then:
 * const url = await genApiUrl({ ...options })
 *
 * // Not Recommended but it's also possible to:
 * // Import individual functions directly from their file:
 * const { genApiUrl } = require('./api/utils/genApiUrl')
 * // then:
 * const url = await genApiUrl({ ...options })
 *
 */

/**
 * @async
 * @function genQueryString
 * @description Generates a query string for use with an NHTSA.gov API URL string. <br>
 * Used in: {@link module:api/utils/genApiUrl}<br>
 * @see {@link module:api/utils/genQueryString} for more complete documentation
 */

/**
 * @async
 * @function genApiUrl
 * @description Generates a full url or the NHTSA API <br>
 * Used in: {@link api/ApiWrapper}<br>
 * @see {@link module:api/utils/genApiUrl} for more complete documentation
 */
const { filterEmpty } = require('./filterEmpty')
const { genQueryString } = require('./genQueryString')
const { genApiUrl } = require('./genApiUrl')

module.exports = {
  filterEmpty,
  genQueryString,
  genApiUrl
}
