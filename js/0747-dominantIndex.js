//	Time: 	 O()
//	Space:	 O()
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i += 1) {
        const curr = nums[i];
        if (curr > max1) {
            max2 = max1;
            max1 = curr;
        } else if (curr > max2) {
            max2 = curr;
        }
    }

    return max1 >= max2 * 2 ? nums.indexOf(max1) : -1;
};

const nums = [2, -1, 3, 6, 1, 0];
// [2, -1, 3, 6, 1, 0, 4];
// [1,2,3,4]
console.log(dominantIndex(nums));
