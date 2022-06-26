/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let length = nums.length
  let left = 0, right = length - 1, res = length
  
  while (left <= right) {
    let mid = Math.ceil((right - left)/2) + left
    if (target <= nums[mid]) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
};
// @lc code=end

