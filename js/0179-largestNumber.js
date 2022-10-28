//	Time: 	 O(n log n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const str = nums.map(val => val.toString(10))
        .sort((lo, hi) => `${hi}${lo}`.localeCompare(`${lo}${hi}`));
    
    if (str[0] === '0' && str.length > 1) {
        return '0'
    } else {
        return str.join('')
    }
};

const nums = [0,0,0];
console.log(largestNumber(nums));

