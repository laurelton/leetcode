/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;
    if (inorder.length === 1) return new TreeNode(inorder[0]);

    const root = new TreeNode(postorder[postorder.length - 1]);
    const inIdx = inorder.indexOf(root.val);

    const leftInorder = inorder.slice(0, inIdx);
    const leftPostorder = postorder.slice(0, inIdx);
    root.left = buildTree(leftInorder, leftPostorder);

    const rightInorder = inorder.slice(inIdx + 1);
    const rightPostorder = postorder.slice(inIdx, postorder.length - 1);
    root.right = buildTree(rightInorder, rightPostorder);
    
    return root; 
};