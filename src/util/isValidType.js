/**
 * Validate types and existence of various input values.<br>
 *
 * ---
 *
 * Returns `false` if:
 *   - type or value args are not provided
 *   - type arg is not of type 'String'
 *
 * @param {object} args
 * @param {string} args.type What type should the value be in order to pass the test and return true
 * @param {string} args.value What value are we testing against
 * @returns {Promise.Boolean} True if type arg matches type of value
 */
const isValidType = async ({ type, value }) => {
  // Gatekeeping
  if (!type || !value) return false
  if (Object.prototype.toString.call(type) !== '[object String]') return false
  // normalize type
  const _type = type.toLowerCase()

  const expected = `[object ${_type}]`
  const actual = Object.prototype.toString.call(value).toLowerCase()

  return Promise.resolve(expected === actual)
}

module.exports.isValidType = isValidType
