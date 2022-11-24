//	Time: 	 O(√n)
//	Space:	 O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const length = Math.floor(Math.sqrt(n));
    const squares = Array.from({length}, (_, idx) => (idx + 1) ** 2);
    const queue = squares.map(num => ({num, count: 1,}));
    const seen = new Set();

    while (queue.length) {
        const {num, count} = queue.shift();

        if (num === n) return count;

        if (seen.has(num)) continue;
        seen.add(num);
        
        const possibleNext = squares.map(sq => ({num: sq + num, count: count + 1}))
        const nextNums = possibleNext.filter(next => !seen.has(next.num) && next.num <= n);
        queue.push(...nextNums);
    }
};

const testCases = [
    {
        input: 12,
        expected: 3,
    },
    {
        input: 13,
        expected: 2,
    },
    {
        input: 42,
        expected: 3,
    },
    {
        input: 1000,
        expected: 2,
    },
    {
        input: 285,
        expected: 3,
    },
    {
        input: 25,
        expected: 1,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${numSquares(input)}`);
    console.log('='.repeat(50), '\n');
}

