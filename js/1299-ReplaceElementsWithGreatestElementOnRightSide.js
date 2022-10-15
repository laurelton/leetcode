//	Time:	O(N)
//	Space:	O(1)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        [arr[i], max] = [max, Math.max(arr[i], max)];
    }

    return arr;
};

const nums = [17,18,5,4,6,1];
console.log(nums);
console.log(replaceElements(nums));
