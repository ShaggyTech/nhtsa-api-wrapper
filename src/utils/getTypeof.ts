/**
 * @module getTypeof
 * @category Utils
 */

/**
 * Returns the typeof of a given value using Object.prototype.toString.call(value)
 * @param {any} value what value to get the type of
 * @returns {string} Type of value, normalized to a lowercase string
 */

export function getTypeof(value: any): string {
  const type = Object.prototype.toString
    .call(value)
    .toLowerCase(); /* ex: => [object string] */
  return type.slice(8, type.length - 1);
}
