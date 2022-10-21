//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const ranges = [];
  const upperNums = nums.concat([upper + 1])

  for (const n of upperNums) {
    if (n > lower) {
      const end = n - 1;
      const range = end === lower ? `${lower}` : `${lower}->${end}`;
      ranges.push(range);
    }

    lower = n + 1;
  }

  return ranges;
};

console.log(findMissingRanges([1,3,5,7,9], 0, 10));
