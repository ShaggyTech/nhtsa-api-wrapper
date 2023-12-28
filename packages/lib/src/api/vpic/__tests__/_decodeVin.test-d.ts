import { describe, expectTypeOf, test } from 'vitest'

import { decodeVin, type DecodeVinResponse } from '../_decodeVin'

const vin = 'WA1A4AFY2J2008189'
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber

test('Typecheck: decodeVin() - parameters - ', () => {
  expectTypeOf<typeof decodeVin>().toBeFunction()
  expectTypeOf<typeof decodeVin>().parameters.toMatchTypeOf<
    [
      vin: string,
      options?: boolean | { modelYear?: string | number } | undefined,
      doFetch?: boolean | undefined,
    ]
  >()
})

describe('Typecheck: products() - returns correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with vin', async () => {
    const result = await decodeVin(vin)
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin and doFetch = true', async () => {
    const result = await decodeVin(vin, true)
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin and options = undefined', async () => {
    const result = await decodeVin(vin, undefined)
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin and options = {}', async () => {
    const result = await decodeVin(vin, {})
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin, options = {}, and doFetch = true', async () => {
    const result = await decodeVin(vin, {}, true)
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin and options.modelYear as string', async () => {
    const result = await decodeVin(vin, { modelYear: modelYearString })
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin and options.modelYear as number', async () => {
    const result = await decodeVin(vin, { modelYear: modelYearNumber })
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })

  test('with vin, options.modelYear, and doFetch = true', async () => {
    const result = await decodeVin(vin, { modelYear }, true)
    expectTypeOf(result).toEqualTypeOf<DecodeVinResponse>()
  })
})

describe('Typecheck: decodeVin() - returns string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with vin and doFetch = false', async () => {
    const result = await decodeVin(vin, false)
    expectTypeOf(result).toEqualTypeOf<string>()
  })

  test('with vin, options = undefined, and doFetch = false', async () => {
    const result = await decodeVin(vin, undefined, false)
    expectTypeOf(result).toEqualTypeOf<string>()
  })

  test('with vin, options = {}, and doFetch = false', async () => {
    const result = await decodeVin(vin, {}, false)
    expectTypeOf(result).toEqualTypeOf<string>()
  })

  test('with vin, options.modelYear, and doFetch = false', async () => {
    const result = await decodeVin(vin, { modelYear }, false)
    expectTypeOf(result).toEqualTypeOf<string>()
  })
})
