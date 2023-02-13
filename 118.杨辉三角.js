/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [[1]]
  let index = 2
  while (index <= numRows) {
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
  return res
};
// @lc code=end