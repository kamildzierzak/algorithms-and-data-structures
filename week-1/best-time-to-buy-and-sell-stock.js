/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // O(1)
  let profit = 0;
  // O(1)
  let buyPrice = prices[0];

  // O(n)
  for (let i = 1; i < prices.length; i++) {
    // O(1)
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else if (prices[i] - buyPrice > profit) {
      profit = prices[i] - buyPrice;
    }
  }

  return profit;
};

// Worse time complexity: O(n)
