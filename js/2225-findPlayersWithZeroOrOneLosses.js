//	Time: 	 O(n logn)
//	Space:	 O(n)
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const losses = new Map();
    for (const [winner, loser] of matches) {
        losses.set(winner, ~~losses.get(winner));
        losses.set(loser, ~~losses.get(loser) + 1);
    }

    const zeroLosses = [];
    const oneLoss = [];
    for (const [player, count] of losses) {
        if (count === 0) {
            zeroLosses.push(player);
        } else if (count === 1) {
            oneLoss.push(player);
        }
    }
    
    return [zeroLosses.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
};

const matches = [[7,9], [1,2]];
const losers = findWinners(matches);
console.log(losers);
