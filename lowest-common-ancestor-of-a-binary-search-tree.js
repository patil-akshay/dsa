/* 
This question is not difficult if you understand the binary search tree data structure. 
In a binary search tree, nodes with values smaller than the parent node are gathered on the left, while nodes with larger values are gathered on the right.

In other words, if both p and q are smaller than the parent, you move to the left. 
If both p and q are larger than the parent, you move to the right. At some point, if only one of the nodes is larger, that will be the lowest common ancestor.

Time complexity: O(h)
Space complexity: O(1)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
