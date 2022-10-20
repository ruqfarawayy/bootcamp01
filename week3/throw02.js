/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */
class ZipCode {
  static pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  constructor(zip) {
    zip = String(zip);
    const match = zip.match(ZipCode.pattern);
    if (!match) {
      throw new ZipCodeFormatException(zip);
    }
    // zip code value will be the first match in the string
    this.value = match[0];
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
}

class ZipCodeFormatException extends Error {
  constructor(zip) {
    super(`${zip} does not conform to the expected format for a zip code`);
  }
}

/*
 * This could be in a script that validates address data
 * for US addresses.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    const isInvalidCode = e instanceof ZipCodeFormatException;
    return isInvalidCode ? ZIPCODE_INVALID : ZIPCODE_UNKNOWN_ERROR;
  }
  return z;
}

a = verifyZipCode(95060);         // returns 95060
b = verifyZipCode(9560);          // returns -1
c = verifyZipCode('a');           // returns -1
d = verifyZipCode('95060');       // returns 95060
e = verifyZipCode('95060 1234');  // returns 95060 1234
