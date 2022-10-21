//	Time:	O(n) -> 2 pass
//	Space:	O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const negatives = new Set(nums.filter(n => n < 0));
    
    return nums.reduce((mx, n) => negatives.has(-n) ? Math.max(mx, n) : mx, -1);
};

const testCases = [
    [-1,2,-3,3],
    [-1,10,6,7,-7,1],
    [-10,8,6,7,-2,-3],
];

for (const test of testCases) {
    console.log(test, findMaxK(test));
}
