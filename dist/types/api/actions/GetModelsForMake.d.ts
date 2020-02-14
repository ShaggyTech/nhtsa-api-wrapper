import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetModelsForMake
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetModelsForMake extends Fetch {
    /**
     * This returns the Models in the vPIC dataset for a specified Make whose name is LIKE the Make in vPIC Dataset.
     * - `makeName` can be a partial, or a full for more specificity (e.g., "Harley", "Harley Davidson", etc.)
     *
     * @async
     * @memberof GetModelsForMake
     *
     * @param {string} makeName Vehicle make name (string)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetModelsForMake(makeName: string): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetModelsForMake.d.ts.map