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

    let mx = -1;
    for (const n of nums) {
        if (counts.get(n) === 1) {
            mx = Math.max(mx, n);
        }
    }

    return mx;
};
