//	Time:	O(n) -> 1 pass
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let i = 0;
    while (i <= r) {
        if (nums[i] === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l += 1;
            i += 1;
        } else if (nums[i] === 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r -= 1;
        } else {
            i += 1;
        }
    }
};

const nums = [1,2,0]; //, 0, 1, 1, 2, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1];
console.log(nums);
sortColors(nums);
console.log(nums);
