/*
https://leetcode.com/problems/arranging-coins/description/

Time complexity: O(n)
Space complexity: O(1).

Result:
Runtime: 69 ms
Memory: 53.61 MB
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let rows = ~~Math.sqrt(2 * n);
  while (rows + rows * rows > 2 * n) {
    rows--;
  }
  return rows;
};
