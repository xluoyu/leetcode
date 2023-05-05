<<<<<<< HEAD
const nums = [3, 5, 8, 12, 24]
const target = 17

// function twoSum (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j])
//         return [i, j]
//       }
//     }
//   }
// }

function twoSum (nums, target) {
  let obj = {}
  let length = nums.length
  let diff = 0
  for (let i = 0; i < length; i++) {
    diff = target - nums[i]
    if (obj.hasOwnProperty(diff)) {
      return [obj[diff], i]
    } else {
      obj[nums[i]] = i
    }
  }
}

twoSum(nums, target)
=======
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 
 * 85.39 56.08
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (typeof map[diff] === "number") return [map[diff], i]
    map[nums[i]] = i
  }
};
// @lc code=end
>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
