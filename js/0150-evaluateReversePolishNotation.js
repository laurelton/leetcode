//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const fn = new Map();
    fn.set('+', (a, b) => a + b);
    fn.set('-', (a, b) => a - b);
    fn.set('*', (a, b) => a * b);
    fn.set('/', (a, b) => Math.trunc(a / b));
    
    for (const token of tokens) {
        if (fn.has(token)) {
            const b = stack.pop();
            const a = stack.pop();
            const func = fn.get(token);
            stack.push(func(a, b));
        } else {
            stack.push(Number.parseInt(token, 10));
        }
    }
    
    return stack.at(-1);
};

const testCases = [
    {
        input: ["2","1","+","3","*"],
        expected: 9,
    },
    {
        input: ["4","13","5","/","+"],
        expected: 6,
    },
    {
        input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"],
        expected: 22,
    },
    {
        input: ["4","13","5","/","+"],
        expected: 6,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${evalRPN(input)}`);
    console.log('='.repeat(50), '\n');
}
