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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    const pathSumEqualsTarget = (node, currSum) => {
        if (!node) return false;
        if (node.left === null && node.right === null) {
            return currSum + node.val === targetSum;
        }

        const leftEqualsTarget = pathSumEqualsTarget(node.left, currSum + node.val);
        if (leftEqualsTarget) return true;

        const rightEqualsTarget = pathSumEqualsTarget(node.right, currSum + node.val);
        if (rightEqualsTarget) return true;

        return false;
    };

    return pathSumEqualsTarget(root, 0);
};

const testCases = [
    {
        input: {
            nums: [5,4,8,11,null,13,4,7,2,null,null,null,null,null,1],
            target: 26,
        },
        expected: true,
    },
    // {
    //     input: {
    //         nums: [1,2,3],
    //         target: 5,
    //     },
    //     expected: false,
    // },
    // {
    //     input: {
    //         nums: [],
    //         target: 0,
    //     },
    //     expected: false,
    // },
    {
        input: {
            nums: [5],
            target: 11,
        },
        expected: true,
    },
];

for (const {input: {nums, target}, expected} of testCases) {
    console.log(`Nums:      ${JSON.stringify(nums)}`);
    console.log(`Target:    ${target}`);
    const tree = createTree(nums);
    console.log(`Expected:  ${expected}`);
    console.log(`Actual:    ${hasPathSum(tree, target)}`);
    console.log('='.repeat(50), '\n');
}
