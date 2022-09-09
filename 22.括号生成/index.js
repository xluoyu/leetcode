/*
 * @Description: 
 * @Author: xluoyu
 * @LastEditTime: 2022-09-08 09:52:03
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n == 0) return [];

  let data = new Map();
  data.set(0, ['']);

  for (let i = 1; i <= n; i++) {
    let result = [];
    for (let j = 0; j <= i - 1; j++) {
      let center = data.get(j);
      let right = data.get(i - 1 - j);
      for (let k = 0; k < center.length; k++) {
        for (let t = 0; t < right.length; t++) {
          result.push(`(${center[k]})${right[t]}`);
        }
      }
    }
    data.set(i, result);
  }
  return data.get(n);
};
// @lc code=end

