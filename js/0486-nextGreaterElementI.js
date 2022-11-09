//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();
    const result = [];

    for (const n of nums2) {
        while (stack.length && n > stack[stack.length - 1]) {
            const val = stack.pop();
            nextGreater.set(val, n);
        }

        stack.push(n);
    }

    for (const n of nums1) {
        result.push(nextGreater.get(n) || -1);
    }

    return result;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
