/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) minPrice = prices[i];
      potentialProfit = prices[i] - minPrice;
      if (potentialProfit > maxProfit) maxProfit = potentialProfit;
    }
    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1])); // 5