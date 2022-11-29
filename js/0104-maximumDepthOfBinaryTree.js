const {createTree} = require('./utils/binaryTree');
//	Time: 	 O(n)
//	Space:	 O(h)
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
var topDown = function(root) {
    let max = 0;
    if (!root) return max;

    max = 1;
    const setMaxDepth = (node, currDepth) => {
        max = Math.max(max, currDepth);

        if (node.left) setMaxDepth(node.left, currDepth + 1);
        if (node.right) setMaxDepth(node.right, currDepth + 1);
    };

    setMaxDepth(root, 1);

    return max;
};

var bottomUp = function(root) {
    let depth = 0;
    if (!root) return depth;
    
    depth += 1;
    const leftDepth = root.left ? bottomUp(root.left) : 0;
    const rightDepth = root.right ? bottomUp(root.right) : 0;

    return Math.max(depth, leftDepth + 1, rightDepth + 1);
};

const testCases = [
    {
        input: [3,9,20,null,null,15,7],
        expected: 3,
    },
    {
        input: [1,null,2],
        expected: 2,
    },
    {
        input: [],
        expected: 0,
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    const tree = createTree(input);
    console.log(`Expected:  ${expected}`);
    console.log(`TopDown:   ${topDown(tree)}`);
    console.log(`BottomUp:  ${bottomUp(tree)}`);
    console.log('='.repeat(50), '\n');
}
