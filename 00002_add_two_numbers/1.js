/*
https://leetcode.com/problems/add-two-numbers/description/

Time complexity: O(max(m, n)) where m = length of first list, n = length of second list
Space complexity: O(1).

Result:
Runtime: 103 ms
Memory: 55.08 MB
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = [];
  let remember = 0, first = l1, second = l2;
  while (first || second) {
    let firstVal = first ? first.val : 0;
    let secondVal = second ? second.val : 0;
    let currentSum = firstVal + secondVal + remember;
    if (currentSum >= 10) {
      remember = 1;
      currentSum -= 10;
    } else {
      remember = 0;
    }
    result.push(currentSum);
    if (first) {
      first = first.next;
    }
    if (second) {
      second = second.next;
    }
  }
  if (remember) {
    result.push(remember);
  }
  const resultLength = result.length;
  let lR = new ListNode(result[resultLength - 1], undefined);
  let i = resultLength - 2;
  while (i >= 0) {
    lR = new ListNode(result[i], lR);
    i--;
  }
  return lR;
};
