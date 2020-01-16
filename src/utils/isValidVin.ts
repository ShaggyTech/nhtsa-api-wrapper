/**
 * @module isValidVin
 * @category Utils
 */

/**
 * @async
 *
 * @description Offline validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit)
 *
 * @param {string} vin Vehicle Identification Number
 *
 * @returns {Promise<boolean>} true | false
 *
 * @example
 * const isValid = await isValidVin('1CBJD340000X123040').catch(error => error)
 * // isValid = false
 */
export async function isValidVin(vin: string): Promise<boolean> {
  // valid VIN must be a string and is always exactly 17 digits
  if (typeof vin !== 'string' || vin.length != 17) {
    return Promise.resolve(false);
  }

  // normalize the vin to UpperCase
  vin = vin.toUpperCase();

  // split the vin digits into an array
  const vinArray: string[] = vin.split('');

  // checkDigit will be tested against the checkSum later
  const checkDigit = vinArray[8];

  // checkDigit can only be 0-9 or 'X' in a valid VIN
  if (isNaN(parseInt(checkDigit)) && checkDigit !== 'X') {
    return Promise.resolve(false);
  }

  // The soon to be converted checkDigit
  let checkValue = 0;

  // set the checkValue for use later
  //can either be the actual checkDigit value (0-9) or 10 if checkDigit is 'X'
  checkDigit === 'X' ? (checkValue = 10) : (checkValue = parseInt(checkDigit));

  // transliterate each valid VIN letter to it's corresponding value in the algorithm
  const transliterationTable: object = {
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
    Z: 9
  };

  // multiply each transliterated digit by it's corresponding weight, using the index position
  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  // Convert the vin using the translisteration table and multipy each digit by its corresponding weight.
  // Then add all of those 17 values together.
  // The checksum will be the remainder of the sum % 11.
  const checksum =
    vinArray
      .map((digit, index) => {
        let weighted;
        isNaN(parseInt(digit))
          ? (weighted = transliterationTable[digit])
          : (weighted = parseInt(digit));

        return weighted * weights[index];
      })
      .reduce((acc, currValue) => acc + currValue, 0) % 11;

  // checksum must be equal to the checkValue we set earlier (the 9th digit of the VIN)
  // if they don't match then the VIN is invalid according to the algorithm
  return Promise.resolve(checksum === checkValue);
}
