//	Time: 	 O(n)
//	Space:	 O(1)
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const counts = new Map();
    for (const char of text) {
        counts.set(char, ~~counts.get(char) + 1);
    }

    let balloons = 0;
    while (~~counts.get('b') > 0) {
        const sngls = ~~counts.get('b') > 0 && ~~counts.get('a') > 0 && ~~counts.get('n') > 0;
        const dbls = ~~counts.get('l') > 1 && ~~counts.get('o') > 1;

        if (sngls && dbls) {
            balloons += 1;
            counts.set('b', counts.get('b') - 1);
            counts.set('a', counts.get('a') - 1);
            counts.set('l', counts.get('l') - 2);
            counts.set('o', counts.get('o') - 2);
            counts.set('n', counts.get('n') - 1);
        } else {
            return balloons;
        }
    }

    return balloons;
};