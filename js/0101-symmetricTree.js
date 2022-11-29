const { createTree } = require('./utils/binaryTree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const subtreesAreSymmetric = (node1, node2) => {
        if (!node1) return node2 === null;
        if (!node2) return node1 === null;
        if (!node1 && !node2) return true;
        if (node1.val !== node2.val) return false;

        const leftMatches = subtreesAreSymmetric(node1.left, node2.right);
        const rightMatches = subtreesAreSymmetric(node1.right, node2.left);

        return leftMatches && rightMatches;
    };

    return subtreesAreSymmetric(root.left, root.right);
};

const testCases = [
    {
        input: [1,2,2,3,4,4,3],
        expected: true,
    },
    {
        input: [1,2,2,null,3,null,3],
        expected: false,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    const tree = createTree(input);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${isSymmetric(tree)}`);
    console.log('='.repeat(50), '\n');
}
