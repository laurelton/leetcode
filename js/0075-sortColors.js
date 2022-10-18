//	Time:	O(n) -> 2 pass
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            zeros += 1;
        } else if (nums[i] === 1) {
            ones += 1;
        } else {
            twos += 1;
        }
    }

    for (let i = 0; i < nums.length; i += 1) {
        if (zeros > 0) {
            nums[i] = 0;
            zeros -= 1;
        } else if (ones > 0) {
            nums[i] = 1;
            ones -= 1;
        } else {
            nums[i] = 2;
            twos -= 1;
        }
    }
};

const nums = [2, 0, 1, 0, 1, 1, 2, 0, 0, 0, 1, 2, 1, 1, 0, 1, 1, 1, 1];
console.log(nums);
sortColors(nums);
console.log(nums);
