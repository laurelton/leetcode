/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    seen.add(n);

    while (n !== 1) {
        const digits = getDigits(n);
        n = digits.reduce((total, n) => total + n ** 2, 0);
        if (seen.has(n)) {
            return false;
        }
        seen.add(n);
    }

    return true;
};

function getDigits(n) {
    const result = [];

    while (n > 0) {
        result.push(n % 10);
        n = Math.floor(n / 10);
    }

    return result;
}
