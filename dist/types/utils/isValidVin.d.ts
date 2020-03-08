/**
 * @module utils/isValidVin
 * @category Utils
 */
/**
 * Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).
 *
 * @param {string} vin - Vehicle Identification Number.
 *
 * @returns {Promise<boolean>} True for a valid VIN, false for an invalid VIN.
 *
 * @example <caption>When loaded from the browser via html script tags</caption>
 * // <script type="text/javascript" src="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper"></script>
 * const isValid = await NHTSA.isValidVin('3VWD07AJ5EM388202').catch(error => error)
 * console.log(isValid) // true
 *
 * @example <caption>When loaded as a module</caption>
 * import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
 * const isValid = await isValidVin('3VWD07AJ5EM388202').catch(error => error)
 * console.log(isValid) // true
 *
 */
export declare function isValidVin(vin: string): Promise<boolean>;
//# sourceMappingURL=isValidVin.d.ts.map