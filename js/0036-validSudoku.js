//	Time: 	 O()
//	Space:	 O()
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const colCounters = new Array(9);
    const rowCounters = new Array(9);
    const boxCounters = new Array(9);
    for (let i = 0; i < 9; i += 1) {
        colCounters[i] = getCounter();
        rowCounters[i] = getCounter();
        boxCounters[i] = getCounter();
    }

    for (let row = 0; row < 9; row += 1) {
        for (let col = 0; col < 9; col += 1) {
            const value = parseInt(board[row][col], 10);
            if (value) {
                rowCounters[row].set(value, rowCounters[row].get(value) + 1);
                if (rowCounters[row].get(value) > 1) return false;

                colCounters[col].set(value, colCounters[col].get(value) + 1);
                if (colCounters[col].get(value) > 1) return false;

                if (row < 3 && col < 3) {
                    boxCounters[0].set(value, boxCounters[0].get(value) + 1);
                    if (boxCounters[0].get(value) > 1) return false;
                } else if (row < 3 && 2 < col && col < 6) {
                    boxCounters[1].set(value, boxCounters[1].get(value) + 1);
                    if (boxCounters[1].get(value) > 1) return false;
                } else if (row < 3 && 5 < col) {
                    boxCounters[2].set(value, boxCounters[2].get(value) + 1);
                    if (boxCounters[2].get(value) > 1) return false;
                } else if (2 < row && row < 6 && col < 3) {
                    boxCounters[3].set(value, boxCounters[3].get(value) + 1);
                    if (boxCounters[3].get(value) > 1) return false;
                } else if (2 < row && row < 6 && 2 < col && col < 6) {
                    boxCounters[4].set(value, boxCounters[4].get(value) + 1);
                    if (boxCounters[4].get(value) > 1) return false;
                } else if (2 < row && row < 6 && 5 < col) {
                    boxCounters[5].set(value, boxCounters[5].get(value) + 1);
                    if (boxCounters[5].get(value) > 1) return false;
                } else if (5 < row && col < 3) {
                    boxCounters[6].set(value, boxCounters[6].get(value) + 1);
                    if (boxCounters[6].get(value) > 1) return false;
                } else if (5 < row && 2 < col && col < 6) {
                    boxCounters[7].set(value, boxCounters[7].get(value) + 1);
                    if (boxCounters[7].get(value) > 1) return false;
                } else if (5 < row && 5 < col) {
                    boxCounters[8].set(value, boxCounters[8].get(value) + 1);
                    if (boxCounters[8].get(value) > 1) return false;
                }
            }
        }
    }

    return true;
};

function getCounter() {
    const m = new Map();
    for (let i = 1; i < 10; i += 1) {
        m.set(i, 0);
    }

    return m;
}

const testCases = [
    {
        input: 
            [["5","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]],
        expected: true,
    },
    {
        input: 
            [["8","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]],
        expected: false,
    },
];

function printBoard(board) {
    const border = '_'.repeat(41);
    const internalBorder = '\u254F\u254F' + (('\u254D'.repeat(3) + '|').repeat(2) + '\u254D\u254D\u254D\u254F\u254F').repeat(3);
    console.log(border);
    for (let i = 0; i < board.length; i += 1) {
        const cells = board[i].map(cell => {
            return parseInt(cell) 
                ? ' ' + cell.toString(10) + ' '
                : '   ';
        });
        const row = cells.reduce((str, cell, idx) => {
            let output = str + cell;
            output += idx % 3 === 2 ? '\u254F\u254F' : '|'; 
            
            return output;
        }, '\u254F\u254F');
        console.log(row);
        if (i === 2 || i === 5) console.log(internalBorder);
    }
    console.log('\u203E'.repeat(41));
}

for (const {input, expected} of testCases) {
    printBoard(input);
    console.log(`Expected:	${expected}`);
    console.log(`Actual:  	${isValidSudoku(input)}`);
    console.log('');
    console.log('='.repeat(50), '\n');
}

