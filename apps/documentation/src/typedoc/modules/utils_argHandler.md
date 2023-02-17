# Module: utils/argHandler

## Table of contents

### Type Aliases

- [IArgToValidate](utils_argHandler.md#iargtovalidate)

### Functions

- [catchInvalidArguments](utils_argHandler.md#catchinvalidarguments)
- [validateArgument](utils_argHandler.md#validateargument)

## Type Aliases

### IArgToValidate

Ƭ **IArgToValidate**: { `name`: `string` ; `value`: `unknown`  } & [`AtLeastOne`](utils_types.md#atleastone)<{ `required?`: `boolean` ; `types?`: `string`[]  }\>

#### Defined in

[utils/argHandler.ts:9](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a64bd4e/packages/lib/src/utils/argHandler.ts#L9)

## Functions

### catchInvalidArguments

▸ **catchInvalidArguments**(`options`): `void`

Catches invalid arguments passed to functions and throws an error with a message detailing the
invalid argument(s) and what was expected.

At least one of `required` or `types` must be provided for each arg to validate against or it
will validate nothing and return true for that arg value as if it was valid.

Under the hood it loops through the args and calls `validateArgument` to validate each arg.
`validateArgument` will throw an error if any of the arguments are invalid based on the provided
options in each arg. See the description for `validateArgument` for more details on how
validation logic works and how to override the default error throwing behavior.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | options object |
| `options.args` | [`IArgToValidate`](utils_argHandler.md#iargtovalidate)[] | array of IArgToValidate objects |
| `options.mode?` | ``"default"`` \| ``"atLeast"`` | 'default' or 'atLeast' - 'default' will validate all args, 'atLeast' will validate at least one arg in in the array has a defined value |

#### Returns

`void`

- true if validation passes, throws error in the case of validation failure

#### Defined in

[utils/argHandler.ts:35](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a64bd4e/packages/lib/src/utils/argHandler.ts#L35)

___

### validateArgument

▸ **validateArgument**(`options`): `boolean`

Will validate a single argument based on the provided options and throws an error with a message
detailing the invalid argument(s) and what was expected.

There are two modes for this function:
- 'error' - (default) - Throws an error if the argument fails validation.
- 'boolean' - Returns false if the argument fails validation, does not throw an error.

Both modes return true if the argument passes validation.

The logic is the same for both modes, the only difference is the return value.

`error` mode is useful for validating arguments supplied to a function and throwing an
error if the arguments are invalid. Can also be used to validate existence and type of any
value matches an array of type names you provide. It will throw an error if the argument is
invalid and return true if the argument is valid.

`boolean` mode is useful for validating arguments in a function that returns a boolean value,
such as in Array.filter() or 'if' statements. It will return false if the argument is invalid
and true if the argument is valid.

### Options

The main purpose for this function is to throw a helpful Error message to the user when they
are using the endpoint functions in a way that would cause the NHTSA API to return an error.
In default mode, it uses the `options.name` and `options.types` array (if provided) to build the
error message in the case of validation failure.

- `options.name` and `options.value` are required in each arg object. It's ok to pass undefined
as the value, i.e. `{ value: someVarThatMightBeUndefined }`, but you must provide a name for the
argument. If you didn't provide a name then the error message would not be as helpful.

- `options.required` and `options.types` are optional.

At least one of `options.required` or `options.types` must be provided as part of each arg
object. At least one of these options must be provided for each arg object, otherwise it will
always return true. You probably don't need to validate that arg if you don't provide at least
one of these options.

### Validation Logic

If both `required` is true and `types` are provided, it will validate the value is defined and
that the typeof value is one of the provided strings in the `types` array.

If `required` is true and no `types` are provided, it will only validate value is defined.

- If `types` is provided but it is not `required`, it will only validate value is one of the
type strings in the `types` array.
- If `types` is provided but it is not `required` and value is 'undefined' it will skip
validation as there is no value to validate against and user would mark it required if they
wanted to validate against a defined value. If the value is not required and you give types of
['string', 'number'] for example, it will validate that the value is either a string or a number.
- If neither `required` nor `types` are provided, it will not peerform validation and will
simply return true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | options object |

#### Returns

`boolean`

- true if validation passes, mode 'error' throws Error in the case of
validation failure, mode 'boolean' returns false in the case of validation failure

#### Defined in

[utils/argHandler.ts:129](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/a64bd4e/packages/lib/src/utils/argHandler.ts#L129)
