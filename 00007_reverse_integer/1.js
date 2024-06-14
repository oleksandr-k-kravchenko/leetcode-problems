/*
https://leetcode.com/problems/reverse-integer/description

Time complexity: O(log(N))
Space complexity: O(1).

Result:
Runtime: 71 ms
Memory: 52.53 MB
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // +2147483647
  // -2147483648
  const int32 = x < 0 ? [2, 1, 4, 7, 4, 8, 3, 6, 4, 8] : [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
  let res = 0;
  let digitsAmount = 0;
  let outOfLimitFlag;
  const multiplier = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x) {
    const digit = x % 10;
    x = ~~(x / 10);
    res = res * 10 + digit;

    if (outOfLimitFlag === undefined) {
      if (int32[digitsAmount] > digit) {
        outOfLimitFlag = false;
      }
      if (int32[digitsAmount] < digit) {
        outOfLimitFlag = true;
      }
    }
    digitsAmount += 1;
  }
  if (digitsAmount >= 10 && outOfLimitFlag) {
    return 0;
  }
  return res * multiplier;
};
