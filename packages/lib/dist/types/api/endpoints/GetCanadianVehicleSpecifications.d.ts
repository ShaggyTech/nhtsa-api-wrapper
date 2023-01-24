import type { NhtsaResponse } from '../../types';
/**
 * The Canadian Vehicle Specifications (CVS) consists of a database of original vehicle dimensions,
 * used primarily in collision investigation and reconstruction, combined with a search engine.
 *
 * The database is compiled annually by the Collision Investigation and Research Division of Transport Canada.
 * Visit official [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
 * page for more details.
 *
 * GetCanadianVehicleSpecifications will return a 404 html error if any of the query parameters in params
 * are missing from the query string. This is the only API action with this behaviour. Therefore,
 * parameters are inserted into the query string with empty string values if that particular param value is not provided by the user.
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} params.year - Model year of the vehicle (required) - year >= 1971
 * @param {string} [params.make] - Vehicle's make, like "Honda", "Toyota", etc...
 * @param {string} [params.model] - Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
 * @param {string} [params.units] - "Metric" (default), or "US" for United States customary units
 * @returns {(Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>>)} - Api Response object
 */
export declare const GetCanadianVehicleSpecifications: (params: {
    year: number | string;
    make?: string;
    model?: string;
    units?: string;
}) => Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetCanadianVehicleSpecifications endpoint
 *
 * @alias GetCanadianVehicleSpecificationsResults
 */
export declare type GetCanadianVehicleSpecificationsResults = {
    Specs: Array<{
        Name: 'Make' | 'Model' | 'MYR' | 'OL' | 'OW' | 'OH' | 'WB' | 'CW' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'TWF' | 'TWR' | 'WD';
        Value: string;
    }>;
};
//# sourceMappingURL=GetCanadianVehicleSpecifications.d.ts.map