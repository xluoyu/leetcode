/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2
  let carry = 0
  let listNode = new ListNode()
  let next = listNode
  while (p1 || p2 || carry) {
    let num1 = p1 ? p1.val : 0
    let num2 = p2 ? p2.val : 0
    let sum = num1 + num2 + carry
    if (sum > 9) {
      next.next = new ListNode(sum - 10)
      carry = 1
    } else {
      next.next = new ListNode(sum)
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    next = next.next
  }
  return listNode.next
};
// @lc code=end

