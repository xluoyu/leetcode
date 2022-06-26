/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);
  var y = 0;
  while (x !== 0) {
    y = 10 * y + x % 10;
    x = ~~(x / 10);
  }
  if (y > max || y < min) return 0
  return y;
};
// @lc code=end

/**
 * ~~12.3 => 12
 * ~1 => -2
 * ~~1 => 1
 */

