import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetManufacturerDetails
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetManufacturerDetails extends Fetch {
    /**
     * This provides the details for a specific manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name,
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @memberof GetManufacturerDetails
     *
     * @param {string|number} manufacturer Manufacturer Name (string) or Manufacturer ID (number)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetManufacturerDetails(manufacturer: string | number): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetManufacturerDetails.d.ts.map