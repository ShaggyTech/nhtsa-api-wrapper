import { getTypeof } from '../../utils';

describe('getTypeof utility helper function', () => {
  test('it exists', () => {
    expect(getTypeof).toBeDefined();
    expect(getTypeof).toBeInstanceOf(Function);
  });

  test('it returns correct type', () => {
    expect(getTypeof(undefined)).toBe('undefined');
    expect(getTypeof(null)).toBe('null');
    expect(getTypeof(true)).toBe('boolean');
    expect(getTypeof('this is a string')).toBe('string');
    expect(getTypeof(() => 'this is a function')).toBe('function');
    expect(getTypeof({ an: 'object' })).toBe('object');
    expect(getTypeof(['an', 'array'])).toBe('array');
  });
});
