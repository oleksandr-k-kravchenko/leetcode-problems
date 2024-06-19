/*
https://leetcode.com/problems/integer-to-roman/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 137 ms
Memory: 54.63 MB
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = "";
  let symbolIndex = 0;
  while (symbolIndex < 13) {
    while (num >= values[symbolIndex]) {
      num -= values[symbolIndex];
      res += symbols[symbolIndex];
    }
    symbolIndex++;
  }
  return res;
};
