/*
https://leetcode.com/problems/palindrome-number/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 135 ms
Memory: 56.88 MB
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let digits = 1, copyX = x;
  while (copyX / 10 >= 1) {
    digits += 1;
    copyX /= 10;
  }
  while (digits > 1) {
    const tenInPower = 10 ** (digits - 1), leftDigit = ~~(x / tenInPower), rightDigit = x % 10;
    if (leftDigit !== rightDigit) {
      return false;
    }
    x = ~~((x - rightDigit - leftDigit * tenInPower) / 10);
    digits -= 2;
  }
  return true;
};
