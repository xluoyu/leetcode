/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id, obj) {
  let item = obj || employees.find(e => e.id == id)
  let res = item.importance
  employees.forEach(e => {
    if (item.subordinates.includes(e.id)) {
      res += e.subordinates.length ? GetImportance(employees, e.id, e) : e.importance
    }
  })
  return res
};
// @lc code=end

