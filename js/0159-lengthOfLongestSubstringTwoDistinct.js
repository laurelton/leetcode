//	Time:	O(n)
//	Space:	O(1)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let counts = new Map();
    let max = 0;
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        counts.set(s[r], ~~counts.get(s[r]) + 1);

        while (counts.size > 2) {
            counts.set(s[l], counts.get(s[l]) - 1);
            if (counts.get(s[l]) === 0) {
                counts.delete(s[l]);
            }
            l += 1;
        }
        
        max = Math.max(max, r - l + 1);
    }

    return max;
};
