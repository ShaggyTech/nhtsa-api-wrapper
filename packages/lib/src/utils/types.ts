/**
 * @module utils/types
 * @category Types
 */

export type { IArgToValidate } from './argHandler'

export type {
  QueryStringParams,
  QueryStringParamsEncoded,
  QueryStringTypes,
} from './queryString'

/**
 * Require at least one of a set of properties in an object
 * https://stackoverflow.com/a/49725198
 */
export type AtLeastOne<T, R extends keyof T = keyof T> = {
  [P in R]-?: Required<Pick<T, P>> & Partial<Omit<T, P>>
}[R]

/**
 * Require only one of a set of properties in an object
 * https://stackoverflow.com/a/49725198
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  {
    [K in keyof Required<T>]: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

/**
 *A type that, when passed a union of keys, creates an object which cannot have those properties.
 * Used in conjunction with `NoExtraProperties` to create a type that can only have the properties
 * you want it to have.
 * https://stackoverflow.com/a/57117594
 */
export type Impossible<K extends keyof never> = {
  [P in K]: never
}

/**
 * Provide it the type that contains only the properties you want, and then a type that extends that
 * type, based on what the caller provided using generics.
 * https://stackoverflow.com/a/57117594
 */
export type NoExtraProperties<T, U extends T = T> = U &
  Impossible<Exclude<keyof U, keyof T>>

export {}
