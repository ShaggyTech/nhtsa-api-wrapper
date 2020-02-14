import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetVehicleVariableValuesList
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetVehicleVariableValuesList extends Fetch {
    /**
     * This provides a list of all the accepted values for a given variable that are stored in vPIC dataset.
     *
     * This applies to only "Look up" type of variables.
     * - `variableValue` can either be a:
     *   - Variable Name ("battery type" in first example, please use full name, not just part of it),
     *   - or Variable ID ("2" in second example).
     *
     * @async
     * @memberof GetVehicleVariableValuesList
     *
     * @param {string|number} variableValue The variable you want to get a values list of
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetVehicleVariableValuesList(variableValue: string | number): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetVehicleVariableValuesList.d.ts.map