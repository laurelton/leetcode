//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let total = 0;
    let count = 0;
    for (const n of nums) {
        if (n % 6 === 0) {
            total += n;
            count += 1;
        }
    }

    return count ? Math.floor(total / count) : count; 
};
