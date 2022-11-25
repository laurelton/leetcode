//	Time: 	 O(n * m)
//	Space:	 O(n * m)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const LAND = '1';
    const VISITED = -1;
    const N = grid.length;
    const M = grid[0].length;
    let count = 0;
    let stack = [];
    const getNeighbors = (row, col) => {
        const neighbors = [];
        if (row + 1 < N) neighbors.push({row: row + 1, col});
        if (col + 1 < M) neighbors.push({row, col: col + 1});
        if (row - 1 > -1) neighbors.push({row: row - 1, col});
        if (col - 1 > -1) neighbors.push({row, col: col - 1});
        
        return neighbors;
    };

    for (let n = 0; n < N; n += 1) {
        for (let m = 0; m < M; m += 1) {
            if (grid[n][m] === LAND) {
                count += 1;
                grid[n][m] = VISITED;
                stack = stack.concat(getNeighbors(n, m));

                while (stack.length) {
                    const {row, col} = stack.pop();
                    if (grid[row][col] === LAND) {
                        grid[row][col] = VISITED;
                        stack = stack.concat(getNeighbors(row, col));
                    }
                }
            }
        }
    }

    return count;
};

const testCases = [
    // {
    //     input: [
    //         ["1","1","1","1","0"],
    //         ["1","1","0","1","0"],
    //         ["1","1","0","0","0"],
    //         ["0","0","0","0","0"],
    //     ],
    //     expected: 1,
    // },
    // {
    //     input: [
    //         ["1","1","0","0","0"],
    //         ["1","1","0","0","0"],
    //         ["0","0","1","0","0"],
    //         ["0","0","0","1","1"],
    //     ],
    //     expected: 3,
    // },
    {
        input: [
            ["1","1","1"],
            ["0","1","0"],
            ["1","1","1"],
        ],
        expected: 1,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:`);
    input.forEach(arr => console.log(' '.repeat(10), JSON.stringify(arr)));
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${numIslands(input)}`);
    console.log('='.repeat(50), '\n');
}

