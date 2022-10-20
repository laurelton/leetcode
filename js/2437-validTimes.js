//	Time:	O(1) -> regex
//	Space:	O(1)
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let multiplier = 1;
    const [hours, minutes] = time.split(':');
    if (minutes === '??') multiplier *= 60;
    if (minutes.match(/[0-5]\?/)) multiplier *= 10;
    if (minutes.match(/\?[0-9]/)) multiplier *= 6;
    if (hours.match(/2\?/)) multiplier *= 4;
    if (hours.match(/[0-1]\?/)) multiplier *= 10;
    if (hours.match(/\?[0-3]/)) multiplier *= 3;
    if (hours.match(/\?[4-9]/)) multiplier *= 2;
    if (hours.match(/\?\?/)) multiplier *= 24;

    return multiplier;
};

const testCases = [
    '?5:00',
    '0?:0?',
    '??:??'
];
testCases.forEach(test => console.log(test, countTime(test)));
