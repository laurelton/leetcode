//	Time: 	 O(n logn)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b);
    let l = 0;
    let r = nums.length - 1;
    let result = -1;
    while (l < r) {
        const currSum = nums[l] + nums[r];
        if (currSum >= k) r--;
        if (currSum < k) {
            result = Math.max(result, currSum);
            l++;
        }
    }

    return result;
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

