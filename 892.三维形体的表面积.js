/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let res = 0
  let diff = 0
  for (let row = 0; row < grid.length; row++) {
    for (let j = 0; j < grid[row].length; j++) {
      let item = grid[row][j];
      res += item * 6
      if (item > 1) {
        diff += item - 1
      }
      if (grid[row][j + 1]) {
        diff += Math.min(grid[row][j + 1], item)
      }
      if (grid[row + 1] && grid[row + 1][j]) {
        diff += Math.min(grid[row + 1][j], item)
      }
    }
  }

  return res - diff * 2
};
// @lc code=end

