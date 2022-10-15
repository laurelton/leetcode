//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let swap = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] !== nums[i - 1]) {
            nums[swap] = nums[i];
            swap += 1;
        }
    }

    return swap;
};

const nums1 = [1, 1, 2];
const nums2 = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums1);
console.log(k);
console.log(nums1.slice(0, k));
k = removeDuplicates(nums2);
console.log(k);
console.log(nums2.slice(0, k));
