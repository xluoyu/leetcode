/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  function mixins (v1, v2) {
    if (!v1) return v2
    if (!v2) return v1
    v1.val += v2.val
    v1.left = mixins(v1.left, v2.left)
    v1.right = mixins(v1.right, v2.right)
    return v1
  }
  return mixins(root1, root2)
};
// @lc code=end

