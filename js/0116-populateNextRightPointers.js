/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;

    let queue = [[root]];
    while (queue.length) {
        const nodes = queue.shift().map((node, idx, arr) => {
            node.next = null;

            if (idx < arr.length - 1) {
                node.next = arr[idx + 1];
            }

            return node;
        });
        const children = [];

        for (const node of nodes) {
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        }

        queue = children.length > 0 ? [children] : [];
    }

    return root;
};
