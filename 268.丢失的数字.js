/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let length = nums.length
  let all = length % 2 ? Math.floor(length / 2) * (1 + length) + Math.ceil(length / 2) : Math.floor(length / 2) * (1 + length)
  let curAll = nums.reduce((p, c) => p += c, 0)
  return all - curAll
};
// @lc code=end

