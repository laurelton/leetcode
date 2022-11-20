//	Time: 	 O(n + m)
//	Space:	 O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    const counts = new Map();
    nums1.forEach(n => counts.set(n, ~~counts.get(n) + 1));
    nums2.forEach(n => {
        if (~~counts.get(n) > 0) {
            result.push(n);
            counts.set(n, counts.get(n) - 1);
        }
    })

    return result;
};

const testCases = [
    {
        input: {
            nums1: [1,2,2,1],
            nums2: [2,2],
        },
        expected: [2, 2],
    },
    {
        input: {
            nums1: [4,9,5],
            nums2: [9,4,9,8,4],
        },
        expected: [4, 9],
    },
];

for (const {input: {nums1, nums2}, expected} of testCases) {
    console.log(nums1);
    console.log(nums2);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${intersect(nums1, nums2)}`);
    console.log('='.repeat(50), '\n');
}

