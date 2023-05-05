/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
<<<<<<< HEAD
 * f(x) = f(x - 1) + f(x - 2)
 */
var climbStairs = function(n) {
  let dp = [0, 1, 2]
  for (let i = 3; i <= n ; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
=======
 */
var climbStairs = function(n) {
  let arr = [1, 2]

  if (n < 3) return arr[n - 1]

  for (let i = 3; i <= n; i++) {
    arr[i - 1] = arr[i - 3] + arr[i - 2]
  }
  return arr[n - 1]
>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
};
// @lc code=end

