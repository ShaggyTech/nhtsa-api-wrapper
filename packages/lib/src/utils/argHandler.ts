import { getTypeof } from '../utils'

export type IArgToValidate = {
  name: string
  value: unknown
  types?: string[]
  required?: boolean
}

export const catchInvalidArguments = ({
  args,
  mode = 'default',
}: {
  args: IArgToValidate[]
  mode?: 'default' | 'atLeast'
}) => {
  if (!args || getTypeof(args) !== 'array') {
    throw Error(
      `catchInvalidArguments requires "args" that must be an array of IArgToValidate objects`
    )
  }

  if (mode === 'default') {
    args.forEach((arg) => {
      validateArgument(arg)
    })
  } else if (mode === 'atLeast') {
    const providedArg = args.find((arg) => !!arg.value)
    if (!providedArg) {
      throw Error(
        `must provide at least one of the following arguments: ${args
          .map((arg) => arg.name)
          .join(', ')}`
      )
    }
  }
}

export const validateArgument = ({
  name,
  value,
  required,
  types,
  mode = 'error',
}: IArgToValidate & { mode?: 'error' | 'boolean' }): boolean => {
  /* fast-fail if required args are not provided*/
  if (getTypeof(name) !== 'string') {
    throw Error(
      `error validating argument named 'name', is required and must be a string`
    )
  }

  if (types && getTypeof(types) !== 'array') {
    throw Error(
      `error validating argument named "${name}", 'types' must be an array of strings`
    )
  }

  const typeofValue = getTypeof(value)

  /* ex: if types = ['string', 'number'] then you'll get '<string | number>' */
  const joinedTypes = types ? `<${types.join(' | ')}>` : ''

  /* common error message parts */
  let error = ''
  const errorPrepend = `error validating argument named "${name}",`
  const errorAppend = `received value: ${value} - of type: <${typeofValue}>`

  /* argument validation logic */
  if (required && !types) {
    if (!value) {
      error = `${errorPrepend} is required, ${errorAppend}`
    }
  } else if (types && !required) {
    /* if value is not defined and is not required then there should be no need to validate the type and throw error */
    if (value && !types.includes(typeofValue)) {
      error = `${errorPrepend} must be of type(s) ${joinedTypes}, ${errorAppend}`
    }
  } else if (required && types) {
    if (!value || !types.includes(typeofValue)) {
      error = `${errorPrepend} is required and must be of type(s) ${joinedTypes}, ${errorAppend}`
    }
  }

  if (error.length) {
    if (mode === 'boolean') return false
    if (mode === 'error') throw Error(error)
  }

  return true
}
