//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const discPrices = prices.slice();
    const grtr = [];

    for (let i = 0; i < prices.length; i += 1) {
        const curr = prices[i];
        while(grtr.length && curr <= prices[grtr[grtr.length - 1]]) {
            const indx = grtr.pop();
            discPrices[indx] -= curr;
        }

        grtr.push(i)
    }

    return discPrices;
};

const testCases = [
    [8,4,6,4,3],
    [1,2,3,4,5],
    [10,1,1,6],
    [77],
];
for (const test of testCases) {
    console.log(test);
    console.log(finalPrices(test));
    console.log('#'.repeat(50));
}
