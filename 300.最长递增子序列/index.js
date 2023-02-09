/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const res = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
      let cur = nums[i]
      let isLarger = false

      for (let j = 0; j < res.length; j++) {
          if (res[j] >= cur && !isLarger) {
              res[j] = cur
              isLarger = true
              break;
          }
      }

      if (!isLarger) {
          res.push(cur)
      }
  }
  console.log(res)
  return res.length
};
