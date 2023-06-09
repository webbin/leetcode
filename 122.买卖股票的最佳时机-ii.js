/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  console.log("prices: ", prices);
  const { length } = prices;
  let start = prices[0];
  let i = 1;
  let total = 0;
  let cache = 0;
  while (i < length) {
    const current = prices[i];
    console.log("current: ", current);
    console.log("start: ", start);
    if (current <= start) {
      start = current;
      if (cache) {
        total += cache;
        cache = 0;
      }
    } else {
      const ca = current - start;
      console.log("current ca ", ca);
      console.log("cache ", cache);
      if (ca >= cache) {
        cache = ca;
      } else {
        total += cache;
        cache = 0;
        start = current;
      }
    }
    console.log("total ", total);
    console.log("\n");
    i += 1;
    if (i === length && cache > 0) {
      total += cache;
    }
  }
  return total;
};
// @lc code=end
// [2,1,2,0,1]
console.log(maxProfit([2,1,2,0,1]));
