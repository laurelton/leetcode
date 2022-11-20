//	Time: 	 O(n^2)
//	Space:	 O(n^2)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    const sums = [];
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i +  1; j < nums.length; j += 1) {
            sums.push(nums[i] + nums[j]);
        }
    }

    sums.sort((a, b) => a - b);
    let idx = sums.length - 1;
    while (sums[idx] >= k && idx >= 0) idx--;

    return idx >= 0 ? sums[idx] : -1;
};

const testCases = [
    {
        input: {
            nums: [34,23,1,24,75,33,54,8],
            k: 60,
        },
        expected: 58,
    },
    {
        input: {
            nums: [10,20,30],
            k: 15,
        },
        expected: -1,
    },
];

for (const {input: {nums, k}, expected} of testCases) {
    console.log(`Nums:      ${nums}`)
    console.log(`K:         ${k}`);
    console.log('-'.repeat(50));
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${twoSumLessThanK(nums, k)}`);
    console.log('='.repeat(50), '\n');
}

