//	Time:	O(1) -> brute force
//	Space:	O(1)
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    time = time.replace(/\?/g, '[0-9]');
    const times = populateTimes();

    let count = 0;
    for (const t of times) {
        if (t.match(time)) {
            count += 1;
        }
    }

    return count;
};

var populateTimes = function() {
    const times = new Set()
    for (let hour = 0; hour < 24; hour += 1) {
        for (let min = 0; min < 60; min += 1) {
            let hourStr = hour.toString().padStart(2, '0');
            let minStr = min.toString().padStart(2, '0');
            times.add(`${hourStr}:${minStr}`);
        }
    }

    return times;
}

const testCases = [
    '?5:00',
    '0?:0?',
    '??:??'
];
testCases.forEach(test => console.log(test, countTime(test)));
