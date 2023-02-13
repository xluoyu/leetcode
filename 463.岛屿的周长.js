/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cur = grid[i][j]
      if (cur) {
        res += 4
        if (i != 0 && grid[i - 1][j]) {
          res -= 2
        }
        if (grid[i][j + 1]) {
          res -= 2
        }
      }
    }
  }

  return res
};
// @lc code=end

