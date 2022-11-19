//	Time: 	 O(n * m)
//	Space:	 O(1)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const N = matrix.length;
    const M = matrix[0].length;
    const result = [];
    const resLen = N * M;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let north = -1;
    let west = -1;
    let east = M;
    let south = N;
    
    let row = 0;
    let col = 0;
    let dirIndx = 0;
    while (result.length < resLen) {
        result.push(matrix[row][col]);
        row += directions[dirIndx][0];
        col += directions[dirIndx][1];
        if (col >= east) {
            north += 1;
            col -= 1;
            dirIndx = (dirIndx + 1) % 4;
            row += directions[dirIndx][0];
            col += directions[dirIndx][1];
            continue;
        }

        if (row >= south) {
            east -= 1;
            row -= 1;
            dirIndx = (dirIndx + 1) % 4;
            row += directions[dirIndx][0];
            col += directions[dirIndx][1];
            continue;
        } 

        if (col <= west) {
            south -= 1;
            col += 1;
            dirIndx = (dirIndx + 1) % 4;
            row += directions[dirIndx][0];
            col += directions[dirIndx][1];
            continue;
        }
        
        if (row <= north) {
            west += 1;
            row += 1;
            dirIndx = (dirIndx + 1) % 4;
            row += directions[dirIndx][0];
            col += directions[dirIndx][1];
            continue;
        }
    }

    return result;
};

const testCases = [
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        expected: [1,2,3,6,9,8,7,4,5],
    },
    {
        input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
        expected: [1,2,3,4,8,12,11,10,9,5,6,7],
    },
];

for (const {input, expected} of testCases) {
    console.log(input);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${spiralOrder(input)}`);
    console.log('='.repeat(50), '\n');
}

