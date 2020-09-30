/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let arr = num1.split("")
    let length = arr.length
    let res = ''
    arr.forEach((e, i) => {
        let n = length - i
        let resA = res.substring(0, res.length - n)
        let a = e * Math.pow(10, n - 1) * num2 + ''
        if (a.length == num2.length+n) {
            resA = resA * 1 + 1
            a = a.substr(1)
        }
        res = resA + '' + a
    })
    return res
};
// @lc code=end

