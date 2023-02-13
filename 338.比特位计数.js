/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const res = []
  while (n >= 0) {
    let bit = n.toString(2)
    res.unshift(bit.replace(/0/g, '').length)
    n -= 1
  }
  return res
};
// @lc code=end

