/*
Use a helper function with two boundaries: min and max.
At every node:
Check if node.val lies strictly between min and max.
Recursively validate left subtree with max = node.val.
Recursively validate right subtree with min = node.val.
Use long instead of int to safely cover edge values.

Time Complexity: O(n) — every node is visited once
Space Complexity: O(h) — call stack height (log n for balanced, n for skewed)
*/

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const isValid = (node, min, max) => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
    };
    return isValid(root, -Infinity, Infinity);
};
