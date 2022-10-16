//	Time:	O(N)
//	Space:	O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    const values = new Set(nums);
    for (let i = 1; i <= nums.length; i++) {
        if (!values.has(i)) {
            output.push(i);
        }
    }

    return output;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(nums);
console.log(findDisappearedNumbers(nums));
