/**
 * @module api/actions/GetEquipmentPlantCodes
 * @category Actions
 * @description GetEquipmentPlantCodes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetEquipmentPlantCodes](module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html)
 * >
 * > **Types**
 * > - Type: [GetEquipmentPlantCodesResponse](#GetEquipmentPlantCodesResponse)
 * > - Type: [GetEquipmentPlantCodesResults](#GetEquipmentPlantCodesResults)
 *
 */
import { Fetch, FetchConfig, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export declare class GetEquipmentPlantCodes extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * Returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
     *
     * `params.year`:
     *  - Only years >= 2016 are supported
     *
     * `params.equipmentType`:
     *  - 1 (Tires)
     *  - 3 (Brake Hoses)
     *  - 13 (Glazing)
     *  - 16 (Retread)
     *
     * `params.reportType`:
     *  - 'New' (The Equipment Plant Code was assigned during the selected year).
     *  - 'Updated' (The Equipment Plant data was modified during the selected year).
     *  - 'Closed' (The Equipment Plant is no longer Active).
     *  - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed)).
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
     * @param {number} params.equipmentType - Number equal to 1, 3, 13, or 16.
     * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All'.
     * @returns {(Promise<GetEquipmentPlantCodesResponse>)} Api Response object.
     */
    GetEquipmentPlantCodes(params: {
        year: number;
        equipmentType: 1 | 3 | 13 | 16;
        reportType: 'New' | 'Updated' | 'Closed' | 'All';
    }): Promise<GetEquipmentPlantCodesResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetEquipmentPlantCodesResponse}.Results' array.
 *
 * @memberof module:api/actions/GetEquipmentPlantCodes
 * @alias GetEquipmentPlantCodesResults
 */
export declare type GetEquipmentPlantCodesResults = {
    Address: string;
    City: string;
    Country: string;
    DOTCode: string;
    Name: string;
    OldDotCode: string;
    PostalCode: string;
    StateProvince: string;
    Status: string;
};
/**
 * Type representing the complete response returned by the GetEquipmentPlantCodes API Action.
 *
 * @memberof module:api/actions/GetEquipmentPlantCodes
 * @alias GetEquipmentPlantCodesResponse
 */
export declare type GetEquipmentPlantCodesResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetEquipmentPlantCodesResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetEquipmentPlantCodes.d.ts.map