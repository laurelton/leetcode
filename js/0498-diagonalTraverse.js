//	Time: 	 O(n * m)
//	Space:	 O(n)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    const result = [];
    const N = matrix.length;
    const M = matrix[0].length;
    const diagonals = new Map();

    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j < M; j += 1) {
            const key = i + j;
            const val = diagonals.get(key) ?? [];
            val.push(matrix[i][j]);
            diagonals.set(key, val);
        }
    }

    for (let key = 0; key < N + M - 1; key += 1) {
        const val = diagonals.get(key);
        if (key % 2 === 0) val.reverse();
        result.push(...val);
    }

    return result;
};

const testCases = [
    {
        input: [[2,3]],
        expected: [2,3],
    },
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        expected: [1,2,4,7,5,3,6,8,9],
    },
    {
        input: [[1,2], [3,4]],
        expected: [1,2,3,4],
    },
];

for (const {input, expected} of testCases) {
    console.log(input);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${findDiagonalOrder(input)}`);
    console.log('='.repeat(50), '\n');
}

