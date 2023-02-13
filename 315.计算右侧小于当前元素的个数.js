/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const length = nums.length
  const res = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] > nums[j]) {
        res[i] += 1
      }
    }
  }

  return res
};
// @lc code=end

