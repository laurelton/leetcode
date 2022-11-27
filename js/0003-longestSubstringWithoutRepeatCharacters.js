//	Time: 	 O(n)
//	Space:	 O(m) - m is the size of the character set
/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    const count = new Map();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < str.length; r += 1) {
        const curr = str[r];
        while (~~count.get(curr)) {
            const left = str[l++];
            count.set(left, count.get(left) - 1);
        }

        count.set(curr, ~~count.get(curr) + 1);
        longest = Math.max(r - l + 1, longest);
    }

    return longest;
};

console.log(lengthOfLongestSubstring('pwwkew'));
