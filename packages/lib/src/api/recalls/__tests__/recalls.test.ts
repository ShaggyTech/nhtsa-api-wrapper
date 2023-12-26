import { beforeEach, describe, expect, test } from 'vitest'
import { recalls } from '../recalls'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const modelYearString = '2020'
const modelYearNumber = 2020
const modelYear = modelYearNumber
const make = 'Volkswagen'
const model = 'Atlas'
const campaignNumber = '20V505000'

// Use Products API:
// https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r
// https://api.nhtsa.gov/products/vehicle/makes?modelYear={modelYear}&issueType=r
// https://api.nhtsa.gov/products/vehicle/models?modelYear={modelYear}&make={make}&issueType=r

// Use Recalls API
// https://api.nhtsa.gov/recalls/recallsByVehicle?modelYear={modelYear}&make={make}&model={model}
// https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber={campaignNumber}

const baseUrlProducts = 'https://api.nhtsa.gov/products/vehicle'
const baseUrl = 'https://api.nhtsa.gov/recalls'
const mockUrlBase = `${baseUrlProducts}/modelYears?issueType=r&format=json`
const mockUrlModelYear = `${baseUrlProducts}/makes?modelYear=${modelYear}&issueType=r&format=json`
const mockUrlMake = `${baseUrlProducts}/models?modelYear=${modelYear}&make=${make}&issueType=r&format=json`
const mockUrlVehicle = `${baseUrl}/recallsByVehicle?modelYear=${modelYear}&make=${make}&model=${model}&format=json`
const mockUrlCampaignNumber = `${baseUrl}/campaignNumber?campaignNumber=${campaignNumber}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof recalls>
  expectedUrl: string
}

describe('recalls()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(recalls).toBeDefined()
    expect(recalls).toBeInstanceOf(Function)
    expect(recalls()).toBeInstanceOf(Promise)
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
      // options.campaignNumber
      {
        description: 'options.campaignNumber',
        args: [{ campaignNumber }],
        expectedUrl: mockUrlCampaignNumber,
      },
      {
        description: 'options.campaignNumber and doFetch = true',
        args: [{ campaignNumber }, true],
        expectedUrl: mockUrlCampaignNumber,
      },
      {
        description:
          'with options.campaignNumber as undefined and other valid options',
        args: [
          {
            campaignNumber: undefined,
            modelYear,
            make,
            model,
          },
        ],
        expectedUrl: mockUrlVehicle,
      },
      {
        description:
          'with options.campaignNumber as undefined and other valid options and doFetch = true',
        args: [
          {
            campaignNumber: undefined,
            modelYear,
            make,
            model,
          },
          true,
        ],
        expectedUrl: mockUrlVehicle,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await recalls(...args)
      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(expectedUrl, expectedFetchOptions)
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(expectedUrl)
      expect(fetchMock.requests()[0].method).toEqual('GET')
    })

    test('with options.campaignNumber and other valid options = TS Errors', async () => {
      const results = await recalls({
        campaignNumber,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        modelYear,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        make,
        // @ts-expect-error Type 'string' is not assignable to type 'undefined'.
        model,
      })

      expect(results).toEqual(mockResults)
      expect(fetchMock).toHaveBeenCalledWith(
        mockUrlCampaignNumber,
        expectedFetchOptions
      )
      expect(fetchMock.requests().length).toEqual(1)
      expect(fetchMock.requests()[0].url).toEqual(mockUrlCampaignNumber)
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
      // options.campaignNumber
      {
        description: 'options.campaignNumber and doFetch = false',
        args: [{ campaignNumber }, false],
        expectedUrl: mockUrlCampaignNumber,
      },
      {
        description:
          'with options.campaignNumber as undefined and other valid options and doFetch = false',
        args: [
          {
            campaignNumber: undefined,
            modelYear,
            make,
            model,
          },
          false,
        ],
        expectedUrl: mockUrlVehicle,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await recalls(...args)

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
          recalls(arg)
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
          recalls({
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
          recalls({
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
          recalls({
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

    test.each([123, { object: 123 }, ['array'], true, false, null, () => {}])(
      'options.campaignNumber is not a string <%s>',
      async (arg) => {
        await expect(() =>
          recalls({
            // @ts-expect-error Type (x) is not assignable to type 'string | undefined
            campaignNumber: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "campaignNumber", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test('options.make is provided but not options.modelYear', async () => {
      await expect(() =>
        // @ts-expect-error Properties 'modelYear' and 'model' are missing but required in type
        recalls({
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
        recalls({
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
        recalls({
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
        recalls({
          // @ts-expect-error 'notAnOption' does not exist in type ...
          notAnOption: 'invalid option with TS error',
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = true', async () => {
      await expect(() =>
        recalls(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = false', async () => {
      await expect(() =>
        recalls(
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and wrong type for valid options', async () => {
      await expect(() =>
        recalls({
          notAnOption: 'no TS error, campaignNumber error takes precedence',
          // @ts-expect-error Type 'never[]' is not assignable to type 'string | undefined'
          campaignNumber: [],
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options', async () => {
      await expect(() =>
        recalls({
          // @ts-expect-error Type 'string' is not assignable to type 'never'.
          notAnOption: 'invalid option with TS error',
          modelYear,
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = true', async () => {
      await expect(() =>
        recalls(
          {
            // @ts-expect-error Type 'string' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = false', async () => {
      await expect(() =>
        recalls(
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
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and all valid options', async () => {
      await expect(() =>
        recalls({
          notAnOption: 'no TS error, campaignNumber TS error takes precedence',
          modelYear,
          make,
          model,
          // @ts-expect-error Type 'number' is not assignable to type 'undefined'
          campaignNumber: 123,
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
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
 * The actual types and typed returns are tested in recalls.test-d.ts via Vitest type checking,
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
    const result_1 = await recalls()
    const result_2 = await recalls(undefined)
    const result_3 = await recalls({})
    const result_4 = await recalls({}, true)
    const result_5 = await recalls({}, undefined)
    const result_6 = await recalls(true)
    const result_7 = await recalls(undefined, true)
    const result_8 = await recalls(undefined, undefined)

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
    const result_1 = await recalls({ modelYear: modelYearString })
    const result_2 = await recalls({ modelYear: modelYearNumber })
    const result_3 = await recalls({ modelYear }, true)
    const result_4 = await recalls({ modelYear }, undefined)

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
    const result_1 = await recalls({ modelYear, make })
    const result_2 = await recalls({ modelYear, make }, true)
    const result_3 = await recalls({ modelYear, make }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('/recalls/recallsByVehicle', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Manufacturer: string;
      NHTSACampaignNumber: string;
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
    const result_1 = await recalls({ modelYear, make, model })
    const result_2 = await recalls({ modelYear, make, model }, true)
    const result_3 = await recalls(
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

  test('/recalls/campaignNumber', async () => {
    /******Expected Tooltip*******\
    const result_x: {
        Count: number;
        Message: string;
        Results: {
        Manufacturer: string;
        NHTSACampaignNumber: string;
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
    const result_1 = await recalls({ campaignNumber })
    const result_2 = await recalls({ campaignNumber }, true)
    const result_3 = await recalls({ campaignNumber }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('returns a string if doFetch = false', async () => {
    /******Expected Tooltip*******\
        const result_x: string
    ******************************/
    const result_1 = await recalls(false)
    const result_2 = await recalls(undefined, false)
    const result_3 = await recalls({}, false)
    const result_4 = await recalls({ modelYear: modelYearString }, false)
    const result_5 = await recalls({ modelYear: modelYearNumber }, false)
    const result_6 = await recalls({ modelYear, make }, false)
    const result_7 = await recalls({ modelYear, make, model }, false)
    const result_8 = await recalls({ campaignNumber }, false)
    const result_9 = await recalls({ campaignNumber }, false)

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
