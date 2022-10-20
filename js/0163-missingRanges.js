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
  for (const n of nums) {
    if (n !== lower) {
        const start = lower;
        const end = n - 1;
        const range = getRangeString(start, end);
        ranges.push(range);
    }

    lower = n + 1;
  }

  if (lower !== upper + 1) {
    const range = getRangeString(lower, upper);
    ranges.push(range);
  }

  return ranges;
};

var getRangeString = function(start, end) {
    return end - start !== 0 ? `${start}->${end}` : `${start}`;
}

findMissingRanges([], 0, 99);