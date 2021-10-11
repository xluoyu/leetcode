/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let time = 0
  for (let i = 0; i < timeSeries.length; i++) {
    const item = timeSeries[i];
    if (!timeSeries[i + 1] || timeSeries[i + 1] - item > duration) {
      time += duration
    } else {
      time += timeSeries[i + 1] - item
    }
  }
  return time
};
// @lc code=end

