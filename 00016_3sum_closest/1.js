/*
https://leetcode.com/problems/3sum-closest/description/

Time complexity: O(n*n)
Space complexity: O(1).

Result:
Runtime: 83 ms
Memory: 17.92 MB
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for(let i = 0; i < nums.length - 2; i++) {
    if (i && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closest;
};
