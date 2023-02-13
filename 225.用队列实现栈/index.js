/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this._list = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this._list.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this._list.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this._list[this._list.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this._list.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

