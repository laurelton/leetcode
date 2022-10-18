//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = 0;
    let odd = nums.length - 1;
    while (even < odd) {
        if (nums[even] % 2 === 0) {
            even += 1;
        } else {
            [nums[even], nums[odd]] = [nums[odd], nums[even]];
            odd -= 1;
        }
    }

    return nums;
};

const nums = [1, 3, 5, 7, -55, 11, 0];
sortArrayByParity(nums);
console.log(nums);
