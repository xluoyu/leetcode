/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1, 2]

  if (n < 3) return arr[n - 1]

  for (let i = 3; i <= n; i++) {
    arr[i - 1] = arr[i - 3] + arr[i - 2]
  }
  return arr[n - 1]
};
// @lc code=end

