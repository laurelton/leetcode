//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(str, k) {
    const chars = str.split('');
    for (let l = 0; l < chars.length; l += k * 2) {
        r = Math.min(l + k, chars.length);
        reverseChars(chars, l, r - 1);
    }

    return chars.join('');
};

var reverseChars = function(chars, l, r) {
    while (l < r) {
        [chars[l++], chars[r--]] = [chars[r], chars[l]];
    }
};

const str = "abcdefghijkl"
console.log(str);
console.log(reverseStr(str, 2));