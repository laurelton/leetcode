var MyHashSet = function() {
    this.modulo = 10 ** 6 + 1;
    this.hashFn = key => key % this.modulo;    
    this.buckets = new Array(this.modulo); 
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const indx = this.hashFn(key);
    this.buckets[indx] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const indx = this.hashFn(key);
    if (this.buckets[indx] === key) {
        this.buckets[indx] = null;
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const indx = this.hashFn(key);
    return this.buckets[indx] === key;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
