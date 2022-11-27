var MyStack = function() {
    this.pushQ = [];
    this.popQ = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.pushQ.push(x);
    this.swap();
    
    return;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.popQ.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.popQ[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.popQ.length === 0;
};

/**
 * @return {void}
 */
MyStack.prototype.swap = function() {
    while (this.popQ.length) {
        this.pushQ.push(this.popQ.shift());
    }
    
    while (this.pushQ.length) {
        this.popQ.push(this.pushQ.shift());
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
