/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseItem = (start, next) => {
  let other = next.next
  while (start.val != next.val) {
    next.next = start.next
    start = start.next
    next = next.next
  }

  return [start, next]
}

var reverseKGroup = function(head, k) {
  if (k == 1) return head
  const nodes = new ListNode(0)
  nodes.next = head
  let pre = nodes

  while(head) {
    let start = head
    let next
    let i = 0
    for (i < k; i++;) {
      next = start.next
      if (!next) {
        break;
      }
    }
    if (i == k) {
      [start, next] = reverseItem(start, next)
    }


    head = next
  }

  return nodes
};
// @lc code=end

