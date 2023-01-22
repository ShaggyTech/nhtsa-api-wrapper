/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  getTypeof,
  makeQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

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

export const GetCanadianVehicleSpecifications = async (params: {
  year: number | string
  make?: string
  model?: string
  units?: string
}): Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>> => {
  const action = 'GetCanadianVehicleSpecifications'

  /* Runtime type guards against user provided args*/
  const typeofParams = getTypeof(params)
  if (!params || (params && typeofParams !== 'object')) {
    return rejectWithError(
      `${action}, "params" argument is required and must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofYear = getTypeof(params?.year)
  if (!params?.year || typeofYear !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.year" argument is required and must be of type number or string, got: <${typeofYear}> ${params.year}`
    )
  }

  const typeofMake = getTypeof(params.make)
  if (params?.make && typeofMake !== 'string') {
    return rejectWithError(
      `${action}, "params.make" argument must be of type string, got: <${typeofMake}> ${params.make}`
    )
  }

  const typeofModel = getTypeof(params.model)
  if (params.model && typeofModel !== 'string') {
    return rejectWithError(
      `${action}, "params.model" argument must be of type string, got: <${typeofModel}> ${params.model}`
    )
  }

  const typeofUnits = getTypeof(params.units)
  if (params.units && typeofUnits !== 'string') {
    return rejectWithError(
      `${action}, "params.units" argument must be of type string, got: <${typeofUnits}> ${params.units}`
    )
  }

  /* Set default query parameters to empty strings if not provided by the user */
  const make = params.make || ''
  const model = params.model || ''
  const units = params.units || ''

  const _params = {
    year: params.year,
    make,
    model,
    units,
  }

  /*
   * Build the query string to be appended to the URL
   *
   * Additionally, sets the allowEmptyStringValues option (2nd argument) to true because
   * this API action will return a 404 error if any of the query parameters are missing from the query string.
   * Empty values are allowed so empty strings are inserted as default values unless provided by user
   * This is the only API action with this behaviour ("year" is the only param the user must provide).
   */
  const queryString = await makeQueryString(_params, true).catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${queryString}`

  /* Return the result */
  const response = await useFetch()
    .get<GetCanadianVehicleSpecificationsResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))

  return response
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetCanadianVehicleSpecifications endpoint
 *
 * @alias GetCanadianVehicleSpecificationsResults
 */
export type GetCanadianVehicleSpecificationsResults = {
  Specs: Array<{
    Name:
      | 'Make'
      | 'Model'
      | 'MYR'
      | 'OL'
      | 'OW'
      | 'OH'
      | 'WB'
      | 'CW'
      | 'A'
      | 'B'
      | 'C'
      | 'D'
      | 'E'
      | 'F'
      | 'G'
      | 'TWF'
      | 'TWR'
      | 'WD'
    Value: string
  }>
}
