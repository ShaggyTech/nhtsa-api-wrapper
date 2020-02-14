import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetMakeForManufacturer
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetMakeForManufacturer extends Fetch {
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - Mnufacturer name can be a partial name, or a full name for more specificity
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @memberof GetMakeForManufacturer
     *
     * @param {string|number} manufacturer Manufacturer Name (string) or Manufacturer ID (number)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetMakeForManufacturer(manufacturer: string | number): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetMakeForManufacturer.d.ts.map