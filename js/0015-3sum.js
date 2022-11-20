/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 1) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                const indices = [nums[i], nums[l++], nums[r--]].sort((a, b) => a - b);
                result.add(JSON.stringify(indices));
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l += 1;
            } else {
                r -= 1;
            }
        }
    }

    return Array.from(result).map(arr => JSON.parse(arr));
};

const testCases = [
    {
        input: [-1,0,1,2,-1,-4],
        expected: [[-1,-1,2],[-1,0,1]],
    },
    {
        input: [0,1,1],
        expected: [],
    },
    {
        input: [0,0,0],
        expected: [[0,0,0]],
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${JSON.stringify(input)}`);
    console.log(`Expected:  ${JSON.stringify(expected)}`);
    console.log(`Actual:    ${JSON.stringify(threeSum(input))}`);
    console.log('='.repeat(50), '\n');
}
