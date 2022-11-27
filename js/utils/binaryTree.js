class Node {
    constructor(val, left, right) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function createTree(arr, idx = 0) {
    if (!arr.length || arr[idx] === null || idx >= arr.length) return null;

    const root = new Node(arr[idx]);
    root.left = createTree(arr, idx * 2 + 1);
    root.right = createTree(arr, idx * 2 + 2);

    return root;
}

module.exports = {createTree};
