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
    nums = nums.sort((a, b) => a-b);
    // console.log(nums)
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let j = i + 1;
        let r = nums.length - 1
        while(j < r) {
           let res = nums[i] + nums[j] + nums[r]
           if (res > 0) {
                r--
           } else if (res < 0) {
               j++
           } else {
            result.push([nums[i], nums[j], nums[r]])
            while (j < r && nums[j] == nums[j+1]) j++; // 去重
            while (j < r && nums[r] == nums[r-1]) r--; // 去重
            j++
            r--
           }
        }
    }
    // console.log(result)
    return result
};

// threeSum([1,-1,-1,0])
// @lc code=end

