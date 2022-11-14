//	Time: 	 O(n ** 3)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let mask = 1;
    const maskLimit = 2 ** nums.length;

    let maxLen = 0;

    while (mask < maskLimit) {
        // console.log(mask, '\t\t', mask.toString(2).padStart(nums.length, '0'));
        // console.log('_'.repeat(50));
        let shiftedMask = mask;

        while (shiftedMask < maskLimit) {
            const subArr = [];
            // console.log(shiftedMask, '\t\t', shiftedMask.toString(2).padStart(nums.length, '0'));
            
            for (let i = 0; i < nums.length; i += 1) {
                if (shiftedMask & (1 << i)) {
                    subArr.push(nums[i]);
                }
            }
            // console.log(subArr);
            // result.push(subArr);
            const diff = Math.max(...subArr) - Math.min(...subArr);
            if (diff <= limit) {
                maxLen = Math.max(maxLen, subArr.length);
                break;
            }
            shiftedMask = shiftedMask << 1;
        }

        // console.log('*'.repeat(50));
        // console.log('');
        mask = (mask << 1) + 1;
    }

    return maxLen;
};

const testCases = [
    {
        nums: [8,2,4,7],
        limit: 4,
    },
    {
        nums: [10,1,2,4,7,2],
        limit: 5,
    },
    {
        nums: [4,2,2,2,4,4,2,2],
        limit: 0,
    },
    // {
    //     nums:  [18, 11, 15, 16, 21, 20, 16, 11, 19, 20, 13, 11, 11, 14, 18, 21, 15, 15, 19, 15, 15, 18, 19, 17, 16, 18, 15, 20, 11, 19, 15, 16],
    //     limit: 7,
    // },
];

for (const {nums, limit} of testCases) {
    console.log(limit, nums);
    console.log(longestSubarray(nums, limit));
    // const result = longestSubarray(nums, limit);
    // for (const res of result) {
    //     console.log(res);
    // }
}
// const nums2 = Array.from({length: 25}, () => Math.floor(Math.random() * 25) + (Math.floor(Math.random() * 5) + 1));
// const limit = 5;
// console.log(longestSubarray(nums2, limit));
