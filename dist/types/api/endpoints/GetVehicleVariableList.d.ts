import type { NhtsaResponse } from '../../types';
/**
  /**
   * GetVehicleVariableList provides a list of all the Vehicle related variables that are in the vPIC dataset.
   * - Information on the name, description and the type of the variable is provided.
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults>>)} - Api Response object
 */
export declare const GetVehicleVariableList: () => Promise<NhtsaResponse<GetVehicleVariableListResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleVariableList endpoint
 *
 * @alias GetVehicleVariableListResults
 */
export declare type GetVehicleVariableListResults = {
    DataType: 'decimal' | 'int' | 'lookup' | 'string';
    Description: string;
    GroupName: string | null;
    ID: number;
    Name: string;
};
