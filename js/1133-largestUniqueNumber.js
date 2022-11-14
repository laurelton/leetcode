//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const counts = new Map();
    for (const n of nums) {
        counts.set(n, ~~counts.get(n) + 1);
    }

    return Array.from(counts.entries())
        .reduce((mx, [n, count]) => count === 1 ? Math.max(mx, n) : mx, -1);
};
