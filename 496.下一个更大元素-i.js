/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    const item = nums1[i];
    let index2 = nums2.indexOf(item)
    let res = -1
    for (let j = index2 + 1; j < nums2.length; j++) {
      if (nums2[j] > item) {
        res = nums2[j]
        break
      }
    }
    arr.push(res)
  }
  return arr
};
// @lc code=end

