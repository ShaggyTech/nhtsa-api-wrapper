import { NhtsaResponse } from '../index';
import { Fetch } from '../Fetch';
export declare class GetMakesForManufacturerAndYear extends Fetch {
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer,
     * and whose Year From and Year To range cover the specified year.
     * If supplied manufacturer is a number - method will do exact match on Manufacturer's Id.
     * If supplied manufacturer is a string - it will look for manufacturers whose name is LIKE the provided name
     * (it accepts a partial manufacturer name as an input).
     * Multiple results are returned in case of multiple matches.
     * Manufacturer can be idenfitied by Id, a partial name, or a full name
     * (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
     */
    GetMakesForManufacturerAndYear(manufacturer: string | number, params?: {
        year: string | number;
    }): Promise<NhtsaResponse | Error>;
}
//# sourceMappingURL=GetMakesForManufacturerAndYear.d.ts.map