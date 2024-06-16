# https://leetcode.com/problems/add-two-numbers/description/
#
# Time complexity: O(max(m, n)) where m = length of first list, n = length of second list
# Space complexity: O(1).
#
# Result:
# Runtime: 90 ms
# Memory: 211.8 MB

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    dummy_head = ListNode.new
    current_head = dummy_head
    remember = 0
    while l1 || l2 || remember.positive? do
        sum = remember
        if l1
            sum += l1.val
            l1 = l1.next
        end
        if l2
            sum += l2.val
            l2 = l2.next
        end
        if sum > 9
            remember = 1
            sum -= 10
        else
            remember = 0
        end
        current_head.next = ListNode.new(sum)
        current_head = current_head.next
    end
    dummy_head.next
end
