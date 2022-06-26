/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('').reverse()
  b = b.split('').reverse()
  let index = 0
  let k = 0
  while (b.length || k) {
    let num = b.length ? b.shift() * 1 : 0
    let v = a[index] ? a[index] * 1 : 0
    if ((v + num + k) >= 2) {
      a[index] = v + num + k - 2
      k = 1
    } else {
      a[index] = v + num + k
      k = 0
    }
    index += 1
  }
  return a.reverse().join('')
};
// @lc code=end
