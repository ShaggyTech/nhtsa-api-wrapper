import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetEquipmentPlantCodes
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetEquipmentPlantCodes extends Fetch {
    /**
     * Returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
     * - `params.year`:
     *   - Only years >= 2016 are supported
     * - `params.equipmentType`:
     *   - 1 (Tires)
     *   - 3 (Brake Hoses)
     *   - 13 (Glazing)
     *   - 16 (Retread)
     * - `params.reportType`:
     *   - 'New' (The Equipment Plant Code was assigned during the selected year)
     *   - 'Updated' (The Equipment Plant data was modified during the selected year)
     *   - 'Closed' (The Equipment Plant is no longer Active)
     *   - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed))
     *
     * @async
     * @memberof GetEquipmentPlantCodes
     *
     * @param {object} params Query Search Parameters to append to the URL
     * @param {number} params.year Model year of the vehicle - Number, >= 2016
     * @param {string} params.equipmentType number equal to 1, 3, 13, or 16
     * @param {string} params.reportType 'New', 'Updated', 'Closed', or 'All'
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetEquipmentPlantCodes(params?: {
        year: number;
        equipmentType: 1 | 3 | 13 | 16;
        reportType: 'New' | 'Updated' | 'Closed' | 'All';
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetEquipmentPlantCodes.d.ts.map