/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let y = ''
  let c = x
  while (c > 0) {
    y = y + (c % 10)
    c = ~~(c / 10)
  }

  return ~~y == x
};

// @lc code=end