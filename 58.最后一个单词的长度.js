/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split(' ')
  let res = arr.pop()
  while(!res) {
    if (!arr.length) return 0
    res = arr.pop()
  }
  return res.length
};
// @lc code=end

