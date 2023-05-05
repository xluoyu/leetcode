/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // let nums = [1], index = 1
  // if (n == 1) return nums.join('')
  // while (index < n) {
  //   let res = []
  //   for(let j = 0; j < nums.length;) {
  //     let k = j + 1
  //     while (nums[j] == nums[k] && k < nums.length) {
  //       k += 1
  //     }
  //     res = res.concat([k - j, nums[j]])
  //     j = k
  //   }
  //   nums = res
  //   index += 1
  // }
  // return nums.join('')

  let res = '1'
  for (let i = 1; i < n; i++) {
    res = res.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return res
};
// @lc code=end

