/**
 * @module api/vpic/endpoints/decodeVin
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { NhtsaResponse } from '@/types'

/**
 * # DecodeVin VPIC Endpoint
 *
 * ::: tip :bulb: More Information
 * See: [DecodeVin Documentation](/guide/vpic/endpoints/decode-vin)
 * :::
 *
 * You can use `decodeVin()` as a thin wrapper for the `DecodeVin` VPIC API endpoint.
 *
 * From the [Official Documentation](https://vpic.nhtsa.dot.gov/api/):
 *
 * > The Decode VIN API will decode the VIN and the decoded output will be made available in the
 *   format of Key-value pairs. The IDs (VariableID and ValueID) represent the unique ID associated
 *   with the Variable/Value. In case of text variables, the ValueID is not applicable. Model Year
 *   in the request allows for the decoding to specifically be done in the current, or older
 *   (pre-1980), model year ranges. It is recommended to always send in the model year. This API
 *   also supports partial VIN decoding (VINs that are less than 17 characters). In this case, the
 *   VIN will be decoded partially with the available characters. In case of partial VINs, a "*"
 *   could be used to indicate the unavailable characters. The 9th digit is not necessary.
 *
 * ## Options
 *
 * The DecodeVin endpoint uses a path and/or query string to get different data. This function uses
 * the options passed to build the correct url path and query string.
 *
 * Valid `options` are:
 *
 * - `modelYear` - Model Year of the vehicle to search for (optional)
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Real Example URLs:
 * - https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?format=json
 * - https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?modelYear=2011&format=json
 *
 * Note that `format=json` will always be appended to the query string when using this package as it
 * is required by the VPIC API.
 *
 * Returned data will be structured as `{ Count, Message, Results, SearchCriteria }` for any
 * combination of options.
 *
 * See the `Returns` section below for more details.
 *
 * ## Errors
 *
 * This function will throw Errors in the following use cases:
 *
 * - If you pass options not listed above.
 * - If you pass a valid options but include options not listed above.
 *
 * It will also throw Errors if there are problems with the fetch request or response.
 *
 * ## Usage
 *
 * The following describes in more detail the use of the different options and the paths they use.
 *
 * ### Decode a VIN
 *
 * If you pass only a `vin` and no options, the path and query string `/DecodeVin/{vin}?format=json`
 * will be used.
 *
 * You can provide either a full or partial VIN to decode.
 *
 * Example: Decode a full VIN
 * ```js
 * await decodeVin('WVWVA7AU0KW204939')
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Value) // "Golf R", "2019", "Volkswagen", etc.
 *     console.log(result.ValueId) // "1234", "567", etc.
 *     console.log(result.Variable) // "Model", "Model Year", etc.
 *     console.log(result.VariableId) // 142, 143, etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await decodeVin('5UXWX7C5*BA', false)
 * console.log(url) // "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WVWVA7AU0KW204939?format=json"
 * ```
 *
 * Example: Decode a Partial VIN
 * ```js
 * await decodeVin('5UXWX7C5*BA')
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Value) // "X5", "BMW", etc.
 *     console.log(result.ValueId) // "1234", "567", etc.
 *     console.log(result.Variable) // "Model", "Model Year", etc.
 *     console.log(result.VariableId) // 142, 143, etc.
 *   })
 * })
 * ```
 *
 * ### Decode a VIN with a Specific Model Year
 *
 * Uses the `Products API` to get all available models in the recalls dataset for a specific
 * `modelYear` and `make`.
 *
 * If you pass a `options.modelYear`, the path and query string
 * `/DecodeVin/{vin}?modelYear={modelYear}&format=json` will be used.
 *
 * Example: Decode a VIN with a specific model year
 * ```js
 * await decodeVin('5UXWX7C5*BA', { modelYear: 2011 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Value) // "X5", "BMW", etc.
 *     console.log(result.ValueId) // "1234", "567", etc.
 *     console.log(result.Variable) // "Model", "Model Year", etc.
 *     console.log(result.VariableId) // 142, 143, etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await decodeVin('5UXWX7C5*BA', { modelYear: 2011 }, false)
 * console.log(url)
 * // "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?modelYear=2011&format=json"
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be stuctured as `{ Count, Message, Results, SearchCriteria }`.
 *
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 * - `SearchCriteria` - The search criteria used to get the results
 *
 * The `Results[]` will be typed as `DecodeVinResultsData`.  See that type for a list of all
 * possible properties returned in the `Results` array.
 *
 * @param vin - Vehicle Identification Number (full or partial)
 * @param [options] - Object of Query Search names and values to append to the URL as a query string
 * @param [options.modelYear] - Optional Model Year search parameter
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * (default: `true`)
 * @returns - Parsed API response `object` -or- url `string`
 */
