/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let num = 0;
  let str = '';
  for (let i of s) {
    if (!str.includes(i)) {
      str += i
      num++
      ans = Math.max(ans, num)
    } else {
      str += i
      str = str.slice(str.indexOf(i) + 1)
      num = str.length
    }
  }

  return ans
};

// @lc code=end

