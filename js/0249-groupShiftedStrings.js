//	Time: 	 O(nk)
//	Space:	 O(n)
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const result = new Map();
    for (const word of strings) {
        if (word.length === 1) {
            result.set('[]', (result.get('[]') ?? []).concat([word]));
        } else {
            const keyArr = [];
            for (let i = 1; i < word.length; i += 1) {
                const diff = getCharCodeDiff(word[i], word[i - 1]);
                keyArr.push(diff);
            }
            const key = JSON.stringify(keyArr);
            result.set(key, (result.get(key) ?? []).concat([word]));
        }
    }
    
    return Array.from(result.values());
};

function getCharCodeDiff(char1, char2) {
    return (char1.charCodeAt(0) - char2.charCodeAt(0) + 26) % 26;
}

console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))