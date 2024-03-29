/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const allLength = nums1.length + nums2.length;
//   const isEven = allLength % 2 === 0;
//   let resIndex = 0
//   if (isEven) {
//     resIndex = allLength / 2 - 1
//   } else {
//     resIndex = allLength / 2 - 0.5
//   }
//   const fp = (val) => {
//     return typeof val === 'number' ? val : Infinity 
//   }

//   let i = 0;
//   let curNum = 0
//   let nums1Index = 0;
//   let nums2Index = 0;
//   while (i <= resIndex) {
//     if (fp(nums1[nums1Index]) < fp(nums2[nums2Index])) {
//       curNum = nums1[nums1Index]
//       nums1Index++
//     } else {
//       curNum = nums2[nums2Index]
//       nums2Index++
//     }
//     i++
//   }
  
//   if (isEven) {
//     return (curNum + Math.min(fp(nums1[nums1Index]), fp(nums2[nums2Index]))) / 2
//   } else {
//     return curNum
//   }
// };
var findMedianSortedArrays = (nums1, nums2) => {
  let len1 = nums1.length, len2 = nums2.length
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1)//对nums1和nums2中长度较小的二分
  let len = len1 + len2//总长
  let start = 0, end = len1 //进行二分的开始和结束位置
  let partLen1, partLen2

  while (start <= end) {
      partLen1 = (start + end) >> 1//nums1二分的位置
      partLen2 = ((len + 1) >> 1) - partLen1//nums2二分的位置

      //L1:nums1二分之后左边的位置，L2，nums1二分之后右边的位置
      //R1:nums2二分之后左边的位置，R2，nums2二分之后右边的位置

      //如果左边没字符了，就定义成-Infinity，让所有数都大于它，否则就是nums1二分的位置左边一个
      let L1 = partLen1 === 0 ? -Infinity : nums1[partLen1 - 1]
      //如果左边没字符了，就定义成-Infinity，让所有数都大于它，否则就是nums2二分的位置左边一个
      let L2 = partLen2 === 0 ? -Infinity : nums2[partLen2 - 1]
      //如果右边没字符了，就定义成Infinity，让所有数都小于它，否则就是nums1二分的位置
      let R1 = partLen1 === len1 ? Infinity : nums1[partLen1]
      //如果右边没字符了，就定义成Infinity，让所有数都小于它，否则就是nums1二分的位置
      let R2 = partLen2 === len2 ? Infinity : nums2[partLen2]

      if (L1 > R2) {//不符合交叉小于等于 继续二分
          end = partLen1 - 1
      } else if (L2 > R1) {//不符合交叉小于等于 继续二分
          start = partLen1 + 1
      } else { // L1 <= R2 && L2 <= R1 符合交叉小于等于
          return len % 2 === 0 ?
              (Math.max(L1, L2) + Math.min(R1, R2)) / 2 : //长度为偶数返回作左侧较大者和右边较小者和的一半
              Math.max(L1, L2)	//长度为奇数返回作左侧较大者
      }
  }
}
// @lc code=end
