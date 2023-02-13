/*
 * @lc app=leetcode.cn id=1764 lang=javascript
 *
 * [1764] 通过连接另一个数组的子数组得到一个数组
 */

// @lc code=start
/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
  let numsStr = nums.join(',')
  for (let i = 0; i < groups.length; i++) {
    const item = groups[i].join(',');
    let reg = new RegExp("\(^|,\)" + item, 'g')
    let index = numsStr.search(reg);
    if (index >= 0) {
      numsStr = numsStr.substring(index + groups[i].length * 2)
    } else {
      return false
    }
  }
  return true
};

// let res = canChoose([[1,2,3],[3,4]], [1,2,3,3,4])
// console.log(res)
// @lc code=end

