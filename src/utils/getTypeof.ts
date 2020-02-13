/**
 * @module utils/getTypeof
 * @category Utils
 */

/**
 * @description Returns the type of of a given value using Object.prototype.toString.call(value)
 * @param value value <any> that you want to get the type of
 * @returns Type of value, normalized to a lowercase string
 */

export function getTypeof(value: any): string {
  const toString: string = Object.prototype.toString
    .call(value)
    .toLowerCase(); /* ex: => '[object string]' or '[object array], etc. */
  return toString.slice(8, toString.length - 1);
}
