/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0, maxNum = nums[0]
  nums.forEach(cur => {
    pre = Math.max(pre + cur, cur)
    maxNum = Math.max(maxNum, pre)
  })
  return maxNum
};
// @lc code=end

