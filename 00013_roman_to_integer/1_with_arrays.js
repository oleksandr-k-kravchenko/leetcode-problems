/*
https://leetcode.com/problems/roman-to-integer/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 102 ms
Memory: 53.78 MB
 */

/**
 * @param {string} s
 * @return {number}
 */
const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
  values = [1, 5, 10, 50, 100, 500, 1000];

var romanToInt = function (s) {
  let i = s.length - 1, sum = 0, powerIndex = 0;
  while (~i) {
    let char = s[i];
    let symbolIndex = symbols.indexOf(char);
    if (powerIndex <= symbolIndex) {
      sum += values[symbolIndex];
    } else {
      sum -= values[symbolIndex];
    }
    powerIndex = symbolIndex;
    i -= 1;
  }
  return sum;
};
