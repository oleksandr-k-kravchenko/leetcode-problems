/*
https://leetcode.com/problems/two-sum/description/

Time complexity: O(n)
Space complexity: O(n).

Result:
Runtime: 66 ms
Memory: 51.45 MB
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let i = nums.length;
  while (i--) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

