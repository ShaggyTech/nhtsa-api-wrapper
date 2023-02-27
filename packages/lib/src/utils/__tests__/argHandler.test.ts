/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, expect } from 'vitest'
import { catchInvalidArguments, validateArgument } from '../argHandler'

describe('validateArgument - utility helper function', () => {
  test('it exists', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })

  describe('it catches invalid arguments (default error mode):', () => {
    describe('required only', () => {
      test('returns true - required only', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 1234,
            required: true,
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
          }),
        ).toEqual(true)
      })

      test('throws error - required only', () => {
        /* undefined throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
          }),
        ).toThrowError()

        /* null throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            required: true,
          }),
        ).toThrowError()

        /* empty string throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: '',
            required: true,
          }),
        ).toThrowError()

        /* empty array throws error */
        expect(() => validateArgument([] as any)).toThrowError()

        /* empty object throws error */
        expect(() => validateArgument({} as any)).toThrowError()
      })
    })

    describe('types only', () => {
      test('returns true - types only', () => {
        /* undefined does not throw error */
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            types: ['string'],
          }),
        ).toEqual(true)

        /* empty string does not throw error */
        expect(
          validateArgument({
            name: 'test',
            value: '',
            types: ['string'],
          }),
        ).toEqual(true)

        /* returns true if types match */
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            types: ['string'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            types: ['string', 'number'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['array'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            types: ['object', 'boolean'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            types: ['function'],
          }),
        ).toEqual(true)
      })

      test('throws error - types only', () => {
        /* null throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            types: ['string'],
          }),
        ).toThrowError()

        /* wrong type throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: 123,
            types: ['string'],
          }),
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['number', 'object'],
          }),
        ).toThrowError()

        /* invalid types throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: [] as any,
          }),
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: 'string' as any,
          }),
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: { a: '1' } as any,
          }),
        ).toThrowError()
      })
    })

    describe('required and types', () => {
      test('returns true', () => {
        /* returns true if types match */
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
            types: ['string'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            required: true,
            types: ['string', 'number'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['array'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
            types: ['object', 'boolean'],
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
            types: ['function'],
          }),
        ).toEqual(true)
      })

      test('throws error', () => {
        /* undefined throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            types: ['string'],
          }),
        ).toThrowError()

        /* null throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            types: ['string'],
          }),
        ).toThrowError()

        /* empty string throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            types: ['string'],
          }),
        ).toThrowError()

        /* wrong type throws error */
        expect(() =>
          validateArgument({
            name: 'test',
            value: 123,
            required: true,
            types: ['array'],
          }),
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['number', 'object'],
          }),
        ).toThrowError()
      })
    })
  })

  describe('it catches invalid arguments (boolean mode):', () => {
    describe('required only', () => {
      test('returns true - required only', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 1234,
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(true)
      })

      test('returns false - required only', () => {
        /* undefined returns false */
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* null returns false */
        expect(
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* empty string returns false */
        expect(
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            errorMode: 'boolean',
          }),
        ).toEqual(false)
      })
    })

    describe('types only', () => {
      test('returns true - types only', () => {
        /* undefined does not throw error */
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        /* empty string does not throw error */
        expect(
          validateArgument({
            name: 'test',
            value: '',
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        /* returns true if types match */
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            types: ['string', 'number'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['array'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            types: ['object', 'boolean'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            types: ['function'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)
      })

      test('returns false - types only', () => {
        /* null returns false */
        expect(
          validateArgument({
            name: 'test',
            value: null,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* wrong type returns false */
        expect(
          validateArgument({
            name: 'test',
            value: 123,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['number', 'object'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)
      })
    })

    describe('required and types', () => {
      test('returns true', () => {
        /* returns true if types match */
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            required: true,
            types: ['string', 'number'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['array'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
            types: ['object', 'boolean'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
            types: ['function'],
            errorMode: 'boolean',
          }),
        ).toEqual(true)
      })

      test('returns false', () => {
        /* undefined returns false */
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* null returns false */
        expect(
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* empty string returns false */
        expect(
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        /* wrong type returns false */
        expect(
          validateArgument({
            name: 'test',
            value: 123,
            required: true,
            types: ['array'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['number', 'object'],
            errorMode: 'boolean',
          }),
        ).toEqual(false)
      })
    })
  })
})

describe('catchInvalidArguments - utility helper function', () => {
  test('it exists', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  test('throws error with empty or invalid args array', () => {
    expect(() => catchInvalidArguments(undefined as any)).toThrowError()
    expect(() => catchInvalidArguments({} as any)).toThrowError()

    expect(() =>
      catchInvalidArguments({ args: 'string' } as any),
    ).toThrowError()

    expect(() => catchInvalidArguments({ args: [] })).toThrowError()

    expect(() => catchInvalidArguments({ args: {} } as any)).toThrowError()
  })

  describe('default mode', () => {
    test('returns true if all args are valid', () => {
      const args = [
        { name: 'make', value: 'Audi', required: true, types: ['string'] },
        { name: 'params', value: { a: '1' }, types: ['object'] },
        {
          name: 'modelYear',
          value: 1999,
          types: ['string', 'number'],
        },
      ]
      expect(catchInvalidArguments({ args })).toEqual(true)
    })

    test('throws error if validation fails', () => {
      /* does not pass validation */
      expect(() =>
        catchInvalidArguments({
          args: [
            {
              name: 'make',
              value: '',
              required: true,
              types: ['string'],
            },
          ],
        }),
      ).toThrowError()

      expect(() =>
        catchInvalidArguments({
          args: [
            {
              name: 'make',
              value: undefined,
              required: true,
              types: ['string'],
            },
          ],
        }),
      ).toThrowError()

      expect(() =>
        catchInvalidArguments({
          args: [
            {
              name: 'modelYear',
              value: '1988',
              types: ['number'],
            },
          ],
        }),
      ).toThrowError()
    })
  })

  describe('atLeast mode', () => {
    test('returns true if at least one two args defined', () => {
      const args = [
        { name: 'make', value: undefined, types: ['string'] },
        { name: 'year', value: 1999, types: ['number'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    test('returns true if both args defined', () => {
      const args = [
        { name: 'make', value: 'Audi', types: ['string'] },
        { name: 'year', value: 1999, types: ['number'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    test('returns true if at least one of three args defined', () => {
      const args = [
        { name: 'make', value: undefined, types: ['string'] },
        { name: 'year', value: undefined, types: ['number'] },
        { name: 'params', value: { a: '1' }, types: ['object'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    test('throws error if validation fails', () => {
      /* empty strings do not pass validation */
      expect(() =>
        catchInvalidArguments({
          mode: 'atLeast',
          args: [
            {
              name: 'make',
              value: '',
              types: ['string'],
            },
            {
              name: 'model',
              value: undefined,
              types: ['string'],
            },
          ],
        }),
      ).toThrowError()

      /* null values do not pass validation */
      expect(() =>
        catchInvalidArguments({
          mode: 'atLeast',
          args: [
            {
              name: 'make',
              value: null,
              types: ['string'],
            },
            {
              name: 'model',
              value: undefined,
              types: ['string'],
            },
          ],
        }),
      ).toThrowError()

      /* both undefined, throws error */
      expect(() =>
        catchInvalidArguments({
          mode: 'atLeast',
          args: [
            {
              name: 'make',
              value: undefined,
              types: ['string'],
            },
            {
              name: 'model',
              value: undefined,
              types: ['string'],
            },
          ],
        }),
      ).toThrowError()
    })
  })
})
