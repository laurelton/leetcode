//	Time:	O(n logn)
//	Space:	O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const counts = new Map();
    for (val of nums) {
        counts.set(val, ~~counts.get(val) + 1)
    }
    
    const frequencies = Array.from(counts.entries());
    frequencies.sort((lo, hi) => {
        const [loKey, loVal] = lo;
        const [hiKey, hiVal] = hi;
        if (loVal === hiVal) return hiKey - loKey;
        else return loVal - hiVal;
    });
    
    let i = 0;
    frequencies.forEach(([val, count]) => {
        while (count > 0) {
            nums[i] = val;
            i += 1;
            count--;
        }
    })
    return nums;
};

const nums = [-1,1,-6,4,5,-6,1,4,1];
// [1,1,2,2,2,3];
// [2,3,1,3,2]
// [-1,1,-6,4,5,-6,1,4,1];
console.log(nums);
console.log(frequencySort(nums));
