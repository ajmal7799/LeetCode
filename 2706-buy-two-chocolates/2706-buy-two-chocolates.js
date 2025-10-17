/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
   let price = prices.sort((a,b)=> a-b)
   let sum  = price[0] + price[1]
    if(sum <= money) {
        return Math.abs(sum-money)
    }else{
        return money
    }

};