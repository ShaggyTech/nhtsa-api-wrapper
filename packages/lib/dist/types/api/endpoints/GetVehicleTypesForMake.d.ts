import type { NhtsaResponse } from '@/types';
/**
 * `GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
 * whose name is LIKE the make name in the vPIC Dataset.
 *
 * `makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
 * "Mercedes Benz", etc.
 *
 * @param {string} makeName - Name of the vehicle make to search
 * @returns {(Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>)} - Api Response object
 */
export declare const GetVehicleTypesForMake: (makeName: string) => Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMake endpoint
 *
 * @alias GetVehicleTypesForMakeResults
 */
export declare type GetVehicleTypesForMakeResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
//# sourceMappingURL=GetVehicleTypesForMake.d.ts.map