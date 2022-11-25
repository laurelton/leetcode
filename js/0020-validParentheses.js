//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function(str) {
    const stack = [];
    const close = new Map()
        .set('}', '{')
        .set(']', '[')
        .set(')', '(');

    for (const char of str) {
        if (close.has(char)) {
            if (stack.at(-1) !== close.get(char)) return false;

            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

const testCases = [
    {
        input: '([{}])',
        expected: true,
    },
    {
        input: "()[]{}",
        expected: true,
    },
    {
        input: '(]',
        expected: false,
    },
    {
        input: '(()[{}][]{}',
        expected: false,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${isValid(input)}`);
    console.log('='.repeat(50), '\n');
}

