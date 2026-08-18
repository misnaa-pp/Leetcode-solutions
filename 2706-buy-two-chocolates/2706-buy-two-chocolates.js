/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {

    let min = Infinity;

    for (let i=0; i<prices.length; i++){
        for(let j=i+1; j<prices.length; j++){
            if(prices[i]+prices[j]<=money){
               min = Math.min(min, prices[i]+prices[j])

            }
        }
    }
    if (min === Infinity) {
        return money;
    }

    return money - min;
  
    
};
let prices = [1,2,2];
console.log(buyChoco(prices,3));