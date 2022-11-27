const {createTree} = require('./utils/binaryTree.js');

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
 * @return {number[]}
 */
var recursive = function(root) {
    const result = [];
    const inorderTraversal = (node, arr) => {
        if (!node) return arr;

        if (node.left) inorderTraversal(node.left, arr);
        arr.push(node.val);
        if (node.right) inorderTraversal(node.right, arr);
    };

    inorderTraversal(root, result);

    return result;
};

var iterative = function(root) {
    const result = [];
    const stack = [];
    let curr = root;

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
};

const testCases = [
    {
        input: [1,null,2,null,null,3],
        expected: [1,3,2],
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
        expected: [4,8,2,9,5,1,10,6,3,7,11],
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
