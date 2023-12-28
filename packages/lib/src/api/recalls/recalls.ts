/**
 * @module api/recalls
 * @category API - Recalls
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
 * # Recalls API
 *
 * ::: tip :bulb: More Information
 * See: [Recalls Documentation] /guide/recalls
 * :::
 *
 * You can use `recalls()` as a thin wrapper for the `NHTSA Recalls API` to get recall information
 * based on a vehicle's `modelYear`, `make`, and `model` or a specific `campaignNumber`.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Recalls API.
 *
 * From the [Official Documentation](https://www.nhtsa.gov/nhtsa-datasets-and-apis#recalls):
 *
 * > Manufacturers who determine that a product or piece of original equipment either has a safety
 * defect, or is not in compliance with federal safety standards, are required to notify NHTSA
 * within five business days. NHTSA requires that manufacturers file a defect and noncompliance
 * report as well as quarterly recall status reports, in compliance with Federal Regulation 49
 * (the National Traffic and Motor Safety Act) Part 573, which identifies the requirements for
 * safety recalls. NHTSA stores this information and the data can be used to search for recall
 * information related to specific NHTSA campaigns and product types.
 *
 * ## Options
 *
 * The Recalls API uses a path and query string to get different data. This function uses the
 * options passed to build the correct url path and query string.
 *
 * Valid `options` are:
 *
 * - `modelYear` - Model Year of the vehicle to search for
 * - `make` - Make of the vehicle to search for
 * - `model` - Model of the vehicle to search for
 * - `campaignNumber` - Campaign Number of the recall to search for
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Valid `options` combinations:
 *
 * These use the `Products API` to get model years, makes, and models available in the
 * `Recalls API` dataset:
 * - `recalls()`
 * - `recalls({})`
 * - `recalls({ modelYear })`
 * - `recalls({ modelYear, make })`
 *
 * These use the `Recalls API` to get the recall data for a specific vehicle or campaign number:
 * - `recalls({ modelYear, make, model })`
 * - `recalls({ campaignNumber })`
 *
 * Real Example URLs - for options that use the `Products API`:
 * - https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r
 * - https://api.nhtsa.gov/products/vehicle/makes?modelYear=2020&issueType=r
 * - https://api.nhtsa.gov/products/vehicle/models?modelYear=2020&make=Volkswagen&issueType=r
 *
 * Real Example URLs - for options that use the `Recalls API`:
 * - https://api.nhtsa.gov/recalls/recallsByVehicle?modelYear=2020&make=Volkswagen&model=Jetta
 * - https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=20V505000
 *
 * Note that `format=json` will always be appended to the query string when using this package, even
 * though it is not required by the Recalls and Products APIs.
 *
 * Returned data will be structured as `{ Count, Message, Results }` for any combination of options.
 *
 * See the `Returns` section below for more details.
 *
 * ### Some Notes on `campaignNumber`
 *
 * The `campaignNumber` is found in `Results[x].NHTSACampaignNumber` with options
 * `{ modelYear, make, model }` or `{ campaignNumber }`.
 *
 * - If you already know the `campaignNumber` you can pass `{ campaignNumber }` and directly get
 *   recall information for that campaign number.
 * - If you don't have a `campaignNumber` number, you can pass `{ modelYear, make, model }` options
 *   to get the `campaignNumber`s for that particular vehicle.
 * - The other paths are used if you want to get the `modelYear`s, `make`s, or `model`s
 *    availaible in the Recalls API dataset, so you can then use that information to get the
 *   `campaignNumber`s for that particular vehicle.
 *
 * ## Rules
 *
 * There are several rules to follow when using this API or you will get a network error response
 * from the NHTSA API.
 *
 * 1. If you provide a `campaignNumber` then you cannot provide any other options.
 * 2. If you provide a `make` then you must also provide a `modelYear`.
 * 3. If you provide a `model` then you must also provide a `make` and `modelYear`.
 * 4. You must use lowercase `recalls` in the path, it is case sensitive and will return a
 *    403 forbidden error otherwise.
 *
 * FYI: Rules #1-3 will return a 400 Bad Request error from the NHTSA API if you break them.
 *
 * Consequences of breaking the rules:
 *
 * - Rule #1 - if passing `campaignNumber` and any other valid combination of options, this function
 *   will silently ignore the other options and only use the `campaignNumber`. It will _not_ throw
 *   an `Error` but you will get Typescript errors.
 * - Rules #2 and #3 - this function will throw an `Error` as a fail safe to prevent you from
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
 * Uses the `Products API` to get all available model years in the recalls dataset.
 *
 * If you pass no arguments, an empty object `{}`, `undefined`, or `true` as the first argument, the
 * path and query string: `/products/vehicle/modelYears?issueType=r` will be used.
 *
 * Example: Get a list of available model years in the recalls dataset
 * ```js
 * await recalls().then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2024", "2023", "2022", etc
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await recalls(false)
 * console.log(url) // "https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r&format=json"
 * ```
 *
 * ### Get Makes for Model Year
 *
 * Uses the `Products API` to get all available makes in the recalls dataset for a specific
 * `modelYear`.
 *
 * If you pass a `modelYear` as the only option, the path and query string
 * `/products/vehicle/makes?modelYear={modelYear}&issueType=r` will be used.
 *
 * Example: Get a list of available makes for the 2013 model year
 * ```js
 * await recalls({ modelYear: 2013 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "ACURA", "AUDI", "BENTLEY", etc.
 *     console.log(result.make) // "JETTA", "ACCORD", etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await recalls({ modelYear: 2013 }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/makes?modelYear=2013&issueType=r&format=json"
 * ```
 *
 * If you need to get all available model years, first call the function with no arguments.
 *
 * ### Get Models for Make
 *
 * Uses the `Products API` to get all available models in the recalls dataset for a specific
 * `modelYear` and `make`.
 *
 * If you pass a `modelYear` and `make` as the only options, the path and query string
 * `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=r` will be used.
 *
 * Example: Get a list of available models for a 2013 Honda
 * ```js
 * await recalls({ modelYear: 2013, make: 'Honda' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2013"
 *     console.log(result.make) // "HONDA"
 *     console.log(result.model) // "ACCORD", "CIVIC", etc.
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await recalls({ modelYear: 2013, make: 'Honda' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/models?modelYear=2013&make=Honda&issueType=r&format=json"
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
 *
 * ### Get Recalls for Year, Make, and Model
 *
 * Uses the `Recalls API` to get all available recalls for a specific `modelYear`, `make`, and
 * `model`.
 *
 * If you pass a `modelYear`, `make`, and `model` as the only options, the path and query string
 * `/recalls/recallsByVehicle?&modelYear={modelYear}&make={make}&model={model}` will be used.
 *
 * Example: Get as list of recalls for a 2013 Honda Accord
 * ```js
 * await recalls({ modelYear: 2013, make: 'Honda', model: 'Accord' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.NHTSACampaignNumber) // "13V132000", "19V182000", etc.
 *     console.log(result.Summary) // "Honda (American Honda Motor Co.) is recalling certain..."
 *     console.log(result.Consequence) // "An explosion of an inflator within the driver frontal..."
 *     console.log(result.Remedy) // "Honda will notify owners, and dealers will replace the..."
 *     console.log(result.ModelYear) // "2013"
 *     console.log(result.Make) // "HONDA"
 *     console.log(result.Model) // "ACCORD"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await recalls({ modelYear: 2013, make: 'Honda', model: 'Accord' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/recalls/recallsByVehicle?modelYear=2013&make=Honda&model=Accord&format=json"
 * ```
 *
 * Note that there will be multiple objects in the `Results[]`, each with a different
 * `NHTSACampaignNumber`, depending on how many recalls there are for that year, make, and model.
 *
 * You can use the `NHTSACampaignNumber` as `options.campaignNumber` to get more information about
 * the specific recall and how many vehicles were affected by it.
 *
 * ### Get Recall Information for Campaign Number
 *
 * Uses the `Recalls API` to get recall information for a specific `campaignNumber`.
 *
 * If you pass `options.campaignNumber`, the path and query string
 * `/recalls/campaignNumber?campaignNumber={campaignNumber}` will be used.
 *
 * All other options will be ignored if you provide `options.campaignNumber`.
 *
 * There could be more than one object in the `Results[]`, depending on how many different vehicles
 * were affected by the recall. Each model year, make, and model affected will have it's own object
 * in the `Results[]`.
 *
 * // Example: Get recall information for a specific campaign number
 * ```js
 * await recalls({ campaignNumber: '12V176000' })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.PotentialNumberofUnitsAffected) // 7600, 2230, etc.
 *     console.log(result.NHTSACampaignNumber) // "13V132000", "19V182000", etc.
 *     console.log(result.Summary) // "Honda (American Honda Motor Co.) is recalling certain 2013..."
 *     console.log(result.Consequence) // "An explosion of an inflator within the driver frontal..."
 *     console.log(result.Remedy) // "Honda will notify owners, and dealers will replace the..."
 *     console.log(result.ModelYear) // "2013"
 *     console.log(result.Make) // "HONDA"
 *     console.log(result.Model) // "ACCORD"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await recalls({ campaignNumber: '12V176000' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=12V176000&format=json"
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be stuctured as `{ Count, Message, Results }`.
 *
 * The direct response from the Recalls API is an object with the following properties:
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `results` - An array of objects containing the response data
 *
 * In order to keep parity with the other APIs and make it easier to type the responses, this
 * function will return the data as an object with lowercase `results` converted to uppercase:
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 *
 * The `Results[]` will be typed based on the `options` passed to the function.
 *
 * - `{}`, `{ modelYear }`, and `{ modelYear, make }` will be typed as `ProductsResultsData`
 *   properties.
 * - `{ modelYear, make, model }` and `{ campaignNumber }` will be typed as `RecallsResultsData`
 *   properties.
 *
 * - See types `ProductsResultsData` and `RecallsResultsData` for a list of all possible properties.
 * - See type `RecallsResultsByVariant` for clarity on which properties will be included based on
 *   the `options` passed.
 *
 * @param [options] - Object of options, fetch data from the API depending on options passed
 * @param [options.modelYear] - Model Year of the vehicle to search for
 * @param [options.make] - Make of the vehicle to search for
 * @param [options.model] - Model of the vehicle to search for
 * @param [options.campaignNumber] - Campaign Number of the recall to search
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * (default: `true`)
 * @returns - Parsed API response `object` -or- url `string` if `doFetch = false`
 */
