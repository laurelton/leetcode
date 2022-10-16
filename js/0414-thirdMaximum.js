//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    
    for (const val of nums) {
        if (val > max1) {
            max3 = max2;
            max2 = max1;
            max1 = val;
        } else if (val > max2 && val !== max1) {
            max3 = max2;
            max2 = val;
        } else if (val > max3 && val !== max2 && val !== max1) {
            max3 = val;
        }
    }

    return max3 === -Infinity ? max1 : max3;
};

const nums = [1,2];
console.log(nums);
console.log(thirdMax(nums));
