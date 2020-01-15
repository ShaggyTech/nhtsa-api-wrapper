/**
 * Validate types and existence of various input values.<br>
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
 *   - type arg is missing
 *   - type or value arg is falsey or missing
 *
 * @param {object} options
 * @param {string} options.type What type should the value be in order to pass the test and return true
 * @param {any} options.value What value are we testing against
 * @returns {Promise<Boolean>}
 */

export const isValidType = async ({
  type,
  value
}: {
  type: string;
  value: any;
}) => {
  // Gatekeeping
  if (!type || !value) return Promise.resolve(false)

  // normalize type
  const _type = type.toLowerCase()

  const expected = `[object ${_type}]`
  const actual = Object.prototype.toString.call(value).toLowerCase()

  return Promise.resolve(expected === actual)
}
