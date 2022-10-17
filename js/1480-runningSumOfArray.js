//	Time:	O(n)
//	Space:	O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = new Array(nums.length);
    output[0] = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        output[i] = output[i - 1] + nums[i];
    }
    
    return output;
};
