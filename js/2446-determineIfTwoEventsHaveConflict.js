//	Time: 	 O(1)
//	Space:	 O(1)
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const [start1, end1] = event1;
    const [start2, end2] = event2;

    if (start1 === start2) return true;

    return start1.localeCompare(start2) === -1
        ? start2 <= end1
        : start1 <= end2;
};
