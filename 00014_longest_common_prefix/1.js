/*
https://leetcode.com/problems/longest-common-prefix/description/

Time complexity: O(m*n)
Space complexity: O(1).

Result:
Runtime: 58 ms
Memory: 50.04 MB
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";
  const stringsCount = strs.length;
  let charIndex = 0;
  while (true) {
    const char = strs[0][charIndex];
    if (!char) {
      break;
    }
    let continueFlag = true;
    for (let i = 1; i < stringsCount; i++) {
      if (char !== strs[i][charIndex]) {
        continueFlag = false;
        break;
      }
    }
    if (!continueFlag) {
      break;
    }
    prefix = prefix + char;
    charIndex += 1;
  }
  return prefix;
};
