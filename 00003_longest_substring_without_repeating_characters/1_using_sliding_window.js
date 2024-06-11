/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Time complexity: O(n*n)
Space complexity: O(1).

Result:
Runtime: 62 ms
Memory: 52.72 MB
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  const charsLength = s.length;
  let leftPointer = 0,
    rightPointer = 1,
    longestSubstringLength = 1;

  while (rightPointer < charsLength) {
    const currentChar = s[rightPointer];
    for (let i = leftPointer; i < rightPointer; i++) {
      if (s[i] === currentChar) {
        leftPointer = i + 1;
        break;
      }
    }
    const newLength = rightPointer - leftPointer + 1;
    if (longestSubstringLength < newLength) {
      longestSubstringLength = newLength;
    }
    rightPointer++;
  }

  return longestSubstringLength;
};
