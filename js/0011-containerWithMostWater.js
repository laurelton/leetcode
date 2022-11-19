//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;
  
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    result = Math.max(result, area);

    height[l] < height[r] ? l++ : r--;
  }
  
  return result;
};

const testCases = [
    {
        input: [1,8,6,2,5,4,8,3,7],
        expected: 49,
    },
    {
        input: [1,1],
        expected: 1,
    },
];
for (const {input, expected} of testCases) {
    console.log(input);
    console.log(maxArea(input));
    console.log('='.repeat(50), '\n');
}