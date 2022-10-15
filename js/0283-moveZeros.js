//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let j = i + 1;
            while (j < nums.length && nums[j] === 0) {
                j += 1;
            }
            if (j === nums.length) break;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
};

const nums = [0,1,0,3,12]; // [0]
console.log(nums)
moveZeroes(nums);
console.log(nums);