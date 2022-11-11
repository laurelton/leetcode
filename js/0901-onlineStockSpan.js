//	Time: 	 O(n)
//	Space:	 O(n)
var StockSpanner = function() {
    this.prices = [];
    this.days = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let days = 1;
    while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
        this.prices.pop();
        days += this.days.pop();
    }
    
    this.prices.push(price);
    this.days.push(days);

    return days;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
const testCases = [
    [[100], [80], [60], [70], [60], [75], [85]],
    [[100], [180], [260], [370], [460], [575], [585]],
    [[28],[14],[28],[35],[46],[53],[66],[80],[87],[88]],
];
for (const test of testCases) {
    const stockSpanner = new StockSpanner();
    for (price of test) {
        const [p] = price;
        const days = stockSpanner.next(p);
        console.log(p, days);
    }
    console.log('#'.repeat(50));
}