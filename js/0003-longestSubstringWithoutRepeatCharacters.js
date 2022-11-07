//	Time: 	 O(n)
//	Space:	 O(m) - m is the size of the characte set
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const counts = new Map();
    let mx = 0;
    let l = 0;
    let r = 0;
    while (r < s.length) {
        if (~~counts.get(s[r]) > 0) {
            while (counts.get(s[r])) {
                counts.delete(s[l++]);
            }
        }
        mx = Math.max(mx, r - l + 1);
        counts.set(s[r], 1);
        r += 1;
    }
    
    return mx;
};
