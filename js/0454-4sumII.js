/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const leftSumCounts = new Map();
    const rightSumCounts = new Map();
    let total = 0;

    for (const a of nums1) {
        for (const b of nums2) {
            leftSumCounts.set(a + b, ~~leftSumCounts.get(a + b) + 1);
        }
    }

    for (const a of nums3) {
        for (const b of nums4) {
            rightSumCounts.set(a + b, ~~rightSumCounts.get(a + b) + 1);
        }
    }

    for (const [num1, count1] of leftSumCounts) {
        for (const [num2, count2] of rightSumCounts) {
            if (num1 + num2 === 0) {
                total += count1 * count2;
            }
        }
    }

    return total;
};
