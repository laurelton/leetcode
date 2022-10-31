//	Time: 	 O(n)
//	Space:	 O(k) - k === the number of characters 
/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(str, k) {
    if (k === 0 || str.length === 0) return 0;
    
    let counts = new Map();
    let left = 0;
    let mx = 0;

    for (let right = 0; right < str.length; right += 1) {
        const curr = str[right];
        counts.set(curr, ~~counts.get(curr) + 1);
        while (counts.size > k) {
            const leftChar = str[left];
            counts.set(leftChar, counts.get(leftChar) - 1);
            if (counts.get(leftChar) === 0) {
                counts.delete(leftChar);
            }
            left += 1;
        }

        mx = Math.max(mx, right - left + 1);
    }

    return mx;
};
