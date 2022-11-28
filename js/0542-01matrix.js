//	Time: 	 O(n * m)
//	Space:	 O(n * m)
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const result = mat.map(row => row.map(cell => cell === 1 ? Infinity : cell))
    const queue = getZeros(mat);
    const seen = new Set();

    while (queue.length) {
        const curr = queue.shift();
        const key = getKey(curr.row, curr.col);
        if (seen.has(key)) continue;

        seen.add(key);
        let distance = result[curr.row][curr.col];

        const neighbors = getNeighbors(result, curr.row, curr.col);
        for (const nbr of neighbors) {
            if (result[nbr.row][nbr.col] > 0 && !seen.has(result[nbr.row][nbr.col])) {
                result[nbr.row][nbr.col] = Math.min(distance + 1, result[nbr.row][nbr.col]);
                queue.push({row: nbr.row, col: nbr.col});
            }
        }
    }

    return result;
};

function getZeros(mat) {
    const zeros = [];
    for (let row = 0; row < mat.length; row += 1) {
        for (let col = 0; col < mat[row].length; col += 1) {
            if (mat[row][col] === 0) zeros.push({row, col});
        }
    }

    return zeros;
}

function getNeighbors(mat, r, c) {
    const neighbors = [];
    const deltas = [
        {row: -1, col:  0,},
        {row:  1, col:  0,},
        {row:  0, col: -1,},
        {row:  0, col:  1,},
    ];
    for (const delta of deltas) {
        const row = r + delta.row;
        const col = c + delta.col;
        const validRow = row > -1 && row < mat.length;
        const validCol = validRow && col > -1 && col < mat[row].length;
        if (validRow && validCol) {
            neighbors.push({row, col});
        }
    }

    return neighbors;
}

function getKey(row, col) {
    return JSON.stringify({row, col,});
}

const testCases = [
    // {
    //     input: [[0,0,0],[0,1,0],[0,0,0]],
    //     expected: [[0,0,0],[0,1,0],[0,0,0]],
    // },
    {
        input: [[0,0,0],[0,1,0],[1,1,1]],
        expected: [[0,0,0],[0,1,0],[1,2,1]],
    },
    {
        input: [[1,1,1],[1,1,1],[1,0,1]],
        expected: [[3,2,3],[2,1,2],[1,0,1]],
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${updateMatrix(input)}`);
    console.log('='.repeat(50), '\n');
}

