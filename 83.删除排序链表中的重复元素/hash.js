/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 哈希表法， 用于未排序情况下的去重
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let hash = {}
  let pre = null
  let cur = head
  while (cur) {
    if (hash[cur.val]) {
      pre.next = cur.next
      cur = cur.next
    } else {
      hash[cur.val] = true
      pre = cur
      cur = cur.next
    }
  }

  return head
};
// @lc code=end

