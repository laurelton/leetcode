//	Time:	O(N) - two pass
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i += 1) {
        const abs = Math.abs(nums[i]);
        const indx = abs - 1;
        nums[indx] = nums[indx] > 0 ? -nums[indx] : nums[indx];        
    }

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > 0) {
            output.push(i + 1);
        }
    }

    return output;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(nums);
console.log(findDisappearedNumbers(nums));
