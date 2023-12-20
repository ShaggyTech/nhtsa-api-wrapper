import { beforeEach, describe, expect, test } from 'vitest'
import { products } from '../products'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const issueTypeC = 'c'
const issueTypeR = 'r'
const issueTypeComplaints = 'complaints'
const issueTypeRecalls = 'recalls'
const issueType = issueTypeC
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber
const make = 'Audi'

// https://api.nhtsa.gov/products/vehicle/modelYears?issueType={issueType}
// https://api.nhtsa.gov/products/vehicle/makes?modelYear={modelYear}&issueType={issueType}
// https://api.nhtsa.gov/products/vehicle/models?modelYear={modelYear}&make={make}&issueType={issueType}

const baseUrl = 'https://api.nhtsa.gov/products/vehicle'
const mockUrlIssueType = `${baseUrl}/modelYears?issueType=${issueType}&format=json`
const mockUrlIssueTypeC = `${baseUrl}/modelYears?issueType=${issueTypeC}&format=json`
const mockUrlIssueTypeR = `${baseUrl}/modelYears?issueType=${issueTypeR}&format=json`
const mockUrlModelYear = `${baseUrl}/makes?modelYear=${modelYear}&issueType=${issueType}&format=json`
const mockUrlMake = `${baseUrl}/models?modelYear=${modelYear}&make=${make}&issueType=${issueType}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof products>
  expectedUrl: string
}

describe('products()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(products).toBeDefined()
    expect(products).toBeInstanceOf(Function)
    expect(products(issueType)).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  describe('Fetches API data with: ', () => {
    test.each<TestEach>([
      // no, empty, or undefined options - returns all available model years
      {
        description: 'issueType = "c"',
        args: [issueTypeC],
        expectedUrl: mockUrlIssueTypeC,
      },
      {
        description: 'issueType = "complaints"',
        args: [issueTypeComplaints],
        expectedUrl: mockUrlIssueTypeC,
      },
      {
        description: 'issueType = "r"',
        args: [issueTypeR],
        expectedUrl: mockUrlIssueTypeR,
      },
      {
        description: 'issueType = "recalls"',
        args: [issueTypeRecalls],
        expectedUrl: mockUrlIssueTypeR,
      },
      {
        description: 'issueType and doFetch = true',
        args: [issueType, true],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType and options/doFetch = undefined',
        args: [issueType, undefined],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType, options = undefined, and doFetch = true',
        args: [issueType, undefined, true],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType and options = {}',
        args: [issueType, {}],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType, options = {}, and doFetch = true',
        args: [issueType, {}, true],
        expectedUrl: mockUrlIssueType,
      },
      // options.modelYear
      {
        description: 'issueType and options.modelYear as string',
        args: [issueType, { modelYear: modelYearString }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'issueType and options.modelYear as number',
        args: [issueType, { modelYear: modelYearNumber }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'issueType, options.modelYear, and doFetch = true',
        args: [issueType, { modelYear: modelYearNumber }, true],
        expectedUrl: mockUrlModelYear,
      },
      {
        description:
          'issueType, options.modelYear, and options.make = undefined',
        args: [issueType, { modelYear: modelYearNumber, make: undefined }],
        expectedUrl: mockUrlModelYear,
      },
      // options.make
      {
        description: 'issueType, options.modelYear, and options.make',
        args: [issueType, { modelYear, make }],
        expectedUrl: mockUrlMake,
      },
      {
        description:
          'issueType, options.modelYear, options.make, and doFetch = true',
        args: [issueType, { modelYear, make }, true],
        expectedUrl: mockUrlMake,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await products(...args)
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
        description: 'issueType and doFetch = false',
        args: [issueType, false],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType, options = undefined, and doFetch = false',
        args: [issueType, undefined, false],
        expectedUrl: mockUrlIssueType,
      },
      {
        description: 'issueType, options = {}, and doFetch = false',
        args: [issueType, {}, false],
        expectedUrl: mockUrlIssueType,
      },
      // options.modelYear
      {
        description: 'issueType, options.modelYear, and doFetch = false',
        args: [issueType, { modelYear }, false],
        expectedUrl: mockUrlModelYear,
      },
      // options.make
      {
        description:
          'issueType, options.modelYear and options.make and doFetch = false',
        args: [issueType, { modelYear, make }, false],
        expectedUrl: mockUrlMake,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await products(...args)

      expect(results).toEqual(expectedUrl)
      expect(fetchMock.requests().length).toEqual(0)
    })
  })

  /*****************************
   * rejects with error
   ***************************/
  describe('Rejects with Error if: ', () => {
    test.each([
      undefined,
      123,
      { object: 123 },
      ['array'],
      true,
      false,
      null,
      () => {},
    ])('issueType is undefined or is not a string, <%s>', async (arg) => {
      await expect(() =>
        products(
          // @ts-expect-error Argument of type 'x' is not assignable to type 'ProductsIssueType'.
          arg
        )
      ).rejects.toThrowError(
        /error validating argument named "issueType", is required and must be of type/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test.each(['a', 'b', 'rrr', 'ccc', 'complaint', 'recall'])(
      'issueType is not a string of "c", "complaints, "r", or "recalls", <%s>',
      async (arg) => {
        await expect(() =>
          products(
            // @ts-expect-error Argument of type 'x' is not assignable to type 'ProductsIssueType'.
            arg
          )
        ).rejects.toThrowError(
          /Valid issueTypes are: 'r', 'recalls', 'c', 'complaints'/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each(['string', 123, ['array'], null, () => {}])(
      'options is neither an object nor boolean, <%s>',
      async (arg) => {
        await expect(() =>
          products(
            issueType,
            // @ts-expect-error Type (x) is not assignable to type ...
            arg
          )
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
          products(issueType, {
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
          products(issueType, {
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

    test('options.make is provided but not options.modelYear', async () => {
      await expect(() =>
        // @ts-expect-error Property 'modelYear' is missing in type '{ make: string; }' ...
        products(issueType, {
          make,
        })
      ).rejects.toThrowError(
        /error validating argument named "modelYear", it is required if "make"/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options', async () => {
      await expect(() =>
        products(issueType, {
          modelYear,
          // @ts-expect-error Object literal may only specify known properties ...
          notAnOption: 'invalid option with TS error',
        })
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = true', async () => {
      await expect(() =>
        products(
          issueType,
          {
            // @ts-expect-error Object literal may only specify known properties ...
            notAnOption: 'invalid option with TS error',
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and doFetch = false', async () => {
      await expect(() =>
        products(
          issueType,
          {
            // @ts-expect-error Object literal may only specify known properties ...
            notAnOption: 'invalid option with TS error',
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and wrong type for valid options', async () => {
      await expect(() =>
        products(issueType, {
          notAnOption: 'no TS error, vehicleId error takes precedence',
          // @ts-expect-error Type 'x' is not assignable to type 'string | number | undefined'.
          modelYear: [1, 2, 3],
        })
      ).rejects.toThrowError(/error validating argument named "modelYear"/)

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options', async () => {
      await expect(() =>
        products(issueType, {
          // @ts-expect-error Type 'x' is not assignable to type 'never'.
          notAnOption: 'invalid option with TS error',
          modelYear,
        })
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = true', async () => {
      await expect(() =>
        products(
          issueType,
          {
            // @ts-expect-error Type 'x' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
          },
          true
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options and doFetch = false', async () => {
      await expect(() =>
        products(
          issueType,
          {
            // @ts-expect-error Type 'x' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
            make,
          },
          false
        )
      ).rejects.toThrowError(
        /Invalid options: notAnOption. Valid options are: modelYear, make/
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
    const result_1 = await products(issueType)
    const result_2 = await products(issueType, undefined)
    const result_3 = await products(issueType, {})
    const result_4 = await products(issueType, {}, true)
    const result_5 = await products(issueType, {}, undefined)
    const result_6 = await products(issueType, true)
    const result_7 = await products(issueType, undefined, true)
    const result_8 = await products(issueType, undefined, undefined)

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
    const result_1 = await products(issueType, { modelYear: modelYearString })
    const result_2 = await products(issueType, { modelYear: modelYearNumber })
    const result_3 = await products(issueType, { modelYear }, true)
    const result_4 = await products(issueType, { modelYear }, undefined)

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
    const result_1 = await products(issueType, { modelYear, make })
    const result_2 = await products(issueType, { modelYear, make }, true)
    const result_3 = await products(issueType, { modelYear, make }, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('returns a string if doFetch = false', async () => {
    /******Expected Tooltip*******\
        const result_x: string
    ******************************/
    const result_1 = await products(issueType, false)
    const result_2 = await products(issueType, undefined, false)
    const result_3 = await products(issueType, {}, false)
    const result_4 = await products(
      issueType,
      { modelYear: modelYearString },
      false
    )
    const result_5 = await products(
      issueType,
      { modelYear: modelYearNumber },
      false
    )
    const result_6 = await products(issueType, { modelYear, make }, false)

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
})
