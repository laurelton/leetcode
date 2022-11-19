//	Time: 	 O(N * M)
//	Space:	 O(M)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var diagonalSort = function(matrix) {
    const N = matrix.length;
    const M = matrix[0].length;

    // Iterate over left column starting from bottom
    for (let row = N - 1; row >= 0; row -= 1) {
        const col = 0;
        // Collect values along diagonal into an array
        const values = getDiagonalValues(matrix, row, col);
        // Sort array
        values.sort(sortAscending);
        // Replace values along diagonal with sorted values
        updateDiagonalValues(matrix, row, col, values);
    }

    // Iterater over top row starting from index 1
    for (let col = 1; col < M; col += 1) {
        const row = 0;
        // Collect values along diagonal 
        const values = getDiagonalValues(matrix, row, col);
        // Sort diagonal values
        values.sort(sortAscending);
        // Update diagonal values
        updateDiagonalValues(matrix, row, col, values);
    }

    return matrix;
};

function getDiagonalValues(matrix, row, col) {
    const N = matrix.length;
    const M = matrix[0].length;
    const values = [];
    while (row < N && col < M) {
        values.push(matrix[row][col]);

        row += 1;
        col += 1;
    }

    return values;
}

function updateDiagonalValues(matrix, row, col, values) {
    const N = matrix.length;
    const M = matrix[0].length;

    let i = 0;
    while (row < N && col < M) {
        matrix[row++][col++] = values[i++];
    }
}

function sortAscending(a, b) {
    return a - b;
}

const testCases = [
    {
        input: [[3,3,1,1],[2,2,1,2],[1,1,1,2]],
        expected: [[1,1,1,1],[1,2,2,2],[1,2,3,3]],
    },
    {
        input: [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]],
        expected: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]],
    },
];

for (const {input, expected} of testCases) {
    console.log(input);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${diagonalSort(input)}`);
    console.log('='.repeat(50), '\n');
}