function recalls<T extends NoInvalidOptions<RecallsOptions>>(
  options: NoInvalidOptions<T>,
  doFetch?: true
): Promise<RecallsResponseByOptions<T>>
function recalls<T extends NoInvalidOptions<RecallsOptions>>(
  options: NoInvalidOptions<T> | undefined,
  doFetch: false
): Promise<string>
function recalls(
  options?: undefined,
  doFetch?: true
): Promise<RecallsResponseByVariant<'getModelYears'>>
function recalls(
  doFetch?: true
): Promise<RecallsResponseByVariant<'getModelYears'>>
function recalls(doFetch: false): Promise<string>
function recalls<T extends NoInvalidOptions<RecallsOptions>>(
  options?: NoInvalidOptions<T> | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function recalls(
  options?: NoInvalidOptions<RecallsOptions> | boolean,
  doFetch: boolean = true
): Promise<unknown> {
  const endpointName = 'recalls'

  try {
    let path = ''
    let encodedParams: QueryStringParamsEncoded<RecallsOptions> = {}

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
          validKeys: ['modelYear', 'make', 'model', 'campaignNumber'],
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
          name: 'campaignNumber',
          value: options?.campaignNumber,
          types: ['string'],
        },
      ],
    })

    /* options are guaranteed to be an object by now because of catchInvalidArguments() */
    if (options) {
      encodedParams = encodeQueryStringParams(options)
    }

    const { modelYear, make, model, campaignNumber } = encodedParams
    const hasVehicle = modelYear && make && model
    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    /*
     * Use the Recalls API if campaignNumber or full vehicle is passed
     * ignores vehicle if campaignNumber exists
     */
    if (campaignNumber || hasVehicle) {
      if (campaignNumber) {
        path = `campaignNumber`
      } else if (hasVehicle) {
        path = `recallsByVehicle`
      }

      const params = campaignNumber
        ? { campaignNumber }
        : { modelYear, make, model }

      createCachedUrl({
        apiType: 'recalls',
        endpointName,
        path,
        params,
      })

      if (!doFetch) {
        return getCachedUrl()
      } else {
        return get<RecallsResultsData, 'recalls'>()
      }
    }

    /* Else use the Products API */
    if (modelYear && make) return products('r', { modelYear, make }, doFetch)
    if (modelYear) return products('r', { modelYear }, doFetch)
    else return products('r', doFetch)
  } catch (error) {
    return rejectWithError(error)
  }
}

