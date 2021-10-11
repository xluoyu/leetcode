/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n == 1) return 1
  let a = 0
  for (let i = 1; i <= n; i++) {
    if ((n - a) < i) {
      return (i - 1)
    }
    a += i
  }
};
// @lc code=end
