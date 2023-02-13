/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  let strnum = ''
  const res = []
  for (let i = 0; i < nums.length; i++) {
    strnum += nums[i]
    res.push(Number(parseInt(strnum, 2)) % 5 === 0)
  }
  return res
};
// @lc code=end

