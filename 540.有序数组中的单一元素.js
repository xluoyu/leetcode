/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i+=2) {
    if (nums[i] != nums[i+1]) return nums[i]
  }
  return nums[length - 1]
};
// @lc code=end

