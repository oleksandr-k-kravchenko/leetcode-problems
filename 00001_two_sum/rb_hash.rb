# https://leetcode.com/problems/two-sum/description/
#
# Time complexity: O(n)
# Space complexity: O(n).
#
# Result:
# Runtime: 55 ms
# Memory: 212.18 MB

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    nums.each_with_object({}).with_index do |(num, hash), index|
        complement = target - num
        return [hash[complement], index] if hash.key?(complement)

        hash[num] = index
    end
end
