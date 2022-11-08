//	Time: 	 O(N logN)
//	Space:	 O(1)
/**
 * @param {number[]} kids
 * @param {number[]} cookies
 * @return {number}
 */
var findContentChildren = function(kids, cookies) {
    kids.sort(sortAsc);
    cookies.sort(sortAsc);
    let count = 0;
    let i = 0;
    let j = 0;
    while (i < kids.length && j < cookies.length) {
        if (kids[i] <= cookies[j]) {
            i += 1;
            count += 1;
        }
        j += 1;
    }

    return count;
};

var sortAsc = function(a, b) {
    return a - b;
};
