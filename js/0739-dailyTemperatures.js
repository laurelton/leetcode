//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} temps
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    const stack = [];
    const output = new Array(temps.length).fill(0);
    for (let i = 0; i < temps.length; i += 1) {
        const curr = temps[i];
        while (stack.length) {
            const prevTempIndx = stack[stack.length - 1];
            const prevTemp = temps[prevTempIndx];
            if (curr > prevTemp) {
                const daysDiff = i - prevTempIndx;
                output[prevTempIndx] = daysDiff;
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(i);
    }

    return output;
};

const input = [40, 35, 91, 32, 30, 25];
console.log(dailyTemperatures(input))