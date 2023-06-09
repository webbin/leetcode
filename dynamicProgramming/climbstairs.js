/*
 * @Author: zhengweibin zhengweibin-a0925@aqara.com
 * @Date: 2022-05-25 09:59:27
 * @LastEditors: zhengweibin zhengweibin-a0925@aqara.com
 * @LastEditTime: 2022-06-02 12:16:14
 * @FilePath: /leetcode/dynamicProgramming/climbstairs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

function climbstairs(n) {
  const fn = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return fn(n - 1) + fn(n - 2);
  };

  // let count1 = 0,
  //   count2 = 0,
  //   count = 0;
  // for (let i = 1; i < n; i += 1) {}
  return fn(n);
}

// var climbStairs = function(n) {
//   let p = 0, q = 0, r = 1;
//   for (let i = 1; i <= n; ++i) {
//       p = q;
//       q = r;
//       r = p + q;
//   }
//   return r;
// };
