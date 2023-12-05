/**
 * @module api/safetyRatings
 * @category API - Safety Ratings
 */

import { useNHTSA } from '@/api'
import {
  catchInvalidArguments,
  encodeQueryStringParams,
  rejectWithError,
} from '@/utils'
import type { NhtsaResponse, NoExtraProperties } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [safetyRatings API Documentation] /guide/safetyRatings
 * :::
 *
 * You can use `safetyRatings()` as a thin wrapper for the `Safety Ratings API` to get safety
 * ratings for a vehicle.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Safety Ratings API.
 *
 * Check out the official
 * [Safety Ratings API Docs](https://www.nhtsa.gov/nhtsa-datasets-and-apis#ratings) for more
 * information on the different workflows and paths you can use to get safety ratings if you don't
 * already know the `VehicleId` of the vehicle you want to get safety ratings for.
 *
 * From the official documentation:
 *
 * > NHTSA's New Car Assessment Program (NCAP) rates vehicles to determine crashworthiness and
 * rollover safety. The safety ratings are gathered during controlled crash and rollover tests
 * conducted at NHTSA research facilities. Vehicles with a rating of five stars indicate the highest
 * safety rating, whereas a one star indicates the lowest rating.
 *
 * ### Options
 *
 * The Safety Ratings API uses the path to represent the query. This function uses the options
 * passed to build the correct url path query.
 *
 * Valid `options` are:
 * - `modelYear` - Model Year of the vehicle to search
 * - `make` - Make of the vehicle to search
 * - `model` - Model of the vehicle to search
 * - `vehicleId` - VehicleId of the vehicle to search
 *
 * All are optional and these are the only valid options you can pass to this function.
 *
 * There are several rules to follow when using this API or you will get a 404/403 error response:
 *
 * 1. If you provide a `vehicleId` then you cannot provide any other options.
 * 2. If you provide a `make` then you must also provide a `modelYear`.
 * 3. If you provide a `model` then you must also provide a `make` and `modelYear`.
 * 4. You must use PascalCase `SafetyRatings` in the path, it is case sensitive and will return a
 *    403 forbidden error otherwise.
 *
 * FYI: Rules #1-3 will return a 404 error from the NHTSA API if you break them.
 *
 * - If you break rule #1, by passing `vehicleId` and any other valid combination of remaining
 * options, this function will silently ignore the other options and only use the `vehicleId`. It
 * will not throw an Error but you will get typescript errors.
 *
 * - If you break rules #2 or #3, this function will throw an Error as a fail safe to prevent
 * you from getting a 404 error from the NHTSA API and you'll get typescript errors.
 *
 * - Rule #4 is enforced by this function internally when fetching the data or returning the URL
 * string.
 *
 * Some other important things to note:
 *
 * - If you pass an object that includes options not listed above, the function will throw an Error.
 *
 * - If you pass an object with an invalid options combination, the function will throw an Error.
 *
 * - If you pass an object with any valid combination of options but include options not listed
 * above, the function will throw an Error.
 *
 * - If you pass options with `vehicleId` and any other options listed above, you will get
 * typescript errors but the function will not throw an Error. It will silently ignore the other
 * options and only use the `vehicleId`.
 *
 * Full (valid) endpoint URL examples, trailing slash ok:
 *
 * - https://api.nhtsa.gov/SafetyRatings
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda
 * - https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda/model/accord
 * - https://api.nhtsa.gov/SafetyRatings/vehicleId/7523
 *
 * #### Some Notes on `VehicleId`
 *
 * All paths other than `vehicleId/:vehicleId` are only used to retrieve enough missing
 * information to obtain the `VehicleId` for a particular year, make, and model, and then get the
 * safety ratings for that `VehicleId`.
 *
 * - If you already know the `VehicleId` number you can pass `{ vehicleId: VehicleId }` as the only
 * option and directly get the safety ratings for that vehicle.
 *
 * - If you don't know the `VehicleId` number, you can pass the `modelYear`, `make`, and `model`
 * options to get the `VehicleId` for that particular vehicle.
 *
 * - The other paths are used if you don't know the `modelYear`, `make`, or `model` and need to
 * retrieve that information first.
 *
 * The following describes the use of the different paths and options in more detail.
 *
 * #### Get All Model Years - `/SafetyRatings`
 *
 * If you pass no arguments, an empty object `{}`, `undefined`, or `true` as the first argument, the
 * base path `/SafetyRatings` will be used.
 *
 * This path returns a list of available model years in the database.
 *
 * ```js
 * // Get a list of available model years
 * await safetyRatings().then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.ModelYear) // 2024, 2023, 2022, etc
 *     console.log(results.VehicleId) // 0
 *   })
 * })
 * ```
 *
 * #### Get Makes For Model Year - `/SafetyRatings/modelYear/:modelYear`
 *
 * If you pass a `modelYear` as the only option, the `/modelYear/:modelYear` path will be used.
 *
 * This path returns a list of available makes for that model year.
 *
 * ```js
 * // Get a list of available makes for the 2013 model year
 * await safetyRatings({
 *   modelYear: 2013,
 * })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.Make) // ACURA, AUDI, BENTLEY, etc.
 *     console.log(results.VehicleId) // 0
 *   })
 * })
 * ```
 *
 * If you need to get all available model years, first call the function with no arguments.
 *
 * #### Get Models For Make - `/SafetyRatings/modelYear/:modelYear/make/:make`
 *
 * If you pass a `modelYear` and `make` as the only options, the `/modelYear/:modelYear/make/:make`
 * path will be used.
 *
 * This path returns all of the models for that model year and make combination.
 *
 * ```js
 * // Get the models for a 2013 Honda
 * await safetyRatings({
 *   modelYear: 2013,
 *   make: 'Honda',
 * })
 * .then((response) => {
 *   response.Results.forEach((model) => {
 *     console.log(model.Model) // Accord, Civic, etc
 *     console.log(model.VehicleId) // 0
 *   })
 * })
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
 *
 * #### Get Model VehicleId(s) - `/SafetyRatings/modelYear/:modelYear/make/:make/model/:model`
 *
 * If you pass a `modelYear`, `make`, and `model` as the only options, the
 * `/modelYear/:modelYear/make/:make/model/:model` path will be used.
 *
 * This path returns a list of vehicle variants for year, make and model, with the `VehicleId` and
 * `VehicleDescription` of each variant.
 *
 * ```js
 * // Get as list of VehicleId(s) for a 2013 Honda Accord
 * await safetyRatings({
 *   modelYear: 2013,
 *   make: 'Honda',
 *   model: 'Accord',
 * })
 * .then((response) => {
 *   console.log(response.Results[0].VehicleId) // 7523
 *   console.log(response.Results[0].VehicleDescription) // 2013 Honda Accord 4 DR FWD
 *   console.log(response.Results[1].VehicleId) // 7522
 *   console.log(response.Results[1].VehicleDescription) // 2013 Honda Accord 2 DR FWD
 * })
 * ```
 *
 * Note that there may be multiple objects in the `Results` array, each with a different
 * `VehicleId`. One reason for this could be that there are multiple body styles for that particular
 * model year, make, and model combination.
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
 * #### Get Safety Ratings For VehicleId - `/SafetyRatings/vehicleId/:vehicleId`
 *
 * If you pass `options.vehicleId`, the `/vehicleId/:vehicleId` path will be used.
 *
 * This path returns a list of Safety Ratings for the given `vehicleId`.
 *
 * All other options will be ignored if you provide a `vehicleId` option.
 *
 * There will only be one object in the `Results` array for this path that contains all of the
 * safety ratings.
 *
 * ```js
 * // Get the Safety Ratings for a 2013 Honda Accord 4 DR FWD
 * await safetyRatings({
 *   vehicleId: 7523,
 * })
 * .then((response) => {
 *   console.log(response.Results[0].ComplaintsCount)
 *   console.log(response.Results[0].InvestigationCount)
 *   console.log(response.Results[0].RecallsCount)
 *   console.log(response.Results[0].VehiclePicture)
 * // ...etc
 * })
 * ```
 *
 * ### API Response
 *
 * The return from this function will be the parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results` array, depending on
 * options passed.
 *
 * The response will be an object with the following properties:
 *
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 *
 * The `Results` array will contain objects with properties depending on which path you used to get
 * the data. See the `SafetyRatingsResultsData` type for a list of all possible properties.
 *
 * The `Results` array will be typed based on the `options` passed to the function. See the
 * `SafetyRatingsResultsByVariant` type to see which properties will be included based on the
 * `options` passed.
 *
 * The `VehicleId` is found in `response.Results[x].VehicleId` for any path combination. You can
 * expect it will be a value of `0` for all paths except for the `/vehicleId/:vehicleId` or
 * `/modelYear/:modelYear/make/:make/model/:model` paths, which will return the actual `VehicleId`
 * for that vehicle.
 *
 * @param options - Object names and values to append to the URL as a path
 * @param {(string|number)} [options.modelYear] - Model Year of the vehicle to search
 * @param {(string|number)} [options.make] - Make of the vehicle to search
 * @param {string} [options.model] - Model of the vehicle to search
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL string
 * (default: `true`)
 * @returns {(Promise<SafetyRatingsResponseByOptions<T> | string>)}
 * - Parsed API response `object` -or- url `string` if `doFetch = false`
 */
function safetyRatings(
  options?: true
): Promise<SafetyRatingsResponseByVariant<'getModelYears'>>
function safetyRatings(options: false): Promise<string>
function safetyRatings<T extends SafetyRatingsOptions>(
  options: NoInvalidOptions<T> | undefined,
  doFetch: false
): Promise<string>
function safetyRatings<T extends SafetyRatingsOptions>(
  options: NoInvalidOptions<T>,
  doFetch?: true
): Promise<SafetyRatingsResponseByOptions<T>>
function safetyRatings(
  options?: undefined,
  doFetch?: true
): Promise<SafetyRatingsResponseByVariant<'getModelYears'>>
function safetyRatings<T extends SafetyRatingsOptions>(
  options?: NoInvalidOptions<T> | boolean,
  doFetch?: boolean
): Promise<SafetyRatingsResponse>
/* Implementation */
async function safetyRatings(
  options?: SafetyRatingsOptions | boolean,
  doFetch: boolean = true
): Promise<SafetyRatingsResponse | string> {
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
        { name: 'options', value: options, types: ['object'] },
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

    /*
     * Throw an error if options object contains invalid properties.
     *
     * This must be after the catchInvalidArguments() call above so we can ensure we have an actual
     * object here and not 'null' 'array' etc., which typeof will let into the 'if' block as they
     * are all considered typeof === 'object'.  We only use typeof here to make the TS compiler
     * happy.
     */
    if (typeof options === 'object') {
      const validKeys: Array<keyof SafetyRatingsOptionsBase> = [
        'modelYear',
        'make',
        'model',
        'vehicleId',
      ]
      const optionsKeys = Object.keys(options) as Array<
        keyof SafetyRatingsOptionsBase
      >
      const invalidKeys = optionsKeys.filter((key) => {
        return !validKeys.includes(key)
      })

      if (invalidKeys.length > 0) {
        throw new Error(
          `Invalid options: ${invalidKeys.join(
            ', '
          )}. Valid options are: ${validKeys.join(', ')}`
        )
      }
      /*
       * Using this to transform the options object into URI encoded string or undefined values
       */
      const { vehicleId, modelYear, make, model } =
        encodeQueryStringParams(options)

      /* Build the API URL path */
      path = buildPath({ vehicleId, modelYear, make, model })
    }

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({
      apiType: 'safetyRatings',
      endpointName,
      path,
      includeQueryString: false,
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
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
 * Options to build path: `/SafetyRatings`
 */
export type SafetyRatingsOptionsEmpty = {
  modelYear?: undefined
  make?: undefined
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to build path: `/SafetyRatings/modelYear/:modelYear`
 */
export type SafetyRatingsOptionsModelYear = {
  modelYear: string | number
  make?: undefined
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to build path: `/SafetyRatings/modelYear/:modelYear/make/:make`
 */
export type SafetyRatingsOptionsMake = {
  modelYear: string | number
  make: string
  model?: undefined
  vehicleId?: undefined
}

/**
 * Options to build path: `/SafetyRatings/modelYear/:modelYear/make/:make/model/:model`
 */
export type SafetyRatingsOptionsModel = {
  modelYear: string | number
  make: string
  model: string
  vehicleId?: undefined
}

/**
 * Options to build path: `/SafetyRatings/vehicleId/:vehicleId`
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
  | SafetyRatingsOptionsModel

/** Ensures only valid options are used in the `safetyRatings()` function */
export type NoInvalidOptions<T extends SafetyRatingsOptions> =
  NoExtraProperties<SafetyRatingsOptionsBase, T>

/**
 * Variant names to use to type the `Results` array of the `Safety Ratings API` response based on
 * the `options` passed to the function. `SafetyRatingsResultsData` will be Pick<>ed based on the
 * the variant name.
 */
export type SafetyRatingsResultsVariants =
  | 'getModelYears'
  | 'modelYear'
  | 'make'
  | 'model'
  | 'vehicleId'
  | 'default'

/**
 * All possible properties and values found in the `Results` array objects of `Safety Ratings API`
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
 * Types the `Results[]` of the `Safety Ratings API` response based on the `ResultsVariant` that is
 * passed to this type.
 *
 * Used to type no args `()` or `undefined` as the first arg passed to `safetyRatings()` as Variant
 * 'getModelYears' in the function overloads. Also used in .test-d.ts files to easily match the
 * expected return type of the function.
 */
export type SafetyRatingsResultsByVariant<
  Variant extends SafetyRatingsResultsVariants = 'default',
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
    : Variant extends 'modelYear'
    ? /* Path /modelYear/:modelYear */
      {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'Make' | 'ModelYear' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'make'
    ? /* Path /modelYear/:modelYear/make/:make */
      {
        [K in keyof Pick<
          SafetyRatingsResultsData,
          'Make' | 'Model' | 'ModelYear' | 'VehicleId'
        >]-?: SafetyRatingsResultsData[K]
      }
    : Variant extends 'model'
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
 * Types the `Results` array of the `Safety Ratings API` response based on the `options` passed
 * to the function.
 */
export type SafetyRatingsResultsByOptions<
  Options extends SafetyRatingsOptions,
> = Options extends SafetyRatingsOptionsModelYear
  ? SafetyRatingsResultsByVariant<'modelYear'>
  : Options extends SafetyRatingsOptionsMake
  ? SafetyRatingsResultsByVariant<'make'>
  : Options extends SafetyRatingsOptionsModel
  ? SafetyRatingsResultsByVariant<'model'>
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
 * The `Results` array will be typed based on the `options` passed to the function.
 */
export type SafetyRatingsResponseByOptions<
  Options extends SafetyRatingsOptions,
> = NhtsaResponse<SafetyRatingsResultsByOptions<Options>, 'safetyRatings'>

/**
 * Types the `safetyRatings()` function return based on the `variant` passed to this type.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results` array will be typed based on the `variant` passed to this type.
 */
export type SafetyRatingsResponseByVariant<
  Variant extends SafetyRatingsResultsVariants = 'default',
> = NhtsaResponse<SafetyRatingsResultsByVariant<Variant>, 'safetyRatings'>

/**
 * Types the `safetyRatings()` function with `SafetyRatingsResultsData` as the `Results` array.
 *
 * This is the generic type of the parsed API response and is only meant to be a fallback type.
 *
 * The `Results` array will be typed as `SafetyRatingsResultsData`, which is all possible properties
 * found in the `Results` array objects of `Safety Ratings API` paths, with all marked as optional
 * properties that could be undefined.
 */
export type SafetyRatingsResponse = NhtsaResponse<
  SafetyRatingsResultsData,
  'safetyRatings'
>
