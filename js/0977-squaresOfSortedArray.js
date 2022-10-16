//	Time:	O(N)
//	Space:	O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    const squares = new Array(nums.length);

    while (l <= r) {
        const lSq = nums[l] ** 2;
        const rSq = nums[r] ** 2;
        if (lSq > rSq) {
            squares[r - l] = lSq;
            l += 1;
        } else {
            squares[r - l] = rSq;
            r -= 1;
        }
    }

    return squares;
};

const nums = [-4,-1,0,3,10];
console.log(nums);
console.log(sortedSquares(nums));
