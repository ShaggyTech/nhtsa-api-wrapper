import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class DecodeWMI
 * @extends {module:api/Fetch.Fetch}
 */
export declare class DecodeWMI extends Fetch {
    /**
     * This provides information on the World Manufacturer Identifier for a specific WMI code.
     * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
     *   representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
     *
     * @async
     * @memberof DecodeWMI
     *
     * @param {string} WMI World Manufacturer Identifier
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    DecodeWMI(WMI: string): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=DecodeWMI.d.ts.map