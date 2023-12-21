/**
 * @module api/products
 * @category API - Products
 */

import { useNHTSA } from '@/api'
import {
  catchInvalidArguments,
  encodeQueryStringParams,
  rejectWithError,
} from '@/utils'
import type { NhtsaResponse, NoExtraProperties } from '@/types'

/**
 * # Products API
 *
 * ::: tip :bulb: More Information
 * See: [Products Documentation] /guide/products
 * :::
 *
 * You can use `products()` as a thin wrapper for the `NHTSA Products API` to get model years,
 * makes, and models available in the datasets of the `Recalls` and `Complaints` APIs.
 *
 * The `products()` function is used by the `recalls()` and `complaints()` functions to get
 * model years, makes, and models based on query `issueType=r` or `issueType=c` to then query for
 * recalls or complaints based on a specific model year, make, and model.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Products API.
 *
 * There is no information about the Products API available in the
 * [Official NHTSA APIs Documentation](https://www.nhtsa.gov/nhtsa-datasets-and-apis), other than
 * the use of the Products API in the context of the Recalls API and Complaints API.
 *
 * ## Issue Type
 *
 * The Products API uses the `?issueType={issueType}` query string to get different data. This
 * function uses the `issueType` passed as the first argument to build the correct url path and
 * query string.
 *
 * `issueType` is required and must be one of the following strings:
 *
 * - `'recalls'` or `'r'` - recalls
 * - `'complaints'` or `'c'` - complaints
 *
 * Example with `issueType`:
 * ```js
 * products('recalls')
 * ```
 *
 * Example with `issueType` and some `options`:
 * ```js
 * products('recalls', { modelYear: 2013, make: 'Honda' })
 * ```
 *
 * ## Options
 *
 * The Products API uses a path and query string to get different data. This function uses the
 * options passed to build the correct url path and portions of the query string.
 *
 * Valid `options` are:
 *
 * - `modelYear` - Model Year of the vehicle to search for
 * - `make` - Make of the vehicle to search for
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Valid `options` combinations:
 *
 * - `recalls(issueType)`
 * - `recalls(issueType, {})`
 * - `recalls(issueType, { modelYear })`
 * - `recalls(issueType, { modelYear, make })`
 *
 * Real Example URLs - with issueType `r`:
 * - https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r
 * - https://api.nhtsa.gov/products/vehicle/makes?modelYear=2020&issueType=r
 * - https://api.nhtsa.gov/products/vehicle/models?modelYear=2020&make=Volkswagen&issueType=r
 *
 * Real Example URLs - with issueType `c`:
 * - https://api.nhtsa.gov/products/vehicle/modelYears?issueType=c
 * - https://api.nhtsa.gov/products/vehicle/makes?modelYear=2020&issueType=c
 * - https://api.nhtsa.gov/products/vehicle/models?modelYear=2020&make=Volkswagen&issueType=c
 *
 * Note that `format=json` will always be appended to the query string when using this package, even
 * though it is not required by the Products APIs.
 *
 * Response data will be structured as `{ Count, Message, Results }` for any combination of options.
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
 * ```js
 * // Get a list of available model years in the recalls dataset
 * await recalls().then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2024", "2023", "2022", etc
 *   })
 * })
 * ```
 *
 * ### Get Makes for Model Year
 *
 * Uses the `Products API` to get all available makes in the recalls dataset for a specific model
 * year.
 *
 * If you pass a `modelYear` as the only option, the path and query string
 * `/products/vehicle/makes?modelYear={modelYear}&issueType=r` will be used.
 *
 * ```js
 * // Get a list of available makes for the 2013 model year
 * await recalls({
 *   modelYear: 2013,
 * })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "ACURA", "AUDI", "BENTLEY", etc.
 *     console.log(results.make) // "JETTA", "ACCORD", etc.
 *   })
 * })
 * ```
 *
 * If you need to get all available model years, first call the function with no arguments.
 *
 * ### Get Models for Make
 *
 * Uses the `Products API` to get all available models in the recalls dataset for a specific model
 * year and make.
 *
 * If you pass a `modelYear` and `make` as the only options, the path and query string
 * `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=r` will be used.
 *
 * ```js
 * // Get a list of available models for a 2013 Honda
 * await recalls({
 *   modelYear: 2013,
 *   make: 'Honda',
 * })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2013"
 *     console.log(result.make) // "HONDA"
 *     console.log(result.model) // "ACCORD", "CIVIC", etc.
 *   })
 * })
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
 *
 * ### Get Recalls for Year, Make, and Model
 *
 * Uses the `Recalls API` to get all available recalls for a specific model year, make, and model.
 *
 * If you pass a `modelYear`, `make`, and `model` as the only options, the path and query string
 * `/recalls/recallsByVehicle?&modelYear={modelYear}&make={make}&model={model}` will be used.
 *
 * ```js
 * // Get as list of recalls for a 2013 Honda Accord
 * await recalls({
 *   modelYear: 2013,
 *   make: 'Honda',
 *   model: 'Accord',
 * })
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
 * ```js
 * // Get recall information for a specific campaign number
 * await recalls({
 *   campaignNumber: '12V176000',
 * })
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
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be structured as `{ Count, Message, Results }`.
 *
 * The direct response from the Products API is an object with the following properties:
 * - `count` - The number of results returned
 * - `message` - A message from the NHTSA API
 * - `results` - An array of objects containing the response data
 *
 * In order to keep parity with the other APIs and make it easier to type the responses, this
 * function will return the data as an object with the properties uppercased:
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
 *
 * @param issueType - Issue Type to search ('r' | 'recalls' | 'c' | 'complaints') - Required
 * @param [options] - Object of options, fetch data from the API depending on options passed
 * @param [options.modelYear] - Model Year of the vehicle to search for
 * @param [options.make] - Make of the vehicle to search for
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * @returns NHTSA Api Response `object`
 */
