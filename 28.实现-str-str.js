/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  if (needle.length === haystack.length) {
    return needle === haystack ? 0 : -1;
  }
  let i = 0;
  let j = 0;
  let start = -1;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (start === -1) {
        start = i;
      }
      i += 1;
      j += 1;
    } else {
      i = start !== -1 ? start + 1 : i + 1;
      j = 0;
      start = -1;
    }
    if (j === needle.length) {
      break;
    }
  }
  return start;
};
// @lc code=end
