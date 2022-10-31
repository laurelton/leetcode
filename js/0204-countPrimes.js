//	Time: 	 O()
//	Space:	 O(n)
/**
 * @param {number} 
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) return 0;

    const nums = new Array(n).fill(true);
    nums[0] = false;
    nums[1] = false;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (nums[i]) {
            for (let j = i + i; j < nums.length; j += i) {
                nums[j] = false;
            }
        }
    }
    
    return nums.reduce((total, elem) => total += elem === true, 0);
};

console.log(countPrimes(15));
