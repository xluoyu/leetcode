/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let min = 1
  let max = n
  let num = n
    while (1) {
      if (num <= 1) return 1
      let res = guess(num)
      if (res == -1) {
        max = num
        num = Math.floor((num + min) / 2)
      } else if (res == 1) {
        min = num
        num = Math.floor((max + num) / 2)
      } else if (res == 0) {
        return num
      }
    }
};
// @lc code=end

