/**
 * @module utils/getTypeof
 * @category Utils
 */

/**
 * Gets type of `value` using `Object.prototype.toString.call(value)`.
 *
 * @param {any} value - Any kind of value (string, object, array, function, etc).
 *
 * @returns {string} - Type of value, normalized to a lowercase string.
 */
export function getTypeof(value: any): string {
  const toString: string = Object.prototype.toString
    .call(value)
    .toLowerCase(); /* ex: => '[object string]' or '[object array], etc. */
  return toString.slice(8, toString.length - 1);
}
