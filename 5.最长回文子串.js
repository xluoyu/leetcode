/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
<<<<<<< HEAD
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
};
=======
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length
    if (len < 2) return s
    let maxLen = 1
    let begin = 0
    let dp = new Array(len).fill(0).map((e, i) => new Array(len).fill(0).map((a, j) => i == j))
    // for (let i = 0; i < len; i++) {
    //     dp[i][j] = i == j
    // }

    let charArr = s.split('')
    for (let L = 2; L <= len; L++) {
        for (let i = 0; i < len; i++) {
            let j = L + i - 1
            if (j >= len) {
                break
            }
            if (charArr[i] != charArr[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }

    return s.substring(begin, begin + maxLen)
};

// let res = longestPalindrome('rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip')

// console.log(res)
>>>>>>> 1c38ec3ce3ac964dccf9197cc2b0d33337a33cc3
// @lc code=end

