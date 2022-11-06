//	Time: 	 O()
//	Space:	 O()
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = Array.from({ length: numRows }, (_, idx) => new Array(idx + 1).fill(1));
    
    for (let r = 2; r < triangle.length; r += 1) {
        const prevRow = triangle[r - 1];
        const row = triangle[r];

        for (let c = 1; c < row.length - 1; c += 1) {
            row[c] = prevRow[c - 1] + prevRow[c];
        }
    }

    return triangle;
};

// console.log(generate(1));
// console.log(generate(2));
// console.log(generate(3));
// console.log(generate(4));
console.log(generate(10));
