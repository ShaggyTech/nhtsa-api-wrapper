  // see https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit
  // for more information on this algorithm

function isValidVin(vin) {
    // valid VIN is always exactly 17 digits
    if (typeof vin !== 'string' || vin.length != 17) return false

    // normalize the vin and put it into an array of vin digits
    vin = vin.toUpperCase()
    vin = [...vin];

    // checkDigit will be tested against the checkSum later
    let checkDigit = vin[8];
    // will hold the soon to be converted checkDigit
    let checkValue = 0;

    // checkDigit can only be 0-9 or 'X' in a valid VIN
    if (isNaN(checkDigit) && checkDigit !== 'X') return false

    // set the checkValue for use later
    //can either be the actual checkDigit value (0-9) or 10 if checkDigit is 'X'
    checkDigit === 'X'
      ? checkValue = 10
      : checkValue = Number(checkDigit)

    // transliterate each valid VIN letter to it's corresponding value in the algorithm
    const transliterationTable = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4,
      N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9
    }
    // multiply each transliterated digit by it's corresponding weight based on index position
    const weights = [
      8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2
    ]

    // convert the vin using the translisteration table and multipy each by its corresponding weight
    // then sum all of those 17 values together and checksum will be the remainder of - sum modulo 11 -
    let checksum = vin.map((digit, index) => {
      let weighted
      isNaN(digit)
        ? weighted = transliterationTable[digit]
        : weighted = Number(digit)

      return weighted * weights[index]
    })
      .reduce(
        (acc, currValue) => acc + currValue, 0
      ) % 11

    // checksum must be equal to the checkValue we set earlier (the 9th digit of the VIN)
    // if they don't match then the VIN is invalid according to the algorithm
    return checksum === checkValue
  }

  module.exports = isValidVin
