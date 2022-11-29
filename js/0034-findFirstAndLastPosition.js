//	Time: 	 O(log n)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1];
    if (!nums.length) return result;

    const start = searchBounds(nums, target, true);
    if (start === -1) return result;

    const end = searchBounds(nums, target, false, start);
    result = [start, end];

    return result;
};

function searchBounds(arr, target, lower, start = 0) {
    let lo = start;
    let hi = arr.length - 1;
    let idx = lo === 0 ? -1 : lo;

    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        const val = arr[mid];
        
        if (val === target) {
            idx = mid;
            [lo, hi] = lower ? [lo, mid - 1] : [mid + 1, hi];
        } else if (val < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return idx;
}

const testCases = [
    {
        input: {
            nums: [5,7,7,8,8,10],
            target: 8,
        },
        expected: [3, 4],
    },
];

for (const {input: {nums, target}, expected} of testCases) {
    console.log(`Input:     ${nums}, ${target}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${searchRange(nums, target)}`);
    console.log('='.repeat(50), '\n');
}
