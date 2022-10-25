//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const points = new Set();
    let x = 0;
    let y = 0;
    points.add(JSON.stringify({x, y}));
    let intersects = false;

    for (const p of path) {
        if (p === 'N') {
            y += 1;
        }
        if (p === 'S') {
            y -= 1;
        }
        if (p === 'E') {
            x += 1;
        }
        if (p === 'W') {
            x -= 1;
        }
        const point = JSON.stringify({x, y})
        intersects = intersects || points.has(point);
        points.add(point);
    }

    return intersects;
};
