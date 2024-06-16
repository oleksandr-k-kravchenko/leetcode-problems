/*
https://leetcode.com/problems/container-with-most-water/description

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 66 ms
Memory: 56.78 MB
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const length = height.length;
  let res = 0, left = 0, right = length - 1, newRes = 0;
  while (left !== right) {
    if (height[right] > height[left]) {
      newRes = (right - left) * height[left];
      left++;
    } else {
      newRes = (right - left) * height[right];
      right--;
    }
    if (newRes > res) {
      res = newRes;
    }
  }
  return res;
};
