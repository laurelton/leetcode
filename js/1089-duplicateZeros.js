//  https://leetcode.com/problems/duplicate-zeros/description/
//  Time: O(N)
//  Space: O(1)
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let zeros = 0;
    let elems = 0;
    let fromIndex = 0;
    let toIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i += 1) {
        elems += 1;
        fromIndex = i;
        if (arr[i] === 0) {
            zeros += 1;
        }

        if (elems + zeros === arr.length) break;
        if (elems + zeros > arr.length) {
            arr[toIndex] = arr[i];
            toIndex -= 1;
            fromIndex -= 1;
            break;
        }

    }
    
    while (toIndex >= 0) {
        arr[toIndex] = arr[fromIndex];
        if (arr[fromIndex] === 0) {
            toIndex -= 1;
            arr[toIndex] = 0;
        }
        toIndex -= 1;
        fromIndex -= 1;
    }
};

const nums = [8, 0, 5, 0, 4, 0, 3, 2];
//            0  1  2  3  4  5  6  7
const num2 = [0, 0, 8, 0, 5, 4, 3, 2];
duplicateZeros(num2);
console.log(num2);
duplicateZeros(nums);
console.log(nums);
