/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  let res = Infinity
  if (!root || root.val === null) {
    return 0
  }
  function qw(root, num) {
    if (num > res) return
    if (!root.left && !root.right) {
      res = Math.min(res, num)
      return
    }
    root.right && qw(root.right, num + 1)
    root.left && qw(root.left, num + 1)
  }
  qw(root, 1)
  return res
};
// @lc code=end