export { recalls }

/**
 * These types have to be kept together with the function in the same file.
 *
 * This is so Intellisense will show the full type contents of the return to the end user when they
 * save the results to a variable and then hover over that variable. If these types are moved to
 * another file, Intellisense will only show the type name, not the full type contents for the
 * recalls() NhstaResponse return type.
 *
 * Any type that is used directly in the function overloads and not in this file will cause this.
 * So, theoretically, you could move all of those types here and the others live in their own file,
 * but that would spread the types out and they are only used here and in the tests, so it makes
 * sense to keep them together.
 */

/**
 * All valid options for the `recalls()` function
 */
export type RecallsOptionsBase = {
  modelYear?: string | number
  make?: string
  model?: string
  campaignNumber?: string
}

/**
 * Options to get all available `modelYear`s via the `Products API`.
 *
 * Builds path: `/products/vehicle/modelYears?issueType=r`
 */
export type RecallsOptionsEmpty = {
  modelYear?: undefined
  make?: undefined
  model?: undefined
  campaignNumber?: undefined
}

/**
 * Options to get all available `make`s for a specific `modelYear` via the `Products API`.
 *
 * Builds path: `/products/vehicle/makes?modelYear={modelYear}&issueType=r`
 */
export type RecallsOptionsModelYear = {
  modelYear: string | number
  make?: undefined
  model?: undefined
  campaignNumber?: undefined
}

