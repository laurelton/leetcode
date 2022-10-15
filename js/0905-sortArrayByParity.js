//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const leftOdd = nums[l] % 2 === 1;
        const rightEven = nums[r] % 2 === 0;
        
        if (leftOdd && rightEven) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l += 1;
            r -= 1;
        } else if (!leftOdd) {
            l += 1;
        } else if (!rightEven) {
            r -= 1;
        }
    }
    
    return nums
};

const nums = [3,1,2,4];
sortArrayByParity(nums);
console.log(nums);
