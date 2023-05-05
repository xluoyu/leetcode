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
<<<<<<< HEAD
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
=======
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

>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
// @lc code=end

