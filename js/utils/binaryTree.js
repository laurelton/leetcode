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

function preorder(root) {
    if (!root) return [];

    let result = [];
    result.push(root.val);
    result = result.concat(preorder(root.left));
    result = result.concat(preorder(root.right));

    return result;
}

function inorder(root) {
    if (!root) return [];

    let result = [];
    result = result.concat(inorder(root.left));
    result.push(root.val);
    result = result.concat(inorder(root.right));

    return result;
}

function postorder(root) {
    if (!root) return [];
    
    let result = [];
    result = result.concat(postorder(root.left));
    result = result.concat(postorder(root.right));
    result.push(root.val);

    return result;
}

module.exports = {
    createTree,
    preorder,
    inorder,
    postorder,
};
