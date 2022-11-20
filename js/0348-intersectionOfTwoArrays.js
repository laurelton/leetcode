//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const [small, large] = nums1.length < nums2.length 
        ? [nums1, nums2] 
        : [nums2, nums1];

    const largeSet = new Set(large);
    const intersection = new Set(small.filter(n => largeSet.has(n)));

    return Array.from(intersection);
};
