/*
 * @lc app=leetcode.cn id=2206 lang=javascript
 *
 * [2206] 将数组划分成相等数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const obj = {}

  // for (let i = 0; i < nums.length; i++) {
  //   const item = nums[i];
    
  //   if (obj[item]) {
  //     delete obj[item]
  //   } else {
  //     obj[item] = true
  //   }
  // }

  let i = 0, j = nums.length - 1

  while (i <= j) {
    const start = nums.shift()
    const end = nums.pop()
    if (obj[start]) {
      delete obj[start]
    } else {
      obj[start] = true
    }

    if (obj[end]) {
      delete obj[end]
    } else {
      obj[end] = true
    }

    i++
    j--
  }

  return !Object.keys(obj).length
};
// @lc code=end

