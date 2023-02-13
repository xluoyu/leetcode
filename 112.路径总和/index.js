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

  const queNode = [root]

  while (queNode.length) {
    let now = queNode.shift()
    let curVal = now.val
    console.log(now.val)
    if (!now.left && !now.right) {
      if (curVal == targetSum) {
        return true
      }
    }

    if (now.left) {
      now.left.val += curVal
      queNode.push(now.left)
    }

    if (now.right) {
      now.right.val += curVal
      queNode.push(now.right)
    }
  }

  return false
};
// @lc code=end

