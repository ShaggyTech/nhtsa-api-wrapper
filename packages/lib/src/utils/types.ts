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

export {}
