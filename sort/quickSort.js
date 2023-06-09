/*
 * @Author: your name
 * @Date: 2021-08-07 15:47:59
 * @LastEditTime: 2021-08-07 16:01:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/sort/quickSort.js
 */

/**
 * @description: 
 * @param size {number}
 * @return {number[]}
 */
const getNumberList = (size) => {
  let listSize = 0;
  if (size) {
    listSize = size;
  } else {
    listSize = Math.round(Math.random() * 100);
  }

  const result = [];
  for (let i = 0; i < listSize; i += 1) {
    result.push(Math.round(Math.random() * 100));
  }
  return result;
}

const quickSort = () => {

};