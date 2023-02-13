/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 
var isSymmetric = function(root) {
  function check(l, r) {
    if (!l && !r) return true;
    if (!l || !r) return false;
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left)
  }

  return check(root, root)
};
以递归的方式比较树的左右两边
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function check(l, r) {
    if (!l && !r) return true;
    if (!l || !r) return false;
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left)
  }

  return check(root, root)
};
// @lc code=end

