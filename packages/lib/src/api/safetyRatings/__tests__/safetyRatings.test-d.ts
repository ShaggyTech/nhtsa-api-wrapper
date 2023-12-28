import { describe, expectTypeOf, test } from 'vitest'

import {
  safetyRatings,
  type SafetyRatingsOptions,
  type SafetyRatingsOptionsEmpty,
  type SafetyRatingsOptionsMake,
  type SafetyRatingsOptionsVehicle,
  type SafetyRatingsOptionsModelYear,
  type SafetyRatingsOptionsVehicleId,
  type SafetyRatingsResponseByOptions,
  type SafetyRatingsResponseByVariant,
} from '../safetyRatings'

const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const make = 'Audi'
const model = 'A5'
const vehicleIdString = '1234'
const vehicleIdNumber = 1234

test('Typecheck: safetyRatings() - parameters - ', () => {
  expectTypeOf<typeof safetyRatings>().toBeFunction()
  expectTypeOf<typeof safetyRatings>().parameters.toMatchTypeOf<
    [
      options?: boolean | SafetyRatingsOptions | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: safetyRatings() - return correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with no arguments', async () => {
    const result = await safetyRatings()

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with no options and doFetch = true', async () => {
    const result = await safetyRatings(true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with undefined as first argument', async () => {
    const result = await safetyRatings(undefined)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with undefined as first argument and doFetch = true', async () => {
    const result = await safetyRatings(undefined, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with undefined as both arguments', async () => {
    const result = await safetyRatings(undefined, undefined)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with empty object as first argument', async () => {
    const result = await safetyRatings({})

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with empty object as first argument and doFetch = true', async () => {
    const result = await safetyRatings({}, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.modelYear as string', async () => {
    const result = await safetyRatings({ modelYear: modelYearString })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.modelYear as string and doFetch = true', async () => {
    const result = await safetyRatings({ modelYear: modelYearString }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.modelYear as number', async () => {
    const result = await safetyRatings({ modelYear: modelYearNumber })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.modelYear as number and doFetch = true', async () => {
    const result = await safetyRatings({ modelYear: modelYearNumber }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.make', async () => {
    const result = await safetyRatings({ modelYear, make })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.make and doFetch = true', async () => {
    const result = await safetyRatings({ modelYear, make }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.model', async () => {
    const result = await safetyRatings({ modelYear, make, model })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.model and doFetch = true', async () => {
    const result = await safetyRatings({ modelYear, make, model }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.vehicleId as string', async () => {
    const result = await safetyRatings({ vehicleId: vehicleIdString })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
  })

  test('with options.vehicleId as string and doFetch = true', async () => {
    const result = await safetyRatings({ vehicleId: vehicleIdString }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
  })

  test('with options.vehicleId as number', async () => {
    const result = await safetyRatings({ vehicleId: vehicleIdNumber })

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
  })

  test('with options.vehicleId as number and doFetch = true', async () => {
    const result = await safetyRatings({ vehicleId: vehicleIdNumber }, true)

    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicleId'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicle>
    >()
  })
})

describe('Typecheck: safetyRatings() - returns type string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with doFetch = false', async () => {
    expectTypeOf(await safetyRatings(false)).toEqualTypeOf<string>()
  })

  test('with undefined as first argument and doFetch = false', async () => {
    expectTypeOf(await safetyRatings(undefined, false)).toEqualTypeOf<string>()
  })

  test('with empty object as first argument and doFetch = false', async () => {
    expectTypeOf(await safetyRatings({}, false)).toEqualTypeOf<string>()
  })

  test('with options.modelYear as string and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearString }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.modelYear as number and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearNumber }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.make and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear, make }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.model and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear, make, model }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.vehicleId as string and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdString }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.vehicleId as number and doFetch = false', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdNumber }, false)
    ).toEqualTypeOf<string>()
  })
})
