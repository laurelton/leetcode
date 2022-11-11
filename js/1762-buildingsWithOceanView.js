//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const output = [];
    for (let i = 0; i < heights.length; i += 1) {
        while (output.length && heights[i] >= heights[output[output.length - 1]]) {
            output.pop();
        }
        output.push(i);
    }

    return output;
};

const testCases = [
    [4,2,3,1],
    [4,3,2,1],
    [1,2,3,4],
    [7,7,7,7],
];
for (const test of testCases) {
    console.log(test);
    console.log(findBuildings(test));
    console.log('-'.repeat(50));
}
