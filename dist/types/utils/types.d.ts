/**
 * Options argument object used with isValidType().
 *
 * @memberof module:utils/isValidType
 */
export declare type IsValidTypeOptions = {
    /** What type are you testing for? */
    type: string;
    /** The value you are testing. */
    value: any;
};
/**
 * Object containing Key:Value pairs to build the URL query string with.
 * - Parameter values may be either strings or numbers.
 *
 * @memberof module:utils/makeQueryString
 * @example
 * {
 * format: 'json',
 * modelYear: 2009,
 * whatever: 'something'
 * }
 *
 */
export declare type QueryStringParameters = {
    [propName: string]: string | number | undefined;
};
//# sourceMappingURL=types.d.ts.map