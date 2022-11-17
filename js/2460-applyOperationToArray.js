//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let w = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > 0) {
            [nums[i], nums[w]] = [nums[w], nums[i]];
            w += 1;
        }
    }
    return nums;
};

const testCases = [
    {
        input: [1,2,2,1,1,0],
        expected: [1,4,2,0,0,0],
    },
    {
        input: [0,1],
        expected: [1,0],
    },
];
for (const {input, expected} of testCases) {
    console.log(input);
    console.log(`Expected:\t${expected}`);
    console.log(`Actual:  \t${applyOperations(input)}`);
    console.log('*'.repeat(50));
    console.log('');
}
