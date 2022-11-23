//	Time: 	 O(n * m)
//	Space:	 O(n * m)
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const OPEN = 2147483647;
    // Get gates in a queue
    const queue = [];
    for (let row = 0; row < rooms.length; row += 1) {
        for (let col = 0; col < rooms[row].length; col += 1) {
            if (rooms[row][col] === 0) {
                queue.push({row, col});
            }
        }
    }

    // For each room in queue get its open neighbors
    while (queue.length) {
        const {row, col} = queue.shift();
        const distance = rooms[row][col];
        
        // Add the OPEN neighbors to the queue
        if (row - 1 >= 0 && rooms[row - 1][col] === OPEN) {
            // Set the distance of each neighbor
            rooms[row - 1][col] = distance + 1;
            queue.push({row: row - 1, col});
        }

        if (row + 1 < rooms.length && rooms[row + 1][col] === OPEN) {
            rooms[row + 1][col] = distance + 1;
            queue.push({row: row + 1, col});
        }

        if (col - 1 >= 0 && rooms[row][col - 1] === OPEN) {
            rooms[row][col - 1] = distance + 1;
            queue.push({row, col: col - 1});
        }

        if (col + 1 < rooms[row].length && rooms[row][col + 1] === OPEN) {
            rooms[row][col + 1] = distance + 1;
            queue.push({row, col: col + 1});
        }
    }
};

const testCases = [
    {
        input: [
            [2147483647,-1,0,2147483647],
            [2147483647,2147483647,2147483647,-1],
            [2147483647,-1,2147483647,-1],
            [0,-1,2147483647,2147483647],
        ],
        expected: [
            [3,-1,0,1],
            [2,2,1,-1],
            [1,-1,2,-1],
            [0,-1,3,4],
        ],
    },
    {
        input: [[-1]],
        expected: [[-1]],
    }
];

for (const {input, expected} of testCases) {
    console.log('Input:');
    // input.reverse();
    input.forEach(arr => console.log(arr));

    console.log('Expected:');
    // expected.reverse();
    expected.forEach(arr => console.log(arr));

    wallsAndGates(input);
    console.log('Actual:');
    input.forEach(arr => console.log(arr));

    console.log('='.repeat(50), '\n');
}

