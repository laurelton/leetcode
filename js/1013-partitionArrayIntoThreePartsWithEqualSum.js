//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((total, curr) => total + curr);
    if (total % 3) return false;

    const third = total / 3;
    let count = 0;
    let runningSum = 0;
    for (const n of arr) {
        runningSum += n;
        if (runningSum === third) {
            count += 1;
            runningSum = 0;
        }
    }

    return count >= 3;
};
