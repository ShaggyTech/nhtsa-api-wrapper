/**
 * @module api/safetyRatings
 * @category API - Safety Ratings
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { NhtsaResponse, NoExtraProperties } from '@/types'

/**
 * # Safety Ratings API
 *
 * ::: tip :bulb: More Information
 * See: [Safety Ratings Documentation] /guide/safetyRatings
 * :::
 *
 * You can use `safetyRatings()` as a thin wrapper for the `NHTSA Safety Ratings API` to get safety
 * ratings for a vehicle.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Safety Ratings
 * API.
 *
 * From the [Official Documentation](https://www.nhtsa.gov/nhtsa-datasets-and-apis#ratings):
 *
 * > NHTSA's New Car Assessment Program (NCAP) rates vehicles to determine crashworthiness and
 * rollover safety. The safety ratings are gathered during controlled crash and rollover tests
 * conducted at NHTSA research facilities. Vehicles with a rating of five stars indicate the highest
 * safety rating, whereas a one star indicates the lowest rating.
 *
 * ## Options
 *
 * The Safety Ratings API uses the path to represent the query. This function uses the options
 * passed to build the correct url path query.
 *
 * Valid `options` are:
 *
 * - `modelYear` - Model Year of the vehicle to search
 * - `make` - Make of the vehicle to search
 * - `model` - Model of the vehicle to search
 * - `vehicleId` - VehicleId of the vehicle to search
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Valid `options` combinations:
 *
 * - `safetyRatings()`
 * - `safetyRatings({})`
 * - `safetyRatings({ modelYear })`
 * - `safetyRatings({ modelYear, make })`
 * - `safetyRatings({ modelYear, make, model })`
 * - `safetyRatings({ vehicleId })`
 *
 * Real Example URLs, w/trailing slash also ok:
 *
 * - https://api.nhtsa.gov/SafetyRatings
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda/model/accord
 * - https://api.nhtsa.gov/SafetyRatings/vehicleId/7523
 *
 * Note that `?format=json` will always be appended to the URL when using this package, even
 * though it is not required by the SafetyRatings API.
 *
 * Returned data will be structured as `{ Count, Message, Results }` for any combination of options.
 *
 * See the `Returns` section below for more details.
 *
 * ### Some Notes on `vehicleId`
 *
 * The `VehicleId` is found in `response.Results[x].VehicleId` for any path combination.
 *
 * `VehicleId` is included in all cases but will always have a value of `0` except for options
 * `{ modelYear, make, model }` and `{ vehicleId }`, which will return the actual `VehicleId`s.
 *
 * All other options - `{}`, `{ modelYear }` and `{ modelYear, make }` are used to to obtain the
 * `VehicleId` for a particular vehicle and then get the safety ratings for that `VehicleId`.
 *
 * - If you already know the `VehicleId` number you can pass `{ vehicleId: VehicleId }` as the only
 *   option and directly get the safety ratings for that vehicle.
 * - If you don't know the `VehicleId`, you can pass the `modelYear`, `make`, and `model` options to
 *   get the `VehicleId` for that particular vehicle.
 * - The other paths are used if you don't know the `modelYear`, `make`, or `model` and need to
 *   retrieve that information first.
 *
 * ## Rules
 *
 * There are several rules to follow when using this API or you will get a network error response
 * from the NHTSA API.
 *
 * 1. If you provide a `vehicleId` then you cannot provide any other options.
 * 2. If you provide a `make` then you must also provide a `modelYear`.
 * 3. If you provide a `model` then you must also provide a `make` and `modelYear`.
 * 4. You must use PascalCase `SafetyRatings` in the path, it is case sensitive and will return a
 *    403 forbidden error otherwise.
 *
 * FYI: Rules #1-3 will return a 404 Unknown error from the NHTSA API if you break them.
 *
 * Consequences of breaking the rules:
 *
 * - Rule #1 - if passing `vehicleId` and any other valid combination of options, this function will
 *   silently ignore the other options and only use the `vehicleId`. It will not throw an Error but
 *   you will get typescript errors.
 * - Rules #2 and #3 - this function will throw an Error as a fail safe to prevent you from
 *   getting a network error from the NHTSA API.
 * - Rule #4 - enforced by this function internally when fetching the data or returning the URL
 *   string.
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
 * Get a list of all available model years in the `Safety Ratings API` dataset.
 *
 * If you pass no arguments, an empty object `{}`, `undefined`, or `true` as the first argument, the
 * path `/SafetyRatings` will be used.
 *
 * Example: Get a list of all available model years
 * ```js
 * await safetyRatings().then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.ModelYear) // "2024", "2023", "2022", etc
 *     console.log(result.VehicleId) // 0
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await safetyRatings(false)
 * console.log(url) // "https://api.nhtsa.gov/SafetyRatings?format=json"
 * ```
 *
 * ### Get Makes for Model Year
 *
 * Get a list of all available makes in the `Safety Ratings API` for a specific model year.
 *
 * If you pass a `modelYear` as the only option, the path `/modelYear/:modelYear` will be used.
 *
 * Example: Get a list of available makes for the 2013 model year
 * ```js
 * await safetyRatings({ modelYear: 2013 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Make) // "ACURA", "AUDI", "BENTLEY", etc.
 *     console.log(result.VehicleId) // 0
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await safetyRatings({ modelYear: 2013 }, false)
 * console.log(url) // "https://api.nhtsa.gov/SafetyRatings/modelYear/2013?format=json"
 * ```
 *
 * If you need to get all available model years, first call the function with no arguments.
 *
 * ### Get Models for Make
 *
 * Get a list of all available models in the `Safety Ratings API` for a specific model year and
 * make.
 *
 * If you pass a `modelYear` and `make` as the only options, the path
 * `/modelYear/:modelYear/make/:make` will be used.
 *
 * Example: Get a list of available models for 2013 Honda vehicles
 * ```js
 * await safetyRatings({ modelYear: 2013, make: 'Honda' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Model) // "Accord", "Civic", etc
 *     console.log(result.VehicleId) // 0
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await safetyRatings({ modelYear: 2013, make: 'Honda' }, false)
 * console.log(url) // "https://api.nhtsa.gov/SafetyRatings/modelYear/2013/make/Honda?format=json"
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
 *
 * ### Get VehicleId(s) for Year, Make, and Model
 *
 * Gets a list of vehicle variants for year, make and model, used to get the `VehicleId` and
 * `VehicleDescription` for a particular year, make, and model.
 *
 * If you pass a `modelYear`, `make`, and `model` as the only options, the
 * `/modelYear/:modelYear/make/:make/model/:model` path will be used.
 *
 * Example: Get a list of available vehicle variants for a 2013 Honda Accord
 * ```js
 * await safetyRatings({ modelYear: 2013, make: 'Honda',  model: 'Accord' })
 * .then((response) => {
 *   // First Object in the Results array
 *   console.log(response.Results[0].VehicleId) // 7523
 *   console.log(response.Results[0].VehicleDescription) // "2013 Honda Accord 4 DR FWD"
 *   // Second Object in the Results array
 *   console.log(response.Results[1].VehicleId) // 7522
 *   console.log(response.Results[1].VehicleDescription) // "2013 Honda Accord 2 DR FWD"
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await safetyRatings({ modelYear: 2013, make: 'Honda',  model: 'Accord' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/SafetyRatings/modelYear/2013/make/Honda/model/Accord?format=json"
 * ```
 *
 * Note that there may be multiple objects in the `Results[]`, each with a different `VehicleId`.
 * One reason for this could be that there are multiple body styles for that particular model year,
 * make, and model combination.
 *
 * You can use the `VehicleDescription` to narrow further but there is no known way to narrow it
 * further than this. You will have to choose the correct `VehicleId` from the `Results` or already
 * know the `VehicleId` for the specific vehicle you want to get safety ratings for. You can also
 * check that there is only one object in the `Results` array and if so, use that `VehicleId` or
 * pick the first one and use that `VehicleId`.
 *
 * The next step is to call the function again with `{ vehicleId: VehicleId }` included in
 * the passed options to get the safety ratings for that vehicle.
 *
 * ### Get Safety Ratings by VehicleId
 *
 * Gets a list of Safety Ratings for the given `vehicleId`.
 *
 * If you pass `options.vehicleId`, the `/vehicleId/:vehicleId` path will be used.
 *
 * All other options will be ignored if you provide `options.vehicleId`.
 *
 * There will only be one object that contains all of the safety ratings in the `Results[]`.
 *
 * Example: Get safety ratings for a 2013 Honda Accord 4 DR FWD
 * ```js
 * await safetyRatings({ vehicleId: 7523 })
 * .then((response) => {
 *   console.log(response.Results[0].ComplaintsCount)
 *   console.log(response.Results[0].InvestigationCount)
 *   console.log(response.Results[0].RecallsCount)
 *   console.log(response.Results[0].VehiclePicture)
 *   // ...more properties
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await safetyRatings({ vehicleId: 7523 }, false)
 * console.log(url) // "https://api.nhtsa.gov/SafetyRatings/vehicleId/7523?format=json"
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be structured as `{ Count, Message, Results }`.
 *
 * The return will be an object with the following properties:
 *
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 *
 * The `Results[]` will be typed based on the `options` passed to the function but will contain some
 * combination of SafetyRatingsResultsData properties.
 *
 * - See type `SafetyRatingsResultsData` for a list of all possible properties.
 * - See type `SafetyRatingsResultsByVariant` for clarity on which properties will be included based on
 *   the `options` passed.
 *
 * @param [options] - Object of options, fetch data from the API depending on options passed
 * @param [options.modelYear] - Model Year of the vehicle to search for
 * @param [options.make] - Make of the vehicle to search for
 * @param [options.model] - Model of the vehicle to search for
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * (default: `true`)
 * @returns - Parsed API response `object` -or- url `string` if `doFetch = false`
 */
