/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // 方法二
    let step = 0
    for (let index = 0; index < points.length - 1; index++) {
      step += Math.max(Math.abs(points[index + 1][0] - points[index][0]), Math.abs(points[index + 1][1] - points[index][1]))
    }
    return step


    // // 方法一 递归判断法
    // let step = 0
    // function diff(a, b) {
    //   if (a < b) {
    //     a += 1
    //   } else if (a > b) {
    //     a -= 1
    //   }
    //   return a
    // }
    // function go(point, target) {
    //   if (point[0] != target[0] || point[1] != target[1]) {
    //     point[0] = point[0] != target[0] ? diff(point[0], target[0]) : point[0]
    //     point[1] = point[1] != target[1] ? diff(point[1], target[1]) : point[1]
    //     go(point, target)
    //     step += 1
    //   }
    // }
    // for (let index = 0; index < points.length - 1; index++) {
    //   go(points[index], points[index + 1])
    // }
    // return step
};
// @lc code=end

