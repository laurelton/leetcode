//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 1) {
            curr += 1;
        } else {
            max = Math.max(curr, max);
            curr = 0;
        }
    }

    return max;
};

const nums = [1,0,1,1,0,1];     //  [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));
