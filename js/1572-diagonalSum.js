//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const len = mat.length;
    let total = 0;
    for (let i = 0; i < len; i += 1) {
        const row = mat[i];
        total += i === len - i - 1 ? row[i] : row[i] + row[len - i - 1];
    }

    return total;
};

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log(diagonalSum(matrix));
