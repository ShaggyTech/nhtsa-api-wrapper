/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest'
import { catchInvalidArguments, validateArgument } from '../argHandler'

describe('argHandler.ts - exports', () => {
  it('catchInvalidArguments function', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  it('validateArgument function', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })
})

describe('validateArgument - utility helper function', () => {
  describe('all modes', () => {
    it('throws error when arg is empty array', () => {
      expect(() => validateArgument([] as any)).toThrowError()
    })

    it('throws error when arg is empty object', () => {
      expect(() => validateArgument({} as any)).toThrowError()
    })
  })

  describe('errorMode: error (default)', () => {
    describe('only required', () => {
      /****************
       * Returns true
       ****************/
      it('returns true with defined value', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 1234,
            required: true,
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
          })
        ).toEqual(true)
      })

      it('returns true when value is empty array', () => {
        expect(
          validateArgument({
            name: 'test',
            value: [],
            required: true,
          })
        ).toEqual(true)
      })

      it('returns true when value is empty object', () => {
        expect(
          validateArgument({
            name: 'test',
            value: {},
            required: true,
          })
        ).toEqual(true)
      })

      /****************
       * Throws Error
       ****************/
      it('throws error when value is undefined', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
          })
        ).toThrowError()
      })

      it('throws error when value is null', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            required: true,
          })
        ).toThrowError()
      })

      it('throws error when value is empty string', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: '',
            required: true,
          })
        ).toThrowError()
      })
    })

    describe('only types', () => {
      /****************
       * Returns true
       ****************/
      it('returns true with matching type', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            types: ['string'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            types: ['string', 'number'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['array'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            types: ['object', 'boolean'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            types: ['function'],
          })
        ).toEqual(true)
      })

      it('returns true with undefined value', () => {
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            types: ['string'],
          })
        ).toEqual(true)
      })

      it('returns true with empty string when tested against type string', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '',
            types: ['string'],
          })
        ).toEqual(true)
      })

      it('returns true with empty array when tested against type array', () => {
        expect(
          validateArgument({
            name: 'test',
            value: [],
            types: ['array'],
          })
        ).toEqual(true)
      })

      it('returns true with empty object when tested against type object', () => {
        expect(
          validateArgument({
            name: 'test',
            value: {},
            types: ['object'],
          })
        ).toEqual(true)
      })

      /****************
       * Throws Error
       ****************/
      it('throws error when types do not match and value is defined', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            types: ['string'],
          })
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: 123,
            types: ['string'],
          })
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['number', 'object'],
          })
        ).toThrowError()
      })

      it('throws error when types array is empty', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: [] as any,
          })
        ).toThrowError()
      })

      it('throws error when types is not an array', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: 'string' as any,
          })
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: { a: '1' } as any,
          })
        ).toThrowError()
      })
    })

    describe('required and types', () => {
      /****************
       * Returns True
       ****************/
      it('returns true if value is defined and types match', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '3VWD07AJ5EM388203',
            required: true,
            types: ['string'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: 132,
            required: true,
            types: ['string', 'number'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['array'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: { a: '1', b: '2', c: '3' },
            required: true,
            types: ['object', 'boolean'],
          })
        ).toEqual(true)

        expect(
          validateArgument({
            name: 'test',
            value: () => 'this is a function',
            required: true,
            types: ['function'],
          })
        ).toEqual(true)
      })

      it('returns true with empty array when tested against type array', () => {
        expect(
          validateArgument({
            name: 'test',
            value: [],
            required: true,
            types: ['array'],
          })
        ).toEqual(true)
      })

      it('returns true with empty object when tested against type object', () => {
        expect(
          validateArgument({
            name: 'test',
            value: {},
            required: true,
            types: ['object'],
          })
        ).toEqual(true)
      })

      /****************
       * Throws Error
       ****************/
      it('throws error if value is undefined', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            types: ['string'],
          })
        ).toThrowError()
      })

      it('throws error if value is null', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            types: ['string'],
          })
        ).toThrowError()
      })

      it('throws error with empty string when tested against type string', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            types: ['string'],
          })
        ).toThrowError()
      })

      it('throws error when type of value does not match', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 123,
            required: true,
            types: ['array'],
          })
        ).toThrowError()

        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['number', 'string', 'object'],
          })
        ).toThrowError()
      })
    })
  })

  describe('errorMode: boolean', () => {
    describe('only required', () => {
      /****************
       * Returns true
       * - same as default mode
       ****************/

      /****************
       * Returns false
       ****************/
      it('returns false when value is undefined', () => {
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            errorMode: 'boolean',
          })
        ).toEqual(false)
      })

      it('returns false when value is null', () => {
        expect(
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            errorMode: 'boolean',
          })
        ).toEqual(false)
      })

      it('returns false when value is empty string', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            errorMode: 'boolean',
          })
        ).toEqual(false)
      })
    })

    describe('only types', () => {
      /****************
       * Returns true
       * - same as default mode
       ****************/

      /****************
       * Returns false
       ****************/
      it('returns false when types do not match and value is defined', () => {
        expect(
          validateArgument({
            name: 'test',
            value: null,
            types: ['string'],
            errorMode: 'boolean',
          })
        ).toBe(false)

        expect(
          validateArgument({
            name: 'test',
            value: 123,
            types: ['string'],
            errorMode: 'boolean',
          })
        ).toBe(false)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: ['number', 'object'],
            errorMode: 'boolean',
          })
        ).toBe(false)
      })

      /****************
       * Throws Error
       ****************/
      it('throws error when types array is empty', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: [] as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
      })

      it('throws error when types is not an array', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: 'string' as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            types: { a: '1' } as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
      })
    })

    describe('required and types', () => {
      /****************
       * Returns true
       * - same as default mode
       ****************/

      /****************
       * Returns false
       ****************/
      it('returns false if value is undefined', () => {
        expect(
          validateArgument({
            name: 'test',
            value: undefined,
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          })
        ).toBe(false)
      })

      it('returns false if value is null', () => {
        expect(
          validateArgument({
            name: 'test',
            value: null,
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          })
        ).toBe(false)
      })

      it('returns false with empty string when tested against type string', () => {
        expect(
          validateArgument({
            name: 'test',
            value: '',
            required: true,
            types: ['string'],
            errorMode: 'boolean',
          })
        ).toBe(false)
      })

      it('returns false when type of value does not match', () => {
        expect(
          validateArgument({
            name: 'test',
            value: 123,
            required: true,
            types: ['array'],
            errorMode: 'boolean',
          })
        ).toBe(false)

        expect(
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: ['number', 'string', 'object'],
            errorMode: 'boolean',
          })
        ).toBe(false)
      })

      /****************
       * Throws Error
       ****************/
      it('throws error when types array is empty', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: [] as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
      })

      it('throws error when types is not an array', () => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: 'string' as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
        expect(() =>
          validateArgument({
            name: 'test',
            value: ['1', '2', '3'],
            required: true,
            types: { a: '1' } as any,
            errorMode: 'boolean',
          })
        ).toThrowError()
      })
    })
  })
})

