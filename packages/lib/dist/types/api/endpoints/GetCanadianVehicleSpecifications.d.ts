import type { NhtsaResponse } from '../../types';
/**
 * `GetCanadianVehicleSpecifications` returns data from the Canadian Vehicle Specifications (CVS).
 * The CVS consists of a database of original vehicle dimensions, used primarily in
 * collision investigation and reconstruction, combined with a search engine.
 *
 * The CVS database is compiled annually by the Collision Investigation and Research Division of
 * Transport Canada. Visit official
 * [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
 * page for more details.
 *
 * `params.year` is the only required query parameter, all others are optional but will still be included
 * in the query string as blank values even if not provided by the user. See below Note for more
 * details.
 *
 * _NOTE:_ This endpoint does not like missing query keys and will return a 404 error if any of
 * them are omitted from the query string. Therefore, we must set default values to empty strings
 * for any query keys that are not provided by the user. This means keys not provided by user will
 * always show up as "something=" in the query string. `year` is the only key user must provide,
 * no default value is set for it so that an error will be thrown if not provided by user.
 *
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} params.year - Model year of the vehicle - year >= 1971
 * @param {string} [params.make=''] - Vehicle's make, like "Honda", "Toyota", etc...
 * @param {string} [params.model=''] - Vehicle's model, like "Pilot", "Focus". Can also include
 * some other elements like Body Type, Engine Model/size, etc...
 * @param {string} [params.units=''] - "Metric" (default), or "US" for standard units
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults> | string>)} - Api
 * Response `object` -or- url `string` if `doFetch = false`
 */
export declare const GetCanadianVehicleSpecifications: (params: {
    year: string | number;
    make?: string;
    model?: string;
    units?: string;
}, doFetch?: boolean) => Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetCanadianVehicleSpecifications endpoint
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