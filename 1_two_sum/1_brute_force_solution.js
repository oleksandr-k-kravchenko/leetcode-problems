/*
https://leetcode.com/problems/two-sum/description/

Time complexity: O(n*n)
Space complexity: O(1).

Result:
Runtime: 112 ms
Memory: 49.48 MB
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let length = nums.length;
  let lengthWithoutOne = length - 1;
  for (let i = 0; i < lengthWithoutOne; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
