/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, test } from 'vitest'
import {
  catchInvalidArguments,
  catchInvalidKeys,
  validateArgument,
} from '../argHandler'

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

const truthyValues = [
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

const falseyValues = [null, undefined, false, '', NaN, 0, -0, 0n]

const testNotBoolean = [
  'string',
  123,
  1234n,
  0,
  -0,
  0n,
  [],
  ['1', '2', '3'],
  {},
  { a: '1' },
  () => 'a function',
  null,
  NaN,
  new Date(),
  new String(),
  new Object(),
]

const testNotString = [
  123,
  1234n,
  0,
  -0,
  0n,
  [],
  ['1', '2', '3'],
  {},
  { a: '1' },
  () => 'a function',
  true,
  false,
  null,
  NaN,
  new Date(),
  new Object(),
]

const testNotObject = [
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
  NaN,
  new Date(),
  new String(),
  new Error(),
]

const testNotArrayOfLength = [
  'string',
  123,
  1234n,
  [],
  {},
  { a: '1' },
  () => 'a function',
  true,
  new Date(),
  new String(),
]

const testNotArrayOfObjects = [
  ['string'],
  [123],
  [null, { a: 'b' }],
  ['string', { a: 'b' }],
  [['nested array']],
  ...testNotArrayOfLength,
]

const testNotArrayOfStrings = [
  [undefined],
  [123],
  ['string', null],
  ['string', 123],
  ['string', undefined],
  [{ a: 'b' }],
  ['string', { a: 'b' }],
  [['nested array']],
  ...testNotArrayOfLength,
]

const testTypesMatch: [unknown, string[]][] = [
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
  [null, ['string', 'number', 'boolean', 'undefined', 'null']],
  [() => 'a function', ['string', 'number', 'function']],
]

const testTypesMismatch: [unknown, string[]][] = [
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

describe('validateArgument()', () => {
  describe('all modes - throws error with invalid argData passed to validateArgument():', () => {
    /****************
     * Throws Error
     ****************/
    describe('argData is undefined or is not an object:', () => {
      test.each([undefined, ...testNotObject])('argData: %s', (argData) => {
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

    describe('name is undefined or is not a string:', () => {
      test.each([undefined, ...testNotString])('argData.name: %s', (name) => {
        expect(() =>
          validateArgument({
            // @ts-expect-error Type 'x' is not assignable to type 'string'.
            name,
            value: 'some string',
          })
        ).toThrowError(/'argData.name', is required and must be of type string/)
      })
    })

    describe('required is defined and is not a boolean:', () => {
      test.each(testNotBoolean)('argData.required: %s', (required) => {
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

    describe('requiredBy is defined and is not an array of objects:', () => {
      test.each(testNotArrayOfObjects)(
        'argData.requiredBy: %s',
        (requiredBy) => {
          expect(() =>
            validateArgument({
              name: 'test',
              value: 'some string',
              // @ts-expect-error Type 'x' is not assignable to type ...
              requiredBy,
            })
          ).toThrowError(
            /'argData.requiredBy' must be an array of objects if provided/
          )
        }
      )
    })

    describe('requiredBy.value is defined and requiredBy.name is not a string:', () => {
      test.each([undefined, ...testNotString])(
        'argData.requiredBy.name: %s',
        (requiredByName) => {
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
        }
      )
    })

    describe('types is defined and is not an array of strings with length > 0:', () => {
      test.each(testNotArrayOfStrings)('argData.types: %s', (types) => {
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

    describe('argData.validKeys is defined and is not an array of strings with length > 0:', () => {
      test.each(testNotArrayOfStrings)('argData.validKeys: %s', (validKeys) => {
        expect(() =>
          validateArgument({
            name: 'test',
            value: 'some string',
            // @ts-expect-error Type 'x' is not assignable to type 'string[]' | undefined.
            validKeys,
          })
        ).toThrowError(
          /'argData.validKeys' must be an array of strings if provided/
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
        describe('errorMode: "error" (default)', () => {
          test.each(truthyValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                required: true,
              })
            ).toEqual(true)
          })
        })

        describe('errorMode: "boolean"', () => {
          test.each(truthyValues)('argData.value: %s', (value) => {
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
      describe('throws error or returns false - if argData.value is undefined', () => {
        describe('errorMode: "error" (default)', () => {
          test.each([undefined])('argData.value: %s', (value) => {
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

        describe('errorMode: "boolean":', () => {
          test.each([undefined])('argData.value: %s', (value) => {
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

        describe('errorMode: "error" (default)', () => {
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

        describe('errorMode: "boolean"', () => {
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
        describe('errorMode: "error" (default)', () => {
          test.each(testTypesMatch)('typeof "%s" = %s', (value, types) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                types,
              })
            ).toEqual(true)
          })
        })

        describe('errorMode: "boolean"', () => {
          test.each(testTypesMatch)('typeof "%s" = %s', (value, types) => {
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
      describe('if typeof argData.value does not match at least one type:', () => {
        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testTypesMismatch)(
            'typeof "%s" != type(s) %s',
            (value, types) => {
              expect(() =>
                validateArgument({
                  name: 'testValue',
                  value,
                  types,
                })
              ).toThrowError(
                /error validating argument named "testValue", must be of type\(s\)/
              )
            }
          )
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testTypesMismatch)(
            'typeof "%s" != type(s) %s',
            (value, types) => {
              expect(
                validateArgument({
                  name: 'testValue',
                  value,
                  types,
                  errorMode: 'boolean',
                })
              ).toEqual(false)
            }
          )
        })
      })
    })

    describe('if argData.required: true && argData.types is defined', () => {
      /****************
       * Returns True
       ****************/
      describe('returns true - if argData.value is defined and matches at least one type:', () => {
        describe('errorMode: "error" (default)', () => {
          test.each(testTypesMatch)('typeof "%s" === %s', (value, types) => {
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

        describe('errorMode: "boolean"', () => {
          test.each(testTypesMatch)('typeof "%s" === %s', (value, types) => {
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
      describe('if typeof argData.value does not match at least one type:', () => {
        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testTypesMismatch)(
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
                /error validating argument named "testValue", it is required and must be of type\(s\)/
              )
            }
          )
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testTypesMismatch)(
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
        describe('errorMode: "error" (default)', () => {
          it.each(truthyValues)('argData.value: %s', (value) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                requiredBy: [{ name: 'test2', value: 'string' }],
              })
            ).toEqual(true)
          })
        })

        describe('errorMode: "boolean"', () => {
          it.each(truthyValues)('argData.value: %s', (value) => {
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
      describe('if argData.value is undefined when requiredBy another defined value', () => {
        describe('throws error - errorMode: "error" (default)', () => {
          test.each(falseyValues)('argData.value: %s', (value) => {
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
          test.each(falseyValues)('argData.value: %s', (value) => {
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

      describe('if argData.value is required but undefined when requiredBy another defined value', () => {
        describe('throws error - errorMode: "error" (default)', () => {
          test.each(falseyValues)('argData.value: %s', (value) => {
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
          test.each(falseyValues)('argData.value: %s', (value) => {
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

    describe('if argData.value is an object and argData.validKeys is an array of strings', () => {
      /****************
       * Returns true
       ****************/
      describe('returns true - if argData.value contains all keys in argData.validKeys:', () => {
        const testValues = [
          { value: { a: '1' }, validKeys: ['a'] },
          { value: { a: '1' }, validKeys: ['a', 'b'] },
          { value: { a: '1', b: '2' }, validKeys: ['a', 'b'] },
          { value: { a: '1', b: '2', c: '3' }, validKeys: ['a', 'b', 'c'] },
          {
            value: { a: '1', b: '2', c: '3' },
            validKeys: ['a', 'b', 'c', 'd'],
          },
        ]

        describe('errorMode: "error" (default)', () => {
          test.each(testValues)('%s', ({ value, validKeys }) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                validKeys,
              })
            ).toEqual(true)
          })
        })

        describe('errorMode: "boolean"', () => {
          test.each(testValues)('%s', ({ value, validKeys }) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                validKeys,
                errorMode: 'boolean',
              })
            ).toEqual(true)
          })
        })
      })

      /********************************
       * Throws Error or Returns False
       ********************************/
      describe('if argData.value contains invalid keys:', () => {
        const testValues = [
          { value: { a: '1' }, validKeys: ['b'] },
          { value: { a: '1' }, validKeys: ['b', 'c'] },
          { value: { a: '1', b: '2' }, validKeys: ['c'] },
          { value: { a: '1', b: '2', c: '3' }, validKeys: ['d'] },
          {
            value: { a: '1', b: '2', c: '3' },
            validKeys: ['d', 'e', 'f'],
          },
        ]

        describe('throws error - errorMode: "error" (default)', () => {
          test.each(testValues)('%s', ({ value, validKeys }) => {
            expect(() =>
              validateArgument({
                name: 'testObj',
                value,
                validKeys,
              })
            ).toThrowError(/Invalid keys for testObj/)
          })
        })

        describe('returns false - errorMode: "boolean"', () => {
          test.each(testValues)('%s', ({ value, validKeys }) => {
            expect(
              validateArgument({
                name: 'test',
                value,
                validKeys,
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
  describe('all modes - throws error with invalid options passed to catchInvalidArguments():', () => {
    /****************
     * Throws Error
     ****************/
    describe('options are undefined or not an object:', () => {
      test.each([undefined, ...testNotObject])('options: %s', (argData) => {
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
      test.each([undefined, ...testNotArrayOfLength])(
        'options.args: %s',
        (args) => {
          expect(() =>
            catchInvalidArguments(
              // @ts-expect-error Type 'x' is not assignable to type 'IArgToValidate'.
              { args }
            )
          ).toThrowError(
            /catchInvalidArguments requires "args" that must be an array of IArgToValidate objects/
          )
        }
      )
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

    // Remainder of the cases are covered in validateArgument() tests

    /****************
     * Throws Error
     ****************/
    describe('throws error if validation fails', () => {
      test('if argData.value is undefined when required', () => {
        expect(() =>
          catchInvalidArguments({
            args: [
              {
                name: 'testName',
                value: undefined,
                required: true,
                types: ['string'],
              },
            ],
          })
        ).toThrowError(/error validating argument named "testName"/)
      })

      test('if argData.value is required and defined but does not match type', () => {
        expect(() =>
          catchInvalidArguments({
            args: [
              // Passes validation
              {
                name: 'shouldPass',
                value: Error('test error'),
                required: true,
                types: ['error'],
              },
              // Fails validation
              {
                name: 'testName',
                value: 123,
                required: true,
                types: ['string'],
              },
            ],
          })
        ).toThrowError(/error validating argument named "testName"/)
      })

      test('if argData.value is defined and does not match type', () => {
        expect(() =>
          catchInvalidArguments({
            args: [
              // Passes validation
              {
                name: 'shouldPass',
                value: Error('test error'),
                types: ['error'],
              },
              // Fails validation
              {
                name: 'testName',
                value: 123,
                types: ['string'],
              },
            ],
          })
        ).toThrowError(/error validating argument named "testName"/)
      })

      // Remainder of the cases are covered in validateArgument() tests
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

describe('catchInvalidKeys', () => {
  describe('all modes- throws error with invalid options passed to catchInvalidKeys():', () => {
    /****************
     * Throws Error
     ****************/
    describe('options are neither object nor array of length:', () => {
      test.each([
        [],
        '',
        'string',
        123,
        1234n,
        0,
        -0,
        0n,
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
          catchInvalidKeys(
            // @ts-expect-error Type 'x' is not assignable to type ...
            argData
          )
        ).toThrowError(
          /catchInvalidKeys requires an object or array of objects as the only argument/
        )
      })
    })

    describe('options.name is undefined or is not a string:', () => {
      test.each([undefined, testNotString])('options.name: %s', (name) => {
        expect(() =>
          catchInvalidKeys({
            // @ts-expect-error Type 'x' is not assignable to type 'string'.
            name,
            obj: { a: 'b' },
            validKeys: ['a', 'b', 'c'],
          })
        ).toThrowError(/catchInvalidKeys requires 'options.name' be a string/)
      })
    })

    describe('options.obj is not an object if defined:', () => {
      test.each(testNotObject)('options.value: %s', (obj) => {
        expect(() =>
          catchInvalidKeys({
            name: 'test',
            // @ts-expect-error Type 'x' is not assignable to type 'object'.
            obj,
            validKeys: ['a', 'b', 'c'],
          })
        ).toThrowError(
          /catchInvalidKeys requires 'options.obj' be an object if defined/
        )
      })
    })

    describe('options.validKeys is undefined or is not an array of strings with length > 0:', () => {
      test.each([undefined, testNotArrayOfLength])(
        'options.validKeys: %s',
        (validKeys) => {
          expect(() =>
            catchInvalidKeys({
              name: 'test',
              obj: { a: 'b' },
              // @ts-expect-error Type 'x' is not assignable to type 'string[]' | undefined.
              validKeys,
            })
          ).toThrowError(
            /catchInvalidKeys requires 'options.validKeys' be an array of strings/
          )
        }
      )
    })
  })

  /**
   * Returns true
   */
  describe('returns true:', () => {
    test('if options.obj is undefined', () => {
      expect(
        catchInvalidKeys({
          name: 'testObj',
          obj: undefined,
          validKeys: ['apple', 'bravo', 'charlie'],
        })
      ).toEqual(true)
    })

    test('if no invalid keys found in options.obj', () => {
      expect(
        catchInvalidKeys({
          name: 'testObj',
          obj: { apple: 'a', bravo: 'b', charlie: 'c' },
          validKeys: ['apple', 'bravo', 'charlie'],
        })
      ).toEqual(true)
    })

    test('if options is an array and no invalid keys found in any obj', () => {
      expect(
        catchInvalidKeys([
          {
            name: 'testObj_1',
            obj: { apple: 'a', bravo: 'b', charlie: 'c' },
            validKeys: ['apple', 'bravo', 'charlie'],
          },
          {
            name: 'testObj_2',
            obj: { delta: 'd', echo: 'e' },
            validKeys: ['delta', 'echo'],
          },
        ])
      ).toEqual(true)
    })
  })

  /**
   * Throws Error
   */
  describe('throws Error:', () => {
    test('if invalid keys found in options.obj', () => {
      expect(() =>
        catchInvalidKeys({
          name: 'testObj',
          obj: { apple: 'a', bravo: 'b', charlie: 'c', delta: 'd' },
          validKeys: ['apple', 'bravo', 'charlie'],
        })
      ).toThrowError(
        /Invalid keys for testObj: delta. Valid keys are: apple, bravo, charlie/
      )

      expect(() =>
        catchInvalidKeys({
          name: 'testObj',
          obj: { bravo: 'b', charlie: 'c' },
          validKeys: ['apple'],
        })
      ).toThrowError(
        /Invalid keys for testObj: bravo, charlie. Valid keys are: apple/
      )
    })

    test('if options is an array and invalid keys found in any obj', () => {
      expect(() =>
        catchInvalidKeys([
          {
            name: 'testObj_1',
            obj: { apple: 'a', bravo: 'b', charlie: 'c', delta: 'd' },
            validKeys: ['apple', 'bravo', 'charlie'],
          },
          {
            name: 'testObj_2',
            obj: { echo: 'e', foxtrot: 'f' },
            validKeys: ['echo'],
          },
        ])
      ).toThrowError(
        /Invalid keys for testObj_1: delta. Valid keys are: apple, bravo, charlie/
      )

      expect(() =>
        catchInvalidKeys([
          {
            name: 'testObj_2',
            obj: { echo: 'e', foxtrot: 'f' },
            validKeys: ['echo'],
          },
          {
            name: 'testObj_1',
            obj: { apple: 'a', bravo: 'b', charlie: 'c', delta: 'd' },
            validKeys: ['apple', 'bravo', 'charlie'],
          },
        ])
      ).toThrowError(
        /Invalid keys for testObj_2: foxtrot. Valid keys are: echo/
      )

      expect(() =>
        catchInvalidKeys([
          {
            name: 'testObj',
            obj: { apple: 'a', bravo: 'b' },
            validKeys: ['charlie'],
          },
        ])
      ).toThrowError(
        /Invalid keys for testObj: apple, bravo. Valid keys are: charlie/
      )
    })
  })
})
