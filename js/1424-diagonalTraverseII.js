//	Time: 	 O(n * m)
//	Space:	 O(n)
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const result = [];
    const diagonals = new Map();
    const N = nums.length;

    for (let i = 0; i < N; i += 1) {
        const row = nums[i];
        const M = row.length;

        for (let j = 0; j < M; j += 1) {
            const key = i + j;
            let values = diagonals.get(key) ?? [];
            values = [row[j], ...values];
            diagonals.set(key, values);
        }
    }

    for (const [_, values] of diagonals) {
        result.push(...values);
    }

    return result;
};
