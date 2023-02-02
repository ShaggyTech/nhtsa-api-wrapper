import type { NhtsaResponse } from '../../types';
/**
 * `GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
 * that are stored in the vPIC dataset.
 *
 * If `variableValue` is a string, it must use full name, not just part of it, e.g.,
 * "Battery Type", not "Battery"
 *
 * `variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.
 *
 * @async
 * @param {(string|number)} variableValue - The variable you want to get a values list of
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>)} - Api Response object
 */
export declare const GetVehicleVariableValuesList: (variableValue: number | string) => Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableValuesList endpoint
 *
 * @alias GetVehicleVariableValuesListResults
 */
export declare type GetVehicleVariableValuesListResults = {
    ElementName: string;
    Id: number;
    Name: string;
};
//# sourceMappingURL=GetVehicleVariableValuesList.d.ts.map