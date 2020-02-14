import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetCanadianVehicleSpecifications
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetCanadianVehicleSpecifications extends Fetch {
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year and Make whose name is LIKE the Make in vPIC Dataset.
     * - `params.year` is the only query parameter the user must provide.
     * - `params.makeId` is a number
     * - `params.modelYear` is a number (greater than 1995)
     * - `params.vehicleType` can be a partial name, or a full name for more specificity
     *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
     * This API action will return a 404 html error if any of the query parameters in params
     *   are missing from the query string. This is the only API action with this behaviour. Therefore,
     *   parameters are inserted into the query string as empty strings, if not provided by the user.
     *
     * @async
     * @memberof GetCanadianVehicleSpecifications
     *
     * @param {object} params Query Search Parameters to append to the URL
     * @param {number} params.year Model year of the vehicle (required) - Number, >= 1971
     * @param {string} [params.make] Vehicle's make, like "Honda", "Toyota", etc...
     * @param {string} [params.model] Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
     * @param {string} [params.units] "Metric" (default), or "US" for United States customary units
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetCanadianVehicleSpecifications(params?: {
        year: number;
        make?: string;
        model?: string;
        units?: string;
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetCanadianVehicleSpecifications.d.ts.map