/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, test } from 'vitest'
import { catchInvalidArguments, validateArgument } from '../argHandler'

describe('utils/argHandler.ts - exports:', () => {
  test('catchInvalidArguments function', () => {
    expect(catchInvalidArguments).toBeDefined()
    expect(catchInvalidArguments).toBeInstanceOf(Function)
  })

  test('validateArgument function', () => {
    expect(validateArgument).toBeDefined()
    expect(validateArgument).toBeInstanceOf(Function)
  })
})

describe('validateArgument()', () => {
  describe('all modes - throws error with invalid argData passed to validateArgument():', () => {
    /****************
     * Throws Error
     ****************/
    describe('argData is undefined or is not an object:', () => {
      test.each([
        '',
        'string',
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        ['1', '2', '3'],
        () => 'a function',
        true,
        false,
        null,
        undefined,
        NaN,
        new Date(),
        new String(),
        new Error(),
      ])('argData: %s', (argData) => {
        expect(() =>
          validateArgument(
            // @ts-expect-error Type 'x' is not assignable to type 'IArgToValidate'.
            argData
          )
        ).toThrowError(
          /'argData' argument is required and must be an object containing valid options/
        )
      })
    })

    describe('argData.name is undefined or is not a string:', () => {
      test.each([
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        ['1', '2', '3'],
        {},
        { a: '1', b: '2', c: '3' },
        () => 'a function',
        true,
        false,
        null,
        undefined,
        NaN,
        new Date(),
        new Object(),
      ])('argData.name: %s', (name) => {
        expect(() =>
          validateArgument({
            // @ts-expect-error Type 'x' is not assignable to type 'string'.
            name,
            value: 'some string',
          })
        ).toThrowError(/'argData.name', is required and must be of type string/)
      })
    })

    describe('argData.required is defined and is not a boolean:', () => {
      test.each([
        'string',
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        ['1', '2', '3'],
        {},
        { a: '1', b: '2', c: '3' },
        () => 'a function',
        null,
        NaN,
        new Date(),
        new String(),
        new Object(),
      ])('argData.required: %s', (required) => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 'some string',
            // @ts-expect-error Type 'x' is not assignable to type 'boolean'.
            required,
          })
        ).toThrowError(/'argData.required' must be of type boolean if provided/)
      })
    })

    describe('argData.requiredBy is defined and is not an array of length > 0:', () => {
      test.each([
        'string',
        123,
        1234n,
        [],
        {},
        { a: '1', b: '2', c: '3' },
        () => 'a function',
        true,
        new Date(),
        new String(),
      ])('argData.requiredBy: %s', (requiredBy) => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 'some string',
            // @ts-expect-error Type 'x' is not assignable to type ...
            requiredBy,
          })
        ).toThrowError(
          /'argData.requiredBy' must be an arrry of objects if provided/
        )
      })
    })

    describe('argData.requiredBy.value is defined and argData.requiredBy.name is not a string:', () => {
      test.each([
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        ['1', '2', '3'],
        {},
        { a: '1', b: '2', c: '3' },
        () => 'a function',
        true,
        false,
        null,
        undefined,
        NaN,
        new Date(),
        new Object(),
      ])('argData.requiredBy.name: %s', (requiredByName) => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 'defined value',
            requiredBy: [
              {
                // @ts-expect-error Type 'x' is not assignable to type 'string'.
                name: requiredByName,
                value: 1234,
              },
            ],
          })
        ).toThrowError(
          /'argData.requiredBy' requires both a name and value if value is defined/
        )
      })
    })

    describe('argData.types is defined and is not an array of strings with length > 0:', () => {
      test.each([
        123,
        'string',
        true,
        {},
        [],
        [undefined],
        [null],
        [1234],
        [true],
        [{}],
        ['string', 1234],
        () => 'a function',
        1234n,
        new Date(),
        new String(),
        new Object(),
      ])('argData.types: %s', (types) => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 'some string',
            // @ts-expect-error Type 'x' is not assignable to type 'string[]'.
            types,
          })
        ).toThrowError(
          /'argData.types' must be an array of strings if provided/
        )
      })
    })
  })

  describe('argument validation logic', () => {
    describe('if argData.required: true', () => {
      /****************
       * Returns true
       ****************/
      describe('returns true - if argData.value is defined or "truthy":', () => {
        const testValues = [
          true,
          'string',
          '0',
          123,
          -123,
          3.14,
          -3.14,
          1234n,
          Infinity,
          -Infinity,
          [],
          ['1', '2', '3'],
          {},
          { a: '1', b: '2', c: '3' },
          () => 'a function',
          new Date(),
          new String(),
          new Object(),
        ]

        describe('returns true - errorMode: "error" (default)', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
              })
            ).toEqual(true)
          })
        })

        describe('returns true - errorMode: "boolean"', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      /********************************
       * Throws Error or Returns False
       ********************************/
      describe('throws error or returns false - if argData.value is undefined or "falsey"', () => {
        const testValues = ['', undefined, false, null, NaN, 0, -0, 0n]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(() =>
              validateArgument({
                name: 'testValue',
                value,
                required: true,
              })
            ).toThrowError(
              /error validating argument named "testValue", it is required/
            )
          })
        })

        describe('returns false - errorMode: "boolean":', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'testValue',
                value,
                required: true,
                errorMode: 'boolean',
              })
            ).toEqual(false)
          })
        })
      })
    })

    describe('if argData.types is defined', () => {
      /****************
       * Returns true
       ****************/
      describe('returns true - if argData.value is undefined because type match will be skipped', () => {
        const testValues = ['', new String(), undefined]

        describe('returns true - errorMode: "error" (default)', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                types: ['string'],
              })
            ).toEqual(true)
          })
        })

        describe('returns true - errorMode: "boolean"', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                types: ['string'],
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      describe('returns true - if typeof argData.value matches at least one type:', () => {
        const testValues: [unknown, string[]][] = [
          /* match single type */
          ['string', ['string']],
          [123, ['number']],
          [true, ['boolean']],
          [false, ['boolean']],
          [null, ['null']],
          [() => 'a function', ['function']],
          [1234n, ['bigint']],
          [{ a: '1', b: '2', c: '3' }, ['object']],
          [['1', '2', '3'], ['array']],
          [[], ['array']],
          [{}, ['object']],
          [new Date(), ['date']],
          [new Error(), ['error']],
          [new TypeError(), ['error']],
          [new RangeError(), ['error']],
          [new ReferenceError(), ['error']],
          [new SyntaxError(), ['error']],
          [new URIError(), ['error']],
          [new EvalError(), ['error']],
          /* match multiple types */
          [{}, ['object', 'array']],
          [123, ['number', 'string']],
          ['string', ['string', 'number']],
          [123, ['string', 'number', 'boolean']],
          [true, ['string', 'number', 'boolean']],
          [undefined, ['string', 'number', 'boolean', 'undefined']],
          [null, ['string', 'number', 'boolean', 'undefined', 'null']],
          [() => 'a function', ['string', 'number', 'function']],
        ]

        describe('returns true - errorMode: "error" (default)', () => {
          test.each(testValues)('typeof "%s" = %s', (value, types) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                types,
              })
            ).toEqual(true)
          })
        })

        describe('returns true - errorMode: "boolean"', () => {
          test.each(testValues)('typeof "%s" = %s', (value, types) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                types,
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      /********************************
       * Throws Error or Returns False
       ********************************/
      describe('throws error or returns false - if typeof argData.value does not match at least one type:', () => {
        const testValues: [unknown, string[]][] = [
          /* mis-match single type */
          [123, ['string']],
          [true, ['string']],
          [false, ['string']],
          [null, ['string']],
          [() => 'a function', ['string']],
          [1234n, ['string']],
          [{ a: '1', b: '2', c: '3' }, ['string']],
          [['1', '2', '3'], ['string']],
          [[], ['string']],
          [{}, ['string']],
          [new Date(), ['string']],
          [new String(), ['object']],
          [new Error(), ['object']],
          [new TypeError(), ['object']],
          [new RangeError(), ['object']],
          [new ReferenceError(), ['object']],
          [new SyntaxError(), ['object']],
          [new URIError(), ['object']],
          [new EvalError(), ['object']],
          /* mis-match multiple types */
          [{}, ['string', 'number']],
          [123, ['string', 'boolean']],
          [true, ['string', 'number']],
          [null, ['string', 'number', 'boolean', 'undefined']],
          [() => 'a function', ['string', 'number', 'boolean']],
        ]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testValues)('typeof "%s" != type(s) %s', (value, types) => {
            expect(() =>
              validateArgument({
                name: 'testValue',
                value,
                types,
              })
            ).toThrowError(
              /error validating argument named "testValue", must be of type\(s\)/
            )
          })
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testValues)('typeof "%s" != type(s) %s', (value, types) => {
            expect(
              validateArgument({
                name: 'testValue',
                value,
                types,
                errorMode: 'boolean',
              })
            ).toEqual(false)
          })
        })
      })
    })

    describe('if argData.required: true && argData.types is defined', () => {
      /****************
       * Returns True
       ****************/
      describe('returns true - if argData.value is defined and matches at least one type:', () => {
        const testValues: [unknown, string[]][] = [
          /* match single type */
          ['string', ['string']],
          [123, ['number']],
          [true, ['boolean']],
          [() => 'a function', ['function']],
          [1234n, ['bigint']],
          [{ a: '1', b: '2', c: '3' }, ['object']],
          [['1', '2', '3'], ['array']],
          [[], ['array']],
          [{}, ['object']],
          [new Date(), ['date']],
          [new String(), ['string']],
          [new Error(), ['error']],
          [new TypeError(), ['error']],
          [new RangeError(), ['error']],
          [new ReferenceError(), ['error']],
          [new SyntaxError(), ['error']],
          [new URIError(), ['error']],
          [new EvalError(), ['error']],
          /* match multiple types */
          [{}, ['object', 'array']],
          [123, ['number', 'string']],
          ['string', ['string', 'number']],
          [123, ['string', 'number', 'boolean']],
          [true, ['string', 'number', 'boolean']],
          [() => 'a function', ['string', 'number', 'function']],
        ]

        describe('returns true - errorMode: "error" (default)', () => {
          test.each(testValues)('typeof "%s" === %s', (value, types) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
                types,
              })
            ).toEqual(true)
          })
        })

        describe('returns true - errorMode: "boolean"', () => {
          test.each(testValues)('typeof "%s" === %s', (value, types) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
                types,
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      /****************
       * Throws Error
       ****************/
      describe('throws error or returns false - if typeof argData.value does not match at least one type:', () => {
        const testValues: [unknown, string[]][] = [
          /* mis-match single type */
          [123, ['string']],
          [123, ['string']],
          [true, ['string']],
          [false, ['string']],
          [null, ['string']],
          [() => 'a function', ['string']],
          [1234n, ['string']],
          [{ a: '1', b: '2', c: '3' }, ['string']],
          [['1', '2', '3'], ['string']],
          [[], ['string']],
          [{}, ['string']],
          [new Date(), ['string']],
          [new String(), ['object']],
          [new Error(), ['object']],
          /* mis-match multiple types */
          [{}, ['string', 'number']],
          [123, ['string', 'boolean']],
          [true, ['string', 'number']],
          [null, ['string', 'number', 'boolean', 'undefined']],
          [() => 'a function', ['string', 'number', 'boolean']],
        ]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testValues)(
            'typeof "%s" !== type(s) %s',
            (value, types) => {
              expect(() =>
                validateArgument({
                  name: 'testValue',
                  value,
                  required: true,
                  types,
                })
              ).toThrowError(
                /error validating argument named "testValue", is required and must be of type\(s\)/
              )
            }
          )
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testValues)(
            'typeof "%s" !== type(s) %s',
            (value, types) => {
              expect(
                validateArgument({
                  name: 'testValue',
                  value,
                  required: true,
                  types,
                  errorMode: 'boolean',
                })
              ).toEqual(false)
            }
          )
        })
      })
    })

    describe('if argData.requiredBy is defined', () => {
      /****************
       * Returns true
       ****************/
      describe('returns true - if argData.value is defined when requiredBy another defined value:', () => {
        const testValues = [
          true,
          'string',
          '0',
          123,
          -123,
          3.14,
          -3.14,
          1234n,
          Infinity,
          -Infinity,
          [],
          ['1', '2', '3'],
          {},
          { a: '1', b: '2', c: '3' },
          () => 'a function',
          new Date(),
          new String(),
          new Object(),
        ]

        describe('returns true - errorMode: "error" (default)', () => {
          it.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                requiredBy: [{ name: 'test2', value: 'string' }],
              })
            ).toEqual(true)
          })
        })

        describe('returns true - errorMode: "boolean"', () => {
          it.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                requiredBy: [{ name: 'test2', value: 'string' }],
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      /********************************
       * Throws Error or Returns False
       *******************************/
      describe('throws error or returns false - if argData.value is undefined when requiredBy another defined value', () => {
        const testValues = [undefined, false, null, '', NaN, 0, -0, 0n]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each([testValues])('argData.value: %s', (value) => {
            expect(() =>
              validateArgument({
                name: 'test',
                value,
                requiredBy: [{ name: 'test2', value: 132 }],
              })
            ).toThrowError(
              /error validating argument named "test", it is required if "test2" is passed/
            )
          })
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each([testValues])('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                requiredBy: [{ name: 'test2', value: 132 }],
                errorMode: 'boolean',
              })
            ).toEqual(false)
          })
        })
      })

      describe('throws error or returns false - if argData.value is required but undefined when requiredBy another defined value', () => {
        const testValues = [undefined, false, null, '', NaN, 0, -0, 0n]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(() =>
              validateArgument({
                name: 'test',
                value,
                required: true,
                requiredBy: [{ name: 'test2', value: 132 }],
              })
            ).toThrowError(
              /error validating argument named "test", it is required if "test2" is passed/
            )
          })
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
                requiredBy: [{ name: 'test2', value: 132 }],
                errorMode: 'boolean',
              })
            ).toEqual(false)
          })
        })
      })
    })
  })
})

