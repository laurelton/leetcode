//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length;
    
    let k = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; 
            k += 1;
        }
    }

    return k;
};

const nums1 = [1, 1, 2];
const nums2 = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums1);
console.log(k);
console.log(nums1.slice(0, k));
k = removeDuplicates(nums2);
console.log(k);
console.log(nums2.slice(0, k));
