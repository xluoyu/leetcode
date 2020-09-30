/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2) return false
    let check = []
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let arr = Object.keys(map)
    for (const i of s) {
        if (arr.includes(i)) {
            check.push(map[i])
        } else {
            let b = check.pop()
            if (b !== i) {
                return false
            }
        }
    }
    if (check.length) return false
    return true
};
// @lc code=end

