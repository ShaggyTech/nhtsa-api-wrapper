import type { NhtsaResponse } from '../../types';
/**
 * `GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
 * vPIC dataset. Information on the name, description and the type of the variable is provided.
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults>>)} - Api Response object
 */
export declare const GetVehicleVariableList: () => Promise<NhtsaResponse<GetVehicleVariableListResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableList endpoint
 *
 * @alias GetVehicleVariableListResults
 */
export declare type GetVehicleVariableListResults = {
    DataType: 'string' | 'int' | 'decimal' | 'lookup';
    Description: string;
    GroupName: string | null;
    ID: number;
    Name: string;
};
//# sourceMappingURL=GetVehicleVariableList.d.ts.map