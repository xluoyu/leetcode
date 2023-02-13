/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 
 * 暴力题解
 * 
 * 使用双重for循环，列举出所有子串，然后判断是否是回文子串
 * 
 * 找出最长的回文子串
 * 
 * 时间超出限制！！！
 */

var longestPalindrome = function(s) {
  let max = 0;
  let res = '';
  for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
          let str = s.substring(i, j);
          if (str === str.split('').reverse().join('') && str.length > max) {
              max = str.length;
              res = str;
          }
      }
  }
  return res;
};