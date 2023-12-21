import { beforeEach, describe, expect, test } from 'vitest'
import { complaints } from '../complaints'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const modelYearString = '2020'
const modelYearNumber = 2020
const modelYear = modelYearNumber
const make = 'Volkswagen'
const model = 'Atlas'
const odiNumberAsString = 11549247
const odiNumberAsNumber = '11549247'
const odiNumber = odiNumberAsNumber

// Use Products API:
// https://api.nhtsa.gov/products/vehicle/modelYears?issueType=c
// https://api.nhtsa.gov/products/vehicle/makes?modelYear={modelYear}&issueType=c
// https://api.nhtsa.gov/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=c

// Use Recalls API
// https://api.nhtsa.gov/complaints/complaintsByVehicle?modelYear=2020&make=Volkswagen&model=Jetta
// https://api.nhtsa.gov/complaints/odiNumber?odiNumber=11549247

const baseUrlProducts = 'https://api.nhtsa.gov/products/vehicle'
const baseUrl = 'https://api.nhtsa.gov/complaints'
const mockUrlBase = `${baseUrlProducts}/modelYears?issueType=c&format=json`
const mockUrlModelYear = `${baseUrlProducts}/makes?modelYear=${modelYear}&issueType=c&format=json`
const mockUrlMake = `${baseUrlProducts}/models?modelYear=${modelYear}&make=${make}&issueType=c&format=json`
const mockUrlVehicle = `${baseUrl}/complaintsByVehicle?modelYear=${modelYear}&make=${make}&model=${model}&format=json`
const mockUrlOdiNumber = `${baseUrl}/odiNumber?odiNumber=${odiNumber}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof complaints>
  expectedUrl: string
}

describe('complaints()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(complaints).toBeDefined()
    expect(complaints).toBeInstanceOf(Function)
    expect(complaints()).toBeInstanceOf(Promise)
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
      // options.modelYear
      {
        description: 'options.modelYear as string',
        args: [{ modelYear: modelYearString }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as string and doFetch = true',
        args: [{ modelYear: modelYearString }, true],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number',
        args: [{ modelYear: modelYearNumber }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number and doFetch = true',
        args: [{ modelYear: modelYearNumber }, true],
        expectedUrl: mockUrlModelYear,
      },
      // options.make
      {
        description: 'options.make',
        args: [{ modelYear, make }],
        expectedUrl: mockUrlMake,
      },
      {
        description: 'options.make and doFetch = true',
        args: [{ modelYear, make }, true],
        expectedUrl: mockUrlMake,
      },
      // options.model
      {
        description: 'options.model',
        args: [{ modelYear, make, model }],
        expectedUrl: mockUrlVehicle,
      },
      {
        description: 'options.model and doFetch = true',
        args: [{ modelYear, make, model }, true],
        expectedUrl: mockUrlVehicle,
      },
      // options.odiNumber
      {
        description: 'options.odiNumber as string',
        args: [{ odiNumber: odiNumberAsString }],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description: 'options.odiNumber as string and doFetch = true',
        args: [{ odiNumber: odiNumberAsString }, true],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description: 'options.odiNumber as number',
        args: [{ odiNumber: odiNumberAsNumber }],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description: 'options.odiNumber as number and doFetch = true',
        args: [{ odiNumber: odiNumberAsNumber }, true],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description:
          'with options.odiNumber as undefined and other valid options',
        args: [
          {
            odiNumber: undefined,
            modelYear,
            make,
            model,
          },
        ],
        expectedUrl: mockUrlVehicle,
      },
      {
        description:
          'with options.odiNumber as undefined and other valid options and doFetch = true',
        args: [
          {
            odiNumber: undefined,
            modelYear,
            make,
            model,
          },
          true,
        ],
        expectedUrl: mockUrlVehicle,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await complaints(...args)
      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expectedFetchOptions)
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(expectedUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    test('with options.odiNumber and other valid options = TS Errors', async () => {
      const results = await complaints({
        odiNumber,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        modelYear,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        make,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        model,
      })

      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(
        mockUrlOdiNumber,
        expectedFetchOptions
      )
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(mockUrlOdiNumber)
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
      // options.modelYear
      {
        description: 'options.modelYear as string and doFetch = false',
        args: [{ modelYear: modelYearString }, false],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number and doFetch = false',
        args: [{ modelYear: modelYearNumber }, false],
        expectedUrl: mockUrlModelYear,
      },
      // options.make
      {
        description: 'options.make and doFetch = false',
        args: [{ modelYear, make }, false],
        expectedUrl: mockUrlMake,
      },
      // options.model
      {
        description: 'options.model and doFetch = true',
        args: [{ modelYear, make, model }, false],
        expectedUrl: mockUrlVehicle,
      },
      // options.odiNumber
      {
        description: 'options.odiNumber as string and doFetch = false',
        args: [{ odiNumber: odiNumberAsString }, false],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description: 'options.odiNumber as number and doFetch = false',
        args: [{ odiNumber: odiNumberAsNumber }, false],
        expectedUrl: mockUrlOdiNumber,
      },
      {
        description:
          'with options.odiNumber as undefined and other valid options and doFetch = false',
        args: [
          {
            odiNumber: undefined,
            modelYear,
            make,
            model,
          },
          false,
        ],
        expectedUrl: mockUrlVehicle,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await complaints(...args)

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
          complaints(arg)
        ).rejects.toThrowError(
          /error validating argument named "options", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, false, null, () => {}])(
      'options.modelYear is neither a string nor number, <%s>',
      async (arg) => {
        await expect(() =>
          complaints({
            // @ts-expect-error Type (x) is not assignable to type 'string | number | undefined
            modelYear: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "modelYear", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([123, { object: 123 }, ['array'], true, false, null, () => {}])(
      'options.make is not a string, <%s>',
      async (arg) => {
        await expect(() =>
          complaints({
            modelYear,
            // @ts-expect-error Type (x) is not assignable to type 'string | undefined
            make: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "make", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([123, { object: 123 }, ['array'], true, false, null, () => {}])(
      'options.model is not a string, <%s>',
      async (arg) => {
        await expect(() =>
          complaints({
            modelYear,
            make,
            // @ts-expect-error Type (x) is not assignable to type 'string | undefined
            model: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "model", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each([{ object: 123 }, ['array'], true, false, null, () => {}])(
      'options.odiNumber is neither a string nor number <%s>',
      async (arg) => {
        await expect(() =>
          complaints({
            // @ts-expect-error Type (x) is not assignable to type 'string | number | undefined
            odiNumber: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "odiNumber", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test('options.make is provided but not options.modelYear', async () => {
      await expect(() =>
        // @ts-expect-error Properties 'modelYear' and 'model' are missing but required in type
        complaints({
          make,
        })
      ).rejects.toThrowError(
        /error validating argument named "modelYear", it is required if "make"/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options.model is provided but not options.modelYear', async () => {
      await expect(() =>
        // @ts-expect-error Property 'modelYear' is missing but required in type
        complaints({
          make,
          model,
        })
      ).rejects.toThrowError(
        /error validating argument named "modelYear", it is required if "model"/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('options.model is provided but not options.make', async () => {
      await expect(() =>
        // @ts-expect-error Property 'make' is missing but required in type
        complaints({
          modelYear,
          model,
        })
      ).rejects.toThrowError(
        /error validating argument named "make", it is required if "model"/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options', async () => {
      await expect(() =>
        complaints({
          // @ts-expect-error 'notAnOption' does not exist in type ...
          notAnOption: 'invalid option with TS error',
        })
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = true', async () => {
      await expect(() =>
        complaints(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = false', async () => {
      await expect(() =>
        complaints(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and wrong type for valid options', async () => {
      await expect(() =>
        complaints({
          notAnOption: 'no TS error, odiNumber error takes precedence',
          // @ts-expect-error Type 'never[]' is not assignable to type 'string | undefined'
          odiNumber: [],
        })
      ).rejects.toThrowError(/error validating argument named "odiNumber"/)

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options', async () => {
      await expect(() =>
        complaints({
          // @ts-expect-error Type 'string' is not assignable to type 'never'.
          notAnOption: 'invalid option with TS error',
          modelYear,
        })
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = true', async () => {
      await expect(() =>
        complaints(
          {
            // @ts-expect-error Type 'string' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = false', async () => {
      await expect(() =>
        complaints(
          {
            // @ts-expect-error Type 'string' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
            model,
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make, model, odiNumber/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and all valid options', async () => {
      await expect(() =>
        complaints({
          notAnOption: 'no TS error, odiNumber error takes precedence',
          modelYear,
          make,
          model,
          // @ts-expect-error Type 'number' is not assignable to type 'undefined'
          odiNumber: ['array'],
        })
      ).rejects.toThrowError(/error validating argument named "odiNumber"/)

      expect(fetchMock.requests().length).toEqual(0)
    })
  })
})

/*******************************
 * These are here to test the IDE intellisense tooltips when hovering the function and results,
 * to ensure the correct types are displayed for the end user. These are not meant to be
 * run as tests and testing of hovering must be done manually.
 *
 * The actual types and typed returns are tested in safetyRatings.test-d.ts via Vitest type
 * checking, these are simply hovering tooltip tests.
 *
 * All of these calls to safetyRatings() mimic all of tests in the test.each() tests above.
 * They are separated here to allow for testing of the IDE tooltips for each possible response
 * type individually by hovering over the saved `result_x` and/or the function name each time it is
 * called.
 *
 * This cannot be achieved in test.each() tests because the way .each() is typed, it will show all
 * possible SafetyRatingsResultsVariants types at once when hovering over the saved results of
 * safetyRatings(). This will still happen even if you only include arguments that would return
 * the same type of response.
 *
 * We cannot use expectTypeOf() because it will not work with test.each() tests in the same
 * file, and expectTypeOf() will not show the IDE tooltips as a user would see them.
 *
 * Order of `Results` keys does not matter, only that they are all present with no extraneous
 * keys.
 *
 ******************************/
describe.skip('IDE Tooltips - manual test of results type on hover', async () => {
  test('/products/vehicle/modelYears', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Count: number;
      Message: string;
      Results: {
        modelYear: string;
      }[];
    }
    ******************************/
    const result_1 = await complaints()
    const result_2 = await complaints(undefined)
    const result_3 = await complaints({})
    const result_4 = await complaints({}, true)
    const result_5 = await complaints({}, undefined)
    const result_6 = await complaints(true)
    const result_7 = await complaints(undefined, true)
    const result_8 = await complaints(undefined, undefined)

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

  test('/products/vehicle/makes', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Count: number;
      Message: string;
      Results: {
        modelYear: string;
        make: string;
      }[];
    }
    ******************************/
    const result_1 = await complaints({ modelYear: modelYearString })
    const result_2 = await complaints({ modelYear: modelYearNumber })
    const result_3 = await complaints({ modelYear }, true)
    const result_4 = await complaints({ modelYear }, undefined)

    for (const result of [result_1, result_2, result_3, result_4]) {
      expect(result)
    }
  })

  test('/products/vehicle/models', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Count: number;
      Message: string;
      Results: {
        modelYear: string;
        make: string;
        model: string;
      }[];
    }
    ******************************/
    const result_1 = await complaints({ modelYear, make })
    const result_2 = await complaints({ modelYear, make }, true)
    const result_3 = await complaints({ modelYear, make }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('/complaints/complaintsByVehicle', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Manufacturer: string;
      NHTSAodiNumber: string;
      parkIt: boolean;
      parkOutSide: boolean;
      ReportReceivedDate: string;
      Component: string;
      Summary: string;
      Consequence: string;
      Remedy: string;
      Notes: string;
      ModelYear: string;
      Make: string;
      Model: string;
    }
    ******************************/
    const result_1 = await complaints({ modelYear, make, model })
    const result_2 = await complaints({ modelYear, make, model }, true)
    const result_3 = await complaints(
      {
        modelYear,
        make,
        model,
      },
      undefined
    )

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('/complaints/odiNumber', async () => {
    /******Expected Tooltip*******\
    const result_x: {
        Count: number;
        Message: string;
        Results: {
        Manufacturer: string;
        NHTSAodiNumber: string;
        parkIt: boolean;
        parkOutSide: boolean;
        ReportReceivedDate: string;
        Component: string;
        Summary: string;
        Consequence: string;
        Remedy: string;
        Notes: string;
        ModelYear: string;
        Make: string;
        Model: string;
        PotentialNumberofUnitsAffected: number;
      }[];
    }
    ******************************/
    const result_1 = await complaints({ odiNumber })
    const result_2 = await complaints({ odiNumber }, true)
    const result_3 = await complaints({ odiNumber }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('returns a string if doFetch = false', async () => {
    /******Expected Tooltip*******\
        const result_x: string
    ******************************/
    const result_1 = await complaints(false)
    const result_2 = await complaints(undefined, false)
    const result_3 = await complaints({}, false)
    const result_4 = await complaints({ modelYear: modelYearString }, false)
    const result_5 = await complaints({ modelYear: modelYearNumber }, false)
    const result_6 = await complaints({ modelYear, make }, false)
    const result_7 = await complaints({ modelYear, make, model }, false)
    const result_8 = await complaints({ odiNumber }, false)
    const result_9 = await complaints({ odiNumber }, false)

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
    ]) {
      expect(result)
    }
  })
})
