//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const access = rooms.map((_, idx) => idx === 0);
    const queue = [0];
    const seen = new Set();

    while (queue.length) {
        const roomId = queue.shift();
        access[roomId] = true;
        seen.add(roomId);

        for (const id of rooms[roomId]) {
            if (!seen.has(id)) {
                queue.push(id);
            }
        }
    }

    return access.reduce((prev, curr) => prev && curr);
};

canVisitAllRooms([[2],[],[1]])

