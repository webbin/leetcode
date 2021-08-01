/*
 * @Author: your name
 * @Date: 2021-07-26 23:02:31
 * @LastEditTime: 2021-08-01 17:10:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/medium/lengthOfLongestSubstring.js
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const { length } = s;
  let charObj = {};
  let charList = [];
  let maxSize = 0;
  console.log("string = ", s);
  for (let i = 0; i < length; i += 1) {
    const ch = s[i];
    // console.log('ch = ', ch);
    // console.log('char obj = ', charObj);
    if (charObj[ch]) {
      console.log("char list 1 = ", charList);
      if (charList.length > maxSize) {
        maxSize = charList.length;
      }
      const { stringIndex, listIndex } = charObj[ch];
      if (stringIndex + 1 === i) {
        charObj = { [ch]: { stringIndex: i, listIndex: 0 } };
        charList = [ch];
        continue;
      }

      for (let j = 0; j < listIndex; j += 1) {
        const delCh = charList[j];
        delete charObj[delCh];
      }
      charList = charList.slice(listIndex + 1);
      charObj[ch] = { stringIndex: i, listIndex: 0 };
      charList.push(ch);
      charList.forEach((listCh, listIndex) => {
        charObj[listCh].listIndex = listIndex;
      });
      console.log("char obj = ", charObj);
      console.log("char list = ", charList);
    } else {
      charObj[ch] = { stringIndex: i, listIndex: charList.length };
      charList.push(ch);
    }
  }
  if (charList.length > maxSize) {
    maxSize = charList.length;
  }
  return maxSize;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring1 = (s) => {
  console.log('string = ', s);
  console.log('string length = ', s.length);
  let left = 0;
  let right = 0;

  let maxSize = 0;
  const set = new Set();

  while (left < s.length) {
    if (right > s.length - 1) {
      break;
    }

    let char = s[right];
    while (!set.has(char) && right < s.length) {
      set.add(char);
      right += 1;
      char = s[right];
    }
    console.log('set = ', set);
    if (set.size > maxSize) {
      maxSize = set.size;
    }
    set.delete(s[left]);
    left += 1;
  }

  console.log("max size = ", maxSize);
  return maxSize;
};

const main = () => {
  const strs = ["wobgrovw", "abcabcbb", "dvdf", "abbcd", "bbbbbb", " ", ""];
  strs.forEach((s) => {
    const maxSize = lengthOfLongestSubstring1(s);
  });
};

main();
