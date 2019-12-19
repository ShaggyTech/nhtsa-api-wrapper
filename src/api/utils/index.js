/**
 * @module api/utils
 * @description A collection of api utility and helper methods
 *
 * @example
 * // Import All utils functions:
 * const utils = require('./api/utils')
 * // then:
 * const genEndpoint = utils.genEndpoint({ ...options })
 *
 * // Import individual functions:
 * const makeMeAnEndpoint = require('./api/utils').genEndpoint
 * // then:
 * const endpoint = await makeMeAnEndpoint({ ...options })
 *
 * // Import individual functions by using spread operator:
 * const { genEndpoint } = require('./api/utils')
 * // then:
 * const endpoint = await genEndpoint({ ...options })
 *
 * // Not Recommended but it's also possible to:
 * // Import individual functions directly from their file:
 * const { genEndpoint } = require('./api/utils/genEndpoint')
 * // then:
 * const endpoint = await genEndpoint({ ...options })
 *
 */

/**
 * @async
 * @function genEndpoint
 * @description Generates an api endpoint string with an optional query string appended.<br>
 * @see {@link genEndpoint} for more complete documentation
 */

/**
 * @async
 * @function genQueryString
 * @description Generates a query string for use with an NHTSA.gov API endpoint URL string. <br>
 * Used in: {@link module:utils/genEndpoint}<br>
 * @see {@link genQueryString} for more complete documentation
 */

/**
 * @async
 * @function genApiUrl
 * @description Generates a full url or the NHTSA API <br>
 * Used in: {@link module:utils/genEndpoint}<br>
 * @see {@link genApiUrl} for more complete documentation
 */
const { filterEmpty } = require('./filterEmpty')
const { genEndpoint } = require('./genEndpoint')
const { genQueryString } = require('./genQueryString')
const { genApiUrl } = require('./genApiUrl')

module.exports = {
  filterEmpty,
  genQueryString,
  genEndpoint,
  genApiUrl
}
