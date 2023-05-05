/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  let length = arr.length
  let s = parseInt(length / 2)
  if (length % 2 === 0) {
    return (arr[s - 1] + arr[s]) / 2
  } else {
    return arr[s]
  }
};
// @lc code=end
