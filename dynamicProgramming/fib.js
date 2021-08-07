/*
 * @Author: your name
 * @Date: 2021-08-01 19:23:26
 * @LastEditTime: 2021-08-01 20:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/dynamicProgramming/fib.js
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
