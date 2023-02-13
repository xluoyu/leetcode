/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const list = new Set()
    let hA = headA
    while (hA) {
      list.add(hA)
      hA = hA.next
    }
    let hB = headB
    while (hB) {
      if (list.has(hB)) return hB
      hB = hB.next
    }
    return null
};
// @lc code=end

