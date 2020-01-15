/**
 * Object containing Key:Value pairs to build the URL query string with.<br>
 * Parameter values may be either strings or numbers. <br>
 * ---
 * ```javascript
 *  {
 *    format: 'json',
 *    modelYear: 2009,
 *    whatever: 'something'
 *  }
 * ```
 *
 * @category utils
 * @memberof utils/makeQueryString
 * @interface
 * @see [utils/makeQueryString](module-utils_makeQueryString.html)
 */
export interface QueryStringParameters {
  [propName: string]: string | number;
}

/**
 * @category utils
 * @async
 * @method makeQueryString
 * @description Utility method to generate a query string.<br>
 *   Prepend it to an API URL string. <br>
 *   ---
 *
 *
 * @param {utils/makeQueryString.QueryStringParameters} params <a name="params"></a>
 * An object containing key:value API query parameters to use.<br>
 * Parameter values may be either type 'string' or type 'number'
 *
 * @returns {Promise<string>|Error} An API query string <br>
 *  - On resolve: `Promise(<string>)`<br>
 *  - On reject: `new Error(<string>)` - if parameters are not of type 'object'
 *
 * @example <caption>Single Param:</caption>
 * const qs = await genQueryString({
 *   format: 'json'
 * }).catch(error => error)
 * //  qs = "format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await genQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 * // qs = "?format=json&modelYear=2006&page=2"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await genQueryString({}).catch(error => error)
 * // qs = ""
 *
 */

export function makeQueryString(
  params: QueryStringParameters = {}
): Promise<string | Error> {
  // Error message begins with
  const errorBase =
    'queryString(params) - expected params in the form of an object , got:';

  // Type guard params argument, must be of type object
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    return Promise.reject(new Error(`${errorBase} ${params}`));
  }

  // Setup QueryString for Array mapping
  const entries = Object.entries(params);
  const paramsLength = entries.length;

  // Return an empty string if params are an empty object
  if (paramsLength < 1) return Promise.resolve('');

  // Used to check if we've already prepended a valid query param
  let isPrepended = false;

  // Map [key]:value entries to "key=value" strings in an array
  const queryStringArray = entries.map(([key, value], index) => {
    let prepend = '';
    let append = '';

    const typeofValue = typeof value;

    if (typeofValue === 'number') {
      value = value.toString();
    }

    // skip any invalid values, only string or number types are valid
    if (value && (typeofValue === 'string' || typeofValue === 'number')) {
      // if this is the first param we need to prepend the '?' char
      if (value !== '' && !isPrepended) {
        prepend = '?';
        isPrepended = true;
      }
      // if there is another param coming after this one we need to append the '&' char
      if (index < paramsLength - 1) {
        append = '&';
      }

      // map the completed partial query string to queryStringArray
      return `${prepend}${key}=${value}${append}`;
    }
    return;
  });

  // Join and return the completed query string anfter URI encoding
  return Promise.resolve(encodeURI(queryStringArray.join('')));
}
