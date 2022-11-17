//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const diffMap = new Map();
    for (const wrd of words) {
        const diffArr = getDiffArray(wrd);
        const key = JSON.stringify(diffArr);
        const vals = diffMap.get(key) ?? [];
        diffMap.set(key, [...vals, wrd]);
    }

    for (const [_, arr] of diffMap) {
        if (arr.length === 1) return arr[0];
    }
};

function getDiffArray(str) {
    const arr = [];
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 1; i < str.length; i += 1) {
        const prev = str[i - 1].charCodeAt(0) - aCharCode;
        const curr = str[i].charCodeAt(0) - aCharCode;
        arr.push(curr - prev);
    }

    return arr;
};
