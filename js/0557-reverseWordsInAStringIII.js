//	Time: 	 O(n)
//	Space:	 O(n)
/* 
 * Problem Description
 * ===================
 * 
 * Given a string s, reverse the order of characters in each word within a 
 * sentence while still preserving whitespace and initial word order.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const chars = s.split('');
    
    let l = 0;
    let r = 0;
    while (r < chars.length) {
        l = r;
        while (chars[r] && chars[r] !== ' ') {
            r += 1;
        }
        reverseChars(chars, l, r - 1);
        r += 1;
    }

    return chars.join('');
};

var reverseChars = function(arr, l, r) {
    while (l < r) {
        [arr[l++], arr[r--]] = [arr[r], arr[l]];
    }
};

const input = "Let's take LeetCode contest";
console.log(input);
const output = reverseWords(input);
console.log(output);
