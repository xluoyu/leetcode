/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sArr = s.split('')
  for (let key of t) {
    let i = sArr.indexOf(key)
    if (i == -1) {
      return key
    } else {
      sArr.splice(i, 1)
    }
  }
};
// @lc code=end

