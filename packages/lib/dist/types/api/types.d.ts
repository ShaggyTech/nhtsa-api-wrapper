export * from './endpoints/types';
/**
 * Response data returned from the NHSTA API.
 *
 * - `Results` key will be an array of objects of type "T"
 */
export declare type NhtsaResponse<T> = {
    /** The number of items returned in the Results object. If no Results, will be 0 */
    Count: number;
    /** A message describing the Results. If Count is 0 check the Message for helpful info */
    Message: string;
    /** An array of objects returned by NHSTA, specific to each individual API Action. */
    Results: Array<T>;
    /** Search terms (VIN, WMI, etc) used in the request URL. */
    SearchCriteria: string;
};
export {};
//# sourceMappingURL=types.d.ts.map