//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = new Map();
    for (const word of strs) {
        const chars = word.split('').sort((a, b) => a.localeCompare(b));
        const key = chars.join('');
        result.set(key, (result.get(key) ?? []).concat([word]));
    }

    return Array.from(result.values());
};
