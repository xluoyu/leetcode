/*
 * @lc app=leetcode.cn id=1314 lang=javascript
 *
 * [1314] 矩阵区域和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  return Array.from(new Array(mat.length), (e, i) =>  Array.from(new Array(mat[i].length), (item, j) => {
      const rowMin = Math.max(i - k, 0)
      const rowMax = i + k
      const colMin = Math.max(j - k, 0)
      const colMax = j + k
      let res = 0
      for (let r = rowMin; r <= rowMax; r++) {
        for (let c = colMin; c <= colMax; c++) {
          if (mat[r] && mat[r][c]) {
            res = res + mat[r][c]
          }
        }
      }
      return res
    })
  )
};
// @lc code=end

