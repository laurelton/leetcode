//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str
 * @return {string}
 */
var removeDuplicates = function(str) {
    const result = [];
    for (const char of str) {
        if (result.length && result[result.length - 1] === char) {
            result.pop();
        } else {
            result.push(char);
        }
    }

    return result.join('');
};

const testCases = ["abbaca", "azxxzy", 'u'];
for (const test of testCases) {
    console.log(test);
    console.log(removeDuplicates(test));
    console.log('*'.repeat(50));
}
