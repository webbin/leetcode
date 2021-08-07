/*
 * @Author: your name
 * @Date: 2021-08-07 15:42:50
 * @LastEditTime: 2021-08-07 15:45:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/dataStruct/sum.js
 */

/**
 * @description:
 * @param list {number[]}
 * @return {number}
 */
const sum = (list) => {
  if (list.length) {
    return list[0] + sum(list.slice(1));
  }
  return 0;
};

const main = () => {
  const list = [2, 3, 4, 1, 9];
  const result = sum(list);
  console.log('sum result = ', result);
};

main();
