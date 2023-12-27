/**
 * @module api/complaints
 * @category API - Complaints
 */
import { products, useNHTSA } from '@/api'
import {
  catchInvalidArguments,
  encodeQueryStringParams,
  rejectWithError,
} from '@/utils'
import type {
  NhtsaResponse,
  NoExtraProperties,
  ProductsResultsByVariant,
  ProductsResultsData,
  QueryStringParamsEncoded,
} from '@/types'

/**
 * # Complaints API
 *
 * ::: tip :bulb: More Information
 * See: [Complaints Documentation] /guide/complaints
 * :::
 *
 * You can use `complaints()` as a thin wrapper for the `NHTSA Complaints API` to get complaints
 * based on a vehicle's `modelYear`, `make`, and `model` or a specific `odiNumber`.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Complaints API.
 *
 * From the [Official Documentation](https://www.nhtsa.gov/nhtsa-datasets-and-apis#complaints):
 *
 * > Complaint information entered into NHTSA’s Office of Defects Investigation (ODI) vehicle
 * owner's complaint database is used with other data sources to identify safety issues that warrant
 * investigation and to determine if a safety-related defect trend exists. Complaint information is
 * also analyzed to monitor existing recalls for proper scope and adequacy.
 *
 * ## Options
 *
 * The Complaints API uses a path and query string to get different data. This function uses the
 * options passed to build the correct url path and query string.
 *
 * Valid `options` are:
 *
 * - `modelYear` - Model Year of the vehicle to search for
 * - `make` - Make of the vehicle to search for
 * - `model` - Model of the vehicle to search for
 * - `odiNumber` - ODI Number to search for
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Valid `options` combinations:
 *
 * These use the `Products API` to get model years, makes, and models available in the
 * `Complaints API` dataset:
 * - `complaints()`
 * - `complaints({})`
 * - `complaints({ modelYear })`
 * - `complaints({ modelYear, make })`
 *
 * These use the `Complaints API` to get the complaints data for a specific vehicle or ODI Number:
 * - `complaints({ modelYear, make, model })`
 * - `complaints({ odiNumber })`
 *
 * Real Example URLs - for options that use the `Products API`:
 * - https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r
 * - https://api.nhtsa.gov/products/vehicle/makes?modelYear=2020&issueType=c
 * - https://api.nhtsa.gov/products/vehicle/models?modelYear=2020&make=Volkswagen&issueType=c
 *
 * Real Example URLs - for options that use the `Complaints API`:
 * - https://api.nhtsa.gov/complaints/complaintsByVehicle?modelYear=2020&make=Volkswagen&model=Jetta
 * - https://api.nhtsa.gov/complaints/odiNumber?odiNumber=11549247
 *
 * Note that `format=json` will always be appended to the query string when using this package, even
 * though it is not required by the Complaints and Products APIs.
 *
 * Returned data will be structured as `{ Count, Message, Results }` for any combination of options.
 *
 * See the `Returns` section below for more details.
 *
 * ### Some Notes on `odiNumber`
 *
 * The `odiNumber` is found in `Results[x].odiNumber` with options
 * `{ modelYear, make, model }` or `{ odiNumber }`.
 *
 * - If you already know the `odiNumber` you can pass `{ odiNumber }` and directly get
 *   complaint information for that specific ODI number.
 * - If you don't have an `odiNumber` number, you can pass `{ modelYear, make, model }` options
 *   to get the `odiNumber`s for that particular vehicle.
 * - The other paths are used if you want to get the `modelYear`s, `make`s, or `model`s
 *    availaible in the Complaints API dataset, so you can then use that information to get the
 *   `odiNumber`s for that particular vehicle.
 *
 * ## Rules
 *
 * There are several rules to follow when using this API or you will get a network error response
 * from the NHTSA API.
 *
 * 1. If you provide a `odiNumber` then you cannot provide any other options.
 * 2. If you provide a `make` then you must also provide a `modelYear`.
 * 3. If you provide a `model` then you must also provide a `make` and `modelYear`.
 *
 * FYI: Rules #1-3 will return a 400 Bad Request error from the NHTSA API if you break them.
 *
 * Consequences of breaking the rules:
 *
 * - Rule #1 - if passing `odiNumber` and any other valid combination of options, this function
 *   will silently ignore the other options and only use the `odiNumber`. It will _not_ throw
 *   an `Error` but you will get Typescript errors.
 * - Rules #2 and #3 - this function will throw an `Error` as a fail safe to prevent you from
 *   getting a network error from the NHTSA API.
 *
 * There will also be TypeScript errors if you pass invalid options or invalid combinations of
 * options.
 *
 * To clarify, this function will `throw Error`s in the following cases:
 *
 * - If you pass options not listed above.
 * - If you pass an invalid combination of options.
 * - If you pass a valid combination of options but include options not listed above.
 *
 * ## Usage
 *
 * The following describes in more detail the use of the different options and the paths they use.
 *
 * ### Get All Model Years
 *
 * Uses the `Products API` to get all available model years in the complaints dataset.
 *
 * If you pass no arguments, an empty object `{}`, `undefined`, or `true` as the first argument, the
 * path and query string: `/products/vehicle/modelYears?issueType=c` will be used.
 *
 * Example: Get a list of available model years in the complaints dataset
 * ```js
 * await complaints().then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2024", "2023", "2022", etc
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await complaints(false)
 * console.log(url) // "https://api.nhtsa.gov/products/vehicle/modelYears?issueType=c&format=json"
 * ```
 *
 * ### Get Makes for Model Year
 *
 * Uses the `Products API` to get all available makes in the complaints dataset for a specific
 * `modelYear`.
 *
 * If you pass a `modelYear` as the only option, the path and query string
 * `/products/vehicle/makes?modelYear={modelYear}&issueType=c` will be used.
 *
 * Example: Get a list of available makes for the 2013 model year
 * ```js
 * await complaints({ modelYear: 2013 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "ACURA", "AUDI", "BENTLEY", etc.
 *     console.log(result.make) // "JETTA", "ACCORD", etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await complaints({ modelYear: 2013 }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/makes?modelYear=2013&issueType=c&format=json"
 * ```
 *
 * If you need to get all available model years, first call the function with no arguments.
 *
 * ### Get Models for Make
 *
 * Uses the `Products API` to get all available models in the complaints dataset for a specific
 * `modelYear` and `make`.
 *
 * If you pass a `modelYear` and `make` as the only options, the path and query string
 * `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=c` will be used.
 *
 * Example: Get a list of available models for a 2013 Honda
 * ```js
 * await complaints({ modelYear: 2013, make: 'Honda' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2013"
 *     console.log(result.make) // "HONDA"
 *     console.log(result.model) // "ACCORD", "CIVIC", etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await complaints({ modelYear: 2013, make: 'Honda' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/models?modelYear=2013&make=Honda&issueType=c&format=json"
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
 *
 * ### Get Complaints for Year, Make, and Model
 *
 * Uses the `Complaints API` to get all available complaints for a specific `modelYear`, `make`, and
 * `model`.
 *
 * If you pass a `modelYear`, `make`, and `model` as the only options, the path and query string
 * `/complaints/complaintsByVehicle?&modelYear={modelYear}&make={make}&model={model}` will be used.
 *
 * Example: Get as list of complaints for a 2013 Honda Accord
 * ```js
 * await complaints({ modelYear: 2013, make: 'Honda', model: 'Accord' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.odiNumber) // 11549247, 11483831, etc.
 *     console.log(result.crash) // true or false
 *     console.log(result.fire) // true or false
 *     console.log(result.numberOfInjuries) // 0, 1, 2, etc.
 *     console.log(result.numberOfDeaths) // 0, 1, 2, etc.
 *     console.log(result.dateOfIncident) // "01/18/2023", "11/18/2015", etc.
 *     console.log(result.vin) // "1V2LR2CA6LC", "1V2TR2CA1LC", etc.
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await complaints({ modelYear: 2013, make: 'Honda', model: 'Accord' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/complaints/complaintsByVehicle?modelYear=2013&make=Honda&model=Accord&format=json"
 * ```
 *
 * Note that there will be multiple objects in the `Results[]`, each with a different
 * `odiNumber`, depending on how many complaints there are for that year, make, and model
 * combination.
 *
 * You can use the `odiNumber` as `options.odiNumber` to get a single complaint based on the
 * ODI Number. It will return the exact same properties, but only for that specific ODI Number.
 *
 * ### Get Recall Information for Campaign Number
 *
 * Uses the `Complaints API` to get recall information for a specific `odiNumber`.
 *
 * If you pass `options.odiNumber`, the path and query string
 * `/complaints/odiNumber?odiNumber={odiNumber}` will be used.
 *
 * All other options will be ignored if you provide `options.odiNumber`.
 *
 * There will likely be only one object in the `Results[]`, but you should always check that this is
 * the case before dismissing the possibility of multiple objects in the `Results[]`.
 *
 * Example: Get complaint information for a specific ODI Number
 * ```js
 * await complaints({  odiNumber: 11549247 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.odiNumber) // 11549247, 11483831, etc.
 *     console.log(result.crash) // true or false
 *     console.log(result.fire) // true or false
 *     console.log(result.numberOfInjuries) // 0, 1, 2, etc.
 *     console.log(result.numberOfDeaths) // 0, 1, 2, etc.
 *     console.log(result.dateOfIncident) // "01/18/2023", "11/18/2015", etc.
 *     console.log(result.vin) // "1V2LR2CA6LC", "1V2TR2CA1LC", etc.
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await complaints({ odiNumber: 11549247 }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/complaints/odiNumber?odiNumber=11549247&format=json"
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be stuctured as `{ Count, Message, Results }`.
 *
 * The direct response from the Complaints API is an object with the following properties:
 * - `count` - The number of results returned
 * - `message` - A message from the NHTSA API
 * - `results` - An array of objects containing the response data
 *
 * In order to keep parity with the other APIs and make it easier to type the responses, this
 * function will return the data as an object with all lowercase property names converted to
 * uppercase:
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 *
 * The `Results[]` will be typed based on the `options` passed to the function.
 *
 * - `{}`, `{ modelYear }`, and `{ modelYear, make }` will be typed as `ProductsResultsData`
 *   properties.
 * - `{ modelYear, make, model }` and `{ odiNumber }` will be typed as `ComplaintsResultsData`
 *   properties.
 *
 * - See types `ProductsResultsData` and `ComplaintsResultsData` for a list of all possible
 *   properties.
 * - See type `ComplaintsResultsByVariant` for clarity on which properties will be included based on
 *   the `options` passed.
 *
 * @param [options] - Object of options, fetch data from the API depending on options passed
 * @param [options.modelYear] - Model Year of the vehicle to search for
 * @param [options.make] - Make of the vehicle to search for
 * @param [options.model] - Model of the vehicle to search for
 * @param [options.odiNumber] - ODI Number to search for
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * (default: `true`)
 * @returns - Parsed API response `object` -or- url `string` if `doFetch = false`
 */
