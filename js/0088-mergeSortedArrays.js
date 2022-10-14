//  Time:   O(N)
//  Space:  O(1)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m + n - 1;
    m -= 1;
    n -= 1;
    while (m >= 0 && n >= 0) {
        if (nums2[n] >= nums1[m]) {
            nums1[i] = nums2[n];
            n -= 1;
        } else {
            nums1[i] = nums1[m];
            m -= 1;
        }

        i -= 1;
    }

    while (n >= 0) {
        nums1[i] = nums2[n];
        n -= 1;
        i -= 1;
    }
};
