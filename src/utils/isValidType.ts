/**
 * @memberof module:isValidType
 * @category Utils
 *
 * @description Options argument object provided to utils/isValidType()
 *
 * ```javascript
 *  {
 *    type: <string>,
 *    value: <any>
 *  }
 * ```
 */
interface IsValidTypeOptions {
  type: string;
  value: any;
}

/**
 * @module isValidType
 * @category Utils
 */

/**
 * @async
 * @description Validate types and existence of various input values.<br>
 * Note: Uses `Object.prototype.toString.call(value)` under the hood
 *
 * ---
 *
 * Returns `true` if:
 *   - type of value is equal to provided type
 *
 * ---
 *
 * Returns `false` if:
 *   - 'options.value is not of type options.type
 *   - 'options.type' is missing from options object
 *   - 'options.type' is not of type 'string'
 *   - 'options.value' is falsey or not provided
 *
 * @param {object} options Object of Type [IsValidTypeOptions](module-isValidType.IsValidTypeOptions.html)
 * @param {string} options.type What type are you expecting the value to be?
 * @param {any} options.value What value are we testing against?
 * @returns {Promise<Boolean>}
 *
 * @example <caption>Verify type string</caption>
 * const isValid = await isValidType({
 *   type: 'string',
 *   value: 'this is a string'
 * }).catch(error => error)
 * //  isValid = "true"
 *
 * @example <caption>Verify type object</caption>
 * const isValid = await isValidType({
 *   type: 'object',
 *   value: { someKey: 'some value' }
 * }).catch(error => error)
 * //  isValid = "true"
 *
 * @example <caption>Returns false if type is not valid</caption>
 * const isValid = await isValidType({
 *   type: 'array',
 *   value: 'this is not an array'
 * }).catch(error => error)
 * //  isValid = "false"
 */

export async function isValidType(opts: IsValidTypeOptions): Promise<boolean> {
  // Gatekeeping
  if (typeof opts?.type !== 'string' || !opts.value) {
    return Promise.resolve(false);
  }

  // normalize type
  const type_ = opts.type.toLowerCase();

  const expected = `[object ${type_}]`;
  const actual = Object.prototype.toString.call(opts.value).toLowerCase();

  return Promise.resolve(expected === actual);
}
