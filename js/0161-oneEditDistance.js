//	Time:	O(n)
//	Space:	O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let diffCount = 0;
    const [shrt, long] = s.length < t.length ? [s, t] : [t, s];

    if (s.length === t.length) {
        for (let i = 0; i < long.length; i += 1) {
            diffCount += Number(shrt[i] !== long[i]);
        }
    } else {
        diffCount = long.length - shrt.length;
        if (diffCount > 1) return false;

        let sIndx = 0;
        let lIndx = 0;
        
        while (sIndx < shrt.length) {
            if (shrt[sIndx] !== long[lIndx]) {
                if (sIndx !== lIndx) {
                    diffCount += 1;
                    break;
                }

                lIndx +=1;
            } else {
                sIndx += 1;
                lIndx += 1;
            }
        } 
    }

    return diffCount === 1;
};

console.log(isOneEditDistance('cab', 'ab'));
console.log(isOneEditDistance('cab', 'cb'));
console.log(isOneEditDistance('cab', 'ca'));
console.log(isOneEditDistance('cab', 'xcab'));
console.log(isOneEditDistance('cab', 'cxab'));
console.log(isOneEditDistance('cab', 'caxb'));
console.log(isOneEditDistance('cab', 'cabx'));
console.log(isOneEditDistance('cab', 'dabby'));
