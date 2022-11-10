//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const counts = new Map();
    let mx = 0;
    let minEven = Infinity;

    for (const n of nums) {
        if (n % 2 === 0) {
            const count = ~~counts.get(n) + 1;
            counts.set(n, count);
            
            if (count === mx) {
                minEven = Math.min(n, minEven);
            } else if (count > mx) {
                mx = count;
                minEven = n;
            }
        }
    }

    return minEven === Infinity ? -1 : minEven;
};

const input = [0,1,2,2,4,4,1];
console.log(mostFrequentEven(input));
