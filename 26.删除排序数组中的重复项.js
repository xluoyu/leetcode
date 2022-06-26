/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
};
removeDuplicates([1,2,2,3,4])
// @lc code=end

