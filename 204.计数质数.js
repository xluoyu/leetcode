/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n == 0 || n == 1) return 0
    function isPrimes (number) {
        if (number == 0 || number == 1) return false
        let half = Math.floor(number / 2)

        while(half > 1) {
            if (number % half == 0) return false
            half--
        }
        return true
    }

    let ans = 0
    for(let i = 2; i < n; i++) {
        if (isPrimes(i)) ans++
    }
    return ans
};
// @lc code=end

