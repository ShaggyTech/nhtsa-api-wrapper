import { beforeEach, describe, expect, test } from 'vitest'
import { cssiStation } from '../cssiStation'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const state = 'TX'
const zipNumber = 78745
const zipString = '78745'
const zip = zipNumber
const lat = 32.7813
const long = -96.7971
const miles = 25
const locationNumbers = {
  lat,
  long,
  miles,
}
const locationStrings = {
  lat: '32.7813',
  long: '-96.7971',
  miles: '25',
}
const location = locationNumbers
const lang = 'spanish'
const cpsweek = true
const filtersLang = {
  lang,
}
const filtersCpsWeek = {
  cpsweek,
}
const filters = {
  lang,
  cpsweek,
}

// https://api.nhtsa.gov/CSSIStation
// https://api.nhtsa.gov/CSSIStation/state/TX
// https://api.nhtsa.gov/CSSIStation/state/tx/lang/spanish
// https://api.nhtsa.gov/CSSIStation/zip/78745
// https://api.nhtsa.gov/CSSIStation/zip/78745/lang/spanish
// https://api.nhtsa.gov/CSSIStation/zip/12345/cspweek
// https://api.nhtsa.gov/CSSIStation/zip/12345/cspweek?lang=spanish
// https://api.nhtsa.gov/CSSIStation?lat=32.7813&long=-96.7970&miles=25
// https://api.nhtsa.gov/CSSIStation?lat=32.7813&long=-96.7970&miles=25&lang=spanish
// https://api.nhtsa.gov/CSSIStation?lat=32.7813&long=-96.7970&miles=25&cpsweek
// https://api.nhtsa.gov/CSSIStation?lat=32.7813&long=-96.7970&miles=25&cpsweek&lang=spanish

