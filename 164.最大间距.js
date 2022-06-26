/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0
  nums.sort((a, b) => a - b)
  let min = 0
  for (let i =0; i < nums.length; i++) {
    let res = Math.abs(nums[i + 1] - nums[i])
    if (res > min) {min = res}
  }
  return min
};
// @lc code=end

