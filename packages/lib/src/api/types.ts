/**
 * @module api/types
 * @category Types
 */

export * from './products/types'
export * from './safetyRatings/types'
export * from './vpic/endpoints/types'

export type { CreateUrlOptions } from './useNHTSA'

export type ApiTypes =
  | 'vpic'
  | 'safetyRatings'
  | 'recalls'
  | 'complaints'
  | 'products'
  | 'cssiStation'

/**
 * Response data returned from the NHTSA APIs.
 *
 * The end user should not have to worry about this type. It is used internally for all of the api
 * functions in this package.
 *
 * There is a slight difference between all of the NHTSA API responses. As an example:
 * - The `vpic` response data has a `Results` key
 * - The `recalls` response data has a `results` key and no `SearchCriteria` key.
 *
 * In any case, either `Results` or `results` key will be an array of objects of type "ResultsType"
 *
 * There are several keys points to note:
 * - This type will default to `vpic` if no `ApiType` is provided as this was the orginal intended
 *   usage of this package.
 * - If using the other APIs (recalls, safety ratings, complaints, etc.), you must provide the
 *   relevant `ApiType` to get the correct intelisense typing for the response.
 * - If using the `products` API, you must provide the `ApiType` of `products`, etc.
 *
 * @example
 * ```ts
 * // This will default to the `vpic` response type
 * NhtsaResponse<DecodeVinResults>
 *
 * // This will correctly type the `recalls` api response
 * NhtsaResponse<RecallsResults, 'recalls'>
 * ```
 */
export type NhtsaResponse<
  ResultsType,
  ApiType extends ApiTypes = 'vpic',
> = ApiType extends 'vpic'
  ? {
      /** The number of items returned in the Results object. Will = 0 if no Results */
      Count: number
      /** A message describing the Results. If Count is 0 check the Message for helpful info */
      Message: string
      /** An array of objects of type 'ResultsType', specific to each individual API endpoint. */
      Results: Array<ResultsType>
      /** Search terms (VIN, WMI, etc) used in the request URL. */
      SearchCriteria: string | null
    }
  : ApiType extends 'recalls'
  ? {
      /** The number of items returned in the Results object. Will = 0 if no results */
      Count: number
      /** A message describing the results. If Count is 0 check the Message for helpful info */
      Message: string
      /** An array of objects of type 'ResultsType', specific to each individual API endpoint. */
      Results: Array<ResultsType>
    }
  : ApiType extends 'safetyRatings'
  ? {
      /** The number of items returned in the Results object. Will = 0 if no Results */
      Count: number
      /** A message describing the Results. If Count is 0 check the Message for helpful info */
      Message: string
      /** An array of objects of type 'ResultsType', specific to each individual API endpoint. */
      Results: Array<ResultsType>
    }
  : ApiType extends 'complaints' | 'products'
  ? {
      /** The number of items returned in the Results object. Will = 0 if no results */
      Count: number
      /** A message describing the results. If count is 0 check the message for helpful info */
      Message: string
      /** An array of objects of type 'ResultsType', specific to each individual API endpoint. */
      Results: Array<ResultsType>
    }
  : ApiType extends 'cssiStation'
  ? {
      /** Starting latitude (user's location) */
      StartLatitude: number
      /** Starting longitude (user's location) */
      StartLongitude: number
      /** The number of items returned in the Results object. Will = 0 if no results */
      Count: number
      /** A message describing the Results. If Count is 0 check the Message for helpful info */
      Message: string
      /** An array of objects of type 'ResultsType', specific to each individual API endpoint. */
      Results: Array<ResultsType>
    }
  : never

export {}
