//	Time: 	 O(n) - 3 pass
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const left = [0];
    const right = [0];

    let sum = 0;
    for (let i = 0; i < nums.length - 1; i += 1) {
        sum += nums[i];
        left.push(sum);
    }

    sum = 0;
    for (let i = nums.length - 1; i > 0; i -= 1) {
        sum += nums[i];
        right.unshift(sum);
    }

    for (let i = 0; i < left.length; i += 1) {
        if (left[i] === right[i]) return i;
    }

    return -1;
};
