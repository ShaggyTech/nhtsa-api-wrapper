/* eslint-disable node/no-missing-import */

import { isValidType } from '../isValidType';

describe('isValidType utility method', () => {
  test('it exists', () => {
    expect(isValidType).toBeDefined();
    expect(isValidType).toBeInstanceOf(Function);
  });

  /****************
   * Returns False
   ****************/
  describe('it returns false when - ', () => {
    test('type is empty string', async () => {
      expect(await isValidType({ type: '', value: 31 })).toStrictEqual(false);
    });

    test('value is not equal to provided type', async () => {
      expect(await isValidType({ type: 'string', value: 31 })).toStrictEqual(
        false
      );
      expect(await isValidType({ type: 'object', value: 'no' })).toStrictEqual(
        false
      );
      expect(await isValidType({ type: 'Number', value: {} })).toStrictEqual(
        false
      );
      expect(await isValidType({ type: 'Array', value: '' })).toStrictEqual(
        false
      );
    });
  });

  /****************
   * Returns True
   ****************/
  describe('it returns true when - ', () => {
    test('value is equal to provided type', async () => {
      expect(await isValidType({ type: 'String', value: 'x' })).toStrictEqual(
        true
      );
      expect(await isValidType({ type: 'Object', value: {} })).toStrictEqual(
        true
      );
      expect(await isValidType({ type: 'number', value: 31 })).toStrictEqual(
        true
      );
      expect(await isValidType({ type: 'array', value: [] })).toStrictEqual(
        true
      );
    });
  });
});
