import type { NhtsaResponse } from '@/types';
/**
 * `GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
 * (`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.
 *
 * `typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
 * "Low Speed Vehicle", etc.
 *
 * @param {string} typeName - A partial or full vehicle type name
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export declare const GetMakesForVehicleType: (typeName: string, doFetch?: boolean) => Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetMakesForVehicleType endpoint
 *
 * @alias GetMakesForVehicleTypeResults
 */
export declare type GetMakesForVehicleTypeResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
//# sourceMappingURL=GetMakesForVehicleType.d.ts.map