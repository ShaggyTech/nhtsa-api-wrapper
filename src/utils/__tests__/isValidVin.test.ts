import { isValidVin } from '../isValidVin';

describe('VIN Validation Algorithm', () => {
  test('it should return true with a valid VIN', async () => {
    // valid uppercase
    expect(await isValidVin('3VWD07AJ5EM388202')).toBe(true);
    expect(await isValidVin('1FMJK2AT1KEA36140')).toBe(true);
    expect(await isValidVin('5XYZU3LA1EG176607')).toBe(true);
    expect(await isValidVin('5XYZU3LA1EG176607')).toBe(true);
    // valid lowercase
    expect(await isValidVin('3vwd07aj5em388202')).toBe(true);
  });

  test('it should fail with invalid arguments', async () => {
    // known invalid VIN
    expect(await isValidVin('3VWD07AJ5EM388203')).toBe(false);
    // VIN too short
    expect(await isValidVin('3VWD07AJ5EM38820')).toBe(false);
    expect(await isValidVin('1234567890')).toBe(false);
    expect(await isValidVin('')).toBe(false);
    // invalid check digit (vin[8])
    expect(await isValidVin('3VWD07AJAEM388203')).toBe(false);
    // check digit is equal to 'X' but vin is invalid
    expect(await isValidVin('3VWD07AJXEM388203')).toBe(false);
    // invalid argument type
    expect(await isValidVin([] as any)).toBe(false);
    expect(await isValidVin({} as any)).toBe(false);
    // missing argument
    expect(await isValidVin(undefined as any)).toBe(false);
  });
});
