/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
<<<<<<< HEAD

=======
  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  let maxLength = Math.max(arr1.length,arr2.length)

  for (let i = 0; i < maxLength; i++) {
    let a = Number(arr1[i] || 0)
    let b = Number(arr2[i] || 0)

    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
  }

  return 0
>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
};
// @lc code=end

