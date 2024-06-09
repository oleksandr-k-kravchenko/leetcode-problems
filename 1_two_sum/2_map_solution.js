/*
https://leetcode.com/problems/two-sum/description/

Time complexity: O(n)
Space complexity: O(n).

Result:
Runtime: 68 ms
Memory: 51.42 MB
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = new Map();
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);

  }
};
