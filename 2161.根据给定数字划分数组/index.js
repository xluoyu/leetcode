/*
 * @lc app=leetcode.cn id=2161 lang=javascript
 *
 * [2161] 根据给定数字划分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  const before = [], middle = [], after = []

  nums.forEach(item => {
    if (item < pivot) {
      before.push(item)
    } else if (item > pivot) {
      after.push(item)
    } else {
      middle.push(item)
    }
  })

  return [...before, ...middle, ...after]
};
// @lc code=end

