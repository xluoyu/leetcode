/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(new RegExp("[!@#,.-: ]", 'g'), "").toLowerCase()
  if (s.length <= 2) return false
  let a,b
  if (s.length % 2 == 0) {
    a = s.substr(0, s.length / 2)
    b = s.substr(s.length / 2)
  } else {
    a = s.substr(0, (s.length - 1) / 2)
    b = s.substr((s.length + 1) / 2)
  }
  b = b.split('').reverse().join('')
  return a == b
};
// @lc code=end

isPalindrome('A man, a plan, a canal: Panama')