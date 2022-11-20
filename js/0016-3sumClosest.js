//	Time: 	 O(n^2)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minDiff = Infinity;
    let result;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i += 1) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const total = nums[i] + nums[l] + nums[r];
            const diff = total - target;
            if (diff === 0) return total;

            if (Math.abs(diff) < minDiff) {
                result = total;
                minDiff = Math.abs(diff);
            } 
            if (diff < 0) {
                l += 1;
            } else {
                r -= 1;
            }
        }
    }

    return result;
};

const testCases = [
    {
        input: {
            nums: [-1,2,1,-4],
            k: 1,
        },
        expected: 2,
    },
    {
        input: {
            nums: [0,0,0],
            k: 1,
        },
        expected: 0,
    },
    {
        input: {
            nums: [0,0,0],
            k: 0,
        },
        expected: 0,
    },
];

for (const {input: {nums, k}, expected} of testCases) {
    console.log(k, nums);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${threeSumClosest(nums, k)}`);
    console.log('='.repeat(50), '\n');
}

