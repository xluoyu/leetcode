/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false

  targetSum = targetSum - root.val
  if (!root.left && !root.right && targetSum === 0) {
    return true
  }
  if (root.left) {
    const res = hasPathSum(root.left, targetSum)
    if (res) return true
  }
  if (root.right) {
    const res = hasPathSum(root.right, targetSum)
    if (res) return true
  }
  return false
};
// @lc code=end

