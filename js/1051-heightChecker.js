//	Time:	O(NlogN)
//	Space:	O(N)
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    return heights
        .slice()
        .sort((lo, hi) => lo - hi)
        .reduce((total, val, indx) => total += (val !== heights[indx]), 0)
};
