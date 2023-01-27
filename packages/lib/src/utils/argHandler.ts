import { getTypeof } from '../utils'

interface Args {
  endpoint: string
  argName: string
  required?: boolean
  types: string[]
  value: unknown
}

export const argHandler = ({
  endpoint,
  argName,
  required,
  types,
  value,
}: Args): string => {
  const typeofValue = getTypeof(value)
  const typesLength = types.length

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
      if (index < typesLength - 1) {
        append = '|'
      }
      /* if this is the last type we need to append '>' char*/
      if (index === typesLength - 1) {
        append = '>'
      }

      /* Add the completed partial query string to queryStringArray */
      return `${prepend}${value}${append}`
    }
    return
  })

  const requiredMessage = required ? 'is required and' : ''
  const typesMessage = `must be of type ${mappedTypesArray.join('')}`

  return `${endpoint}, ${argName} ${requiredMessage} ${typesMessage}, got <${typeofValue}> ${value}`
}
