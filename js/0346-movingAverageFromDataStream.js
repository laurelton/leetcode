/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.values = [];
    this.maxLen = size;
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.values.length === this.maxLen) {
        this.total -= this.values.shift();
        this.values.push(val);
        this.total += val;
        return this.total / this.maxLen;
    } else {
        this.values.push(val);
        this.total += val;
        return this.total / this.values.length;
    }
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */