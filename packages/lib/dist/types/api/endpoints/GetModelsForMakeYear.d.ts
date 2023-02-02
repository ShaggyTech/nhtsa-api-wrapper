import type { NhtsaResponse, AtLeastOne } from '../../types';
/**
 * `GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
 * Make whose name is LIKE the Make in the vPIC Dataset.
 *
 * `params.make` is required. It can be a partial, or a full name for more specificity, e.g.,
 * "Harley", "Harley Davidson", etc.
 *
 * A minimum of one of the following are also required (or a combination of both):
 * - `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
 *   docs)
 * - `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
 *   "Vehicle", "Moto", "Low Speed Vehicle", etc.
 *
 * _NOTE:_ This endpoint requires special handling of the params object, such that none of the
 * params are used in the query string and are instead used as part of the URL path for the
 * endpoint. To account for this, we pass the params object to the `createUrl` function as the
 * `path`, after encoding the params object key:values into a url path string.
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {string} params.make - Make name to search
 * @param {(string|number)} [params.modelYear] - A number representing the model year to search
 * (required if !vehicleType)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * (required if !modelYear)
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */
export declare const GetModelsForMakeYear: (params: {
    make: string;
} & AtLeastOne<{
    modelYear?: string | number;
    vehicleType?: string;
}>) => Promise<NhtsaResponse<GetModelsForMakeYearResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeYear endpoint
 *
 * @alias GetModelsForMakeYearResults
 */
export declare type GetModelsForMakeYearResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
//# sourceMappingURL=GetModelsForMakeYear.d.ts.map