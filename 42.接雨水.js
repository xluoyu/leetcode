/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   let res = 0;
   let current = 0;
   let chunk = [];
   while(current < height.length) {
       while(chunk.length && height[current] > height[chunk.length - 1]) {
           let top = chunk.pop()
           if (!chunk.length) break
           
       }
   }
};
// @lc code=end

