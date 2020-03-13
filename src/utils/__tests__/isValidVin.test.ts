import { isValidVin } from '../isValidVin';

describe('VIN Validation Algorithm', () => {
  test('it should return true with a valid VIN', () => {
    // valid uppercase
    expect(isValidVin('3VWD07AJ5EM388202')).toBe(true);
    expect(isValidVin('1FMJK2AT1KEA36140')).toBe(true);
    expect(isValidVin('5XYZU3LA1EG176607')).toBe(true);
    expect(isValidVin('5XYZU3LA1EG176607')).toBe(true);
    // valid lowercase
    expect(isValidVin('3vwd07aj5em388202')).toBe(true);
  });

  test('it should fail with invalid arguments', async () => {
    // known invalid VIN
    expect(isValidVin('3VWD07AJ5EM388203')).toBe(false);
    // VIN too short
    expect(isValidVin('3VWD07AJ5EM38820')).toBe(false);
    expect(isValidVin('1234567890')).toBe(false);
    expect(isValidVin('')).toBe(false);
    // invalid check digit (vin[8])
    expect(isValidVin('3VWD07AJAEM388203')).toBe(false);
    // check digit is equal to 'X' but vin is invalid
    expect(isValidVin('3VWD07AJXEM388203')).toBe(false);
    // invalid argument type
    expect(isValidVin([] as any)).toBe(false);
    expect(isValidVin({} as any)).toBe(false);
    // missing argument
    expect(isValidVin(undefined as any)).toBe(false);
  });
});
