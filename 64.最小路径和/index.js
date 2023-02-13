/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const width = grid[0].length
  const height = grid.length
  for (let i = 1; i < width; i++) grid[0][i] += grid[0][i - 1]
  for (let i = 1; i < height; i++) grid[i][0] += grid[i - 1][0]
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      grid[i][j] += Math.min(grid[i][j - 1], grid[i-1][j])
    }
  }
  return grid[height - 1][width - 1]
};
// @lc code=end

