//	Time: 	 O(n * m)
//	Space:	 O(n * m)
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image;

    const cells = getNeighbors(image, sr, sc, image[sr][sc]);
    for (const {row, col} of cells) {
        image[row][col] = color;
    }
    
    return image
};

function getNeighbors(grid, row, col, val) {
    const seen = new Set();
    const queue = [];
    queue.push({row, col});
    seen.add(JSON.stringify({row, col}));
    
    while (queue.length) {
        const cell = queue.shift();
        
        if (cell.row - 1 >= 0 && grid[cell.row - 1][cell.col] === val) {
            const obj = {row: cell.row - 1, col: cell.col};
            const json = JSON.stringify(obj);
            if (!seen.has(json)) {
                seen.add(json);
                queue.push(obj);
            }
        }
        
        if (cell.row + 1 < grid.length && grid[cell.row + 1][cell.col] === val) {
            const obj = {row: cell.row + 1, col: cell.col};
            const json = JSON.stringify(obj);
            if (!seen.has(json)) {
                seen.add(json);
                queue.push(obj);
            }
        }
        
        if (cell.col - 1 >= 0 && grid[cell.row][cell.col - 1] === val) {
            const obj = {row: cell.row, col: cell.col - 1};
            const json = JSON.stringify(obj);
            if (!seen.has(json)) {
                seen.add(json);
                queue.push(obj);
            }
        }
        
        if (cell.col + 1 < grid[cell.row].length && grid[cell.row][cell.col + 1] === val) {
            const obj = {row: cell.row, col: cell.col + 1};
            const json = JSON.stringify(obj);
            if (!seen.has(json)) {
                seen.add(json);
                queue.push(obj);
            }
        }    
    }
    
    return Array.from(seen).map(str => JSON.parse(str));
}

const testCases = [
    {
        input: {
            image: [
                [1,1,1],
                [1,1,0],
                [1,0,1],
            ],
            sr: 1,
            sc: 1,
            color: 2,
        },
        expected: [
            [2,2,2],
            [2,2,0],
            [2,0,1],
        ],
    },
];

for (const {input: {image, sr, sc, color}, expected} of testCases) {
    console.log(`Image:     ${JSON.stringify(image)}`);
    console.log(`Row, Col:  ${sr}, ${sc}`);
    console.log(`Color:     ${color}`);
    console.log(`Expected:  ${JSON.stringify(expected)}`);
    const actual = floodFill(image, sr, sc, color);
    console.log(`Actual:    ${JSON.stringify(actual)}`);
    console.log('='.repeat(50), '\n');
}

