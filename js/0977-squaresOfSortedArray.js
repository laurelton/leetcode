//	Time:	O(NlogN)
//	Space:	O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums
        .map(n => Math.abs(n) ** 2)
        .sort((lo, hi) => lo - hi);
};

const nums = [-4,-1,0,3,10];
console.log(nums);
console.log(sortedSquares(nums));
