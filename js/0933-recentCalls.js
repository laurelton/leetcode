var RecentCounter = function() {
    this.calls = [];
    this.timeFrame = 3000;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.calls.push(t);
    while (t - this.calls[0] > this.timeFrame) {
        this.calls.shift();
    }

    return this.calls.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
