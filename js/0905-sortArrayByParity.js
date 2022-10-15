//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let swap = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] % 2 === 0) {
            [nums[i], nums[swap]] = [nums[swap], nums[i]];
            swap += 1;
        }
    }
    
    return nums
};

const nums = [1,3,5,7,-55,11,0];
sortArrayByParity(nums);
console.log(nums);
