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
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    let depth = (curr) => {
        if (!curr) return 0;
        let left = depth(curr.left);
        let right = depth(curr.right);
        let currDiameter = left + right;

        diameter = Math.max(currDiameter, diameter);

        return 1 + Math.max(left, right);
    }

    depth(root);
    return diameter;
};
