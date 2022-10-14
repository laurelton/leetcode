//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = nums.length;
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i] === val) {
            nums[i] = nums[j];
            j -= 1;
            k -= 1;
        } else {
            i += 1;
        }
    }

    return k;
};
