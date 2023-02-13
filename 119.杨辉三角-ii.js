/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = [[1]]
  let index = 2
  while (index <= rowIndex + 1) {
    let arr = new Array(index)
    for(let j = 0; j < index; j++) {
      if (j == 0) {
        arr[j] = res[index - 2][j]
      } else {
        arr[j] = res[index - 2][j - 1] + (res[index - 2][j] || 0)
      }
    }
    res.push(arr)
    index += 1
  }
  return res[rowIndex]
};
// @lc code=end

