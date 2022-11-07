//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {character[]} chars
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(chars) {
    if (chars.length < 2) return chars;

    chars.reverse();
    let l = 0;
    let r = 0;
    while (r < chars.length) {
        l = r;
        while (chars[r] && chars[r] !== ' ') {
            r += 1;
        }
        reverse(chars, l, r - 1);
        r += 1;
    }
};

var reverse = function(arr, l, r) {
    while (l < r) {
        [arr[l++], arr[r--]] = [arr[r], arr[l]];
    }
};

const chars = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
console.log(chars);
reverseWords(chars);
console.log(chars);