function safetyRatings<T extends NoInvalidOptions<SafetyRatingsOptions>>(
  options: NoInvalidOptions<T>,
  doFetch?: true
): Promise<SafetyRatingsResponseByOptions<T>>
function safetyRatings<T extends NoInvalidOptions<SafetyRatingsOptions>>(
  options: NoInvalidOptions<T> | undefined,
  doFetch: false
): Promise<string>
function safetyRatings(
  options?: undefined,
  doFetch?: true
): Promise<SafetyRatingsResponseByVariant<'getModelYears'>>
function safetyRatings(
  doFetch?: true
): Promise<SafetyRatingsResponseByVariant<'getModelYears'>>
function safetyRatings(doFetch: false): Promise<string>
function safetyRatings<T extends NoInvalidOptions<SafetyRatingsOptions>>(
  options?: NoInvalidOptions<T> | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function safetyRatings(
  options?: NoInvalidOptions<SafetyRatingsOptions> | boolean,
  doFetch: boolean = true
): Promise<unknown> {
  const endpointName = 'SafetyRatings'

  /**
   * Builds the URL path
   */
  const buildPath = (parts: SafetyRatingsOptionsBase): string => {
    const pathParts = []
    if (parts.vehicleId) {
      pathParts.push(`vehicleId/${parts.vehicleId}`)
    } else {
      if (parts.modelYear) {
        pathParts.push(`modelYear/${parts.modelYear}`)
        if (parts.make) {
          pathParts.push(`make/${parts.make}`)
          if (parts.model) {
            pathParts.push(`model/${parts.model}`)
          }
        }
      }
    }
    return pathParts.join('/')
  }

  try {
    let path = ''

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
          validKeys: ['modelYear', 'make', 'model', 'vehicleId'],
        },
        {
          name: 'vehicleId',
          value: options?.vehicleId,
          types: ['string', 'number'],
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
      ],
    })

    /* options are guaranteed to be an object by now because of catchInvalidArguments() */
    if (options) {
      /* Build the API URL path */
      path = buildPath(options)
    }

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({
      apiType: 'safetyRatings',
      endpointName,
      path,
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get<SafetyRatingsResultsData, 'safetyRatings'>()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { safetyRatings }

/*
 * These types have to be kept together with the function in the same file.
 *
 * This is so Intellisense will show the full type contents of the return to the end user when they
 * save the results to a variable and then hover over that variable. If these types are moved to
 * another file, Intellisense will only show the type name, not the full type contents for the
 * safetyRatings() NhstaResponse return type.
 *
 * Any type that is used directly in the function overloads and not in this file will cause this.
 * So, theoretically, you could move all of those types here and the others live in their own file,
 * but that would spread the types out and they are only used here and in the tests, so it makes
 * sense to keep them together.
 */

/**
 * All valid options for the `safetyRatings()` function
 */
export type SafetyRatingsOptionsBase = {
  modelYear?: string | number
  make?: string
  model?: string
  vehicleId?: string | number
}

/**
 * Options to get all available `modelYear`s in the `Safety Ratings API`
 *
 * Builds path: `/SafetyRatings`
 */
export type SafetyRatingsOptionsEmpty = {
  modelYear?: undefined
  make?: undefined
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to get all available `make`s in the `Safety Ratings API` for the `options.modelYear`
 * passed to the `products()` function.
 *
 * Builds path: `/SafetyRatings/modelYear/:modelYear`
 */
export type SafetyRatingsOptionsModelYear = {
  modelYear: string | number
  make?: undefined
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to get all available `model`s in the `Safety Ratings API` for the `options.modelYear` and
 * `options.make` passed to the `products()` function.
 *
 * Builds path: `/SafetyRatings/modelYear/:modelYear/make/:make`
 */
export type SafetyRatingsOptionsMake = {
  modelYear: string | number
  make: string
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to get a list of vehicle variants in the `Safety Ratings API` for options `modelYear`,
 * `make` and `model` passed to the `products()` function.
 *
 * Builds path: `/SafetyRatings/modelYear/:modelYear/make/:make/model/:model`
 */
export type SafetyRatingsOptionsVehicle = {
  modelYear: string | number
  make: string
  model: string
  vehicleId?: undefined
}

/**
 * Options to get a list of Safety Ratings for the `options.vehicleId` passed to the `products()`
 * function.
 *
 * Builds path: `/SafetyRatings/vehicleId/:vehicleId`
 */
export type SafetyRatingsOptionsVehicleId = {
  vehicleId: string | number
  modelYear?: undefined
  make?: undefined
  model?: undefined
}

/**
 * All valid options combinations for the `safetyRatings()` function
 */
export type SafetyRatingsOptions =
  | SafetyRatingsOptionsEmpty
  | SafetyRatingsOptionsVehicleId
  | SafetyRatingsOptionsModelYear
  | SafetyRatingsOptionsMake
  | SafetyRatingsOptionsVehicle

/**
 * Ensures only valid options are passed to the `safetyRatings()` function
 */
export type NoInvalidOptions<T extends SafetyRatingsOptions> =
  NoExtraProperties<SafetyRatingsOptionsBase, T>

/**
 * Variant names to used to type the `Results[]` of the `Safety Ratings API` response based on the
 * `options` passed to the function. `SafetyRatingsResultsData` will be Pick<>ed based on the the
 * Variant name.
 */
export type SafetyRatingsResultsVariant =
  | 'getModelYears'
  | 'getMakes'
  | 'getModels'
  | 'vehicle'
  | 'vehicleId'
  | 'default'

/**
 * All possible properties and their value types, found in the `Results[]` objects of
 * `Safety Ratings API` response. This is typed with all properties optional so it can be used to
 * type the `Results[]` based on `options` passed to the `saftetyRatings()` function.
 *
 * `SafetyRatingsResultsVariants` variant `'vehicleId'` will have all properties defined, all other
 * variants will only have some properties defined.
 */
export type SafetyRatingsResultsData = {
  'combinedSideBarrierAndPoleRating-Front'?: string
  'combinedSideBarrierAndPoleRating-Rear'?: string
  ComplaintsCount?: number
  dynamicTipResult?: string
  FrontCrashDriversideRating?: string
  FrontCrashPassengersideRating?: string
  InvestigationCount?: number
  Make?: string
  Model?: string
  ModelYear?: number
  NHTSAElectronicStabilityControl?: string
  NHTSAForwardCollisionWarning?: string
  NHTSALaneDepartureWarning?: string
  OverallFrontCrashRating?: string
  OverallSideCrashRating?: string
  OverallRating?: string
  RecallsCount?: number
  RolloverRating?: string
  RolloverRating2?: string
  RolloverPossibility?: number
  RolloverPossibility2?: number
  'sideBarrierRating-Overall'?: string
  SideCrashDriversideRating?: string
  SideCrashPassengersideRating?: string
  SidePoleCrashRating?: string
  VehicleDescription?: string
  VehicleId?: number
  VehiclePicture?: string
}

/*
 * This is typed with Pick<> so the user can see the actual type of the Results array objects
 * when they hover over the variable they saved the response to. Anything less verbose hides the
 * Results behind a type name and the user has to go look at the type definition to see what the
 * actual keys of the Results array objects are. They could of course just hit ctrl+enter to have
 * auto complete show them the keys, but this is more user friendly.
 */
/**
 * Types the `Results[]` of the `Safety Ratings API` response based on the
 * `SafetyRatingsResultsVariant`  passed to this type.
 *
 * Used to type no args `()` or `undefined` as the first arg passed to `safetyRatings()`.
 *
 * Also used in .test-d.ts files to easily match the expected return type of the function.
 */
export type SafetyRatingsResultsByVariant<
  Variant extends SafetyRatingsResultsVariant = 'default',
> =
  /* Pick<> SafetyRatingsResultsData based on Variant string */
  Variant extends 'getModelYears'
    ? /* Base Path / */
      {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'ModelYear' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'getMakes'
    ? /* Path /modelYear/:modelYear */
      {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'Make' | 'ModelYear' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'getModels'
    ? /* Path /modelYear/:modelYear/make/:make */
      {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'Make' | 'Model' | 'ModelYear' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'vehicle'
    ? /* Path /modelYear/:modelYear/make/:make/model/:model */ {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'VehicleDescription' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'vehicleId'
    ? /* Path /vehicleId/:vehicleId - all properties defined */ {
        [K in keyof SafetyRatingsResultsData]-?: SafetyRatingsResultsData[K]
      }
    : /* fallback default value - all optional properties */
      SafetyRatingsResultsData

/**
 * Types the `Results[]` of the `Safety Ratings API` response based on the `options` passed to the
 * function.
 */
export type SafetyRatingsResultsByOptions<
  Options extends SafetyRatingsOptions,
> = Options extends SafetyRatingsOptionsModelYear
  ? SafetyRatingsResultsByVariant<'getMakes'>
  : Options extends SafetyRatingsOptionsMake
  ? SafetyRatingsResultsByVariant<'getModels'>
  : Options extends SafetyRatingsOptionsVehicle
  ? SafetyRatingsResultsByVariant<'vehicle'>
  : Options extends SafetyRatingsOptionsVehicleId
  ? SafetyRatingsResultsByVariant<'vehicleId'>
  : Options extends SafetyRatingsOptionsEmpty
  ? SafetyRatingsResultsByVariant<'getModelYears'>
  : SafetyRatingsResultsByVariant

/**
 * Types the `safetyRatings()` function return based on the type of `SafetyRatingsOptions` passed to
 * this type, inferred from the `options` passed to the function.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` will be typed based on the `options` passed to the function.
 */
export type SafetyRatingsResponseByOptions<
  Options extends SafetyRatingsOptions,
> = NhtsaResponse<SafetyRatingsResultsByOptions<Options>, 'safetyRatings'>

/**
 * Types the `safetyRatings()` function return based on the `SafetyRatingsResultsVariant` passed to
 * this type.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` will be typed based on the `SafetyRatingsResultsVariant`.
 */
export type SafetyRatingsResponseByVariant<
  Variant extends SafetyRatingsResultsVariant = 'default',
> = NhtsaResponse<SafetyRatingsResultsByVariant<Variant>, 'safetyRatings'>

/**
 * Types the `safetyRatings()` function with `SafetyRatingsResultsData` as the `Results` array.
 *
 * This is the generic type of the parsed API response and is only meant to be a fallback type.
 *
 * The `Results[]` will be typed as `SafetyRatingsResultsData`, which is all possible properties
 * found in the Results objects of `Safety Ratings API` paths, with all marked as optional
 * properties that could be undefined.
 */
export type SafetyRatingsResponse = NhtsaResponse<
  SafetyRatingsResultsData,
  'safetyRatings'
>
