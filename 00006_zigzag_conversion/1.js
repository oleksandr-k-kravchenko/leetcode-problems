/*
https://leetcode.com/problems/zigzag-conversion/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 89 ms
Memory: 54.22 MB
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const length = s.length;
  let res = "";
  const columnStep = 2 * numRows - 2;

  // 1st line
  for (let i = 0; i < length; i += columnStep) {
    res += s[i];
  }

  // between
  const betweenRowsLimit = numRows - 1;
  for (let line = 1; line < betweenRowsLimit; line++) {
    let i, j;
    for (i = line, j = columnStep - line; j < length; i += columnStep, j += columnStep) {
      res += s[i] + s[j];
    }
    if (i < length) {
      res += s[i];
    }
  }

  // last line
  for (let i = numRows - 1; i < length; i += columnStep) {
    res += s[i];
  }

  return res;
};
