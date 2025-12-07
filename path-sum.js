//Top down

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
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;
    function traversal(curr, sum) {
        let newSum = sum + curr.val;
        if (!curr.left && !curr.right) {
            if (newSum === targetSum) {
                ans = ans || true;
            }
        }
        curr.left && traversal(curr.left, newSum);
        curr.right && traversal(curr.right, newSum);
    }
    traversal(root, 0);
    return ans;
};


// Bottom Up

var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    let leftSubHasPathSum = hasPathSum(root.left, targetSum - root.val);
    let rightSubHasPathSum = hasPathSum(root.right, targetSum - root.val);
    return leftSubHasPathSum || rightSubHasPathSum;
};
