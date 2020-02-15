/**
 * @module utils/isValidType
 * @category Utils
 */

import { getTypeof } from './getTypeof';

/**
 * Provided an object with `type` and `value` keys and it will:
 *
 * Return true if:
 * - type of `value` is equal to provided `type`.
 *
 * Return false if:
 * - `value` is not equal to provided `type`
 * - `type` is missing from options object
 * - `type` is not of type `string`
 * - `value` is falsey or otherwise not provided.
 *
 * @param {object} options - [IsValidTypeOptions](module-utils_isValidType.html#.IsValidTypeOptions).
 * @param {string} options.type - What type are you expecting the value to be?
 * @param {any} options.value - What value are we testing against?
 * @returns {boolean} True or false.
 *
 * @example <caption>Verify type string</caption>
 * const isValid = isValidType({
 *   type: 'string',
 *   value: 'this is a string'
 * }).catch(error => error)
 *
 * console.log(isValid) // "true"
 *
 * @example <caption>Verify type object</caption>
 * const isValid = isValidType({
 *   type: 'object',
 *   value: { someKey: 'some value' }
 * }).catch(error => error)
 *
 * console.log(isValid) // "true"
 *
 * @example <caption>Returns false if type is not valid</caption>
 * const isValid = await isValidType({
 *   type: 'array',
 *   value: 'this is not an array'
 * }).catch(error => error)
 *
 * console.log(isValid) // "false"
 */
export function isValidType(
  options: import('./types').IsValidTypeOptions
): boolean {
  /* Runtime typechecking */
  if (getTypeof(options?.type) !== 'string') {
    return false;
  }

  /* Normalize options.type to lowercase to match the lowercase value returned by getTypeof()*/
  const type_ = options.type.toLowerCase();

  /* Use getTypeof to get the actual type of the provided value */
  const typeofValue = getTypeof(options.value);

  /* Return the result */
  return type_ === typeofValue;
}
