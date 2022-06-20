/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
  return s.reverse()
 * 
 */
var reverseString = function(s) {
  let isEven = s.length % 2 == 0
  let helf = s.length / 2
  let [left, right] = isEven ? [helf - 1, helf] : [helf - 1.5, helf + 0.5]
  while (left >= 0) {
    [s[left], s[right]] = [s[right], s[left]]
    left-=1
    right+=1
  }
  
  return s
};
// @lc code=end

