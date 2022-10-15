//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;

    let i = 0;
    while (arr[i] < arr[i + 1]) i += 1;
    if (i === 0) return false;

    let j = arr.length - 1;
    while (arr[j] < arr[j - 1]) j -= 1;
    if (j === arr.length - 1) return false;

    return i === j;
};

const testCases = [
        [1, 2, 3], 
        [3,2,1], 
        [-1,1], 
        [1,5,3], 
        [2, 0, 2],
        [1,2,3,4,5,6,2],
        [8,9,6,4,1],
        [1,2,3,3,2,1],
    ];

testCases.forEach(testCase => console.log(testCase, validMountainArray(testCase)));


