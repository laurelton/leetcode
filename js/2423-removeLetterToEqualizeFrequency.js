//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const counts = getCounts(word);
    
    for (let i = 0; i < counts.length; i += 1) {
        counts[i] -= 1;
        const numFrequencies = new Set(counts);

        counts[i] += 1;
        numFrequencies.delete(0);

        if (numFrequencies.size === 1) return true;
    }

    return false    
};

var getCounts = function(str) {
    const counts = new Array(26).fill(0);
    for (const char of str) {
        const i = char.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] += 1;
    }

    return counts.filter(count => count > 0);
};

const input = "zabzccbzcb";
console.log(equalFrequency(input));
