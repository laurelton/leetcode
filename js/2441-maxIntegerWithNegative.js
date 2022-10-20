//	Time:	O(n) -> 2 pass
//	Space:	O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const seen = new Set();
    let maxInt = -1;
    for (const n of nums) {
        if (n < 0) {
            seen.add(n);
        }
    }

    for (const n of nums) {
        if (n > 0 && seen.has(-n)) {
            maxInt = Math.max(n, maxInt);
        }
    }

    return maxInt;
};

const testCases = [
    [-1,2,-3,3],
    [-1,10,6,7,-7,1],
    [-10,8,6,7,-2,-3],
];

for (const test of testCases) {
    console.log(test, findMaxK(test));
}
