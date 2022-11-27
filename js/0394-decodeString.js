/**
 * @param {string} str
 * @return {string}
 */
var decodeString = function(str) {
    const stack = [];
    const START = '[';
    const STOP = ']';
    
    let i = 0;
    while (i < str.length) {
        if (str[i] !== STOP) {
            stack.push(str[i]);
        }

        if (str[i] === STOP) {
            let decoded = '';
            while (stack.at(-1) !== START) {
                decoded = stack.pop() + decoded;
            }
            stack.pop();
            
            let count = 0;
            let base = 0;
            while (Number.isInteger(Number.parseInt(stack.at(-1)))) {
                const num = Number.parseInt(stack.pop());
                count += (num * 10 ** base++)
            }
            stack.push(decoded.repeat(count));
        }

        i += 1;
    }

    return stack.join('');
};

const testCases = [
    {
        input: "3[a]2[bc]",
        expected: "aaabcbc",
    },
    {
        input: "3[a2[c]]",
        expected: "accaccacc",
    },
    {
        input: "2[abc]3[cd]ef",
        expected: "abcabccdcdcdef",
    },
    {
        input: "10[wo]",
        expected: 'wo'.repeat(10),
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    const actual = decodeString(input);
    console.log(`Actual:    ${actual}`);
    console.log(`Status:    ${actual === expected ? 'PASS' : '***FAIL***'}`)
    console.log('='.repeat(50), '\n');
}
