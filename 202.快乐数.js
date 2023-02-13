/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const c = (num) => {
    let res = 0
    while(num) {
      res += Math.pow(num % 10, 2)
      num = Math.floor(num / 10)
    }
    return res
  }

  const map = {}
  let curNUmber = n
  while(1) {
    let res = c(curNUmber)
    if (res == 1) return true
    if (map[res]) return false
    curNUmber = map[res] = res
  }
};
// @lc code=end