function complaints<T extends NoInvalidOptions<ComplaintsOptions>>(
  options: NoInvalidOptions<T>,
  doFetch?: true
): Promise<ComplaintsResponseByOptions<T>>
function complaints<T extends NoInvalidOptions<ComplaintsOptions>>(
  options: NoInvalidOptions<T> | undefined,
  doFetch: false
): Promise<string>
function complaints(
  options?: undefined,
  doFetch?: true
): Promise<ComplaintsResponseByVariant<'getModelYears'>>
function complaints(
  doFetch?: true
): Promise<ComplaintsResponseByVariant<'getModelYears'>>
function complaints(doFetch: false): Promise<string>
function complaints<T extends NoInvalidOptions<ComplaintsOptions>>(
  options?: NoInvalidOptions<T> | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function complaints(
  options?: NoInvalidOptions<ComplaintsOptions> | boolean,
  doFetch: boolean = true
): Promise<unknown> {
  const endpointName = 'complaints'

  try {
    let path = ''
    let encodedParams: QueryStringParamsEncoded<ComplaintsOptions> = {}

    if (typeof options === 'boolean') {
      /* If first argument is boolean, it is doFetch */
      doFetch = options
      /* Set options undefined so it will pass argument check below, otherwise invalid type */
      options = undefined
    }

    /* This will also ensure we have an actual object using our custom getTypeof() function */
    catchInvalidArguments({
      args: [
        {
          name: 'options',
          value: options,
          types: ['object'],
          validKeys: ['modelYear', 'make', 'model', 'odiNumber'],
        },
        {
          name: 'modelYear',
          value: options?.modelYear,
          types: ['string', 'number'],
          requiredBy: [
            // order important for user exerience in error messages
            { name: 'model', value: options?.model },
            { name: 'make', value: options?.make },
          ],
        },
        {
          name: 'make',
          value: options?.make,
          types: ['string'],
          requiredBy: [{ name: 'model', value: options?.model }],
        },
        { name: 'model', value: options?.model, types: ['string'] },
        {
          name: 'odiNumber',
          value: options?.odiNumber,
          types: ['string', 'number'],
        },
      ],
    })

    /* options are guaranteed to be an object by now because of catchInvalidArguments() */
    if (options) {
      encodedParams = encodeQueryStringParams(options)
    }

    const { modelYear, make, model, odiNumber } = encodedParams
    const hasVehicle = modelYear && make && model
    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    /*
     * use the Complaints API if odiNumber or full vehicle is passed, ignores vehicle if
     * odiNumber exists
     */
    if (odiNumber || hasVehicle) {
      if (odiNumber) {
        path = `odiNumber`
      } else if (hasVehicle) {
        path = `complaintsByVehicle`
      }

      const params = odiNumber ? { odiNumber } : { modelYear, make, model }

      createCachedUrl({
        apiType: 'complaints',
        endpointName,
        path,
        params,
      })

      if (!doFetch) {
        return getCachedUrl()
      } else {
        return get<ComplaintsResultsData, 'complaints'>()
      }
    }

    /* else use the Products API */
    if (modelYear && make) return products('c', { modelYear, make }, doFetch)
    if (modelYear) return products('c', { modelYear }, doFetch)
    else return products('c', doFetch)
  } catch (error) {
    return rejectWithError(error)
  }
}

export { complaints }

/**
 * These types have to be kept together with the function in the same file.
 *
 * This is so Intellisense will show the full type contents of the return to the end user when they
 * save the results to a variable and then hover over that variable. If these types are moved to
 * another file, Intellisense will only show the type name, not the full type contents for the
 * complaints() NhstaResponse return type.
 *
 * Any type that is used directly in the function overloads and not in this file will cause this.
 * So, theoretically, you could move all of those types here and the others live in their own file,
 * but that would spread the types out and they are only used here and in the tests, so it makes
 * sense to keep them together.
 */

/**
 * All valid options for the `complaints()` function
 */
export type ComplaintsOptionsBase = {
  modelYear?: string | number
  make?: string
  model?: string
  odiNumber?: string | number
}

/**
 * Options to get all available `modelYear`s via the `Products API`.
 *
 * Builds path: `/products/vehicle/modelYears?issueType=c`
 */
export type ComplaintsOptionsEmpty = {
  modelYear?: undefined
  make?: undefined
  model?: undefined
  odiNumber?: undefined
}

/**
 * Options to get all available `make`s for a specific `modelYear` via the `Products API`.
 *
 * Builds path: `/products/vehicle/makes?modelYear={modelYear}&issueType=c`
 */
export type ComplaintsOptionsModelYear = {
  modelYear: string | number
  make?: undefined
  model?: undefined
  odiNumber?: undefined
}

/**
 * Options to get all available `models`s for a specific `modelYear` and `make` via the
 * `Products API`.
 *
 * Builds path: `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=c`
 */
export type ComplaintsOptionsMake = {
  modelYear: string | number
  make: string
  model?: undefined
  odiNumber?: undefined
}

/**
 * Options to get all available complaints for a specific vehicle by `modelYear`, `make`, and
 * `model`.
 *
 * Builds path: `/complaints/complaintsByVehicle?make={make}&model={model}&modelYear={modelYear}`
 */
export type ComplaintsOptionsVehicle = {
  modelYear: string | number
  make: string
  model: string
  odiNumber?: undefined
}

/**
 * Options to get complaints for a specific `odiNumber`.
 *
 * Builds path: `/complaints/odiNumber?odiNumber={odiNumber}`
 */
export type ComplaintsOptionsOdiNumber = {
  odiNumber: string | number
  modelYear?: undefined
  make?: undefined
  model?: undefined
}

/**
 * All valid options combinations for the `complaints()` function
 */
export type ComplaintsOptions =
  | ComplaintsOptionsEmpty
  | ComplaintsOptionsModelYear
  | ComplaintsOptionsMake
  | ComplaintsOptionsVehicle
  | ComplaintsOptionsOdiNumber

/**
 * Ensures only valid options are passed to the `complaints()` function
 */
export type NoInvalidOptions<T extends ComplaintsOptions> = NoExtraProperties<
  ComplaintsOptionsBase,
  T
>

/**
 * Variant names used to type the `Results[]` of the `Complaints API` response based on
 * the `options` passed to the function. `ComplaintsResultsData` will be Pick<>ed based on the
 * the variant name.
 */
export type ComplaintsResultsVariant =
  | 'getModelYears'
  | 'getMakes'
  | 'getModels'
  | 'vehicle'
  | 'odiNumber'
  | 'default'

/**
 * All possible properties and values found in the `Results[]` objects of `Complaints API`.
 */
export type ComplaintsResultsData = {
  odiNumber?: number
  manufacturer?: string
  crash?: boolean
  fire?: boolean
  numberOfInjuries?: string
  numberOfDeaths?: string
  dateOfIncident?: string
  dateComplaintFiled?: string
  vin?: string
  components?: string
  summary?: string
  products: [
    {
      type: string
      productYear: string
      productMake: string
      productModel: string
      manufacturer: string
    },
  ]
}

/*
 * This is typed with Pick<> so the user can see the actual type of the results array objects
 * when they hover over the variable they saved the response to. Anything less verbose hides the
 * results behind a type name and the user has to go look at the type definition to see what the
 * actual keys of the Results array objects are. They could of course just hit ctrl+enter to have
 * auto complete show them the keys, but this is more user friendly.
 */
/**
 * Types the `Results[]` of the `Complaints API` response based on the `ComplaintsResultsVariant`
 * that is passed to this type.
 *
 * Used to type no args `()` or `undefined` as the first arg passed to `complaints()`.
 *
 * Also used in .test-d.ts files to easily match the expected return type of the function.
 */
export type ComplaintsResultsByVariant<
  Variant extends ComplaintsResultsVariant = 'default',
> =
  /* Pick<> ComplaintsData based on Variant string */
  Variant extends 'getModelYears'
    ? /* Path /products/vehicle/modelYears?issueType=r / */
      ProductsResultsByVariant<'getModelYears'>
    : Variant extends 'getMakes'
    ? /* Path /products/vehicle/makes?modelYear={modelYear}&issueType=r */
      ProductsResultsByVariant<'getMakes'>
    : Variant extends 'getModels'
    ? /* Path /products/vehicle/models?modelYear={modelYear}&make={make}&issueType=r */
      ProductsResultsByVariant<'getModels'>
    : Variant extends 'vehicle'
    ? /* Path /complaints/complaintsByVehicle?make={make}&model={model}&modelYear={modelYear} */ {
        [K in keyof ComplaintsResultsData]-?: ComplaintsResultsData[K]
      }
    : Variant extends 'odiNumber'
    ? /* Path /complaints/odiNumber?odiNumber={odiNumber} - all defined */ {
        [K in keyof ComplaintsResultsData]-?: ComplaintsResultsData[K]
      }
    : /* fallback default value - all optional properties */
      ComplaintsResultsData

/**
 * Types the `Results[]` of the `Complaints API` response based on the `options` passed
 * to the function.
 */
export type ComplaintsResultsByOptions<Options extends ComplaintsOptions> =
  Options extends ComplaintsOptionsModelYear
    ? ComplaintsResultsByVariant<'getMakes'>
    : Options extends ComplaintsOptionsMake
    ? ComplaintsResultsByVariant<'getModels'>
    : Options extends ComplaintsOptionsVehicle
    ? ComplaintsResultsByVariant<'vehicle'>
    : Options extends ComplaintsOptionsOdiNumber
    ? ComplaintsResultsByVariant<'odiNumber'>
    : Options extends ComplaintsOptionsEmpty
    ? ComplaintsResultsByVariant<'getModelYears'>
    : ComplaintsResultsByVariant

/**
 * Types the `complaints()` function return based on the type of `ComplaintsOptions` passed to
 * this type, inferred from the `options` passed to the function.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `options` passed to the function.
 */
export type ComplaintsResponseByOptions<Options extends ComplaintsOptions> =
  Options extends ComplaintsOptionsVehicle | ComplaintsOptionsOdiNumber
    ? NhtsaResponse<ComplaintsResultsByOptions<Options>, 'complaints'>
    : NhtsaResponse<ComplaintsResultsByOptions<Options>, 'products'>

/**
 * Types the `complaints()` function return based on the `variant` passed to this type.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `Variant` passed to this type.
 */
export type ComplaintsResponseByVariant<
  Variant extends ComplaintsResultsVariant = 'default',
> = NhtsaResponse<ComplaintsResultsByVariant<Variant>, 'complaints'>

/**
 * This is the generic type of the parsed API response and is only meant to be a fallback type.
 *
 * Types the `complaints()` function with `ComplaintsResultsData` and/or `ProductsResultsData` as the
 * `Results[]` objects.
 */
export type ComplaintsResponse =
  | NhtsaResponse<ComplaintsResultsData, 'complaints'>
  | NhtsaResponse<ProductsResultsData, 'products'>
