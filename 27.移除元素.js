/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  let count = 0;
  while (index < nums.length) {
    if (nums[index] === val) {
      count += 1;
      nums.splice(index, 1);
    } else {
      index += 1;
    }
  }
  return nums.length;
};
// @lc code=end
