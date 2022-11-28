const {createTree} = require('./utils/binaryTree.js');
//	Time: 	 O()
//	Space:	 O()
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
 * @return {number[]}
 */
var recursive = function(root) {
    let result = [];
    if (!root) return result;

    result = result.concat(recursive(root.left));
    result = result.concat(recursive(root.right));
    result.push(root.val);

    return result;
};

var iterative = function(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];

    while (stack.length) {
        const curr = stack.pop();
        result.push(curr.val);

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return result.reverse();
};

const testCases = [
    {
        input: [1,null,2,null,null,3],
        expected: [3,2,1],
    },
    {
        input: [],
        expected: [],
    },
    {
        input: [1],
        expected: [1],
    },
    {
        input: [1,2,3,4,5,6,7,null,8,9,null,10,null,null,11],
        expected: [8,4,9,5,2,10,6,11,7,3,1],
    },
];

for (const {input, expected} of testCases) {
    console.log(`Input:     ${input}`);
    console.log(`Expected:  ${expected}`);
    const tree = createTree(input);
    // console.log(JSON.stringify(tree, null, 4));
    console.time('Recursive');
    console.log(`Actual:    ${recursive(tree)}`);
    console.timeEnd('Recursive');
    console.time('Iterative');
    console.log(`Actual:    ${iterative(tree)}`);
    console.timeEnd('Iterative');
    console.log('='.repeat(50), '\n');
}
