/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let max = n
        let min = 1
        let helf = Math.floor(n / 2)
        while (1) {
            if (!isBadVersion(helf)) {
                min = helf
                if (isBadVersion(helf + 1)) {
                    return helf + 1
                }
            } else {
                max = helf
                if (!isBadVersion(helf - 1)) {
                    return helf
                }
            }
            helf = Math.floor((max + min) / 2)
        }
    };
};
// @lc code=end

