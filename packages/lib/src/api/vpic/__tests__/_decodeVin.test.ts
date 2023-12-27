import { beforeEach, describe, expect, test } from 'vitest'
import { decodeVin } from '../_decodeVin'

// Mocks
import { createMockResponse } from '.vitest/helpers'
import { mockResults } from '.vitest/data'

const vin = 'WA1A4AFY2J2008189'
const modelYearString = '2018'
const modelYearNumber = 2018
const modelYear = modelYearNumber

const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin'
const mockUrl = `${baseUrl}/${vin}?format=json`
const mockUrlModelYear = `${baseUrl}/${vin}?modelYear=${modelYear}&format=json`

const expectedFetchOptions = {
  saveUrl: true,
  method: 'GET',
}

type TestEach = {
  description: string
  args: Parameters<typeof decodeVin>
  expectedUrl: string
}

describe('decodeVin()', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResolvedValue(createMockResponse(mockResults))
  })

  test('Is a function that returns a Promise', () => {
    expect(decodeVin).toBeDefined()
    expect(decodeVin).toBeInstanceOf(Function)
    expect(decodeVin(vin)).toBeInstanceOf(Promise)
  })

  /*****************************
   * doFetch = true (default)
   ****************************/
  describe('Fetches API data with: ', () => {
    test.each<TestEach>([
      // vin with no options
      {
        description: 'vin with no options',
        args: [vin],
        expectedUrl: mockUrl,
      },
      {
        description: 'vin with no options and doFetch = true',
        args: [vin, true],
        expectedUrl: mockUrl,
      },
      // options.modelYear
      {
        description: 'options.modelYear as string',
        args: [vin, { modelYear: modelYearString }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as string and doFetch = true',
        args: [vin, { modelYear: modelYearString }, true],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number',
        args: [vin, { modelYear: modelYearNumber }],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number and doFetch = true',
        args: [vin, { modelYear: modelYearNumber }, true],
        expectedUrl: mockUrlModelYear,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await decodeVin(...args)
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
        description: 'vin and doFetch = false',
        args: [vin, false],
        expectedUrl: mockUrl,
      },
      // options.modelYear
      {
        description: 'options.modelYear as string and doFetch = false',
        args: [vin, { modelYear: modelYearString }, false],
        expectedUrl: mockUrlModelYear,
      },
      {
        description: 'options.modelYear as number and doFetch = false',
        args: [vin, { modelYear: modelYearNumber }, false],
        expectedUrl: mockUrlModelYear,
      },
    ])('$description', async ({ args, expectedUrl }) => {
      const results = await decodeVin(...args)

      expect(results).toEqual(expectedUrl)
      expect(fetchMock.requests().length).toEqual(0)
    })
  })

  /*****************************
   * rejects with error
   ***************************/
  describe('Rejects with Error if: ', () => {
    test.each([123, { object: 123 }, ['array'], true, false, null, () => {}])(
      'vin is undefined or is not a string, <%s>',
      async (arg) => {
        await expect(() =>
          decodeVin(
            // @ts-expect-error Type (x) is not assignable to type 'string
            arg
          )
        ).rejects.toThrowError(
          /error validating argument named "vin", it is required and must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test.each(['string', 123, ['array'], null, () => {}])(
      'options is neither an object nor boolean, <%s>',
      async (arg) => {
        await expect(() =>
          decodeVin(
            vin,
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
          decodeVin(vin, {
            // @ts-expect-error Type (x) is not assignable to type 'string | number | undefined
            modelYear: arg,
          })
        ).rejects.toThrowError(
          /error validating argument named "modelYear", must be of type/
        )

        expect(fetchMock.requests().length).toEqual(0)
      }
    )

    test('with invalid options', async () => {
      await expect(() =>
        decodeVin(vin, {
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
        decodeVin(
          vin,
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
        decodeVin(
          vin,
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
        decodeVin(vin, {
          notAnOption: 'no TS error, modelYear error takes precedence',
          // @ts-expect-error Type 'never[]' is not assignable to type 'string | undefined'
          modelYear: [],
        })
      ).rejects.toThrowError(
        /Invalid keys for options: notAnOption. Valid keys are:/
      )

      expect(fetchMock.requests().length).toEqual(0)
    })

    test('with invalid options and valid options', async () => {
      await expect(() =>
        decodeVin(vin, {
          // @ts-expect-error 'notAnOption' does not exist in type ...
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
        decodeVin(
          vin,
          {
            // @ts-expect-error 'notAnOption' does not exist in type ...
            notAnOption: 'invalid option with TS error',
            modelYear,
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
        decodeVin(
          vin,
          {
            // @ts-expect-error Type 'string' is not assignable to type 'never'.
            notAnOption: 'invalid option with TS error',
            modelYear,
          },
          false
        )
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
 * The actual types and typed returns are tested in decodeVin.test-d.ts via Vitest type checking,
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
  test('/DecodeVin/{vin}', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Count: number;
      Message: string;
      Results: DecodeVinResultsData[];
      SearchCriteria: string | null;
    }
    ******************************/
    const result_1 = await decodeVin(vin)
    const result_2 = await decodeVin(vin, true)
    const result_3 = await decodeVin(vin, undefined)

    for (const result of [result_1, result_2, result_3]) {
      expect(result)
    }
  })

  test('/DecodeVin/{vin}?modelYear={modelYear}', async () => {
    /******Expected Tooltip*******\
    const result_x: {
      Count: number;
      Message: string;
      Results: DecodeVinResultsData[];
      SearchCriteria: string | null;
    }
    ******************************/
    const result_1 = await decodeVin(vin, { modelYear: modelYearString })
    const result_2 = await decodeVin(vin, { modelYear: modelYearNumber })
    const result_3 = await decodeVin(vin, { modelYear }, true)
    const result_4 = await decodeVin(vin, { modelYear }, undefined)

    for (const result of [result_1, result_2, result_3, result_4]) {
      expect(result)
    }
  })

  test('returns a string if doFetch = false', async () => {
    /******Expected Tooltip*******\
        const result_x: string
    ******************************/
    const result_1 = await decodeVin(vin, false)
    const result_2 = await decodeVin(vin, {}, false)
    const result_3 = await decodeVin(vin, undefined, false)
    const result_4 = await decodeVin(vin, { modelYear: modelYearString }, false)
    const result_5 = await decodeVin(vin, { modelYear: modelYearNumber }, false)

    for (const result of [result_1, result_2, result_3, result_4, result_5]) {
      expect(result)
    }
  })
})
