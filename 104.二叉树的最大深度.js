<<<<<<< HEAD
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (root && root.val !== undefined) {
    let left = root.left ? maxDepth(root.left) : 0
    let right = root.right ? maxDepth(root.right) : 0
    return Math.max(left, right) + 1
  } else {
    return 0
  }
};
// @lc code=end

=======
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  let res = 0
  if (!root || root.val === null) {
    return 0
  }
  function qw(root, num) {
    if (!root.left && !root.right) {
      res = Math.max(res, num)
      return
    }
    root.right && qw(root.right, num + 1)
    root.left && qw(root.left, num + 1)
  }
  qw(root, 1)
  return res
};
// @lc code=end

>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
