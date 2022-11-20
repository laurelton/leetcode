var MyHashMap = function() {
    this.modulo = 10 ** 6 + 1;
    this.hashFn = key => key % this.modulo;
    this.buckets = new Array(this.modulo);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const indx = this.hashFn(key);
    this.buckets[indx] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const indx = this.hashFn(key);
    
    return this.buckets[indx] ?? -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const indx = this.hashFn(key);
    this.buckets[indx] = null;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
