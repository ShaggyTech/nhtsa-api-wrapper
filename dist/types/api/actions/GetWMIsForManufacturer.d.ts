import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetWMIsForManufacturer
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetWMIsForManufacturer extends Fetch {
    /**
     * Provides information on the all World Manufacturer Identifier (WMI) for a specified `manufacturer`.
     * - Only WMIs registered in vPICList are displayed.
     *
     * @async
     * @memberof GetWMIsForManufacturer
     *
     * @param {string|number} manufacturer Manufacturer Name (string) or Manufacturer ID (number)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetWMIsForManufacturer(manufacturer: string): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetWMIsForManufacturer.d.ts.map