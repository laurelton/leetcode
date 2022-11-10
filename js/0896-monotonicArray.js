//	Time: 	 O(n) - 2 pass
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length < 2) return true;
    let increasing;
    let decreasing;

    for (let i = 1; i < nums.length; i += 1) {
        increasing = nums[i - 1] <= nums[i];
        if (!increasing) break;
    }

    for (let i = 1; i < nums.length; i += 1) {
        decreasing = nums[i - 1] >= nums[i];
        if (!decreasing) break;
    }

    return increasing || decreasing;
};

const inputs = [
    [1,2,2,3],
    [6,5,4,4],
    [1,3,2],
    [1,0,3],
];

for (const test of inputs) {
    console.log(test);
    console.log(isMonotonic(test));
    console.log('*'.repeat(50), '\n');
}