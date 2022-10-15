//	Time:	O(N) 
//	Space:	O(N) 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const evens = nums.filter(n => n % 2 === 0);
    const odds = nums.filter(n => n % 2 === 1);
    const output = [];
    while(odds.length) {
        output.push(evens.pop(), odds.pop());
    }

    return output;
};

const nums = [3,1,4,2];
console.log(nums);
const sorted = sortArrayByParityII(nums);
console.log(sorted);
