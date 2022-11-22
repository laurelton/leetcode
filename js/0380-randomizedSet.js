
var RandomizedSet = function() {
    this.valsToIdx = new Map();
    this.values = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valsToIdx.has(val)) return false;

    const idx = this.values.length;
    this.values.push(val);
    this.valsToIdx.set(val, idx);

    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valsToIdx.has(val)) return false;

    const idx = this.valsToIdx.get(val);
    const swapVal = this.values[this.values.length - 1];
    this.swapRear(idx);
    this.valsToIdx.set(swapVal, idx);
    this.values.pop();

    return this.valsToIdx.delete(val);
};

RandomizedSet.prototype.swapRear = function(idx) {
    [this.values[idx], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[idx]];
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const rand = Math.floor(Math.random() * this.values.length);

    return this.values[rand];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */