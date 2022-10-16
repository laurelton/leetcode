//	Time:	O(N)
//	Space:	O(k) where k is the range of heights
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let result = 0;
    const heightCounts = new Array(101).fill(0);
    for (const height of heights) {
        heightCounts[height] += 1;
    }
    
    // Constraints state the minimum height is 1
    let currHeight = 1;     
    for (height of heights) {
        while(heightCounts[currHeight] === 0) currHeight += 1;

        if (height !== currHeight) result += 1;

        heightCounts[currHeight] -= 1;
    }
    return result;
};

const heights = [5, 4, 3, 2, 1, 5];    //  [1,1,4,2,1,3];
const count = heightChecker(heights);
console.log(count);
