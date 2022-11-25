
var MinStack = function() {
    this.values = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.values.length ? Math.min(this.getMin(), val) : val; 
    this.values[this.values.length] = {val, min};
    
    return
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.values.splice(-1, 1);
    
    return
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const last = this.values.length - 1;
    
    return this.values[last].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const last = this.values.length - 1;
    
    return this.values[last].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */