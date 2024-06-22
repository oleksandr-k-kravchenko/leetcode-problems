/*
https://leetcode.com/problems/subarray-sum-equals-k/description/

Time complexity: O(n)
Space complexity: O(n).

Result:
Runtime: 77 ms
Memory: 57.20 MB
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  let accSum = 0;
  for (let i = 0; i < nums.length; i++) {
    accSum += nums[i];
    const diff = accSum - k;
    if (map.has(diff)) {
      count += map.get(diff);
    }
    if (map.has(accSum)) {
      map.set(accSum, map.get(accSum) + 1);
    } else {
      map.set(accSum, 1);
    }
  }
  return count;
};
