/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  for(let i = 0; i < nums.length; i++) {
      if(set.has(nums[i])) {
          return true;
      }
      set.add(nums[i]);
      if(set.size > k) {
        console.log(nums[i - k])
        set.delete(nums[i - k]);
      }
  }
  return false;
};
// @lc code=end

