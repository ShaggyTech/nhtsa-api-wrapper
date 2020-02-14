import { getTypeof } from '../../utils';

describe('getTypeof utility helper function', () => {
  test('it exists', () => {
    expect(getTypeof).toBeDefined();
    expect(getTypeof).toBeInstanceOf(Function);
  });

  test('it returns correct type', () => {
    expect(getTypeof(undefined)).toStrictEqual('undefined');
    expect(getTypeof(null)).toStrictEqual('null');
    expect(getTypeof(true)).toStrictEqual('boolean');
    expect(getTypeof('this is a string')).toStrictEqual('string');
    expect(getTypeof(() => 'this is a function')).toStrictEqual('function');
    expect(getTypeof({ an: 'object' })).toStrictEqual('object');
    expect(getTypeof(['an', 'array'])).toStrictEqual('array');
  });
});
