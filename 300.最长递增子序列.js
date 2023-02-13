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
  let  res = 1
  for (let i = 1; i < nums.length; i++) {
    let preNum = -Infinity
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && nums[j] > preNum) {
        
      }
    }
  }
};

let res = lengthOfLIS([0,1,0,3,2,3])
console.log(res)
// @lc code=end

