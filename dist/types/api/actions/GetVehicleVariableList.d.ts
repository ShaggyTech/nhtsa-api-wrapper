import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetVehicleVariableList
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetVehicleVariableList extends Fetch {
    /**
     * This provides a list of all the Vehicle related variables that are in vPIC dataset.
     * - Information on the name, description and the type of the variable is provided.
     *
     * @async
     * @memberof GetVehicleVariableList
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetVehicleVariableList(): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetVehicleVariableList.d.ts.map