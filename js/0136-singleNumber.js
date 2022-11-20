//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (const n of nums) {
        result ^= n;
    }

    return result;
};
