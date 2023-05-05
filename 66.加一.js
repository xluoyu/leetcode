/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  function add(i) {
    if (i < 0) {
      digits.unshift(1)
    }
    digits[i] += 1
    if (digits[i] >= 10) {
      digits[i] -= 10
      add(i - 1)
    }
  }
  add(digits.length - 1)
  return digits
};
// @lc code=end

