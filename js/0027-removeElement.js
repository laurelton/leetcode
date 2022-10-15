//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;  // write index
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
};

const nums1 = [0,1,2,2,3,0,4,2];
const val1 = 2;
console.log(nums1);
const k1 = removeElement(nums1, val1);
console.log(nums1, k1, nums1.slice(0, k1));
