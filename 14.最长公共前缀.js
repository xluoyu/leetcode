/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = '';
  if (!strs.length) return res
  let ans = strs[0]
  for (let i = 0; i < ans.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (ans[i] != strs[j][i]) return res
    }
    res += ans[i]
  }
  return res
};
// @lc code=end

