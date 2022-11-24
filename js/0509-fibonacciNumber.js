/**
 * @param {number} n
 * @return {number}
 */
var recursive = function(n) {
    if (n < 2) return n;
    
    return recursive(n - 1) + recursive(n - 2);
};

var bottomUp = function(n) {
    const fibs = new Array(n + 1).fill(0);
    fibs[1] = 1;

    for (let i = 2; i < fibs.length; i += 1) {
        fibs[i] = fibs[i - 2] + fibs[i - 1];
    }

    return fibs[n];
};

var memo = { 0: 0, 1: 1, };
var topDownMemo = function(n) {
    if (memo[n] !== undefined) return memo[n];

    memo[n] = topDownMemo(n - 1) + topDownMemo(n - 2);
    return memo[n];
};

var iterative = function(n) {
    if (n < 2) return n;

    let prev2 = 0;
    let prev1 = 1;
    let fib;
    let i = 2;

    while (i <= n) {
        fib = prev1 + prev2;

        prev2 = prev1;
        prev1 = fib;
        i += 1;
    }

    return fib;
};

const testCases = [
    {
        input: 0,
        expected: 0,
    },
    {
        input: 1,
        expected: 1,
    },
    {
        input: 2,
        expected: 1,
    },
    {
        input: 3,
        expected: 2,
    },
    {
        input: 10,
        expected: 55,
    },
    {
        input: 20,
        expected: 6765,
    },
    {
        input: 30,
        expected: 832040,
    },
    {
        input: 47,
        expected: 2971215073,
    },
];

for (const {input, expected} of testCases) {
    const functions = [bottomUp, topDownMemo, iterative, recursive];
    for (const fn of functions) {
        const map = new Map();
        map.set('Function', fn.name);
        map.set('Input', input);
        map.set('Expected', expected.toLocaleString());
        console.time();
        map.set('Actual', fn(input).toLocaleString());
        
        console.table(map);
        console.timeEnd();
    }
}
