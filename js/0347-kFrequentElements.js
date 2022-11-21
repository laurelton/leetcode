//	Time: 	 O(n log n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = new Map();
    for (const n of nums) {
        counts.set(n, ~~counts.get(n) + 1);
    }

    const uniqueVals = Array.from(counts.keys());
    uniqueVals.sort((a, b) => counts.get(b) - counts.get(a));

    return uniqueVals.slice(0, k);
};

