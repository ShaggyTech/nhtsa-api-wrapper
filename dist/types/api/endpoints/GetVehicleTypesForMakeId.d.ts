import type { NhtsaResponse } from '../../types';
/**
 * GetVehicleTypesForMakeId returns the Models in the vPIC dataset for a specified Make
 * whose ID is equal to the `makeID` in the vPIC Dataset.
 *
 * @async
 * @param {(number|string)} makeId - Vehicle make ID (number)
 * @returns {(Promise<NhtsaResponse<GetVehicleTypesForMakeIdResults>>)} - Api Response object
 */
export declare const GetVehicleTypesForMakeId: (makeId: number | string) => Promise<NhtsaResponse<GetVehicleTypesForMakeIdResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleTypesForMakeId endpoint
 *
 * @alias GetVehicleTypesForMakeIdResults
 */
export declare type GetVehicleTypesForMakeIdResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
