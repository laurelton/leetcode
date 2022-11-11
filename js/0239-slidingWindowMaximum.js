//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const indices = [];
    const maxes = [];

    for (let i = 0; i < nums.length; i += 1) {
        while (indices.length && nums[i] > nums[indices[indices.length - 1]]) {
            indices.pop();
        }

        indices.push(i);
        const left = i + 1 - k;

        if (left >= 0) {
            while (indices[0] < left) {
                indices.shift();
            }
            
            const currMax = nums[indices[0]]
            maxes.push(currMax);
        }
    }

    return maxes;
};

const testCases = [
    [[1,3,-1,-3,5,3,6,7], 3],
    [[1], 1],
    [[9,8,7,6,5,4,3,2,1], 4],
];
for (const test of testCases) {
    [nums, k] = test;
    console.log(k, nums);
    console.log(maxSlidingWindow(nums, k));
    console.log('='.repeat(50));
}
