/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root, res = []) {
  if (!root) return
  res.push(root.val)
  if (root.left) {
    levelOrder(root.left, res, i)
  }
  if (root.right) {
    levelOrder(root.right, res, i)
  }

};
// @lc code=end

