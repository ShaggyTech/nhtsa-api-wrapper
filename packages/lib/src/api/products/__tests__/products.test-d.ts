import { describe, expectTypeOf, test } from 'vitest'

import {
  products,
  type NoInvalidOptions,
  type ProductsIssueType,
  type ProductsOptions,
  type ProductsOptionsEmpty,
  type ProductsOptionsMake,
  type ProductsOptionsModelYear,
  type ProductsResponseByOptions,
  type ProductsResponseByVariant,
} from '../products'

const issueTypeC = 'c'
const issueTypeR = 'r'
const issueTypeComplaints = 'complaints'
const issueTypeRecalls = 'recalls'
const issueType = issueTypeC
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const make = 'Audi'

test('Typecheck: products() - parameters - ', () => {
  expectTypeOf<typeof products>().toBeFunction()
  expectTypeOf<typeof products>().parameters.toMatchTypeOf<
    [
      issueType: ProductsIssueType,
      options?: boolean | NoInvalidOptions<ProductsOptions> | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: products() - returns correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with issueType = "c"', async () => {
    const result = await products(issueTypeC)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType = "complaints"', async () => {
    const result = await products(issueTypeComplaints)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
  })

  test('with issueType = "r"', async () => {
    const result = await products(issueTypeR)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
  })

  test('with issueType = "recalls"', async () => {
    const result = await products(issueTypeRecalls)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
  })

  test('with issueType and doFetch = true', async () => {
    const result = await products(issueType, true)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType and options/doFetch = undefined', async () => {
    const result = await products(issueType, undefined)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType, options = undefined, and doFetch = true', async () => {
    const result = await products(issueType, undefined, true)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType and options = {}', async () => {
    const result = await products(issueType, {})

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType, options = {}, and doFetch = true', async () => {
    const result = await products(issueType, {}, true)

    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType and options.modelYear as string', async () => {
    const result = await products(issueType, { modelYear: modelYearString })

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
  })

  test('with issueType and options.modelYear as number', async () => {
    const result = await products(issueType, { modelYear: modelYearNumber })

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType, options.modelYear, and doFetch = true', async () => {
    const result = await products(issueType, { modelYear }, true)

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
  })

  test('with issueType, options.modelYear, and options.make = undefined', async () => {
    const result = await products(issueType, { modelYear, make: undefined })

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()
  })

  test('with issueType, options.modelYear, and options.make', async () => {
    const result = await products(issueType, { modelYear, make })

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getModels'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })

  test('with issueType, options.modelYear, options.make, and doFetch = true', async () => {
    const result = await products(issueType, { modelYear, make }, true)

    expectTypeOf(result).toEqualTypeOf<ProductsResponseByVariant<'getModels'>>()
    expectTypeOf(result).toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ProductsResponseByOptions<ProductsOptionsModelYear>
    >()
  })
})

describe('Typecheck: products() - returns type string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with issueType and doFetch = false', async () => {
    expectTypeOf(await products(issueType, false)).toEqualTypeOf<string>()
  })

  test('with issueType, options = undefined, and doFetch = false', async () => {
    expectTypeOf(
      await products(issueType, undefined, false)
    ).toEqualTypeOf<string>()
  })

  test('with issueType, options = {}, and doFetch = false', async () => {
    expectTypeOf(await products(issueType, {}, false)).toEqualTypeOf<string>()
  })

  test('with issueType, options.modelYear, and doFetch = false', async () => {
    expectTypeOf(
      await products(issueType, { modelYear }, false)
    ).toEqualTypeOf<string>()
  })

  test('with issueType, options.modelYear, options.make, and doFetch = false', async () => {
    expectTypeOf(
      await products(issueType, { modelYear, make }, false)
    ).toEqualTypeOf<string>()
  })
})
