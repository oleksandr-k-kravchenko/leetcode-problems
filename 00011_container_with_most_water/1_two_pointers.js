/*
https://leetcode.com/problems/container-with-most-water/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 63 ms
Memory: 56.58 MB
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0, left = 0, right = height.length - 1, newRes = 0;
  while (left < right) {
    if (height[right] > height[left]) {
      newRes = (right - left) * height[left];
      left++;
    } else {
      newRes = (right - left) * height[right];
      right--;
    }
    res = Math.max(res, newRes);
  }
  return res;
};
