/*
 * @Description: 
 * @Author: xluoyu
 * @LastEditTime: 2022-08-19 17:24:08
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  const obj = {}

  function run (diff, arr = []) {
    let diffList = candidates.filter(e => e <= diff)
    if (!diffList.length) return
    for (let i = 0; i < diffList.length; i++) {
      const e = diffList[i]
      if (diff - e === 0) {
        arr.push(e)
        const key = arr.sort().join(',')
        if (!obj[key])  {
          res.push(arr)
          obj[key] = true
        }
        return
      } else if (diff - e > 0) {
        run(diff - e, [...arr, e])
      } else {
        return
      }
    }
  }

  run(target)

  return res
};
// @lc code=end
