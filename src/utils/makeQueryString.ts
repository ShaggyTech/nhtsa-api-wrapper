/**
 * Object containing Key:Value pairs to build the URL query string with.<br>
 * Parameter values may be either strings or numbers.
 * @memberof module:utils/makeQueryString
 * @example
 *  {
 *    format: 'json',
 *    modelYear: 2009,
 *    whatever: 'something'
 *  }
 *
 */
export type QueryStringParameters = {
  [propName: string]: string | number | undefined;
};

/**
 * @module utils/makeQueryString
 * @category Utils
 */

/**
 * Utility method to generate a query string compatible with the NHSTA API, for use in an API URL string.
 * @param {object} params Object of Type [QueryStringParameters](module-makeQueryString.QueryStringParameters.html)
 * @param {boolean} allowEmptyStringValues=false
 *   Set to `true` to add empty parameter values to the returned query string.
 *   GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
 * @async
 * @returns {Promise<string>|Error} An API query string for use in a final URL.
 *
 * @example <caption>Single Param:</caption>
 * const qs = await makeQueryString({
 *   format: 'json'
 * }).catch(error => error)
 * //  qs = "format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await makeQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 * // qs = "?format=json&modelYear=2006&page=2"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await makeQueryString({}).catch(error => error)
 * // qs = ""
 *
 * @example <caption>Using allowEmptyStringValues option:</caption>
 * const qs = await makeQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi'
 * }, true).catch(error => error)
 * // qs = "?year=2016&vehicleTYpe=&make=Audi"
 *
 */
export function makeQueryString(
  params: QueryStringParameters = {},
  allowEmptyStringValues = false
): Promise<string | Error> {
  /* Beginning of error message string */
  const errorBase =
    'queryString(params) - expected params in the form of an object, got:';

  /* Runtime type guard params argument, must be of type object */
  if (Object.prototype.toString.call(params) !== '[object Object]') {
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

    const typeofValue = typeof value;

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
