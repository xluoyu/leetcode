/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let str = s.substring(i, j);
            if (str === str.split('').reverse().join('') && str.length > max) {
                max = str.length;
                res = str;
            }
        }
    }
    return res;
};
// @lc code=end

