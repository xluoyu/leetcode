/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

 /**
  * 
  * 递归写法
  * 参数： target = 目标值
  *       combine = 当前组成数组
  *        idx = 当前下表
  * 
  * 终止条件
  * candidates内数值用完
  * target == 0  证明combine符合条件，添加进ans
  * 
  * 
  */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = []
    const dfs = (target, combine, idx) => {
        if (idx == candidates.length) return
        if (target == 0) {
            ans.push(combine)
            return
        }
        dfs(target, combine, idx+1)
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
    }

    dfs(target, [], 0)
    return ans
};
// @lc code=end

