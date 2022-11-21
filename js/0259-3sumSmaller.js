//	Time: 	 O(n^2)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) return 0;

    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 1) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let curr = nums[i] + nums[l] + nums[r];
            if (curr < target) {
                count += r - l;
                l += 1;
            } else {
                r -= 1;
            }
        }
    }
    
    return count;
};

const testCases = [
    {
        input: {
            nums: [0],
            target: 0,
        },
        expected: 0,
    },
    {
        input: {
            nums: [0,0,0],
            target: 1,
        },
        expected: 1,
    },
    {
        input: {
            nums: [-2,0,1,3],
            target: 5,
        },
        expected: 2,
    },
    {
        input: {
            nums: [],
            target: 0,
        },
        expected: 0,
    },
];

for (const {input: {nums, target}, expected} of testCases) {
    console.log(target, nums);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${threeSumSmaller(nums, target)}`);
    console.log('='.repeat(50), '\n');
}
