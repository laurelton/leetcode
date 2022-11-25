/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const length = Math.floor(Math.sqrt(n));
    const squares = Array.from({length}, (_, idx) => (idx + 1) ** 2);
    const queue = squares.map(num => ({num, count: 1, values: [num],})).reverse();
    const seen = new Set();

    while (queue.length) {
        const {num, count, values} = queue.shift();

        if (num === n) {
            // console.log(JSON.stringify(values));
            return count;
        }

        if (seen.has(num)) continue;
        seen.add(num);
        
        const possibleNext = squares.map(sq => ({num: sq + num, count: count + 1, values: values.concat([sq])}))
        const nextNums = possibleNext.filter(next => !seen.has(next.num) && next.num <= n).reverse();
        queue.push(...nextNums);
    }
};

var dynamicProgramming = function(n) {
    const root = Math.sqrt(n);
    if (Number.isInteger(root)) return 1;

    const steps = new Array(n + 1).fill(0);
    const length = Math.floor(root);
    const sqrsArr = Array.from({length}, (_, idx) => (idx + 1) ** 2);
    sqrsArr.forEach(val => steps[val] = 1);
    
    for (let i = 2; i < steps.length; i += 1) {
        if (steps[i] === 0) {
            const iSquares = sqrsArr.filter(n => n < i);
            const prevSteps = iSquares.map(sq => steps[i - sq]);
            steps[i] = Math.min(...prevSteps) + 1;
        }
    }
    
    return steps[n];
};

var greedy = function(n) {
    const root = Math.sqrt(n);
    if (Number.isInteger(root)) return 1;

    const length = Math.floor(root);
    const squares = Array.from({length}, (_, idx) => (idx + 1) ** 2);
    const calculateSums = (n, count) => {
        if (!count) return false;

        const root = Math.sqrt(n);
        if (Number.isInteger(root)) return 1;

        for (const sq of squares) {
            if (calculateSums(n - sq, count - 1)) return true;
        }
    }

    for (let count = 1; count <= n; count += 1) {
        if (calculateSums(n, count)) return count;
    }
};

var greedyBFS = function(n) {
    let level = 1;
    const root = Math.sqrt(n);
    if (Number.isInteger(root)) return level;

    const length = Math.floor(root);
    const squaresArr = Array.from({length}, (_, idx) => (idx + 1) ** 2);
    const squares = new Set(squaresArr);
    const queueArr = squaresArr.map(sq => n - sq);
    let queue = new Set(queueArr);
    
    while (queue.size) {
        level += 1;
        const remainders = new Set();
        for (const rem of queue) {
            if (squares.has(rem)) return level;

            squaresArr.forEach(sq => sq < rem && remainders.add(rem - sq));
        }

        queue = remainders;
    }
}

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
        input: 10000,
        expected: 1,
    },
    {
        input: 285,
        expected: 3,
    },
    {
        input: 25,
        expected: 1,
    },
    {
        input: 3,
        expected: 3,
    },
    {
        input: 5673,
        expected: 3,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${greedyBFS(input)}`);
    console.log('='.repeat(50), '\n');
}
