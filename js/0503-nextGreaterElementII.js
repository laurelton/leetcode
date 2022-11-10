//	Time: 	 O(n) - 2 pass
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const result = new Array(nums.length).fill(-1);
    const lesser = [];

    const N = nums.length * 2;
    for (let i = 0; i < N; i += 1) {
        const idx = i % nums.length;
        const curr = nums[idx];

        while (lesser.length && curr > nums[lesser[lesser.length - 1]]) {
            const j = lesser.pop();
            result[j] = curr;
        }

        lesser.push(idx);
    }

    return result;
};

const testCases = [
    [1,2,1],
    [1,2,3,4,3],
    [5,2,3,4,3],
];
for (const test of testCases) {
    console.log(test);
    console.log(nextGreaterElements(test));
    console.log('*'.repeat(50));
}
