/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let hash = {}
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (hash[nums[j]] !== undefined) {
                res.push([nums[j]].concat(hash[nums[j]]))
                hash[nums[j]] = undefined
            } else {
                let mark = 0 - nums[i] - nums[j]
                hash[mark] = [nums[i], nums[j]]
            }
        }
    }
    return res
};
// @lc code=end

