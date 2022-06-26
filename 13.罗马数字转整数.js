/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // 解法一
  let arr = s.split('')
  let newArr = arr.map((i, k) => {
    let cur = obj[i]
    if (k == arr.length - 1) return cur
    let next = obj[arr[k + 1]]
    if (cur >= next) {
      return cur
    } else {
      arr.splice(k + 1, 1)
      return next - cur
    }
  })

  // 解法二 
  // let numberArr = s.split('').map((i) => obj[i])
  // let newArr = numberArr.map((i, k) => {
  //   let num = numberArr[k + 1]
  //   if (k > numberArr.length - 1 || i < num) {
  //     numberArr.splice(k+1, 1)
  //     return num - i
  //   } else {
  //     return i
  //   }
  // })

  return newArr.reduce((i, k) => {return i + k}, 0)
};

//  // 大牛解法
// function (s) {
//   var hashNum = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
//   }
//   var result = 0;
//   for (let i = 0; i < s.length; i++) {
//     hashNum[s[i]] < hashNum[s[i + 1]] ? result -= hashNum[s[i]] : result += hashNum[s[i]]
//   }
//   return result;
// }

console.log(romanToInt('IXLVIII'))
// @lc code=end

