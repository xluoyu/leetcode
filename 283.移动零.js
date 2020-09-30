/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length
  for (let i = 0; i < length;) {
    if (nums[i] == 0) {
      length--
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
  }
};
// @lc code=end

