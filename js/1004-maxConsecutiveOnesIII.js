//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxx = 0;
    let l = 0;
    let zeros = 0;
    for (let r = 0; r < nums.length; r += 1) {
        if (nums[r] === 0) {
            zeros += 1;
            while (zeros > k) {
                if (nums[l] === 0) {
                    zeros -= 1;
                }
                l += 1;
            }
        }
        maxx = Math.max((r - l + 1), maxx);
    }

    return maxx;
};
