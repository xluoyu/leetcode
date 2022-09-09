/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 * 
 * 遍历每次比较上一个值加当前值与 当前最大值的大小
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let pre = 0 // 0 1 2 4
    let cur = 0 // 1 2 4 
    for (let i = 0; i < nums.length; i++) {
        let temp = cur
        cur = Math.max(pre + nums[i], cur)
        pre = temp
    }
    return cur
};
// @lc code=end

