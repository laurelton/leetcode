//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indices = new Map();
    nums.forEach((n, i) => indices.set(n, (indices.get(n) ?? []).concat([i])));
    
    for (const [_, values] of indices) {
        for (let i = 1; i < values.length; i += 1) {
            const diff = values[i] - values[i - 1];
            if (diff <= k) return true;
        }
    }

    return false;
};

const testCases = [
    {
        input: {
            nums: [1,2,3,1],
            k: 3,
        },
        expected: true,
    },
    {
        input: {
            nums: [1,0,1,1],
            k: 1,
        },
        expected: true,
    },
    {
        input: {
            nums: [1,2,3,1,2,3],
            k: 2,
        },
        expected: false,
    },
];

for (const {input: {nums, k}, expected} of testCases) {
    console.log(nums, k);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${containsNearbyDuplicate(nums, k)}`);
    console.log('='.repeat(50), '\n');
}

