import { describe, expectTypeOf, test } from 'vitest'

import {
  complaints,
  type ComplaintsOptions,
  type ComplaintsOptionsEmpty,
  type ComplaintsOptionsMake,
  type ComplaintsOptionsModelYear,
  type ComplaintsOptionsOdiNumber,
  type ComplaintsOptionsVehicle,
  type ComplaintsResponseByOptions,
  type ComplaintsResponseByVariant,
} from '../complaints'

const modelYearString = '2020'
const modelYearNumber = 2020
const modelYear = modelYearNumber
const make = 'Volkswagen'
const model = 'Atlas'
const odiNumberAsString = 11549247
const odiNumberAsNumber = '11549247'
const odiNumber = odiNumberAsNumber

test('Typecheck: complaints() - parameters - ', () => {
  expectTypeOf<typeof complaints>().toBeFunction()
  expectTypeOf<typeof complaints>().parameters.toMatchTypeOf<
    [
      options?: boolean | ComplaintsOptions | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: complaints() - return correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with no arguments', async () => {
    const result = await complaints()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with no options and doFetch = true', async () => {
    const result = await complaints(true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with undefined as first argument', async () => {
    const result = await complaints(undefined)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with undefined as first argument and doFetch = true', async () => {
    const result = await complaints(undefined, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with undefined as both arguments', async () => {
    const result = await complaints(undefined, undefined)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with empty object as first argument', async () => {
    const result = await complaints({})

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with empty object as first argument and doFetch = true', async () => {
    const result = await complaints({}, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.modelYear as string', async () => {
    const result = await complaints({ modelYear: modelYearString })

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.modelYear as string and doFetch = true', async () => {
    const result = await complaints({ modelYear: modelYearString }, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.modelYear as number', async () => {
    const result = await complaints({ modelYear: modelYearNumber })

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.modelYear as number and doFetch = true', async () => {
    const result = await complaints({ modelYear: modelYearNumber }, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.make', async () => {
    const result = await complaints({ modelYear, make })

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.make and doFetch = true', async () => {
    const result = await complaints({ modelYear, make }, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'vehicle'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()
  })

  test('with options.model', async () => {
    const result = await complaints({ modelYear, make, model })

    expectTypeOf(result).toEqualTypeOf<ComplaintsResponseByVariant<'vehicle'>>()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
  })

  test('with options.model and doFetch = true', async () => {
    const result = await complaints({ modelYear, make, model }, true)

    expectTypeOf(result).toEqualTypeOf<ComplaintsResponseByVariant<'vehicle'>>()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsVehicle>
    >()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
  })

  test('with options.odiNumber', async () => {
    const result = await complaints({ odiNumber })

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
  })

  test('with options.odiNumber as string and doFetch = true', async () => {
    const result = await complaints({ odiNumber: odiNumberAsString }, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
  })

  test('with options.odiNumber as number and doFetch = true', async () => {
    const result = await complaints({ odiNumber: odiNumberAsNumber }, true)

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByVariant<'odiNumber'>
    >()
    expectTypeOf(result).toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsOdiNumber>
    >()

    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'default'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModelYears'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getMakes'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByVariant<'getModels'>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptions>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsEmpty>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsModelYear>
    >()
    expectTypeOf(result).not.toEqualTypeOf<
      ComplaintsResponseByOptions<ComplaintsOptionsMake>
    >()
  })
})

describe('Typecheck: complaints() - returns type string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with doFetch = false', async () => {
    expectTypeOf(await complaints(false)).toEqualTypeOf<string>()
  })

  test('with undefined as first argument and doFetch = false', async () => {
    expectTypeOf(await complaints(undefined, false)).toEqualTypeOf<string>()
  })

  test('with empty object as first argument and doFetch = false', async () => {
    expectTypeOf(await complaints({}, false)).toEqualTypeOf<string>()
  })

  test('with options.modelYear as string and doFetch = false', async () => {
    expectTypeOf(
      await complaints({ modelYear: modelYearString }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.modelYear as number and doFetch = false', async () => {
    expectTypeOf(
      await complaints({ modelYear: modelYearNumber }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.make and doFetch = false', async () => {
    expectTypeOf(
      await complaints({ modelYear, make }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.model and doFetch = false', async () => {
    expectTypeOf(
      await complaints({ modelYear, make, model }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.odiNumber and doFetch = false', async () => {
    expectTypeOf(await complaints({ odiNumber }, false)).toEqualTypeOf<string>()
  })
})
