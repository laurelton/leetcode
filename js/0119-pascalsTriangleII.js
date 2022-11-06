//	Time: 	 O(n2)
//	Space:	 O(n)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let rowCount = rowIndex + 1;
    const row = new Array(rowCount).fill(0);
    row[0] = 1;

    for (let currRow = 0; currRow < rowCount; currRow += 1) {
        for (let col = currRow; col > 0; col -= 1) {
            row[col] += row[col - 1];
        }
    }

    return row;
};

for (let i = 0; i < 11; i += 1) {
    console.log(getRow(i));
}
