/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    if (inorder.length === 1) return new TreeNode(inorder[0]);

    const root = new TreeNode(preorder[0]);
    const rootIdx = inorder.indexOf(preorder[0]);

    const leftInorder = inorder.slice(0, rootIdx);
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);

    const rightInorder = inorder.slice(rootIdx + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};
