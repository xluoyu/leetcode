/*
 * @Description: 
 * @Author: xluoyu
 * @LastEditTime: 2022-09-08 09:37:53
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const lib = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  const libKeys = Object.keys(lib)
  const stack = [];

  const arr = s.split('')

  if (arr.length % 2 !== 0) return false
  for (let i = 0; i < arr.length; i++) {
    if (libKeys.includes(arr[i])) { // 左括号
      stack.unshift(arr[i])
    } else if (stack[0] && lib[stack[0]] === arr[i]) { // 右括号
      stack.shift()
    } else {
      return false
    }
  }
  return stack.length ? false : true
};
// @lc code=end

