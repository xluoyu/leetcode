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