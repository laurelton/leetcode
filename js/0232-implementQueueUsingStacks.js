
var MyQueue = function() {
    this.back = [];
    this.front = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.back.push(x);

    return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.front.length) {
        this.fillFront();
    }

    return this.front.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.front.length) {
        this.fillFront();
    }

    return this.front[this.front.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.back.length === 0 && this.front.length === 0;
};

/**
 * @return {void}
 */
MyQueue.prototype.fillFront = function() {
    while(this.back.length) {
        this.front.push(this.back.pop());
    }

    return;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */