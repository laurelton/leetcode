//	Time: 	 O(N * M)
//	Space:	 O(M)
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var diagonalSort = function(matrix) {
    const N = matrix.length;
    const M = matrix[0].length;
    let row = N - 1;
    let col = 0;

    while (row >= 0 && col < M) {
        // Get the values along the diagonal
        const values = getDiagonalValues(matrix, row, col);
        // Sort the values
        values.sort(sortAscending);
        // Replace the diagonal values
        updateDiagonalValues(matrix, row, col, values);

        col += row == 0 ? 1 : 0;
        row -= row > 0 ? 1 : 0;
    }

    return matrix;
};

function getDiagonalValues(matrix, row, col) {
    const N = matrix.length;
    const M = matrix[0].length;
    const values = [];
    
    while (row < N && col < M) {
        values.push(matrix[row++][col++]);
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
