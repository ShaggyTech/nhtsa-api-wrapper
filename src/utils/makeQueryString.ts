import { NHTSA_RESPONSE_FORMAT } from '../constants'
import { getTypeof } from './getTypeof'

/**
 * @module utils/makeQueryString
 * @category Utils
 */

/**
 * Utility method to generate a query string compatible with the NHSTA API, for use in an API URL string.
 *
 * @async
 *
 * @param {object} params - Object of Type [QueryStringParameters](module-utils_makeQueryString.html#.QueryStringParameters).
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
 * - Given params of `{ paramName: "" }` , setting this to true will use 'paramName=' in the final query string.
 * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
 *
 * @returns {Promise<string>} A query string of search parameters for use in a final Fetch.get URL.
 *
 * @example <caption>When loaded as a module</caption>
 * import { makeQueryString } from '@shaggytools/nhtsa-api-wrapper'
 * const qs = await makeQueryString({ modelYear: 2010 }).catch(error => error)
 * console.log(qs) // "?modelYear=2010"
 *
 * @example <caption>Single Param:</caption>
 * const qs = await makeQueryString({
 *   modelYear: 2019
 * }).catch(error => error)
 * console.log(qs) // "?modelYear=2019&format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await makeQueryString({
 *   whatever: 'some value',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 *
 * console.log(qs) // "?whatever=some%20value&modelYear=2006&page=2&format=json"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await makeQueryString({}).catch(error => error)
 *
 * console.log(qs) // "?format=json"
 *
 * @example <caption>Using allowEmptyStringValues option:</caption>
 * const qs = await makeQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi'
 * }, true).catch(error => error)
 *
 * console.log(qs) // "?year=2016&vehicleType=&make=Audi&format=json"
 *
 */
export function makeQueryString(
  params?: QueryStringParameters,
  allowEmptyStringValues = false
): Promise<string> {
  /*
   * Make sure we're always using 'format=json' in the url Query parameters
   * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
   * This package may provide support for the other formats (CSV and XML) if requested.
   */
  const defaultParams = { format: NHTSA_RESPONSE_FORMAT }
  let _params = {}
  if (!params || getTypeof(params) !== 'object') {
    _params = { ...defaultParams }
  } else {
    _params = { ...params, ...defaultParams }
  }

  /* Setup QueryString for Array mapping */
  const entries = Object.entries(_params)
  const paramsLength = entries.length

  /* Return an empty string if params are an empty object */
  if (paramsLength < 1) return Promise.resolve('')

  /* Used to check if we've already prepended a valid query param */
  let isPrepended = false

  /* Map [key]:value entries to "key=value" strings in an array */
  const queryStringArray = entries.map(([key, value], index) => {
    let prepend = ''
    let append = ''

    const typeofValue = getTypeof(value)

    /* Convert any number values to a string */
    if (value && typeofValue === 'number') {
      value = value.toString()
    }

    /* Skips any invalid values, only string and number value types are valid */
    if (
      (value || allowEmptyStringValues) &&
      (typeofValue === 'string' || typeofValue === 'number')
    ) {
      /* if this is the first param we need to prepend the '?' char */
      if (!isPrepended) {
        prepend = '?'
        isPrepended = true
      }
      /* if there is another param coming after this one we need to append the '&' char */
      if (index < paramsLength - 1) {
        append = '&'
      }

      /* Add the completed partial query string to queryStringArray */
      return `${prepend}${key}=${value}${append}`
    }
    return
  })

  /* Join and return the completed query string after URI encoding */
  return Promise.resolve(encodeURI(queryStringArray.join('')))
}

/**
 * Object containing Key:Value pairs to build the URL query string with.
 * - Parameter values may be either strings or numbers.
 *
 * @memberof module:utils/makeQueryString
 * @alias QueryStringParameters
 * @example
 * {
 * modelYear: 2009,
 * whatever: 'something'
 * }
 *
 */
export type QueryStringParameters = {
  [propName: string]: string | number | undefined
}
