/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const start = '0000';
    const blockers = new Set(deadends);
    const seen = new Set();
    let steps = 0;
    const queue = [{code: start, steps}];

    while (queue.length) {
        const {code, steps} = queue.shift();
        
        if (!code) continue;
        
        if (seen.has(code) || blockers.has(code)) continue;

        if (code === target) return steps;

        seen.add(code);  
        const neighbors = getNeighbors(code).map(str => ({code: str, steps: steps + 1}));
        queue.push(...neighbors);
    }

    return -1;
};

function getNeighbors(code) {
    const chars = code.split('');
    const neighbors = [];

    for (let i = 0; i < chars.length; i += 1) {
        const digit = parseInt(chars[i], 10);
        const plus = (digit + 11) % 10;
        const minus = (digit + 9) % 10;

        chars[i] = plus;
        neighbors.push(chars.join(''));

        chars[i] = minus;
        neighbors.push(chars.join(''));

        chars[i] = digit;
    }

    return neighbors;
}

console.log(openLock(['8888'], '0009'))