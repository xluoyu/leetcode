/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const hash = {}
    while (head) {
        if (hash[head.val]) {
            return true
        }
        hash[head.val] = true
        head = head.next
    }
    return false
};
// @lc code=end