/**
 * Options to get all available `models`s for a specific `modelYear` and `make` via the
 * `Products API`.
 *
 * Builds path: `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=r`
 */
export type RecallsOptionsMake = {
  modelYear: string | number
  make: string
  model?: undefined
  campaignNumber?: undefined
}

/**
 * Options to get all available recalls for a specific vehicle by `modelYear`, `make`, and
 * `model`.
 *
 * Builds path: `/recalls/recallsByVehicle?make={make}&model={model}&modelYear={modelYear}`
 */
export type RecallsOptionsVehicle = {
  modelYear: string | number
  make: string
  model: string
  campaignNumber?: undefined
}

/**
 * Options to get recalls for a specific `campaignNumber`.
 *
 * Builds path: `/recalls/campaignNumber?campaignNumber={campaignNumber}`
 */
export type RecallsOptionsCampaignNumber = {
  campaignNumber: string
  modelYear?: undefined
  make?: undefined
  model?: undefined
}

/**
 * All valid options combinations for the `recalls()` function
 */
export type RecallsOptions =
  | RecallsOptionsEmpty
  | RecallsOptionsModelYear
  | RecallsOptionsMake
  | RecallsOptionsVehicle
  | RecallsOptionsCampaignNumber

/**
 * Ensures only valid options are passed to the `recalls()` function
 */
export type NoInvalidOptions<T extends RecallsOptions> = NoExtraProperties<
  RecallsOptionsBase,
  T
>

/**
 * Variant names used to type the `Results[]` of the `Recalls API` response based on
 * the `options` passed to the function. `RecallsResultsData` will be Pick<>ed based on the
 * the variant name.
 */
export type RecallsResultsVariant =
  | 'getModelYears'
  | 'getMakes'
  | 'getModels'
  | 'vehicle'
  | 'campaignNumber'
  | 'default'

/**
 * All possible properties and values found in the `Results[]` objects of `Recalls API`.
 *
 * Property descriptions derived from
 * [data.transportation.gov](https://data.transportation.gov/api/views/6axg-epim/rows.json?accessType=DOWNLOAD)
 */
