/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    let length = height.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return res
};
// @lc code=end

