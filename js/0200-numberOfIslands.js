//	Time: 	 O(n * m)
//	Space:	 O(n * m)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const queue = [];

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === '1') {
                grid[i][j] = '-1';
                queue.push({row: i, col: j});
                count += 1;
            }

            while (queue.length) {
                const {row, col} = queue.shift();

                if (grid[row - 1] && grid[row - 1][col] && grid[row - 1][col] === '1') {
                    grid[row - 1][col] = '-1';
                    queue.push({row: row - 1, col});
                }
                if (grid[row + 1] && grid[row + 1][col] && grid[row + 1][col] === '1') {
                    grid[row + 1][col] = '-1';
                    queue.push({row: row + 1, col});
                }
                if (grid[row][col - 1] && grid[row][col - 1] === '1') {
                    grid[row][col - 1] = '-1';
                    queue.push({row, col: col - 1});
                }
                if (grid[row][col + 1] && grid[row][col + 1] === '1') {
                    grid[row][col + 1] = '-1';
                    queue.push({row, col: col + 1});
                }
            }
        }
    }

    return count;
};

const testCases = [
    {
        input: [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"],
        ],
        expected: 1,
    },
    {
        input: [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"],
        ],
        expected: 3,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:`);
    input.forEach(arr => console.log(' '.repeat(10), JSON.stringify(arr)));
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${numIslands(input)}`);
    console.log('='.repeat(50), '\n');
}

