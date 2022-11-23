//	Time: 	 O()
//	Space:	 O()
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (rooms.length === 0 || rooms[0].length === 0) return;
    const OPEN = 2147483647;
    const roomQueue = getGates(rooms);

    while (roomQueue.length) {
        const {row, col} = roomQueue.shift();
        const distance = rooms[row][col];
        const neighbors = getNeighbors(rooms, {row, col});
        neighbors.forEach(({row: currRow, col: currCol}) => {
            if (rooms[currRow][currCol] === OPEN) {
                rooms[currRow][currCol] = distance + 1;
                roomQueue.push({row: currRow, col: currCol});
            }
        });
    }
};

function getGates(rooms) {
    const GATE = 0;
    const gates = [];

    for (let row = 0; row < rooms.length; row += 1) {
        for (let col = 0; col < rooms[row].length; col += 1) {
            if (rooms[row][col] === GATE) {
                gates.push({row, col});
            }
        }
    }

    return gates;
}

function getNeighbors(rooms, cell) {
    const OPEN = 2147483647;
    const directions = [
        {row:  0, col:  1},     // EAST
        {row:  0, col: -1},     // WEST
        {row:  1, col:  0},     // NORTH
        {row: -1, col:  0},     // SOUTH
    ];
    const neighbors = [];
    const {row, col} = cell;

    directions.forEach(dir => {
        const dRow = row + dir.row;
        const dCol = col + dir.col;
        const validRow = dRow >= 0 && dRow < rooms.length;
        const validRoom = validRow && dCol >= 0 && dCol <= rooms[dRow].length;

        if (validRoom && rooms[dRow][dCol] === OPEN) {
            neighbors.push({row: dRow, col: dCol});
        }
    });

    return neighbors;
}

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

