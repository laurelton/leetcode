//	Time: 	 O(n)
//	Space:	 O(m) - length of jewels
/*
 * Problem Description:
 * ====================
 * You're given strings jewels representing the types of stones that are jewels, 
 * and stones representing the stones you have. Each character in stones is a 
 * type of stone you have. You want to know how many of the stones you have are 
 * also jewels.
 * 
 * Letters are case sensitive, so "a" is considered a different type of stone 
 * from "A".
 */
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsSet = new Set(jewels);
    let count = 0;
    for (const char of stones) {
        count += Number(jewelsSet.has(char));
    }

    return count;
};
