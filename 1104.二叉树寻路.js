/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 *
 * [1104] 二叉树寻路
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  // 第n层label节点的父级值为 2的(n - 1)次方 + 2的n次方 - 1 - Math.floor(label / 2)
  let res = [label]
  let depth = Math.ceil(Math.log(label + 1) / Math.log(2)) - 1
  while (depth > 0) {
    const oldNum = Math.floor(label / 2)
    if (oldNum <= 0) break
    const newNum = Math.pow(2, depth - 1) + Math.pow(2, depth) - 1 - oldNum
    label = newNum
    res.unshift(newNum)
    depth--
  }
  return res
};
// @lc code=end

