import { getTypeof } from '../utils'
/* Types */
import type { RequireAtLeastOne } from '../types'

/* 

  Describe function validateArgument
  - the function validates an argument against the following criteria:
    - required - if the argument is required
    - types - if the argument is of the correct type(s)
  - the function expects one argument
    - that one argument must be an object of values that describe the argument to validate
    - object of values has the following properties:
      - name: string
      - value: unknown
      - caller: string
      - required?: boolean
      - types?: string[]
  - if value is defined, the function will get the type of the value and save it in a variable called typeofValue
  - types is an array of strings
    - if types are provided the function will map the types and join them separated by a pipe (|) character with final string surrounded by (< >), and save them in a variable called joinedTypes
    - if types are not provided the function will set joinedTypes to an empty string
  - function will throw error if any of the following are true:
    - any of name, value, or caller are not provided, the function will throw Error("Error validating argument: 'name', 'value', and 'caller' must be provided to validateArgument()")
    - neither required nor types are provided, the function will throw Error("${caller}, error validating argument: ${name}, either 'required' or 'types' must be provided to validateArgument()")
    - if value is not provided, the function will throw Error("${caller}, error validating argument: ${name}, 'value' must be provided to validateArgument()")
  - function will validate args and throw error if any of the following are true:
    - required is provided, the function will validate that the value is not undefined
    - types is provided, the function will validate that the value is of the correct type(s)
    - both required and types are provided, the function will validate that the value is not undefined and that the value is of the correct type(s)
    - required and value is undefined, the function will throw Error("${caller}, "${name}" argument is required, received value: ${value} of type <${typeofValue}>")
    - types and value is not of the correct type(s), the function will throw Error("${caller}, "${name}" argument must be of type(s) <${joinedTypes}>, received value: "${value}" of type <${typeofValue}>")
    - both required and types are provided and value is undefined, the function will throw Error("${caller}, "${name}" argument is required and must be of type(s) <${joinedTypes}>, received value: "${value}" of type <${typeofValue}>")
    - both required and types are provided and value is not of the correct type(s), the function will throw Error("${caller}, "${name}" argument is required and must be of type(s) <${joinedTypes}>, received value: "${value}" of type <${typeofValue}>")
    - both required and types are provided and value is undefined and not of the correct type(s), the function will throw Error("${caller}, "${name}" argument is required and must be of type(s) <${joinedTypes}>, received value: "${value}" of type <${typeofValue}>")
    - if none of the above are true, the function will return void
  */
export const validateArgument = ({
  name,
  value,
  caller,
  required,
  types,
}: {
  name: string
  value: unknown
  caller: string
} & RequireAtLeastOne<
  {
    required?: boolean
    types?: string[]
  },
  'required' | 'types'
>): void => {
  /* fast-fail if required args are not provided*/
  if (!name || !caller) {
    throw new Error(
      `Error validating argument: 'name' and 'caller' must be provided to validateArgument()`
    )
  }
  if (!required && !types) {
    throw new Error(
      `${caller}, error validating argument: ${name}, either 'required' or 'types' must be provided to validateArgument()`
    )
  }

  const typeofValue = getTypeof(value)

  /* ex: if types = ['string', 'number'] then you'll get '<string | number>' */
  const joinedTypes = types ? `<${types.join(' | ')}>` : ''

  /* common error message parts */
  const errorPrepend = `${caller}, error validating argument, ${name} argument`
  const errorAppend = `received value: ${value} of type <${typeofValue}>`

  /* argument validation logic */
  if (required && !types) {
    if (!value) {
      throw new Error(`${errorPrepend} is required, ${errorAppend}`)
    }
  }

  if (types && !required) {
    if (!types.includes(typeofValue)) {
      throw new Error(
        `${errorPrepend} must be of type(s) <${joinedTypes}>, ${errorAppend}`
      )
    }
  }

  if (required && types) {
    if (!value || !types.includes(typeofValue)) {
      throw new Error(
        `${errorPrepend} is required and must be of type(s) <${joinedTypes}>, ${errorAppend}`
      )
    }
  }
}

export const argHandler = ({
  name,
  value,
  required = false,
  types = [],
  caller = '',
}: {
  name: string
  value: unknown
  required?: boolean /* default: false */
  types?: string[] /* default: [] */
  caller?: string /* default: '' */
}): string => {
  const typeofValue = getTypeof(value)
  const typesArrayLength = types.length

  let isPrepended = false
  const mappedTypesArray = types.map((value, index) => {
    let prepend = ''
    let append = ''

    if (value) {
      /* if this is the first type we need to prepend the '<' char */
      if (!isPrepended) {
        prepend = '<'
        isPrepended = true
      }
      /* if there is another type string coming after this one we need to append '|' char */
      if (index < typesArrayLength - 1) {
        append = '|'
      }
      /* if this is the last type we need to append '>' char*/
      if (index === typesArrayLength - 1) {
        append = '>'
      }

      /* Add the completed partial query string to queryStringArray */
      return `${prepend}${value}${append}`
    }
    return
  })

  const requiredMessage = required ? 'is required and' : ''
  const typesMessage = `must be of type ${mappedTypesArray.join('')}`

  return `${caller}, ${name} ${requiredMessage} ${typesMessage}, got <${typeofValue}> ${value}`
}