function products<T extends NoInvalidOptions<ProductsOptions>>(
  issueType: ProductsIssueType,
  options: NoInvalidOptions<T>,
  doFetch?: true
): Promise<ProductsResponseByOptions<T>>
function products<T extends NoInvalidOptions<ProductsOptions>>(
  issueType: ProductsIssueType,
  options: NoInvalidOptions<T> | undefined,
  doFetch: false
): Promise<string>
function products(
  issueType: ProductsIssueType,
  doFetch?: true
): Promise<ProductsResponseByVariant<'getModelYears'>>
function products(issueType: ProductsIssueType, doFetch: false): Promise<string>
function products(
  issueType: ProductsIssueType
): Promise<ProductsResponseByVariant<'getModelYears'>>
function products(
  issueType: ProductsIssueType,
  options?: undefined,
  doFetch?: true
): Promise<ProductsResponseByVariant<'getModelYears'>>
function products<T extends NoInvalidOptions<ProductsOptions>>(
  issueType: ProductsIssueType,
  options?: NoInvalidOptions<T> | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function products(
  issueType: ProductsIssueType,
  options?: NoInvalidOptions<ProductsOptions> | boolean,
  doFetch: boolean = true
): Promise<unknown> {
  const endpointName = 'products'

  try {
    if (typeof options === 'boolean') {
      /* If first argument is boolean, it is doFetch */
      doFetch = options
      /* Set options undefined so it will pass argument check below, otherwise invalid type */
      options = undefined
    }

    catchInvalidArguments({
      args: [
        {
          name: 'issueType',
          value: issueType,
          required: true,
          types: ['string'],
        },
        { name: 'options', value: options, types: ['object'] },
        {
          name: 'modelYear',
          value: options?.modelYear,
          types: ['string', 'number'],
          requiredBy: [{ name: 'make', value: options?.make }],
        },
        {
          name: 'make',
          value: options?.make,
          types: ['string'],
        },
      ],
    })

    /* Throw an error if issueType is not 'r' 'recalls' 'c' or 'complaints' */
    if (!['r', 'recalls', 'c', 'complaints'].includes(issueType)) {
      throw new Error(
        `Invalid argument issueType: ${issueType}.
         Valid issueTypes are: 'r', 'recalls', 'c', 'complaints'`
      )
    }

    /* Convert 'recalls' or 'complaints' to 'c' or 'r' */
    issueType =
      issueType === 'recalls'
        ? 'r'
        : issueType === 'complaints'
        ? 'c'
        : issueType

    let path = ''
    let encodedParams = {}
    /*
     * Throw an error if options object contains invalid properties.
     *
     * This must be after the catchInvalidArguments() call above so we can ensure we have an actual
     * object here and not 'null' 'array' etc., which typeof will let into the 'if' block as they
     * are all considered typeof === 'object'.  We only use typeof here to make the TS compiler
     * happy.
     */
    if (typeof options === 'object') {
      const validKeys: Array<keyof ProductsOptionsBase> = ['modelYear', 'make']
      const optionsKeys = Object.keys(options) as Array<
        keyof ProductsOptionsBase
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

      const { modelYear, make } = encodeQueryStringParams(options)

      encodedParams = { modelYear, make }

      /* Build the API URL path */
      if (modelYear && make) path = `vehicle/models`
      else if (modelYear) path = `vehicle/makes`
    }

    /* If there were no options passed, then path should still be an empty string */
    if (!path) path = `vehicle/modelYears`

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({
      apiType: 'products',
      endpointName,
      path,
      params: { ...encodedParams, issueType },
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get<ProductsResultsData, 'products'>()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { products }

/**
 * These types have to be kept together with the function in the same file.
 *
 * This is so Intellisense will show the full type contents of the return to the end user when they
 * save the results to a variable and then hover over that variable. If these types are moved to
 * another file, Intellisense will only show the type name, not the full type contents for the
 * products() NhstaResponse return type.
 *
 * Any type that is used directly in the function overloads and not in this file will cause this.
 * So, theoretically, you could move all of those types here and the others live in their own file,
 * but that would spread the types out and they are only used here and in the tests, so it makes
 * sense to keep them together.
 */

/** All possible issue type strings */
export type ProductsIssueType = 'c' | 'complaints' | 'r' | 'recalls'

/**
 * All valid options for the `products()` function
 */
export type ProductsOptionsBase = {
  modelYear?: string | number
  make?: string
}

/**
 * Options to get all available `modelYear`s for the `issueType` passed to the `products()` function.
 *
 * Builds path: `/products/vehicle/modelYears?issueType={issueType}`
 */
export type ProductsOptionsEmpty = {
  modelYear?: undefined
  make?: undefined
}

/**
 * Options to get all available `make`s for the `options.modelYear` and `issueType` passed to the
 * `products()` function.
 *
 * Builds path: `/products/vehicle/makes?modelYear={modelYear}&issueType={issueType}`
 */
export type ProductsOptionsModelYear = {
  modelYear: string | number
  make?: undefined
}

/**
 * Options to get all available `model`s for the `options.modelYear`, `options.make`, and
 * `issueType` passed to the `products()` function.
 *
 * Builds path: `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType={issueType}`
 */
export type ProductsOptionsMake = {
  modelYear: string | number
  make: string
}

/**
 * All valid options combinations for the `products()` function
 */
export type ProductsOptions =
  | ProductsOptionsEmpty
  | ProductsOptionsModelYear
  | ProductsOptionsMake

/**
 * Ensures only valid options are passed to the `products()` function
 */
export type NoInvalidOptions<T extends ProductsOptions> = NoExtraProperties<
  ProductsOptionsBase,
  T
>

/**
 * Variant names used to type the `Results[]` of the `Products API` response based on the
 * `options` passed to the function. `ProductsResultsData` will be Pick<>ed based on the Variant
 * name.
 */
export type ProductsResultsVariant =
  | 'getModelYears'
  | 'getMakes'
  | 'getModels'
  | 'default'

/**
 * All possible properties and their value types, found in the `Results[]` objects of the
 * `Products API` response. This is typed with all properties optional so it can be used to
 * type the `Results[]` based on `options` passed to the `products()` function.
 *
 * For `ProductsResultsVariant` equal to `'getModels'` will have all properties defined, all other
 * Variants will only have some properties defined.
 */
export type ProductsResultsData = {
  modelYear?: string
  make?: string
  model?: string
}

/**
 * This is typed with Pick<> so the user can see the actual type of the `Results[]` objects when
 * they hover over the variable they saved the response to. Anything less verbose hides the
 * `Results[]` behind a type name and the user has to go look at the type definition to see what the
 * actual keys of the Results array objects are. They could of course just hit ctrl+enter to have
 * auto complete show them the keys, but this is more user friendly.
 */
/**
 * Types the `Results[]` of the `Products API` response based on the `ProductResultsVariant` passed
 * to this type.
 *
 * Used to type no options or `undefined` options as the second arg passed to `products()`.
 *
 * Also used in .test-d.ts files to easily match the expected return type of the function.
 */
export type ProductsResultsByVariant<Variant extends ProductsResultsVariant> =
  /* Pick<> ProductsResultsData based on Variant string */
  Variant extends 'getModelYears'
    ? /* Path /vehicle/modelYears */
      {
        [K in keyof Pick<
          ProductsResultsData,
          'modelYear'
        >]-?: ProductsResultsData[K]
      }
    : Variant extends 'getMakes'
    ? /* Path /vehicle/makes */
      {
        [K in keyof Pick<
          ProductsResultsData,
          'modelYear' | 'make'
        >]-?: ProductsResultsData[K]
      }
    : Variant extends 'getModels'
    ? /* Path /vehicle/models - all properties defined */
      {
        [K in keyof ProductsResultsData]-?: ProductsResultsData[K]
      }
    : /* fallback default value - all optional properties */
      ProductsResultsData

/**
 * Types the `Results[]` of the `Products API` response based on the `options` passed to the
 * `products()` function.
 */
export type ProductsResultsByOptions<Options extends ProductsOptions> =
  Options extends ProductsOptionsModelYear
    ? ProductsResultsByVariant<'getMakes'>
    : Options extends ProductsOptionsMake
    ? ProductsResultsByVariant<'getModels'>
    : Options extends ProductsOptionsEmpty
    ? ProductsResultsByVariant<'getModelYears'>
    : ProductsResultsByVariant<'default'>

/**
 * Types the return of the `products()` function based on the type of `ProductsOptions` passed to
 * this type, inferred from the `options` passed to the function.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `options` passed to the function.
 */
export type ProductsResponseByOptions<Options extends ProductsOptions> =
  NhtsaResponse<ProductsResultsByOptions<Options>, 'products'>

/**
 * Types the return of the `products()` function based on the `ProducsResultsVariant` passed to this
 * type.
 *
 * This type represents the complete parsed API response.
 *
 * The `Results[]` objects will be typed based on the `ProductsResultsVariant` passed to this type.
 */
export type ProductsResponseByVariant<
  Variant extends ProductsResultsVariant = 'default',
> = NhtsaResponse<ProductsResultsByVariant<Variant>, 'products'>

/**
 * This is the generic type of the parsed API response and is only meant to be a fallback type.
 *
 * The `Results[]` will be typed as `ProductsResultsData`, which is all possible properties
 * found in the Results objects of `Products API` paths, with all marked as optional
 * properties that could be undefined.
 */
export type ProductsResponse = NhtsaResponse<ProductsResultsData, 'products'>
