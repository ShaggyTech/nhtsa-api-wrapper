/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { IArgToValidate, NhtsaResponse } from '../../types'

/**
 * The Canadian Vehicle Specifications (CVS) consists of a database of original vehicle dimensions,
 * used primarily in collision investigation and reconstruction, combined with a search engine.
 *
 * The database is compiled annually by the Collision Investigation and Research Division of Transport Canada.
 * Visit official [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
 * page for more details.
 *
 * Some NHTSA endpoints will return a 404 error if the query string includes empty values (ex: 'make='), and some endpoints aren't bothered.
 * This endpoint will return a 404 error if any of the query parameters in params are missing from the query string.
 * Therefore, parameters are inserted into the query string with empty string values even if that particular param value is not provided by the user.
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL (required)
 * @param {(string|number)} params.year - Model year of the vehicle (required) - year >= 1971 (required)
 * @param {string} [params.make=''] - Vehicle's make, like "Honda", "Toyota", etc...
 * @param {string} [params.model=''] - Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
 * @param {string} [params.units=''] - "Metric" (default), or "US" for United States customary units
 * @returns {(Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>>)} - Api Response object
 */

export const GetCanadianVehicleSpecifications = async (params: {
  year: string | number
  make?: string
  model?: string
  units?: string
}): Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>> => {
  const endpointName = 'GetCanadianVehicleSpecifications'

  try {
    /* Validate the arguments */
    const args: IArgToValidate[] = [
      { name: 'params', value: params, required: true, types: ['object'] },
      {
        name: 'year',
        value: params.year,
        required: true,
        types: ['string', 'number'],
      },
      { name: 'make', value: params.make, types: ['string'] },
      { name: 'model', value: params.model, types: ['string'] },
      { name: 'units', value: params.units, types: ['string'] },
    ]

    catchInvalidArguments({ args })

    /* Set default query parameters to empty strings if not provided by the user or API will 404 */
    const queryString = createQueryString(
      {
        make: '',
        model: '',
        units: '',
        ...params,
      },
      true
    )
    const url = `${NHTSA_BASE_URL}/${endpointName}/${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
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
