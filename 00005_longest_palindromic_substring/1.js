/*
https://leetcode.com/problems/longest-palindromic-substring/description/

Time complexity: O(n*n)
Space complexity: O(1).

Result:
Runtime: 84 ms
Memory: 52.32 MB
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  let res = "";
  let resLength = 0;
  for (let i = 0; i < length; i++) {
    // odd
    let left = i, right = i;
    while (left >= 0 && right < length && s[left] === s[right]) {
      const newLength = right - left + 1;
      if (newLength > resLength) {
        resLength = newLength;
        res = s.substring(left, right + 1);
      }
      left -= 1;
      right += 1;
    }

    // even
    left = i, right = i + 1;
    while (left >= 0 && right < length && s[left] === s[right]) {
      const newLength = right - left + 1;
      if (newLength > resLength) {
        resLength = newLength;
        res = s.substring(left, right + 1);
      }
      left -= 1;
      right += 1;
    }
  }

  return res;
};
