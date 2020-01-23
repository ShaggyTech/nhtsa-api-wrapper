import { getTypeof } from '../../utils';

describe('getTypeof utility helper function', () => {
  test('it exists', () => {
    expect(getTypeof).toBeDefined();
    expect(getTypeof).toBeInstanceOf(Function);
  });

  test('it returns correct type', () => {
    expect(getTypeof(undefined)).toEqual('undefined');
    expect(getTypeof(null)).toEqual('null');
    expect(getTypeof(true)).toEqual('boolean');
    expect(getTypeof('this is a string')).toEqual('string');
    expect(getTypeof(() => 'this is a function')).toEqual('function');
    expect(getTypeof({ an: 'object' })).toEqual('object');
    expect(getTypeof(['an', 'array'])).toEqual('array');
  });
});
