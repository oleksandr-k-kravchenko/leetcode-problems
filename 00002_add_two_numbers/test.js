function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 9,9,9,9,9,9,9
var l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
// 9,9,9,9
var l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

addTwoNumbers(l1, l2);