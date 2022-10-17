//	Time:	O(n)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    for (let i = 0, total = 0; i < nums.length; i += 1) {
        total += nums[i];
        if (i >= k - 1) {
            const avg = total / k;
            max = Math.max(avg, max);
            total -= nums[i - (k - 1)];
        }        
    }
    return max;
};

const nums = [1,12,-5,-6,50,3];
const k = 4;
console.log(k, nums);
const avg = findMaxAverage(nums, k);
console.log(avg);
//expected = 12.75
