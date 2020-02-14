import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetModelsForMakeId
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetModelsForMakeId extends Fetch {
    /**
     * This returns the Models in the vPIC dataset for a specified Make whose Id is EQUAL the MakeId in vPIC Dataset.
     *
     * @async
     * @memberof GetModelsForMakeId
     *
     * @param {number} makeID Vehicle make ID (number)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetModelsForMakeId(makeID: number): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetModelsForMakeId.d.ts.map