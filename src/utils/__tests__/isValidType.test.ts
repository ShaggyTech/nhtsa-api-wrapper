import { isValidType } from '../isValidType';

describe('isValidType utility method', () => {
  test('it exists', () => {
    expect(isValidType).toBeDefined();
    expect(isValidType).toBeInstanceOf(Function);
  });

  /****************
   * Returns True
   ****************/
  describe('it returns true when -', () => {
    test('value is equal to provided type', () => {
      expect(isValidType({ type: 'String', value: 'x' })).toStrictEqual(true);
      expect(isValidType({ type: 'Object', value: {} })).toStrictEqual(true);
      expect(isValidType({ type: 'number', value: 31 })).toStrictEqual(true);
      expect(isValidType({ type: 'array', value: [] })).toStrictEqual(true);
    });
  });

  /****************
   * Returns False
   ****************/
  describe('it returns false when -', () => {
    test('value is not equal to provided type', async () => {
      expect(isValidType({ type: 'string', value: 31 })).toStrictEqual(false);
      expect(isValidType({ type: 'object', value: 'no' })).toStrictEqual(false);
      expect(isValidType({ type: 'Number', value: {} })).toStrictEqual(false);
      expect(isValidType({ type: 'Array', value: '' })).toStrictEqual(false);
    });

    test('no arguments provided', async () => {
      expect(isValidType(undefined as any)).toStrictEqual(false);
    });

    test('type is empty string', async () => {
      expect(isValidType({ type: '', value: 31 })).toStrictEqual(false);
    });

    test('value of type is not a string', async () => {
      expect(isValidType({ type: 21 as any, value: 31 })).toStrictEqual(false);
    });

    test('value key is missing', async () => {
      expect(isValidType({ type: 'string' } as any)).toStrictEqual(false);
    });
  });
});
