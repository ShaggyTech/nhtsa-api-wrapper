/**
 * @module utils/isValidVin
 * @category Utility Functions
 */

/**
 * There will need to be some way to translate vin digits that are alphabetic into their number
 * value in the VIN algorithm transliteration table. Later, during the creation of the checksum
 * variable, those digits will be multiplied against their corresponding weight (by index) in the
 * WEIGHTS_ARRAY. This transliteration table is a key part of the VIN validation algorithm.
 */
const TRANSLITERATION_TABLE: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  P: 7,
  R: 9,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9,
}

/**
 * During the creation of the 'checksum' variable, these weights will be multiplied by the value of
 * their mirrored index vin digits. The array index of each weight corresponds to the same index of
 * each digit in the 'vin'.
 */
const WEIGHTS_ARRAY: number[] = [
  8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2,
]

/**
 * Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Digit Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).
 *
 * This function uses the check digit algorithm to validate the structure of the VIN, but does not
 * check the VIN against any database of actual vehicles.
 *
 * Note that it's possible to generate a random VIN that will pass this validation but does not
 * correspond to an actual vehicle. See the {@link generateRandomVIN} function for more details.
 *
 * @example
 * const isValid = isValidVin('3VWD07AJ5EM388202')
 * console.log(isValid) // true
 *
 * @param vin - Vehicle Identification Number.
 * @returns True for a valid VIN, false for an invalid VIN.
 */
export function isValidVin(vin: string): boolean {
  /* If the vin is not a string, it is not valid */
  if (typeof vin !== 'string') return false
  /* Normalize the vin to all uppercase letters */
  vin = vin.trimEnd().toUpperCase()
  /* Valid VIN must be 17 characters long */
  if (vin.length !== 17) return false
  /* checkDigit will be tested against the checkSum later */
  let checkDigit: string | number = vin[8]

  /* In a valid VIN, the checkDigit can either be: a number, 0-9 inclusive, or the char 'X' */
  if (isNaN(parseInt(checkDigit)) && checkDigit !== 'X') {
    return false
  } else checkDigit = checkDigit === 'X' ? 10 : parseInt(checkDigit)

  /*
   * Maps the vin chars and converts any values (digits) that are alphabetic into numbers, using the
   * TRANSLITERATION_TABLE. Then these numbers are multiplied against their corresponding weight in
   * the WEIGHTS_ARRAY, matched by index position. All 17 of those digitValues are then added
   * together and divided by 11. The remainder, or % modulo, of that division will be the final
   * 'checksum'.
   */
  const checksum: number =
    vin
      .split('')
      .map((digit, index) => {
        let value: number
        /* Use the transliteration table to convert any Not a Number(NaN) values to numbers */
        isNaN(parseInt(digit))
          ? (value = TRANSLITERATION_TABLE[digit])
          : (value = parseInt(digit))
        /* Multiply the digit by it's corresponding weight */
        return value * WEIGHTS_ARRAY[index]
      })
      /* Finally, get the sum of all digits and divide by 11, the modulo of that is the checksum */
      .reduce((sum, value) => sum + value, 0) % 11

  /*
   * The checksum is compared against the checkValue we set earlier (the 9th digit of the VIN). As
   * per the algorithm, if they are equal to each other, then the VIN must be valid and we return
   * true, otherwise the VIN is invalid and we return false.
   */
  return checksum === checkDigit
}

/**
 * Generates a random valid Vehicle Identification Number (VIN) that will pass the VIN validation
 * check digit algorithm implemented in the {@link isValidVin} function.
 *
 * Used internally to generate random VINs for testing purposes.
 *
 * Note that these VINs are structurally valid but do not correspond to actual vehicles and will not
 * return any data from the NHTSA API.
 *
 * This works by generating a random string of 16 characters composed of the characters from the
 * transliteration table and the numbers 0-9. Then it calculates the check digit and replaces the
 * 9th character with the correct check digit so that the VIN will pass the validation algorithm.
 *
 * @param vin - Vehicle Identification Number string.
 * @returns A randomly generated, structurally valid 17-character VIN.
 */
export function generateRandomVIN() {
  let vin = ''
  // Generate the first 16 characters of the VIN
  for (let i = 0; i < 17; i++) {
    const charSet = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789'
    vin += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }

  // Calculate the check digit
  let sum = 0
  for (let i = 0; i < 17; i++) {
    const digit = TRANSLITERATION_TABLE[vin[i]] || parseInt(vin[i], 10)
    sum += digit * WEIGHTS_ARRAY[i]
  }
  const checkDigit = sum % 11
  /* v8 ignore next */
  const checkChar = checkDigit === 10 ? 'X' : checkDigit.toString()

  // Replace the 9th character (check digit) in the VIN
  return vin.substring(0, 8) + checkChar + vin.substring(9)
}
