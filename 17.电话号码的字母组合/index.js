/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const bucket = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  if (!digits) return []

  const res = []
  const helper = (str, digits) => {
    if (digits.length === 0) {
      res.push(str)
      return
    }
    const letters = bucket[digits[0]]
    for (let i = 0; i < letters.length; i++) {
      helper(str + letters[i], digits.slice(1))
    }
  }
  helper('', digits)
  return res
};
// @lc code=end

