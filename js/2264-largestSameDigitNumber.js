//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    for (let n = 9; n >= 0; n -= 1) {
        const subStr = n.toString(10).repeat(3);
        if (num.includes(subStr)) return subStr;
    }

    return '';
};
