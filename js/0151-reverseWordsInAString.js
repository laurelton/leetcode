//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(/\s+/).reverse();

    return words.join(' ');
};

const s = "  hello      world  ";
console.log(s);
const rev = reverseWords(s);
console.log(rev);
