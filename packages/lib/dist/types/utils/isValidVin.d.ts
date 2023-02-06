/**
 * @module utils/isValidVin
 * @category Utils
 */
/**
 * Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).
 *
 * If you need to test that the algorithm is working correctly, you can use 17 zeros `0` as
 * the VIN and it should return `true` as the result.
 *
 * @example <caption>Browser via html script tags</caption>
 * const isValid = NHTSA.isValidVin('3VWD07AJ5EM388202')
 * console.log(isValid) // true
 *
 * @example <caption>Imported as a module</caption>
 * import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
 * const isValid = isValidVin('3VWD07AJ5EM388202')
 * console.log(isValid) // true
 *
 * @param {string} vin - Vehicle Identification Number.
 * @returns {boolean} True for a valid VIN, false for an invalid VIN.
 */
export declare function isValidVin(vin: string): boolean;
//# sourceMappingURL=isValidVin.d.ts.map