describe('catchInvalidArguments - utility helper function', () => {
  describe('all modes', () => {
    /****************
     * Throws Error
     ****************/
    it('throws error with empty or invalid args array', () => {
      expect(() => catchInvalidArguments(undefined as any)).toThrowError()
      expect(() => catchInvalidArguments({} as any)).toThrowError()

      expect(() =>
        catchInvalidArguments({ args: 'string' } as any)
      ).toThrowError()

      expect(() => catchInvalidArguments({ args: [] })).toThrowError()

      expect(() => catchInvalidArguments({ args: {} } as any)).toThrowError()
    })
  })

  describe('default mode', () => {
    /****************
     * Returns true
     ****************/
    it('returns true if all args are valid', () => {
      const args = [
        { name: 'make', value: 'Audi', required: true, types: ['string'] },
        { name: 'params', value: { a: '1' }, types: ['object'] },
        {
          name: 'modelYear',
          value: 1999,
          types: ['string', 'number'],
        },
      ]
      expect(catchInvalidArguments({ args })).toBe(true)
    })

    /****************
     * Throws Error
     ****************/
    it('throws error if validation fails', () => {
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
        })
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
        })
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
        })
      ).toThrowError()
    })
  })

  describe('atLeast mode', () => {
    it('returns true if at least one two args defined', () => {
      const args = [
        { name: 'make', value: undefined, types: ['string'] },
        { name: 'year', value: 1999, types: ['number'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    it('returns true if both args defined', () => {
      const args = [
        { name: 'make', value: 'Audi', types: ['string'] },
        { name: 'year', value: 1999, types: ['number'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    it('returns true if at least one of three args defined', () => {
      const args = [
        { name: 'make', value: undefined, types: ['string'] },
        { name: 'year', value: undefined, types: ['number'] },
        { name: 'params', value: { a: '1' }, types: ['object'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    it('throws error if validation fails', () => {
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
        })
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
        })
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
        })
      ).toThrowError()
    })
  })
})
