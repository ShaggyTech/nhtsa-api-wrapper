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
import type {
  NhtsaResponse,
  NoExtraProperties,
  QueryStringParamsEncoded,
} from '@/types'

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
 * - `products(issueType)`
 * - `products(issueType, {})`
 * - `products(issueType, { modelYear })`
 * - `products(issueType, { modelYear, make })`
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
 * ## Rules
 *
 * There are several rules to follow when using this API or you will errors from the NHTSA API.
 *
 * 1. You must provide an `issueType`.
 * 2. If you provide a `make` then you must also provide a `modelYear`.
 *
 * Consequences of breaking the rules:
 *
 * - Rule #1 - if you don't pass a valid `issueType` you will get some data back, but it will be
 *   invalid and not what you expect. This function also enforces this rule internally and will throw
 *   an `Error` if you pass an invalid `issueType`.
 * - Rule #2 - this function will throw an `Error` as a fail safe to prevent you from getting a
 *   404 network error from the NHTSA API.
 *
 * There will also be TypeScript errors if you pass invalid options or invalid combinations of
 * options.
 *
 * To clarify, this function will `throw Error`s in the following cases:
 *
 * - If you pass an invalid or no `issueType`.
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
 * Get all available model years in the recalls or complaints dataset, based on the `issueType`.
 *
 * If you pass no options, an empty object `{}`, `undefined`, or `true` as options, the
 * path and query string: `/products/vehicle/modelYears?issueType={issueType}` will be used.
 *
 * Example: Get a list of available model years in the recalls dataset
 * ```js
 * await products('r').then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "2024", "2023", "2022", etc
 *   })
 * })
 *
 * // Or use doFetch = false to get the url string instead of fetching the data
 * const url = await products('r', false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r&format=json"
 * ```
 *
 * ### Get Makes for Model Year
 *
 * Get all available makes in the recalls or complaints dataset, based on the `issueType`, for a
 * specific `modelYear`.
 *
 * If you pass a `modelYear` as the only option, the path and query string
 * `/products/vehicle/makes?modelYear={modelYear}&issueType={issueType}` will be used.
 *
 * Example: Get a list of available makes for the 2013 model year in the recalls dataset
 * ```js
 * await products('r', { modelYear: 2013 })
 * .then((response) => {
 *   response.Results.forEach((result) => {
 *     console.log(result.modelYear) // "ACURA", "AUDI", "BENTLEY", etc.
 *     console.log(result.make) // "JETTA", "ACCORD", etc.
 *   })
 * })
 *
 * // Or use doFetch = false to get the url string instead of fetching the data
 * const url = await products('r', { modelYear: 2013 }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/makes?modelYear=2013&issueType=r&format=json"
 * ```
 *
 * If you need to get all available model years, first call the function with no options.
 *
 * ### Get Models for Make
 *
 * Get all available models in the recalls or complaints dataset, based on the `issueType` for a
 * specific `modelYear` and `make`.
 *
 * If you pass a `modelYear` and `make` as options, the path and query string
 * `/products/vehicle/models?modelYear={modelYear}&make={make}&issueType={issueType}` will be used.
 *
 * Example: Get a list of available models for a 2013 Honda in the recalls dataset
 * ```js
 * await products('r', {
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
 *
 * // Or use doFetch = false to get the url string instead of fetching the data
 * const url = await products('r', { modelYear: 2013, make: 'Honda' }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/products/vehicle/models?modelYear=2013&make=Honda&issueType=r&format=json"
 * ```
 *
 * If you need to get makes for a particular model year, first call the function with `modelYear` as
 * the only option to get all of the available makes.
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
 * - See type `ProductsResultsData` for a list of all possible properties.
 * - See type `ProductsResultsByVariant` for clarity on which properties will be included in the
 *   `Results[]` based on the `options` passed.
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
    let path = ''
    let encodedParams: QueryStringParamsEncoded<ProductsOptions> = {}

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
        {
          name: 'options',
          value: options,
          types: ['object'],
          validKeys: ['modelYear', 'make'],
        },
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

    /* options are guaranteed to be an object by now because of catchInvalidArguments() */
    if (options) {
      const { modelYear, make } = encodeQueryStringParams(options)
      encodedParams = { modelYear, make }

      /* Build the API URL path */
      if (modelYear && make) path = `vehicle/models`
      else if (modelYear) path = `vehicle/makes`
    }

    /* If there were no options passed, then path should still be vehicle/modelYears */
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
