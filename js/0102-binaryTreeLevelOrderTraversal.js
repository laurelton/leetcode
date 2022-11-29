const {createTree} = require('./utils/binaryTree');
//	Time: 	 O(n)
//	Space:	 O(n)
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if (!root) return result;
    
    let queue = [[root]];
    while (queue.length) {
        const nodes = queue.shift();
        const values = [];
        const children = [];
        
        for (const node of nodes) {
            values.push(node.val);
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        }
        
        result.push(values);
        queue = children.length ? [children] : [];
    }
    
    return result;
};

const testCases = [
    {
        input: [3,9,20,null,null,15,7],
        expected: [[3],[9,20],[15,7]],
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    const tree = createTree(input);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${levelOrder(tree)}`);
    console.log('='.repeat(50), '\n');
}
