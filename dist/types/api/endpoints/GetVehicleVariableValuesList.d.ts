import type { NhtsaResponse } from '../../types';
/**
 * GetVehicleVariableValuesList provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
 *
 * This only applies to "Look up" type of variables
 * - Search parameter (`variableValue`) can either be a:
 *   - Variable Name (ex: "battery type"; must use full name, not just part of it),
 *   - or Variable ID (number)
 *
 * @async
 * @param {(number|string)} variableValue - The variable you want to get a values list of
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>)} - Api Response object
 */
export declare const GetVehicleVariableValuesList: (variableValue: number | string) => Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleVariableValuesList endpoint
 *
 * @alias GetVehicleVariableValuesListResults
 */
export declare type GetVehicleVariableValuesListResults = {
    ElementName: string;
    Id: number;
    Name: string;
};
