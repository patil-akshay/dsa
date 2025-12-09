/*
Base Case: If a node is Null, its contribution to the path sum is 0.
Recursive Step: At each node:
Calculate the maximum path sum for the left and right subtrees.
Ignore any subtree that has a negative contribution by taking max(leftSubtreeSum, 0) and max(rightSubtreeSum, 0).
Compute the maximum path sum considering the current node as the root: node.val + leftMaxPath + rightMaxPath.
Update the global maximum if this value is greater than the previously recorded maximum.
Return Value: For the parent node, return the maximum path sum that can continue to be part of a larger path: node.val + max(leftMaxPath, rightMaxPath).
Time complexity:
O(N)

Space complexity:
O(N)
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
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = -Infinity;
    let currMax = 0;
    let traversal = (curr) => {
        if (!curr) return 0;
        // ignore negative numbers
        let maxLeft = Math.max(0, traversal(curr.left));
        let maxRight = Math.max(0, traversal(curr.right));
        currMax = curr.val + maxLeft + maxRight;
        maxSum = Math.max(currMax, maxSum);
        return curr.val + Math.max(maxLeft, maxRight);
    }
    traversal(root);
    return maxSum;
};
