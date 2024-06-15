/*
https://leetcode.com/problems/string-to-integer-atoi/description

Time complexity: O(N)
Space complexity: O(1).

Result:
Runtime: 78 ms
Memory: 53.26 MB
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const length = s.length;
  let readingIndex = 0;
  while (readingIndex < length && s[readingIndex] === ' ') {
    readingIndex++;
  }
  if (readingIndex === length) {
    return 0;
  }
  let multiplier = 1;
  if (s[readingIndex] === '-') {
    multiplier = -1;
    readingIndex++;
  } else if (s[readingIndex] === '+') {
    readingIndex++;
  }
  let result = 0;
  const limit = multiplier === 1 ? (2 ** 31) - 1 : -(2 ** 31);
  while (readingIndex < length) {
    const charCode = s.charCodeAt(readingIndex);
    if (charCode < 48 || charCode > 57) {
      break;
    }
    const digit = multiplier * (charCode - 48);
    const newResult = result * 10;
    if (multiplier === 1 && limit - newResult < digit || multiplier === -1 && limit - newResult > digit) {
      result = limit;
      break;
    }
    result = newResult + digit;
    readingIndex++;
  }
  return result;
};
