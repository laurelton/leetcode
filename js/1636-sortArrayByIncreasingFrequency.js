//	Time:	O(n logn)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const counts = new Map();
    for (val of nums) {
        counts.set(val, ~~counts.get(val) + 1)
    }

    return nums.sort((lo, hi) => counts.get(lo) - counts.get(hi) || hi - lo);
};

const nums = [-1,1,-6,4,5,-6,1,4,1];
// [1,1,2,2,2,3];
// [2,3,1,3,2]
// [-1,1,-6,4,5,-6,1,4,1];
console.log(nums);
console.log(frequencySort(nums));
