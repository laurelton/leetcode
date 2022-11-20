//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var isIsomorphic = function(str1, str2) {
    if (str1.length !== str2.length) return false;

    const letterMap = new Map();
    
    for (let i = 0; i < str1.length; i += 1) {
        const char = str1[i];
        if (!letterMap.get(char)) {
            letterMap.set(char, str2[i]);
        } else {
            if (letterMap.get(char) !== str2[i]) return false;
        }
    }

    const valuesSet = new Set(letterMap.values());
    const keysSet = new Set(letterMap.keys());
    return valuesSet.size === keysSet.size;
};
