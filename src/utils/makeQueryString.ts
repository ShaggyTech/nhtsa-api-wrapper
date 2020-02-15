import { getTypeof } from './getTypeof';

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
 * @returns {Promise<string>|Error} A query string of search parameters for use in a final Fetch.get URL.
 *
 * @example <caption>When loaded from the browser via html script tags</caption>
 * // <script type="text/javascript" src="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper"></script>
 * const qs = await NHTSA.makeQueryString({ modelYear: 2010 }).catch(error => error)
 * console.log(qs) // "?modelYear=2010"
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
 * console.log(qs) // "?modelYear=2019"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await makeQueryString({
 *   whatever: 'some value',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 *
 * console.log(qs) // "?whatever=some%20value&modelYear=2006&page=2"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await makeQueryString({}).catch(error => error)
 *
 * console.log(qs) // ""
 *
 * @example <caption>Using allowEmptyStringValues option:</caption>
 * const qs = await makeQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi'
 * }, true).catch(error => error)
 *
 * console.log(qs) // "?year=2016&vehicleType=&make=Audi"
 *
 */
export function makeQueryString(
  params: import('./types').QueryStringParameters = {},
  allowEmptyStringValues = false
): Promise<string | Error> {
  /* Beginning of error message string */
  const errorBase =
    'queryString(params) - expected params in the form of an object, got:';

  /* Runtime type guard params argument, must be of type object */
  if (getTypeof(params) !== 'object') {
    return Promise.reject(new Error(`${errorBase} ${params}`));
  }

  /* Setup QueryString for Array mapping */
  const entries = Object.entries(params);
  const paramsLength = entries.length;

  /* Return an empty string if params are an empty object */
  if (paramsLength < 1) return Promise.resolve('');

  /* Used to check if we've already prepended a valid query param */
  let isPrepended = false;

  /* Map [key]:value entries to "key=value" strings in an array */
  const queryStringArray = entries.map(([key, value], index) => {
    let prepend = '';
    let append = '';

    const typeofValue = getTypeof(value);

    /* Convert any number values to a string */
    if (value && typeofValue === 'number') {
      value = value.toString();
    }

    /* Skip any invalid values, only string and number value types are valid */
    if (
      (value || allowEmptyStringValues) &&
      (typeofValue === 'string' || typeofValue === 'number')
    ) {
      /* if this is the first param we need to prepend the '?' char */
      if (!isPrepended) {
        prepend = '?';
        isPrepended = true;
      }
      /* if there is another param coming after this one we need to append the '&' char */
      if (index < paramsLength - 1) {
        append = '&';
      }

      /* Add the completed partial query string to queryStringArray */
      return `${prepend}${key}=${value}${append}`;
    }
    return;
  });

  /* Join and return the completed query string after URI encoding */
  return Promise.resolve(encodeURI(queryStringArray.join('')));
}
