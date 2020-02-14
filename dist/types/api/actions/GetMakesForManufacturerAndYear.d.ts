import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetMakesForManufacturerAndYear
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetMakesForManufacturerAndYear extends Fetch {
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer,
     * and whose Year From and Year To range cover the specified year.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     * - Manufacturer can be idenfitied by Id, a partial name, or a full name
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
     *
     * @async
     * @memberof GetMakesForManufacturerAndYear
     *
     * @param {string|number} manufacturer Manufacturer Name (string) or Manufacturer ID (number)
     * @param {object} params Query Search Parameters to append to the URL
     * @param {string|number} params.year Model year of the vehicle - Number, >= 2016
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetMakesForManufacturerAndYear(manufacturer: string | number, params?: {
        year: string | number;
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetMakesForManufacturerAndYear.d.ts.map