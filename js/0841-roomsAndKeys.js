//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const graph = new Map();
    const roomAccess = [];
    const visited = new Set();
    for (let i = 0; i < rooms.length; i += 1) {
        graph.set(i, rooms[i]);
        roomAccess[i] = i === 0;
    }

    const queue = [0];
    while (queue.length) {
        const roomId = queue.shift();
        visited.add(roomId);

        const newRooms = graph.get(roomId).filter(id => !visited.has(id))
        for (const id of newRooms) {
            queue.push(id);
            roomAccess[id] = true;
        }
    }

    return roomAccess.reduce((prev, curr) => prev && curr);
};