const baseUrl = 'https://api.nhtsa.gov/CSSIStation/'
const mockUrlBase = `${baseUrl}?format=json`
const mockUrlState = `${baseUrl}state/${state}?format=json`
const mockUrlStateLang = `${baseUrl}state/${state}/lang/${lang}?format=json`
const mockUrlZip = `${baseUrl}zip/${zip}?format=json`
const mockUrlZipLang = `${baseUrl}zip/${zip}/lang/${lang}?format=json`
const mockUrlZipCpsweek = `${baseUrl}zip/${zip}/cpsweek?format=json`
const mockUrlZipCpsweekLang = `${baseUrl}zip/${zip}/cpsweek?lang=${lang}&format=json`
const mockUrlLocationBase = `${baseUrl}?lat=${lat}&long=${long}&miles=${miles}`
const mockUrlLocation = `${mockUrlLocationBase}&format=json`
const mockUrlLocationLang = `${mockUrlLocationBase}&lang=${lang}&format=json`
const mockUrlLocationCpsweek = `${mockUrlLocationBase}&cpsweek=${cpsweek}&format=json`
const mockUrlLocationCpsweekLang = `${mockUrlLocationBase}&lang=${lang}&cpsweek=${cpsweek}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof cssiStation>
  expectedUrl: string
}

describe('cssiStation()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(cssiStation).toBeDefined()
    expect(cssiStation).toBeInstanceOf(Function)
    expect(cssiStation()).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  describe('Fetches API data with: ', () => {
    test.each<TestEach>([
      // no arguments, empty object, undefined - returns all available model years
      { description: 'no arguments', args: [], expectedUrl: mockUrlBase },
      {
        description: 'doFetch = true as first argument',
        args: [true],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'undefined as first argument',
        args: [undefined],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'undefined as first argument and doFetch = true',
        args: [undefined, true],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'empty object as first argument',
        args: [{}],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'empty object as first argument and doFetch = true',
        args: [{}, true],
        expectedUrl: mockUrlBase,
      },
      // options.state
      {
        description: 'options.state',
        args: [{ state }],
        expectedUrl: mockUrlState,
      },
      {
        description: 'options.state and doFetch = true',
        args: [{ state }, true],
        expectedUrl: mockUrlState,
      },
      // options.state and filters.lang
      {
        description: 'options.state and filters.lang',
        args: [{ state, filters: filtersLang }],
        expectedUrl: mockUrlStateLang,
      },
      {
        description: 'options.state and filters.lang and doFetch = true',
        args: [{ state, filters: filtersLang }, true],
        expectedUrl: mockUrlStateLang,
      },
      // options.zip
      {
        description: 'options.zip as number',
        args: [{ zip: zipNumber }],
        expectedUrl: mockUrlZip,
      },
      {
        description: 'options.zip as number and doFetch = true',
        args: [{ zip: zipNumber }, true],
        expectedUrl: mockUrlZip,
      },
      {
        description: 'options.zip as string',
        args: [{ zip: zipString }],
        expectedUrl: mockUrlZip,
      },
      {
        description: 'options.zip as string and doFetch = true',
        args: [{ zip: zipString }, true],
        expectedUrl: mockUrlZip,
      },
      // options.zip and filters.lang
      {
        description: 'options.zip and filters.lang',
        args: [{ zip, filters: filtersLang }],
        expectedUrl: mockUrlZipLang,
      },
      {
        description: 'options.zip and filters.lang and doFetch = true',
        args: [{ zip, filters: filtersLang }, true],
        expectedUrl: mockUrlZipLang,
      },
      // options.zip and filters.cpsweek
      {
        description: 'options.zip and filters.cpsweek',
        args: [{ zip, filters: filtersCpsWeek }],
        expectedUrl: mockUrlZipCpsweek,
      },
      {
        description: 'options.zip and filters.cpsweek and doFetch = true',
        args: [{ zip, filters: filtersCpsWeek }, true],
        expectedUrl: mockUrlZipCpsweek,
      },
      // options.zip and filters.cpsweek and filters.lang
      {
        description: 'options.zip and filters.cpsweek and filters.lang',
        args: [{ zip, filters }],
        expectedUrl: mockUrlZipCpsweekLang,
      },
      {
        description:
          'options.zip and filters.cpsweek and filters.lang and doFetch = true',
        args: [{ zip, filters }, true],
        expectedUrl: mockUrlZipCpsweekLang,
      },
      // location
      {
        description: 'options.location as numbers',
        args: [{ location: locationNumbers }],
        expectedUrl: mockUrlLocation,
      },
      {
        description: 'options.location as numbers and doFetch = true',
        args: [{ location: locationNumbers }, true],
        expectedUrl: mockUrlLocation,
      },
      {
        description: 'options.location as strings',
        args: [{ location: locationStrings }],
        expectedUrl: mockUrlLocation,
      },
      {
        description: 'options.location as strings and doFetch = true',
        args: [{ location: locationStrings }, true],
        expectedUrl: mockUrlLocation,
      },
      // location and filters.lang
      {
        description: 'options.location and filters.lang',
        args: [{ location, filters: filtersLang }],
        expectedUrl: mockUrlLocationLang,
      },
      {
        description: 'options.location and filters.lang and doFetch = true',
        args: [{ location, filters: filtersLang }, true],
        expectedUrl: mockUrlLocationLang,
      },
      // location and filters.cpsweek
      {
        description: 'options.location and filters.cpsweek',
        args: [{ location, filters: filtersCpsWeek }],
        expectedUrl: mockUrlLocationCpsweek,
      },
      {
        description: 'options.location and filters.cpsweek and doFetch = true',
        args: [{ location, filters: filtersCpsWeek }, true],
        expectedUrl: mockUrlLocationCpsweek,
      },
      // location and filters.cpsweek and filters.lang
      {
        description: 'options.location and filters.cpsweek and filters.lang',
        args: [{ location, filters }],
        expectedUrl: mockUrlLocationCpsweekLang,
      },
      {
        description:
          'options.location and filters.cpsweek and filters.lang and doFetch = true',
        args: [{ location, filters }, true],
        expectedUrl: mockUrlLocationCpsweekLang,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await cssiStation(...args)
      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expectedFetchOptions)
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(expectedUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })
  })

  /*****************************
   * doFetch = false
   ***************************/
  describe('Returns API URL string with: ', () => {
    test.each<TestEach>([
      {
        description: 'doFetch = false as first argument',
        args: [false],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'undefined as first argument and doFetch = false',
        args: [undefined, false],
        expectedUrl: mockUrlBase,
      },
      {
        description: 'empty object and doFetch = false',
        args: [{}, false],
        expectedUrl: mockUrlBase,
      },
      // options.state
      {
        description: 'options.state and doFetch = false',
        args: [{ state }, false],
        expectedUrl: mockUrlState,
      },
      // options.state and filters.lang
      {
        description: 'options.state and filters.lang and doFetch = false',
        args: [{ state, filters: filtersLang }, false],
        expectedUrl: mockUrlStateLang,
      },
      // options.zip
      {
        description: 'options.zip as number and doFetch = false',
        args: [{ zip: zipNumber }, false],
        expectedUrl: mockUrlZip,
      },
      {
        description: 'options.zip as string and doFetch = false',
        args: [{ zip: zipString }, false],
        expectedUrl: mockUrlZip,
      },
      // options.zip and filters.lang
      {
        description: 'options.zip and filters.lang and doFetch = false',
        args: [{ zip, filters: filtersLang }, false],
        expectedUrl: mockUrlZipLang,
      },
      // options.zip and filters.cpsweek
      {
        description: 'options.zip and filters.cpsweek and doFetch = false',
        args: [{ zip, filters: filtersCpsWeek }, false],
        expectedUrl: mockUrlZipCpsweek,
      },
      // options.zip and filters.cpsweek and filters.lang
      {
        description:
          'options.zip and filters.cpsweek and filters.lang and doFetch = false',
        args: [{ zip, filters }, false],
        expectedUrl: mockUrlZipCpsweekLang,
      },
      // location
      {
        description: 'options.location as numbers and doFetch = false',
        args: [{ location: locationNumbers }, false],
        expectedUrl: mockUrlLocation,
      },
      {
        description: 'options.location as strings and doFetch = false',
        args: [{ location: locationStrings }, false],
        expectedUrl: mockUrlLocation,
      },
      // location and filters.lang
      {
        description: 'options.location and filters.lang and doFetch = false',
        args: [{ location, filters: filtersLang }, false],
        expectedUrl: mockUrlLocationLang,
      },
      // location and filters.cpsweek
      {
        description: 'options.location and filters.cpsweek and doFetch = false',
        args: [{ location, filters: filtersCpsWeek }, false],
        expectedUrl: mockUrlLocationCpsweek,
      },
      // location and filters.cpsweek and filters.lang
      {
        description:
          'options.location and filters.cpsweek and filters.lang and doFetch = false',
        args: [{ location, filters }, false],
        expectedUrl: mockUrlLocationCpsweekLang,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await cssiStation(...args)

      expect(results).toEqual(expectedUrl)
      expect(fetchMock.requests().length).toEqual(0)
    })
  })

  /*****************************
   * rejects with error
   ***************************/
  describe('Rejects with Error if: ', () => {
    test.each(['string', 123, ['array'], null, () => {}])(
      'options is neither an object nor boolean, <%s>',
      async (arg) => {
        await expect(() =>
          // @ts-expect-error Type (x) is not assignable to type ...
          cssiStation(arg)
        ).rejects.toThrowError(
          /error validating argument named "options", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([123, { object: 123 }, ['array'], true, false, null, () => {}])(
      'options.state is not a string, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            // @ts-expect-error Type (x) is not assignable to type 'string | undefined
            state: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "state", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, false, null, () => {}])(
      'options.zip is neither string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            // @ts-expect-error Type (x) is not assignable to type string | number | undefined
            zip: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "zip", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([123, 'string', ['array'], true, false, null, () => {}])(
      'options.location is not an object, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            // @ts-expect-error Type (x) is not assignable to type 'Location' | undefined
            location: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "location", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, () => {}])(
      'options.location.lat is neither string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            location: {
              // @ts-expect-error Type (x) is not assignable to type string | number | undefined
              lat: arg,
              long,
              miles,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "location.lat", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, () => {}])(
      'options.location.long is neither string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            location: {
              lat,
              // @ts-expect-error Type (x) is not assignable to type string | number | undefined
              long: arg,
              miles,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "location.long", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, () => {}])(
      'options.location.miles is neither string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            location: {
              lat,
              long,
              // @ts-expect-error Type (x) is not assignable to type string | number | undefined
              miles: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "location.miles", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each(['string', 123, ['array'], true, false, null, () => {}])(
      'options.filters is not an object <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            state,
            // @ts-expect-error Type (x) is not assignable to type 'filters' | undefined
            filters: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "filters", must be of type/
        )

        await expect(() =>
          cssiStation({
            zip,
            // @ts-expect-error Type (x) is not assignable to type 'filters' | undefined
            filters: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "filters", must be of type/
        )

        await expect(() =>
          cssiStation({
            location,
            // @ts-expect-error Type (x) is not assignable to type 'filters' | undefined
            filters: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "filters", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([123, ['array'], true, false, null, () => {}])(
      'options.filters.lang is neither string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            state,
            filters: {
              // @ts-expect-error Type (x) is not assignable to type string | undefined
              lang: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "filters.lang", must be of type/
        )

        await expect(() =>
          cssiStation({
            zip,
            filters: {
              cpsweek,
              // @ts-expect-error Type (x) is not assignable to type string | undefined
              lang: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "filters.lang", must be of type/
        )

        await expect(() =>
          cssiStation({
            location,
            filters: {
              cpsweek,
              // @ts-expect-error Type (x) is not assignable to type string | undefined
              lang: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "filters.lang", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each(['string', 123, { object: 123 }, ['array'], null, () => {}])(
      'options.filters.cpsweek is not a boolean, <%s>',
      async (arg) => {
        await expect(() =>
          cssiStation({
            zip,
            filters: {
              lang,
              // @ts-expect-error Type (x) is not assignable to type boolean | undefined
              cpsweek: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "filters.cpsweek", must be of type/
        )

        await expect(() =>
          cssiStation({
            location,
            filters: {
              lang,
              // @ts-expect-error Type (x) is not assignable to type boolean | undefined
              cpsweek: arg,
            },
          })
        ).rejects.toThrowError(
          /error validating argument named "filters.cpsweek", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test('options.location is missing lat', async () => {
      await expect(() =>
        cssiStation({
          // @ts-expect-error Property 'lat' is missing in type 'x' but required in type 'x'
          location: {
            long,
            miles,
          },
        })
      ).rejects.toThrowError(/error validating argument named "location.lat"/)

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options.location is missing long', async () => {
      await expect(() =>
        cssiStation({
          // @ts-expect-error Property 'long' is missing in type 'x' but required in type 'x'
          location: {
            lat,
            miles,
          },
        })
      ).rejects.toThrowError(/error validating argument named "location.long"/)

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options.location is missing miles', async () => {
      await expect(() =>
        cssiStation({
          // @ts-expect-error Property 'miles' is missing in type 'x' but required in type 'x'
          location: {
            lat,
            long,
          },
        })
      ).rejects.toThrowError(/error validating argument named "location.miles"/)

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options includes combinations of state, zip, and location', async () => {
      await expect(() =>
        cssiStation({
          state,
          // @ts-expect-error Type 'number' is not assignable to type 'undefined'.
          zip,
        })
      ).rejects.toThrowError(
        /Invalid options: state, zip, and location are not compatible./
      )

      await expect(() =>
        cssiStation({
          state,
          // @ts-expect-error Type 'location' is not assignable to type 'undefined'.
          location,
        })
      ).rejects.toThrowError(
        /Invalid options: state, zip, and location are not compatible./
      )

      await expect(() =>
        cssiStation({
          zip,
          // @ts-expect-error Type 'location' is not assignable to type 'undefined'.
          location,
        })
      ).rejects.toThrowError(
        /Invalid options: state, zip, and location are not compatible./
      )

      await expect(() =>
        cssiStation({
          state,
          // @ts-expect-error Type 'number' is not assignable to type 'undefined'.
          zip,
          // @ts-expect-error Type 'location' is not assignable to type 'undefined'.
          location,
        })
      ).rejects.toThrowError(
        /Invalid options: state, zip, and location are not compatible./
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options.state and filter.cpsweek passed together', async () => {
      await expect(() =>
        cssiStation({
          state,
          filters: {
            // @ts-expect-error Type 'boolean' is not assignable to type 'undefined'.
            cpsweek,
          },
        })
      ).rejects.toThrowError(
        /Invalid options: state and filters.cpsweek are not compatible./
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options', async () => {
      await expect(() =>
        cssiStation({
          // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
          notAnOption: 'unknown option with TS error',
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and doFetch = true', async () => {
      await expect(() =>
        cssiStation(
          {
            // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
            notAnOption: 'unknown option with TS error',
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and doFetch = false', async () => {
      await expect(() =>
        cssiStation(
          {
            // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
            notAnOption: 'unknown option with TS error',
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and wrong type for valid options', async () => {
      await expect(() =>
        cssiStation({
          notAnOption: 'no TS error, vehicleId error takes precedence',
          // @ts-expect-error Type 'never[]' is not assignable to type 'string'.
          state: [],
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and valid options', async () => {
      await expect(() =>
        cssiStation({
          // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
          notAnOption: 'unknown option with TS error',
          state,
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and valid options and doFetch = true', async () => {
      await expect(() =>
        cssiStation(
          {
            // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
            notAnOption: 'unknown option with TS error',
            zip,
            filters,
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options and valid options and doFetch = false', async () => {
      await expect(() =>
        cssiStation(
          {
            // @ts-expect-error 'notAnOption' does not exist in type 'CSSIOptions'
            notAnOption: 'unknown option with TS error',
            location,
            filters,
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: state, zip, location, filters/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options.location', async () => {
      await expect(() =>
        cssiStation({
          location: {
            // @ts-expect-error 'notAnOption' does not exist in type 'Location'
            notAnOption: 'unknown option with TS error',
          },
        })
      ).rejects.toThrowError(
        /Invalid keys for location: notAnOption. Valid keys are: lat, long, miles/
      )

      await expect(() =>
        cssiStation({
          location: {
            // @ts-expect-error 'notAnOption' does not exist in type 'Location'
            notAnOption: 'unknown option with TS error',
            lat,
            long,
            miles,
          },
        })
      ).rejects.toThrowError(
        /Invalid keys for location: notAnOption. Valid keys are: lat, long, miles/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with unknown options.filters', async () => {
      await expect(() =>
        cssiStation({
          filters: {
            // @ts-expect-error 'notAnOption' does not exist in type 'filters'
            notAnOption: 'unknown option with TS error',
          },
        })
      ).rejects.toThrowError(
        /Invalid keys for filters: notAnOption. Valid keys are: lang, cpsweek/
      )

      await expect(() =>
        cssiStation({
          filters: {
            // @ts-expect-error 'notAnOption' does not exist in type 'filters'
            notAnOption: 'unknown option with TS error',
            lang,
            cpsweek,
          },
        })
      ).rejects.toThrowError(
        /Invalid keys for filters: notAnOption. Valid keys are: lang, cpsweek/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })
  })
})

/*******************************
 * These are here to test the IDE intellisense tooltips when hovering the function and results,
 * to ensure the correct types are displayed for the end user. These are not meant to be
 * run as tests and testing of hovering must be done manually.
 *
 * The actual types and typed returns are tested in cssiStation.test-d.ts via Vitest type checking,
 * these are simply hovering tooltip tests.
 *
 * This cannot be achieved in test.each() tests because the way .each() is typed, it will show all
 * possible return types at once, which is not helpful for the end user.
 *
 * We cannot use expectTypeOf() because it will not work with test.each() tests in the same
 * file, and expectTypeOf() will not show the IDE tooltips as a user would see them.
 *
 * Order of `Results` keys does not matter, only that they are all present with no extraneous
 * keys.
 ******************************/
describe.skip('IDE Tooltips - manual test of results type on hover', async () => {
  test('/CSSIStation/', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      StartLatitude: number;
      StartLongitude: number;
      Count: number;
      Message: string;
      Results: CSSIResultsData[];
    }
    ******************************/
    const result_1 = await cssiStation()
    const result_2 = await cssiStation(undefined)
    const result_3 = await cssiStation({})
    const result_4 = await cssiStation({}, true)
    const result_5 = await cssiStation({}, undefined)
    const result_6 = await cssiStation(true)
    const result_7 = await cssiStation(undefined, true)
    const result_8 = await cssiStation(undefined, undefined)

    for (const result of [
      result_1,
      result_2,
      result_3,
      result_4,
      result_5,
      result_6,
      result_7,
      result_8,
    ]) {
      expect(result)
    }
  })

  test('/CSSIStation/state/:state', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      StartLatitude: number;
      StartLongitude: number;
      Count: number;
      Message: string;
      Results: CSSIResultsData[];
    }
    ******************************/
    const result_1 = await cssiStation({ state })
    const result_2 = await cssiStation({ state, filters: { lang } })
    const result_3 = await cssiStation({ state }, true)
    const result_4 = await cssiStation({ state }, undefined)
    const result_5 = await cssiStation({ state, filters: { lang } }, true)
    const result_6 = await cssiStation({ state, filters: { lang } }, undefined)

    for (const result of [
      result_1,
      result_2,
      result_3,
      result_4,
      result_5,
      result_6,
    ]) {
      expect(result)
    }
  })

  test('/CSSIStation/zip/:zip', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      StartLatitude: number;
      StartLongitude: number;
      Count: number;
      Message: string;
      Results: CSSIResultsData[];
    }
    ******************************/
    const result_1 = await cssiStation({ zip })
    const result_2 = await cssiStation({ zip }, true)
    const result_3 = await cssiStation({ zip }, undefined)
    const result_4 = await cssiStation({ zip, filters: { lang } })
    const result_5 = await cssiStation({ zip, filters: { lang } }, true)
    const result_6 = await cssiStation({ zip, filters: { lang } }, undefined)
    const result_7 = await cssiStation({ zip, filters: { cpsweek } })
    const result_8 = await cssiStation({ zip, filters: { cpsweek } }, true)
    const result_9 = await cssiStation({ zip, filters: { cpsweek } }, undefined)
    const result_10 = await cssiStation({ zip, filters })
    const result_11 = await cssiStation({ zip, filters }, true)
    const result_12 = await cssiStation({ zip, filters }, undefined)

    for (const result of [
      result_1,
      result_2,
      result_3,
      result_4,
      result_5,
      result_6,
      result_7,
      result_8,
      result_9,
      result_10,
      result_11,
      result_12,
    ]) {
      expect(result)
    }
  })

  test('/CSSIStation?lat={lat}&long={long}&miles={miles}', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      StartLatitude: number;
      StartLongitude: number;
      Count: number;
      Message: string;
      Results: CSSIResultsData[];
    }
    ******************************/
    const result_1 = await cssiStation({ location })
    const result_2 = await cssiStation({ location }, true)
    const result_3 = await cssiStation({ location }, undefined)
    const result_4 = await cssiStation({ location, filters: { lang } })
    const result_5 = await cssiStation({ location, filters: { lang } }, true)
    const result_6 = await cssiStation(
      { location, filters: { lang } },
      undefined
    )
    const result_7 = await cssiStation({ location, filters: { cpsweek } })
    const result_8 = await cssiStation({ location, filters: { cpsweek } }, true)
    const result_9 = await cssiStation(
      { location, filters: { cpsweek } },
      undefined
    )
    const result_10 = await cssiStation({ location, filters })
    const result_11 = await cssiStation({ location, filters }, true)
    const result_12 = await cssiStation({ location, filters }, undefined)

    for (const result of [
      result_1,
      result_2,
      result_3,
      result_4,
      result_5,
      result_6,
      result_7,
      result_8,
      result_9,
      result_10,
      result_11,
      result_12,
    ]) {
      expect(result)
    }
  })
})
