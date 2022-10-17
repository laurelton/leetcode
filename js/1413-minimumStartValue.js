//	Time:	O(n)
//	Space:	O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let total = 0;
    const sums = nums.map(n => total + n);
    const min = Math.min(...sums);

    return min < 0 ? Math.abs(min) + 1 : 1;
};
