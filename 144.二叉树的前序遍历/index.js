/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root, res = []) {
  if (root) {
    res.push(root.val)
  if (root.left) {
    preorderTraversal(root.left, res)
  }
  if (root.right) {
    preorderTraversal(root.right, res)
  }
}

  return res

// if (!root) return []
// return  [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};
// @lc code=end

