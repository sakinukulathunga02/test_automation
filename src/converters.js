/**
 * Converts an octal number string to its binary representation.
 * @param {string} octal - A string representing an octal number (e.g. "17").
 * @returns {string} The binary representation of the given octal number (e.g. "1111").
 * @throws {Error} If the input is not a valid octal number string.
 */
function octalToBinary(octal) {
  if (!/^[0-7]+$/.test(octal)) {
    throw new Error(`Invalid octal number: "${octal}"`);
  }
  return parseInt(octal, 8).toString(2);
}

module.exports = { octalToBinary };
