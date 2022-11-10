//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length < 2) return true;
    
    let inc = true;
    let dec = true;

    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i] > nums[i + 1]) inc = false;
        if (nums[i] < nums[i + 1]) dec = false;
    }

    return inc || dec;
};

const inputs = [
    [1,2,2,3],
    [6,5,4,4],
    [1,3,2],
    [1,0,3],
    [1,1,1,1,1],
    [4,4,4,4,2,2,2,2],
    [7,7,7,9,9,9,9,9],
];

for (const test of inputs) {
    console.log(test);
    console.log(isMonotonic(test));
    console.log('*'.repeat(50), '\n');
}