describe('catchInvalidArguments', () => {
  describe('all modes- throws error with invalid options passed to catchInvalidArguments():', () => {
    /****************
     * Throws Error
     ****************/
    describe('options are undefined or not an object:', () => {
      test.each([
        '',
        'string',
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        ['1', '2', '3'],
        () => 'a function',
        true,
        false,
        null,
        undefined,
        NaN,
        new Date(),
        new String(),
        new Error(),
      ])('options: %s', (argData) => {
        expect(() =>
          catchInvalidArguments(
            // @ts-expect-error Type 'x' is not assignable to type ...
            argData
          )
        ).toThrowError(
          /catchInvalidArguments requires "args" that must be an array of IArgToValidate objects/
        )
      })
    })

    describe('options.args is undefined or is not an array of length > 0:', () => {
      test.each([
        '',
        'string',
        123,
        1234n,
        0,
        -0,
        0n,
        [],
        () => 'a function',
        true,
        false,
        null,
        undefined,
        NaN,
        new Date(),
        new String(),
        new Error(),
      ])('options.args: %s', (args) => {
        expect(() =>
          catchInvalidArguments(
            // @ts-expect-error Type 'x' is not assignable to type 'IArgToValidate'.
            { args }
          )
        ).toThrowError(
          /catchInvalidArguments requires "args" that must be an array of IArgToValidate objects/
        )
      })
    })
  })

  describe('options.mode: "default"', () => {
    /****************
     * Returns true
     ****************/
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
      expect(catchInvalidArguments({ args })).toBe(true)
    })

    /****************
     * Throws Error
     ****************/
    test('throws error if validation fails', () => {
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
      ).toThrowError(/error validating argument named "make"/)

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
      ).toThrowError(/error validating argument named "make"/)

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
      ).toThrowError(/error validating argument named "modelYear"/)
    })
  })

  describe('options.mode: "atLeast"', () => {
    /****************
     * Returns true
     ****************/
    test('returns true if at least one of two args defined', () => {
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
        { name: 'make', value: null, types: ['string'] },
        { name: 'year', value: undefined, types: ['number'] },
        { name: 'params', value: { a: '1' }, types: ['object'] },
      ]
      expect(catchInvalidArguments({ mode: 'atLeast', args })).toEqual(true)
    })

    /****************
     * Throws Error
     ****************/
    test('throws error if not at least one', () => {
      expect(() =>
        catchInvalidArguments({
          mode: 'atLeast',
          args: [
            {
              name: 'modelYear',
              value: null,
              types: ['string'],
            },
            {
              name: 'make',
              value: undefined,
              types: ['string'],
            },
            {
              name: 'model',
              value: '',
              types: ['string'],
            },
          ],
        })
      ).toThrowError(
        /must provide at least one of the following arguments: modelYear, make, model/
      )
    })
  })
})
