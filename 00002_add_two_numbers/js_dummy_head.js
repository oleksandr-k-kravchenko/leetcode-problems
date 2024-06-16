/*
https://leetcode.com/problems/add-two-numbers/description/

Time complexity: O(max(m, n)) where m = length of first list, n = length of second list
Space complexity: O(1).

Result:
Runtime: 89 ms
Memory: 55.35 MB
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
  let dummyHead = new ListNode(0),
    currentHead = dummyHead,
    remember = 0;
  while (l1 || l2 || remember) {
    let currentSum = remember;
    if (l1) {
      currentSum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      currentSum += l2.val;
      l2 = l2.next;
    }

    if (currentSum >= 10) {
      remember = 1;
      currentSum -= 10;
    } else {
      remember = 0;
    }
    currentHead.next = new ListNode(currentSum);
    currentHead = currentHead.next;
  }
  return dummyHead.next;
};
