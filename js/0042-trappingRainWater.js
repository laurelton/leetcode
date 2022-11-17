//	Time: 	 O(n) - 3 pass
//	Space:	 O(n)
/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function(heights) {
    const N = heights.length;
    const leftMax = new Array(N).fill(0);
    const rightMax = new Array(N).fill(0);
    let mx = 0;
    for (let i = 1; i < N; i += 1) {
        mx = Math.max(heights[i - 1], mx);
        leftMax[i] = mx;
    }

    mx = 0;
    for (let i = N - 2; i >= 0; i -= 1) {
        mx = Math.max(heights[i + 1], mx);
        rightMax[i] = mx;
    }

    let result = 0;
    for (let i = 0; i < N; i += 1) {
        const trapped = Math.min(leftMax[i], rightMax[i]) - heights[i];
        result += Math.max(0, trapped);
    }

    return result;
};

const testCases = [
    {
        input:[0,1,0,2,1,0,1,3,2,1,2,1],
        expected: 6,
    },
    {
        input:[4,2,0,3,2,5],
        expected: 9,
    },
];
for (const {input, expected} of testCases) {
    console.log(input);
    console.log(trap(input));
    console.log('#'.repeat(50), '\n');
}
