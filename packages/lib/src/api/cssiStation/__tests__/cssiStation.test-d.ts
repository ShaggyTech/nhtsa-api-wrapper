import { describe, expectTypeOf, test } from 'vitest'

import {
  cssiStation,
  type CSSIOptions,
  type CSSIResponse,
} from '../cssiStation'

const state = 'TX'
const zipNumber = 78745
const zipString = '78745'
const zip = zipNumber
const locationNumbers = {
  lat: 32.7813,
  long: -96.797,
  miles: 25,
}
const locationStrings = {
  lat: '32.7813',
  long: '-96.7970',
  miles: '25',
}
const location = locationNumbers
const filtersLang = {
  lang: 'spanish',
}
const filtersCpsWeek = {
  cpsweek: true,
}
const filters = {
  lang: 'spanish',
  cpsweek: true,
}

test('Typecheck: cssiStation() - parameters - ', () => {
  expectTypeOf<typeof cssiStation>().toBeFunction()
  expectTypeOf<typeof cssiStation>().parameters.toMatchTypeOf<
    [options?: boolean | CSSIOptions | undefined, doFetch?: boolean | undefined]
  >()
})

describe('Typecheck: cssiStation() - return correct type of response data - ', () => {
  /*****************************
   * doFetch = true | undefined (default)
   ****************************/
  test('with no arguments', async () => {
    const result = await cssiStation()
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with no options and doFetch = true', async () => {
    const result = await cssiStation(true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with undefined as first argument', async () => {
    const result = await cssiStation(undefined)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with undefined as first argument and doFetch = true', async () => {
    const result = await cssiStation(undefined, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with undefined as both arguments', async () => {
    const result = await cssiStation(undefined, undefined)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with empty object as first argument', async () => {
    const result = await cssiStation({})
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with empty object as first argument and doFetch = true', async () => {
    const result = await cssiStation({}, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.state', async () => {
    const result = await cssiStation({ state })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.state and doFetch = true', async () => {
    const result = await cssiStation({ state }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.state and filters.lang', async () => {
    const result = await cssiStation({ state, filters: filtersLang })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.state and filters.lang and doFetch = true', async () => {
    const result = await cssiStation({ state, filters: filtersLang }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip as string', async () => {
    const result = await cssiStation({ zip: zipString })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip as string and doFetch = true', async () => {
    const result = await cssiStation({ zip: zipString }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip as number', async () => {
    const result = await cssiStation({ zip: zipNumber })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip as number and doFetch = true', async () => {
    const result = await cssiStation({ zip: zipNumber }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip and options.filters.lang', async () => {
    const result = await cssiStation({ zip, filters: filtersLang })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip and options.filters.cpWeek', async () => {
    const result = await cssiStation({ zip, filters: filtersCpsWeek })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with options.zip, options.filters, and doFetch = true', async () => {
    const result = await cssiStation({ zip, filters: filtersLang }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with option.location and values as strings', async () => {
    const result = await cssiStation({ location: locationStrings })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with option.location and values as numbers', async () => {
    const result = await cssiStation({ location: locationNumbers })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with option.location and doFetch = true', async () => {
    const result = await cssiStation({ location }, true)
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })

  test('with option.location and options.filters', async () => {
    const result = await cssiStation({ location, filters })
    expectTypeOf(result).toEqualTypeOf<CSSIResponse>()
  })
})

describe('Typecheck: cssiStation() - returns type string if doFetch = false - ', () => {
  /*****************************
   * doFetch = false
   ****************************/
  test('with doFetch = false', async () => {
    expectTypeOf(await cssiStation(false)).toEqualTypeOf<string>()
  })

  test('with undefined as first argument and doFetch = false', async () => {
    expectTypeOf(await cssiStation(undefined, false)).toEqualTypeOf<string>()
  })

  test('with empty object as first argument and doFetch = false', async () => {
    expectTypeOf(await cssiStation({}, false)).toEqualTypeOf<string>()
  })

  test('with options.state and doFetch = false', async () => {
    expectTypeOf(await cssiStation({ state }, false)).toEqualTypeOf<string>()
  })

  test('with options.state, filters.lang, and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ state, filters: filtersLang }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.zip as string and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ zip: zipString }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.zip as number and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ zip: zipNumber }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.zip, options.filters, and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ zip, filters: filtersLang }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.location values as strings and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ location: locationStrings }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.location values as numbers and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ location: locationNumbers }, false)
    ).toEqualTypeOf<string>()
  })

  test('with options.location, filters, and doFetch = false', async () => {
    expectTypeOf(
      await cssiStation({ location, filters }, false)
    ).toEqualTypeOf<string>()
  })
})