function decodeVin(
  vin: string,
  options?: { modelYear?: string | number },
  doFetch?: true
): Promise<DecodeVinResponse>
function decodeVin(
  vin: string,
  options: { modelYear?: string | number } | undefined,
  doFetch: false
): Promise<string>
function decodeVin(vin: string, doFetch: true): Promise<DecodeVinResponse>
function decodeVin(vin: string, doFetch: false): Promise<string>
function decodeVin(vin: string): Promise<DecodeVinResponse>
function decodeVin(
  vin: string,
  options?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function decodeVin(
  vin: string,
  options?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch = true
): Promise<unknown> {
  const endpointName = 'DecodeVin'

  try {
    if (typeof options === 'boolean') {
      /* If first argument is boolean, it is doFetch */
      doFetch = options
      /* Set options undefined so it will pass argument check below, otherwise invalid type */
      options = undefined
    }

    catchInvalidArguments({
      args: [
        { name: 'vin', value: vin, required: true, types: ['string'] },
        {
          name: 'options',
          value: options,
          types: ['object'],
          validKeys: ['modelYear'],
        },
        {
          name: 'modelYear',
          value: options?.modelYear,
          types: ['string', 'number'],
        },
      ],
    })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path: vin, params: options })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get<DecodeVinResultsData, 'vpic'>()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { decodeVin }

/**
 * Objects in the `Results` array of `DecodeVin` endpoint response.
 */
export type DecodeVinResultsData = {
  Value: string | null
  ValueId: string | null
  Variable: DecodeVinVariable
  VariableId: number
}

/**
 * Possible `DecodeVinResults.Variable` values for DecodeVin endpoint.
 *
 * This type is here to provide a list of possible values manually extracted from an actual API
 * response. There are some things to note:
 * - Names are ordered to mirror actual API response order.
 * - Names have been known to change slightly or be added/removed.
 * - Some listed here could be missing from the API response.
 * - There may be more actual values than listed here.
 *
 * Last Updated: 02/14/2023
 */
export type DecodeVinVariable =
  | 'Suggested VIN'
  | 'Error Code'
  | 'Possible Values'
  | 'Additional Error Text'
  | 'Error Text'
  | 'Vehicle Descriptor'
  | 'Destination Market'
  | 'Make'
  | 'Manufacturer Name'
  | 'Model'
  | 'Model Year'
  | 'Plant City'
  | 'Series'
  | 'Trim'
  | 'Vehicle Type'
  | 'Plant Country'
  | 'Plant Company Name'
  | 'Plant State'
  | 'Trim2'
  | 'Series2'
  | 'Note'
  | 'Base Price ($)'
  | 'Non-Land Use'
  | 'Body Class'
  | 'Doors'
  | 'Windows'
  | 'Wheel Base Type'
  | 'Track Width (inches)'
  | 'Gross Vehicle Weight Rating From'
  | 'Bed Length (inches)'
  | 'Curb Weight (pounds)'
  | 'Wheel Base (inches) From'
  | 'Wheel Base (inches) To'
  | 'Gross Combination Weight Rating From'
  | 'Gross Combination Weight Rating To'
  | 'Gross Vehicle Weight Rating To'
  | 'Bed Type'
  | 'Cab Type'
  | 'Trailer Type Connection'
  | 'Trailer Body Type'
  | 'Trailer Length (feet)'
  | 'Other Trailer Info'
  | 'Number of Wheels'
  | 'Wheel Size Front (inches)'
  | 'Wheel Size Rear (inches)'
  | 'Entertainment System'
  | 'Steering Location'
  | 'Number of Seats'
  | 'Number of Seat Rows'
  | 'Transmission Style'
  | 'Transmission Speeds'
  | 'Drive Type'
  | 'Axles'
  | 'Axle Configuration'
  | 'Brake System Type'
  | 'Brake System Description'
  | 'Other Battery Info'
  | 'Battery Type'
  | 'Number of Battery Cells per Module'
  | 'Battery Current (Amps) From'
  | 'Battery Voltage (Volts) From'
  | 'Battery Energy (kWh) From'
  | 'EV Drive Unit'
  | 'Battery Current (Amps) To'
  | 'Battery Voltage (Volts) To'
  | 'Battery Energy (kWh) To'
  | 'Number of Battery Modules per Pack'
  | 'Number of Battery Packs per Vehicle'
  | 'Charger Level'
  | 'Charger Power (kW)'
  | 'Engine Number of Cylinders'
  | 'Displacement (CC)'
  | 'Displacement (CI)'
  | 'Displacement (L)'
  | 'Engine Stroke Cycles'
  | 'Engine Model'
  | 'Engine Power (kW)'
  | 'Fuel Type - Primary'
  | 'Valve Train Design'
  | 'Engine Configuration'
  | 'Fuel Type - Secondary'
  | 'Fuel Delivery / Fuel Injection Type'
  | 'Engine Brake (hp) From'
  | 'Cooling Type'
  | 'Engine Brake (hp) To'
  | 'Electrification Level'
  | 'Other Engine Info'
  | 'Turbo'
  | 'Top Speed (MPH)'
  | 'Engine Manufacturer'
  | 'Pretensioner'
  | 'Seat Belt Type'
  | 'Other Restraint System Info'
  | 'Curtain Air Bag Locations'
  | 'Seat Cushion Air Bag Locations'
  | 'Front Air Bag Locations'
  | 'Knee Air Bag Locations'
  | 'Side Air Bag Locations'
  | 'Anti-lock Braking System (ABS)'
  | 'Electronic Stability Control (ESC)'
  | 'Traction Control'
  | 'Tire Pressure Monitoring System (TPMS) Type'
  | 'Active Safety System Note'
  | 'Auto-Reverse System for Windows and Sunroofs'
  | 'Automatic Pedestrian Alerting Sound (for Hybrid and EV only)'
  | 'Event Data Recorder (EDR)'
  | 'Keyless Ignition'
  | 'SAE Automation Level From'
  | 'SAE Automation Level To'
  | 'Adaptive Cruise Control (ACC)'
  | 'Crash Imminent Braking (CIB)'
  | 'Blind Spot Warning (BSW)'
  | 'Forward Collision Warning (FCW)'
  | 'Lane Departure Warning (LDW)'
  | 'Lane Keeping Assistance (LKA)'
  | 'Backup Camera'
  | 'Parking Assist'
  | 'Bus Length (feet)'
  | 'Bus Floor Configuration Type'
  | 'Bus Type'
  | 'Other Bus Info'
  | 'Custom Motorcycle Type'
  | 'Motorcycle Suspension Type'
  | 'Motorcycle Chassis Type'
  | 'Other Motorcycle Info'
  | 'Dynamic Brake Support (DBS)'
  | 'Pedestrian Automatic Emergency Braking (PAEB)'
  | 'Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)'
  | 'Daytime Running Light (DRL)'
  | 'Headlamp Light Source'
  | 'Semiautomatic Headlamp Beam Switching'
  | 'Adaptive Driving Beam (ADB)'
  | 'Rear Cross Traffic Alert'
  | 'Rear Automatic Emergency Braking'
  | 'Blind Spot Intervention (BSI)'
  | 'Lane Centering Assistance'
  | (string & Record<string, never>)

export type DecodeVinResponse = NhtsaResponse<DecodeVinResultsData, 'vpic'>
