// eslint-disable-next-line node/no-missing-import
import { isValidType as _isValidType } from './isValidType'

/**
 * Returns a greeting
 * @param {string} name What is your name?
 * @param {number} age How many years old are you?
 * @returns {string} `Hello ${name}, you are ${age} years old!`
 */
export const greet = (name: string, age: number) =>
  `Hello ${name}, you are ${age} years old!`

export const isValidType = _isValidType