export type RecallsResultsData = {
  /** Displays the name of the product manufacturer. */
  Manufacturer?: string
  /*
   * Displays the recall number. The recall number is composed of the two-digit year, the
   * one-character recall type, the two-character recall sub-type, the three-character recall
   * number for the year, and the three-character recall subject.
   */
  NHTSACampaignNumber?: string
  /**
   * Advisory for owners of these vehicles should park them immediately until the recall remedy is
   * completed.
   */
  parkIt?: boolean
  /**
   * Advisory for owners to park outside and away from structures because vehicles can catch fire.
   */
  parkOutSide?: boolean
  /**
   * Displays the date that NHTSA received the Defect and Noncompliance report from the
   * manufacturer.
   */
  ReportReceivedDate?: string
  /** Displays the name of the product and the defect that is the subject of the recall. */
  Component?: string
  /** Displays a summary of the consequences of the defect or noncompliance. */
  Summary?: string
  /** Displays a summary of the consequences of the defect or noncompliance. */
  Consequence?: string
  /** Displays a brief description of the proposed solution to the recall. */
  Remedy?: string
  /** Provides notes from NHTSA regarding the recall. */
  Notes?: string
  /** Affected model year of the recall. */
  ModelYear?: string
  /** Affected make of the recall. */
  Make?: string
  /** Affected model of the recall. */
  Model?: string
  /**
   * Displays the number of products that are potentially affected by the recall.
   *
   * Only defined when searching by `campaignNumber`
   */
  PotentialNumberofUnitsAffected?: number
}

/*
 * This is typed with Pick<> so the user can see the actual type of the results array objects
 * when they hover over the variable they saved the response to. Anything less verbose hides the
 * results behind a type name and the user has to go look at the type definition to see what the
 * actual keys of the Results array objects are. They could of course just hit ctrl+enter to have
 * auto complete show them the keys, but this is more user friendly.
 */
/**
 * Types the `Results[]` of the `Recalls API` response based on the `RecallsResultsVariant` that is
 * passed to this type.
 *
 * Used to type no args `()` or `undefined` as the first arg passed to `recalls()`.
 *
 * Also used in .test-d.ts files to easily match the expected return type of the function.
 */
export type RecallsResultsByVariant<
  Variant extends RecallsResultsVariant = 'default',
> =
  /* Pick<> RecallsData based on Variant string */
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
    ? /* Path /recalls/recallsByVehicle?make={make}&model={model}&modelYear={modelYear} */ {
        [K in keyof Pick<
          RecallsResultsData,
          Exclude<keyof RecallsResultsData, 'PotentialNumberofUnitsAffected'>
        >]-?: RecallsResultsData[K]
      }
    : Variant extends 'campaignNumber'
    ? /* Path /recalls/campaignNumber?campaignNumber={campaignNumber} - all defined */ {
        [K in keyof RecallsResultsData]-?: RecallsResultsData[K]
      }
    : /* fallback default value - all optional properties */
      RecallsResultsData

/**
 * Types the `Results[]` of the `Recalls API` response based on the `options` passed
 * to the function.
 */
export type RecallsResultsByOptions<Options extends RecallsOptions> =
  Options extends RecallsOptionsModelYear
    ? RecallsResultsByVariant<'getMakes'>
    : Options extends RecallsOptionsMake
    ? RecallsResultsByVariant<'getModels'>
    : Options extends RecallsOptionsVehicle
    ? RecallsResultsByVariant<'vehicle'>
    : Options extends RecallsOptionsCampaignNumber
    ? RecallsResultsByVariant<'campaignNumber'>
    : Options extends RecallsOptionsEmpty
    ? RecallsResultsByVariant<'getModelYears'>
    : RecallsResultsByVariant

/**
 * Types the `recalls()` function return based on the type of `RecallsOptions` passed to
 * this type, inferred from the `options` passed to the function.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `options` passed to the function.
 */
export type RecallsResponseByOptions<Options extends RecallsOptions> =
  Options extends RecallsOptionsVehicle | RecallsOptionsCampaignNumber
    ? NhtsaResponse<RecallsResultsByOptions<Options>, 'recalls'>
    : NhtsaResponse<RecallsResultsByOptions<Options>, 'products'>

/**
 * Types the `recalls()` function return based on the `variant` passed to this type.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `Variant` passed to this type.
 */
export type RecallsResponseByVariant<
  Variant extends RecallsResultsVariant = 'default',
> = NhtsaResponse<RecallsResultsByVariant<Variant>, 'recalls'>

/**
 * This is the generic type of the parsed API response and is only meant to be a fallback type.
 *
 * Types the `recalls()` function with `RecallsResultsData` and/or `ProductsResultsData` as the
 * `Results[]` objects.
 */
export type RecallsResponse =
  | NhtsaResponse<RecallsResultsData, 'recalls'>
  | NhtsaResponse<ProductsResultsData, 'products'>
