import { describe, expectTypeOf, test } from 'vitest'

import {
  recalls,
  type RecallsOptions,
  type RecallsOptionsCampaignNumber,
  type RecallsOptionsEmpty,
  type RecallsOptionsMake,
  type RecallsOptionsModelYear,
  type RecallsOptionsVehicle,
  type RecallsResponseByOptions,
  type RecallsResponseByVariant,
} from '../recalls'

const modelYearString = '2020'
const modelYearNumber = 2020
const modelYear = modelYearNumber
const make = 'Volkswagen'
const model = 'Atlas'
const campaignNumber = '20V505000'

test('Typecheck: recalls() - parameters - ', () => {
  expectTypeOf<typeof recalls>().toBeFunction()
  expectTypeOf<typeof recalls>().parameters.toMatchTypeOf<
    [
      options?: boolean | RecallsOptions | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: recalls() - return correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with no arguments', async () => {
    const result = await recalls()

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with no options and doFetch = true', async () => {
    const result = await recalls(true)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with undefined as first argument', async () => {
    const result = await recalls(undefined)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with undefined as first argument and doFetch = true', async () => {
    const result = await recalls(undefined, true)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with undefined as both arguments', async () => {
    const result = await recalls(undefined, undefined)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with empty object as first argument', async () => {
    const result = await recalls({})

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with empty object as first argument and doFetch = true', async () => {
    const result = await recalls({}, true)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.modelYear as string', async () => {
    const result = await recalls({ modelYear: modelYearString })

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.modelYear as string and doFetch = true', async () => {
    const result = await recalls({ modelYear: modelYearString }, true)

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.modelYear as number', async () => {
    const result = await recalls({ modelYear: modelYearNumber })

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.modelYear as number and doFetch = true', async () => {
    const result = await recalls({ modelYear: modelYearNumber }, true)

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getMakes'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.make', async () => {
    const result = await recalls({ modelYear, make })

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getModels'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.make and doFetch = true', async () => {
    const result = await recalls({ modelYear, make }, true)

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'getModels'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.model', async () => {
    const result = await recalls({ modelYear, make, model })

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'vehicle'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.model and doFetch = true', async () => {
    const result = await recalls({ modelYear, make, model }, true)

    expectTypeOf(result).toEqualTypeOf<RecallsResponseByVariant<'vehicle'>>()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()
  })

  test('with options.campaignNumber', async () => {
    const result = await recalls({ campaignNumber })

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
  })

  test('with options.campaignNumber and doFetch = true', async () => {
    const result = await recalls({ campaignNumber }, true)

    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByVariant<'campaignNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsCampaignNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      RecallsResponseByOptions<RecallsOptionsVehicle>
    >()
  })
})

describe('Typecheck: recalls() - returns type string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with doFetch = false', async () => {
    expectTypeOf(await recalls(false)).toEqualTypeOf<string>()
  })

  test('with undefined as first argument and doFetch = false', async () => {
    expectTypeOf(await recalls(undefined, false)).toEqualTypeOf<string>()
  })

  test('with empty object as first argument and doFetch = false', async () => {
    expectTypeOf(await recalls({}, false)).toEqualTypeOf<string>()
  })

  test('with options.modelYear as string and doFetch = false', async () => {
    expectTypeOf(
      await recalls({ modelYear: modelYearString }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.modelYear as number and doFetch = false', async () => {
    expectTypeOf(
      await recalls({ modelYear: modelYearNumber }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.make and doFetch = false', async () => {
    expectTypeOf(
      await recalls({ modelYear, make }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.model and doFetch = false', async () => {
    expectTypeOf(
      await recalls({ modelYear, make, model }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.campaignNumber and doFetch = false', async () => {
    expectTypeOf(
      await recalls({ campaignNumber }, false)
    ).toEqualTypeOf<string>()
  })
})
