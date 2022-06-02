/*
 * @Author: zhengweibin zhengweibin-a0925@aqara.com
 * @Date: 2022-06-02 12:19:49
 * @LastEditors: zhengweibin zhengweibin-a0925@aqara.com
 * @LastEditTime: 2022-06-02 15:04:50
 * @FilePath: /leetcode/hard/trap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

function getHeight(list) {
  console.log("get height ", list);
  const { length } = list;
  if (length <= 2) return 0;
  let left = list[0];
  const right = list[length - 1];
  let height = Math.min(left, right) * length - 2;
  for (let i = 1; i < length - 1; i += 1) {
    height -= list[i];
  }
  return height;
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftIndex = 0;
  let rightIndex = 0;
  let count = 0;
  for (let i = 0; i < height.length; i += 1) {
    rightIndex = i;
    if (
      height[rightIndex] >= height[leftIndex] ||
      rightIndex === height.length - 1
    ) {
      count += getHeight(height.slice(leftIndex, rightIndex + 1));
      leftIndex = rightIndex;
    }
  }
  // console.log('count = ', count);
  return count;
};

const test = () => {
  const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trap(height1));
};

test();
