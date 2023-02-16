import type { NhtsaResponse } from '../../types';
/**
 * `GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
 * vPIC dataset. Information on the name, description and the type of the variable is provided.
 *
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export declare const GetVehicleVariableList: (doFetch?: boolean) => Promise<NhtsaResponse<GetVehicleVariableListResults> | string>;
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