import { describe, expectTypeOf, test } from 'vitest'

import { safetyRatings, type NoInvalidOptions } from '../'

import type {
  SafetyRatingsOptions,
  SafetyRatingsOptionsEmpty,
  SafetyRatingsOptionsMake,
  SafetyRatingsOptionsModel,
  SafetyRatingsOptionsModelYear,
  SafetyRatingsOptionsVehicleId,
  SafetyRatingsResponseByOptions,
  SafetyRatingsResponseByVariant,
} from '../types'

const vehicleIdString = '1234'
const vehicleIdNumber = 1234
// const vehicleId = vehicleIdNumber
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const make = 'Audi'
const model = 'A5'

test('Typecheck: safetyRatings() - parameters - ', () => {
  expectTypeOf<typeof safetyRatings>().toBeFunction()
  expectTypeOf<typeof safetyRatings>().parameters.toMatchTypeOf<
    [
      options?: boolean | NoInvalidOptions<SafetyRatingsOptions> | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: safetyRatings() - return correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with no arguments', async () => {
    expectTypeOf(await safetyRatings()).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with no options and doFetch = true', async () => {
    expectTypeOf(await safetyRatings(true)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with undefined as first argument', async () => {
    expectTypeOf(await safetyRatings(undefined)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with undefined as first argument and doFetch = true', async () => {
    expectTypeOf(await safetyRatings(undefined, true)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with undefined as both arguments', async () => {
    expectTypeOf(await safetyRatings(undefined, undefined)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with empty object as first argument', async () => {
    expectTypeOf(await safetyRatings({})).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with empty object as first argument and doFetch = true', async () => {
    expectTypeOf(await safetyRatings({}, true)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'getModelYears'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsEmpty>
    >()
  })

  test('with options.modelYear as string', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearString })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'modelYear'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
  })

  test('with options.modelYear as string and doFetch = true', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearString }, true)
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'modelYear'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
  })

  test('with options.modelYear as number', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearNumber })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'modelYear'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
  })

  test('with options.modelYear as number and doFetch = true', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear: modelYearNumber }, true)
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'modelYear'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
  })

  test('with options.make', async () => {
    expectTypeOf(await safetyRatings({ modelYear, make })).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'make'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
  })

  test('with options.make and doFetch = true', async () => {
    expectTypeOf(await safetyRatings({ modelYear, make }, true)).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'make'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
  })

  test('with options.model', async () => {
    expectTypeOf(await safetyRatings({ modelYear, make, model })).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'model'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModel>
    >()
  })

  test('with options.model and doFetch = true', async () => {
    expectTypeOf(
      await safetyRatings({ modelYear, make, model }, true)
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'model'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModel>
    >()
  })

  test('with options.vehicleId as string', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdString })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'vehicleId'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.vehicleId as string and doFetch = true', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdString }, true)
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'vehicleId'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.vehicleId as number', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdNumber })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'vehicleId'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.vehicleId as number and doFetch = true', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: vehicleIdNumber }, true)
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'vehicleId'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsVehicleId>
    >()
  })

  test('with options.modelYear, and options.vehicleId = undefined, ', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: undefined, modelYear })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'modelYear'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModelYear>
    >()
  })

  test('with options.modelYear, options.make, and options.vehicleId = undefined, ', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: undefined, modelYear, make })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'make'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsMake>
    >()
  })

  test('with options.modelYear, options.make, options.model, and options.vehicleId = undefined, ', async () => {
    expectTypeOf(
      await safetyRatings({ vehicleId: undefined, modelYear, make, model })
    ).toEqualTypeOf<
      | SafetyRatingsResponseByVariant<'model'>
      | SafetyRatingsResponseByOptions<SafetyRatingsOptionsModel>
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

  test('with udnefined as first argument and doFetch = false', async () => {
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
