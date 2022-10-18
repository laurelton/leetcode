//	Time:	O(n) -> 2 pass
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l += 1;
        }
    }

    for (let i = nums.length - 1; i >= l; i -= 1) {
        if (nums[i] === 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r -= 1;
        }
    }
};

const nums = [2, 0, 1]; //, 0, 1, 1, 2, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1];
console.log(nums);
sortColors(nums);
console.log(nums);
