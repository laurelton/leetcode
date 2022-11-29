//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const length = (10 ** 4) * 2 + 1;
    const counts = new Array(length).fill(0);

    for (const n of nums) {
        const idx = n >= 0 ? n : counts.length + n;
        counts[idx] += 1;
    }

    const upper = 10 ** 4;
    const lower = 10 ** 4 * -1;
    let idx = upper;
    
    while (idx >= lower) {
        const i = idx >= 0 ? idx : counts.length + idx;

        if (counts[i]) {
            k -= 1;
            if (k === 0) return idx;

            counts[i] -= 1;
            continue;
        }

        idx -= 1;
    }
};
