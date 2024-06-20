/*
https://leetcode.com/problems/3sum/description/

Time complexity: O(n*n)
Space complexity: O(1).

Result:
Runtime: 174 ms
Memory: 65.90 MB
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  if (nums.length === 3 && (nums[0] + nums[1] + nums[2]) === 0) {
    return [nums];
  }

  nums.sort((a, b) => a - b);

  let results = [];

  for(let i = 0; i < nums.length - 2; i++) {
    if (i && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      const sum = nums[left] + nums[right];
      if (sum === target) {
        results.push([nums[i], nums[left], nums[right]]);
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return results;
};
