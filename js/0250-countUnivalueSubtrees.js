const { createTree } = require('./utils/binaryTree');
//	Time: 	 O(n)
//	Space:	 O(1)

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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    let count = 0;
    if (!root) return count;

    const isUnivalTree = (node) => {
        if (!node.left && !node.right) return true;

        const leftUnival = !node.left || isUnivalTree(node.left);
        const rightUnival = !node.right || isUnivalTree(node.right);
        const equalLeftVal = (!node.left || node.val === node.left.val);
        const equalRightVal = (!node.right || node.val === node.right.val);
        const nodeValuesEqual = equalLeftVal && equalRightVal;

        return leftUnival && rightUnival && nodeValuesEqual;
    };
    
    const countUnivalTrees = (node) => {
        if (!node) return 0;

        const leftCount = countUnivalTrees(node.left);
        const rightCount = countUnivalTrees(node.right);
        const nodeCount = isUnivalTree(node) ? 1 : 0;

        return leftCount + rightCount + nodeCount;
    };

    return countUnivalTrees(root);
};

const testCases = [
    {
        input: [9,7,8,7,null,null,8],
        expected: 4,
    },
    {
        input: [5,1,5,5,5,null,5],
        expected: 4,
    },
    {
        input: [],
        expected: 0,
    },
    {
        input: [5,5,5,5,5,null,5],
        expected: 6,
    },
    {
        input: [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
        expected: 50,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${JSON.stringify(input)}`);
    const tree = createTree(input);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${countUnivalSubtrees(tree)}`);
    console.log('='.repeat(50), '\n');
}
