//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} str
 * @return {string}
 */
var makeGood = function(str) {
    let stack = [];
    for (const char of str) {
        if (stack.length) {
            const peek = stack[stack.length - 1];
            const currCode = char.charCodeAt(0);
            const peekCode = peek.charCodeAt(0);
            const codeDiff = Math.abs(currCode - peekCode);
            if (codeDiff === 32) {
                stack.pop();
                continue;
            } 
        }
        stack.push(char);
    }

    return stack.join('');
};

const input = ['leEeetcode', 'abBAcC', 's'];
for (const inpt of input) {
    console.log(inpt);
    console.log(makeGood(inpt));
}
