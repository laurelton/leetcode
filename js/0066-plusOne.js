//	Time:	O(n)
//	Space:	O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let i = digits.length - 1;

    while (i >= 0 && carry === 1) {
        const sm = digits[i] + 1;
        [carry, digits[i]] = [Math.floor(sm / 10), sm % 10];
        i -= 1;
    }

    if (carry === 1) {
        digits.push(0);
        digits[0] = 1;
    }

    return digits;
};

const testCases = [[1,2,4], [8,9,9,9], [9,9]];
testCases.forEach((test) => {
    console.log(test);
    const sum = plusOne(test);
    console.log(sum);
    console.log();
})
