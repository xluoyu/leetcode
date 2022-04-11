/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let res = []
  nums.forEach((e, i) => {
    if (e == nums[i + 1]) {
      if (!nums[i - 1]) {
        res = [e, e == 1 ? 2 : 1]
      } else {
        if (nums[i - 1] + 1 == e) {
          res = [e, e + 1]
        } else {
          res = [e, e - 1]
        }
      }
    }
  })
  return res
};
// @lc code=end

