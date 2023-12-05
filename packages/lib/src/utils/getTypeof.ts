/**
 * @module utils/getTypeof
 * @category Utility Functions
 */

/**
 * Gets type of `value` using `Object.prototype.toString.call(value)`.
 *
 * Why? Because `typeof` is not reliable for all types of values.
 *
 * Values of null, Arrray, Error, new Date(), new String(), and /regex/ are all typeof 'object'.
 *
 * Object.prototype.toString.call gives more accurate results in the case someone has used an object
 * wrapper for primitive data types such as `new Number()` or `new String()`.
 *
 * It will also accurately recognize any Error types, Error, TypeError, etc., as 'error'.
 *
 * @param {any} value - Any kind of value (string, object, array, function, etc).
 * @returns {string} - Type of value, normalized to a lowercase string.
 */
export const getTypeof = (value: unknown): string => {
  const toString: string = Object.prototype.toString
    .call(value)
    .toLowerCase() /* ex: => '[object string]' or '[object array], etc. */

  /* return only the type, ex: 'string' or 'array' */
  return toString.slice(8, toString.length - 1)
}
