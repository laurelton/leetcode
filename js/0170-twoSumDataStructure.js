var TwoSum = function() {
    this.numbers = [];
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.numbers.push(number);
    this.numbers.sort((a, b) => a - b);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    const N = this.numbers.length;
    let l = 0;
    let r = N - 1;

    while (l < r && r < N) {
        const currSum = this.numbers[l] + this.numbers[r];
        if (currSum === value) return true;
        if (currSum < value) l++;
        if (currSum > value) r--;
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */