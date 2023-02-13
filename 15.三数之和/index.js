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
  const newNums = nums.sort((a,b) => a - b)
  const res = []
  for (let i = 0; i < newNums.length - 2; i++) {
    if (newNums[i] > 0) break
    let left = i + 1
    let right = newNums.length - 1
    if (i!= 0 && newNums[i] === newNums[i - 1]) continue;
    while(left < right) {
      let result = newNums[i] + newNums[right] + newNums[left]
      if (result < 0) {
        left += 1
      } else if (result > 0) {
        right -= 1
      } else {
        res.push([newNums[i], newNums[left], newNums[right]])
        while (left < right && newNums[left] === newNums[left + 1]) left++
        while (left < right && newNums[right] === newNums[right - 1]) right--
        left++
        right--
      }
    }
  }

  return res
};
// @lc code=end
