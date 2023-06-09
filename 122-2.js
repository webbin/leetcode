/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  if (length < 2) return 0;
  let total = 0;
  let i = 0;
  while (i < length) {
    while (prices[i + 1] && prices[i + 1] > prices[i]) {
      i += 1;
    }
    total+=prices[i]
  }
};
