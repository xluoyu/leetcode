/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let status = 0
  for (let i = 0; i < nums.length; i++) {
    if (!isNaN(nums[i + 1])) {
      if (nums[i] > nums[i + 1]) {
        if (status === 0) {
          status = 1
        } else if (status === 2) {
          return false
        }
      } else if (nums[i] < nums[i + 1]) {
        if (status === 0) {
          status = 2
        } else if (status === 1) {
          return false
        }
      }
    }
  }

  return true
};
// @lc code=end
console.log(isMonotonic([1,3,2]))
