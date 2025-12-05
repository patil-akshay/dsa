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
// Time - Space - O(n)

var preorderTraversal = function (root) {
    const ans = [];
    function traversal(curr) {
        if(!curr) {
            return;
        }
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
};
