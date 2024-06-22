/*
https://leetcode.com/problems/subarray-sums-divisible-by-k/description/

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
var subarraysDivByK = function (nums, k) {
  let count = 0;
  const map = new Map();
  nums[0] = ((nums[0] % k) + k) % k;
  if (nums[0] === 0) {
    count++;
    map.set(0, 2);
  } else {
    map.set(nums[0], 1);
  }
  for (let i = 1; i < nums.length; i++) {
    nums[i] = (nums[i - 1] + (((nums[i] % k) + k) % k)) % k;
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      if (nums[i] === 0) {
        count++;
        map.set(0, 2);
      } else {
        map.set(nums[i], 1);
      }
    }
  }
  return count;
}
