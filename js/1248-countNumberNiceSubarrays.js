/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0;
    let rslt = 0;
    let countSums = new Map();
    countSums.set(0, 1);

    for (const n of nums) {
        count += n % 2;
        const diff = count - k; 

        if (countSums.has(diff)) {
            rslt += countSums.get(diff);
        }

        countSums.set(count, ~~countSums.get(count) + 1);
    }

    return rslt;
};

const testCases = [
    {
        nums: [1,1,2,1,1],
        k: 3,
        expected: 2,
    },
    {
        nums: [2,4,6,],
        k: 1,
        expected: 0,
    },
    {
        nums: [2,2,2,1,2,2,1,2,2,2],
        k: 2,
        expected: 16,
    },
];
for (const {nums, k, expected} of testCases) {
    console.log(nums, k);
    console.log(`Expected:\t${expected}`)
    console.log(numberOfSubarrays(nums, k));
    console.log('='.repeat(50));
}
