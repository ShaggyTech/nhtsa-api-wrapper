/* eslint-disable node/no-missing-import */

import { greet } from '../index'

test('My Greeter', () => {
  expect(greet('Carl', 31)).toBe('Hello Carl, you are 31 years old!')
})
