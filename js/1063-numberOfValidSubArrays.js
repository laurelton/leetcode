//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    const stack = [];
    let result = 0;
    for (const n of nums) {
        while (stack.length && n < stack.at(-1)) stack.pop()
        
        stack.push(n);
        result += stack.length;
    }

    return result;
};

const testCases = [
    [1,4,2,5,3],
    [3,2,1],
    [2,2,2],
    [1,2,3,1],
];
for (const test of testCases) {
    console.log(test);
    console.log(validSubarrays(test));
    console.log('='.repeat(50));
}
