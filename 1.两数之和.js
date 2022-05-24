/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 
 * 85.39 56.08
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (map[diff]) return [map[diff], i]
    map[nums[i]] = i
  }
};
// @lc code=end

