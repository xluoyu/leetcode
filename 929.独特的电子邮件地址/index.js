/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const res = new Set()

  emails.forEach(email => {
    const [local, com] = email.split('@')
    const newLocal = local.slice(0, local.indexOf('+') === -1 ? local.length: local.indexOf('+')).replaceAll('.', '')
    res.add(newLocal + '@' + com)
  })
  return res.size
};
// @lc code=end

