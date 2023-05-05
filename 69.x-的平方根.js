/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

/**
 * x = 10
 * mid = 5
 * 2.5 * 2.5 = 6.25
 * 3.75 * 3.75 = 14.06
 * 
 */
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let a = 0, r = x, z = 0
  let mid = Math.floor((r - z) / 2 + z)
  if (mid == 0) return x
  while (a != mid) {
    if (mid * mid <= x) {
      z = mid
    } else {
      r = mid
    }
    a = mid
    mid = Math.floor((r - z) / 2 + z)
  }
  return a
};
// @lc code=end

