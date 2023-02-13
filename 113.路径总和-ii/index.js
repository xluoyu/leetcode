/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return []
  const res = []

  root.diff = root.val
  const temp = [root]
  
  while(temp.length) {
    const now = temp.shift()
    const curVal = now.diff
    
    if (!now.left && !now.right && curVal == targetSum) {
      // 叶子节点
      pushRes(now)
    }

    if (now.left) {
      now.left.parent = now
      now.left.diff = now.left.val + curVal
      temp.push(now.left)
    }

    if (now.right) {
      now.right.parent = now
      now.right.diff = now.right.val + curVal
      temp.push(now.right)
    }
  }

  function pushRes(root) {
    const t = []
    while(root.parent) {
      t.unshift(root.val)
      root = root.parent
    }
    t.unshift(root.val)
    res.push(t)
  }

  return res
};
// @lc code=end

