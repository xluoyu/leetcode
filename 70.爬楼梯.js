/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * f(x) = f(x - 1) + f(x - 2)
 */
var climbStairs = function(n) {
  let dp = [0, 1, 2]
  for (let i = 3; i <= n ; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
// @lc code=end

