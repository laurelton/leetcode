//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str
 * @return {number}
 */
var firstUniqChar = function(str) {
    const counts = new Map();
    for (const char of str) {
        counts.set(char, ~~counts.get(char) + 1);
    }

    for (const char of str) {
        if (counts.get(char) === 1) return str.indexOf(char);
    }

    return -1;
};

const testCases = [
    {
        input: 'leetcode',
        expected: 0,
    },
    {
        input: 'loveleetcode',
        expected: 2,
    },
    {
        input: 'aabb',
        expected: -1,
    },
];

for (const {input, expected} of testCases) {
    console.log(input);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${firstUniqChar(input)}`);
    console.log('='.repeat(50), '\n');
}

