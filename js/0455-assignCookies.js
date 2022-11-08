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
    while (kids.length && cookies.length) {
        const cookieSize = cookies.shift();
        if (kids[0] <= cookieSize) {
            kids.shift();
            count += 1;
        }
    }

    return count;
};

var sortAsc = function(a, b) {
    return a - b;
};
