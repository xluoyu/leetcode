/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 
 * 一次遍历比较
 * 
 * 如果当前值比之前的最小值小，那么就更新最小值
 * 否则，计算当前值与最小值的差，与结果比较，取最大值
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let preNum = Infinity
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < preNum) {
      preNum = prices[i]
    } else {
      res = Math.max(res, prices[i] - preNum)
    }
  }

  return res
};
// @lc code=end

