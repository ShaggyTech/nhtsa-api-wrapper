/**
 * @module utils/getTypeof
 * @category Utils
 */
/**
 * Gets type of `value` using `Object.prototype.toString.call(value)`.
 *
 * Why? Because `typeof` is not reliable for all types of values.
 *
 * Object.prototype.toString gives more accurate results in the case someone has used an object wrapper
 * for primitive data types such as `new Number()` or `new String()`.
 *
 * @param {any} value - Any kind of value (string, object, array, function, etc).
 *
 * @returns {string} - Type of value, normalized to a lowercase string.
 */
export declare const getTypeof: (value: unknown) => string;
//# sourceMappingURL=getTypeof.d.ts.map