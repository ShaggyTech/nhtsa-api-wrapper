import { beforeEach, describe, expect, test } from 'vitest'
import { safetyRatings } from '../safetyRatings'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const make = 'Audi'
const model = 'A5'
const vehicleIdString = '1234'
const vehicleIdNumber = 1234
const vehicleId = vehicleIdNumber

// https://api.nhtsa.gov/SafetyRatings
// https://api.nhtsa.gov/SafetyRatings/modelyear/2013
// https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda
// https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/honda/model/accord
// https://api.nhtsa.gov/SafetyRatings/vehicleId/7523

const baseUrl = 'https://api.nhtsa.gov/SafetyRatings/'
const mockUrlBase = `${baseUrl}?format=json`
const mockUrlVehicleId = `${baseUrl}vehicleId/${vehicleIdString}?format=json`
const mockUrlModelYear = `${baseUrl}modelYear/${modelYearString}?format=json`
const mockUrlMake = `${baseUrl}modelYear/${modelYearString}/make/${make}?format=json`
const mockUrlModel = `${baseUrl}modelYear/${modelYearString}/make/${make}/model/${model}?format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof safetyRatings>
  expectedUrl: string
}

describe('safetyRatings()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(safetyRatings).toBeDefined()
    expect(safetyRatings).toBeInstanceOf(Function)
    expect(safetyRatings()).toBeInstanceOf(Promise)
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
        expectedUrl: mockUrlModel,
      },
      {
        description: 'options.model and doFetch = true',
        args: [{ modelYear, make, model }, true],
        expectedUrl: mockUrlModel,
      },
      // options.vehicleId
      {
        description: 'options.vehicleId as string',
        args: [{ vehicleId: vehicleIdString }],
        expectedUrl: mockUrlVehicleId,
      },
      {
        description: 'options.vehicleId as string and doFetch = true',
        args: [{ vehicleId: vehicleIdString }, true],
        expectedUrl: mockUrlVehicleId,
      },
      {
        description: 'options.vehicleId as number',
        args: [{ vehicleId: vehicleIdNumber }],
        expectedUrl: mockUrlVehicleId,
      },
      {
        description:
          'with options.vehicleId as undefined and other valid options',
        args: [
          {
            vehicleId: undefined,
            modelYear,
            make,
            model,
          },
        ],
        expectedUrl: mockUrlModel,
      },
      {
        description:
          'with options.vehicleId as undefined and other valid options and doFetch = true',
        args: [
          {
            vehicleId: undefined,
            modelYear,
            make,
            model,
          },
          true,
        ],
        expectedUrl: mockUrlModel,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await safetyRatings(...args)
      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expectedFetchOptions)
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(expectedUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    test('with options.vehicleId and other valid options = TS Errors', async () => {
      const results = await safetyRatings({
        vehicleId: vehicleIdString,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        modelYear,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        make,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        model,
      })

      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(
        mockUrlVehicleId,
        expectedFetchOptions
      )
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(mockUrlVehicleId)
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
        expectedUrl: mockUrlModel,
      },
      // options.vehicleId
      {
        description: 'options.vehicleId as string and doFetch = false',
        args: [{ vehicleId: vehicleIdString }, false],
        expectedUrl: mockUrlVehicleId,
      },
      {
        description: 'options.vehicleId as number and doFetch = false',
        args: [{ vehicleId: vehicleIdNumber }, false],
        expectedUrl: mockUrlVehicleId,
      },
      {
        description:
          'with options.vehicleId as undefined and other valid options and doFetch = false',
        args: [
          {
            vehicleId: undefined,
            modelYear,
            make,
            model,
          },
          false,
        ],
        expectedUrl: mockUrlModel,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await safetyRatings(...args)

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
          safetyRatings(arg)
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
          safetyRatings({
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
          safetyRatings({
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
          safetyRatings({
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
      'options.vehicleId is neither a string nor number <%s>',
      async (arg) => {
        await expect(() =>
          safetyRatings({
            // @ts-expect-error Type (x) is not assignable to type 'string | number | undefined
            vehicleId: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "vehicleId", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test('options.make is provided but not options.modelYear', async () => {
      await expect(() =>
        // @ts-expect-error Properties 'modelYear' and 'model' are missing but required in type
        safetyRatings({
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
        safetyRatings({
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
        safetyRatings({
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
        safetyRatings({
          // @ts-expect-error 'notAnOption' does not exist in type ...
          notAnOption: 'invalid option with TS error',
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = true', async () => {
      await expect(() =>
        safetyRatings(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = false', async () => {
      await expect(() =>
        safetyRatings(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and wrong type for valid options', async () => {
      await expect(() =>
        safetyRatings({
          notAnOption: 'no TS error, vehicleId error takes precedence',
          // @ts-expect-error Type 'never[]' is not assignable to type 'string | number | undefined'
          vehicleId: [],
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options', async () => {
      await expect(() =>
        safetyRatings({
          // @ts-expect-error Type 'string' is not assignable to type 'never'.
          notAnOption: 'invalid option with TS error',
          modelYear,
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = true', async () => {
      await expect(() =>
        safetyRatings(
          {
            // @ts-expect-error Type 'string' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = false', async () => {
      await expect(() =>
        safetyRatings(
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
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and all valid options', async () => {
      await expect(() =>
        safetyRatings({
          notAnOption: 'no TS error, vehicleId error takes precedence',
          modelYear,
          make,
          model,
          // @ts-expect-error Type 'number' is not assignable to type 'undefined'
          vehicleId,
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are: modelYear, make, model, vehicleId/
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
 * The actual types and typed returns are tested in safetyRatings.test-d.ts via Vitest type
 * checking, these are simply hovering tooltip tests.
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
  test('/SafetyRatings/', async () => {
    /******Expected Tooltip*******\
        const result_x: {
          Count: number;
          Message: string;
          Results: {
            ModelYear: number;
            VehicleId: number;
          }[];
        }
    ******************************/
    const result_1 = await safetyRatings()
    const result_2 = await safetyRatings(undefined)
    const result_3 = await safetyRatings({})
    const result_4 = await safetyRatings({}, true)
    const result_5 = await safetyRatings({}, undefined)
    const result_6 = await safetyRatings(true)
    const result_7 = await safetyRatings(undefined, true)
    const result_8 = await safetyRatings(undefined, undefined)

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

  test('/SafetyRatings/modelyear/:modelYear', async () => {
    /******Expected Tooltip*******\
        const result_x: {
          Count: number;
          Message: string;
          Results: {
            ModelYear: number;
            VehicleId: number;
            Make: string;
          }[];
        }
    ******************************/
    const result_1 = await safetyRatings({ modelYear: modelYearString })
    const result_2 = await safetyRatings({ modelYear: modelYearNumber })
    const result_3 = await safetyRatings({ modelYear }, true)
    const result_4 = await safetyRatings({ modelYear }, undefined)

    for (const result of [result_1, result_2, result_3, result_4]) {
      expect(result)
    }
  })

  test('/SafetyRatings/modelyear/:modelYear/make/:make', async () => {
    /******Expected Tooltip*******\
        const result_x: {
          Count: number;
          Message: string;
          Results: {
            ModelYear: number;
            VehicleId: number;
            Make: string;
            Model: string;
          }[];
        }
    ******************************/
    const result_1 = await safetyRatings({ modelYear, make })
    const result_2 = await safetyRatings({ modelYear, make }, true)
    const result_3 = await safetyRatings({ modelYear, make }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('/SafetyRatings/modelyear/:modelYear/make/:make/model/:model', async () => {
    /******Expected Tooltip*******\
        const result_x: {
          Count: number;
          Message: string;
          Results: {
            VehicleId: number;
            VehicleDescription: string;
          }[];
        }
    ******************************/
    const result_1 = await safetyRatings({ modelYear, make, model })
    const result_2 = await safetyRatings({ modelYear, make, model }, true)
    const result_3 = await safetyRatings(
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

  test('/SafetyRatings/vehicleId/:vehicleId', async () => {
    /******Expected Tooltip*******\
        const result_x: {
          Count: number;
          Message: string;
          Results: {
            'combinedSideBarrierAndPoleRating-Front': string;
            'combinedSideBarrierAndPoleRating-Rear': string;
            ComplaintsCount: number;
            dynamicTipResult: string;
            FrontCrashDriversideRating: string;
            FrontCrashPassengersideRating: string;
            InvestigationCount: number;
            Make: string;
            Model: string;
            ModelYear: number;
            NHTSAElectronicStabilityControl: string;
            NHTSAForwardCollisionWarning: string;
            NHTSALaneDepartureWarning: string;
            OverallFrontCrashRating: string;
            OverallSideCrashRating: string;
            OverallRating: string;
            RecallsCount: number;
            RolloverRating: string;
            RolloverRating2: string;
            RolloverPossibility: number;
            RolloverPossibility2: number;
            'sideBarrierRating-Overall': string;
            SideCrashDriversideRating: string;
            SideCrashPassengersideRating: string;
            SidePoleCrashRating: string;
            VehicleDescription: string;
            VehicleId: number;
            VehiclePicture: string;
          }[];
        }
    ******************************/
    const result_1 = await safetyRatings({ vehicleId: vehicleIdString })
    const result_2 = await safetyRatings({ vehicleId: vehicleIdNumber })
    const result_3 = await safetyRatings({ vehicleId }, true)
    const result_4 = await safetyRatings({ vehicleId }, undefined)

    for (const result of [result_1, result_2, result_3, result_4]) {
      expect(result)
    }
  })

  test('returns a string if doFetch = false', async () => {
    /******Expected Tooltip*******\
        const result_x: string
    ******************************/
    const result_1 = await safetyRatings(false)
    const result_2 = await safetyRatings(undefined, false)
    const result_3 = await safetyRatings({}, false)
    const result_4 = await safetyRatings({ modelYear: modelYearString }, false)
    const result_5 = await safetyRatings({ modelYear: modelYearNumber }, false)
    const result_6 = await safetyRatings({ modelYear, make }, false)
    const result_7 = await safetyRatings({ modelYear, make, model }, false)
    const result_8 = await safetyRatings({ vehicleId: vehicleIdString }, false)
    const result_9 = await safetyRatings({ vehicleId: vehicleIdNumber }, false)

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
